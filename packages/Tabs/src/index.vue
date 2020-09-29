<template>
  <div class="gwi-tabs" :style="{ background: bgColor }">
    <div class="gwi-scroll-view">
      <div class="gwi-scroll-box" :class="{ 'gwi-tabs-scorll-flex': !isScroll }">
        <div class="gwi-tab-item" :class="{'tab-active': index === currentIndex}" v-for="(item, index) in list" :key="index" @click="clickTab(index)" :style="[tabItemStyle(index), tabBarStyle(index)]">
          {{ item[name] || item["name"] }}
        </div>
        <!-- <div v-if="showBar" class="gwi-tab-bar" :style="[tabBarStyle]"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
/**
 * tabs 标签
 * @description 该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。
 * @property {Boolean} is-scroll tabs是否可以左右拖动（默认true）
 * @property {Array} list 标签数组，元素为对象，如[{name: '推荐'}]
 * @property {String Number} current 指定哪个tab为激活状态（默认0）
 * @property {String Number} height 导航栏的高度，单位px（默认40）
 * @property {String Number} font-size tab文字大小，单位px（默认15）
 * @property {String Number} duration 滑块移动一次所需的时间，单位秒（默认0.5）
 * @property {String} active-color 滑块和激活tab文字的颜色（默认#2979ff）
 * @property {String} inactive-color tabs文字颜色（默认#303133）
 * @property {String Number} bar-width 滑块宽度，单位rpx（默认40）
 * @property {Object} active-item-style 活动tabs item的样式，对象形式
 * @property {Object} bar-style 底部滑块的样式，对象形式
 * @property {Boolean} show-bar 是否显示底部的滑块（默认true）
 * @property {String Number} bar-height 滑块高度，单位rpx（默认6）
 * @property {String Number} item-width 标签的宽度（默认auto）
 * @property {String Number} gutter 单个tab标签的左右内边距之和，单位rpx（默认40）
 * @property {String} bg-color tabs导航栏的背景颜色（默认#ffffff）
 * @property {String} name 组件内部读取的list参数中的属性名，见官网说明（默认name）
 * @property {Boolean} bold 激活选项的字体是否加粗（默认true）
 * @event {Function} change 点击标签时触发
 * @example <gwi-tabs ref="tabs" :list="list" :is-scroll="false"></gwi-tabs>
 */
import addUnit from '../../../utils/addUnit.js'
export default {
  name: "gwi-tabs",
  props: {
    // 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
    isScroll: {
      type: Boolean,
      default: true,
    },
    //需循环的标签列表
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    // 当前活动tab的索引
    current: {
      type: [Number, String],
      default: 0,
    },
    // 导航栏的高度和行高
    height: {
      type: [String, Number],
      default: 40,
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 15,
    },
    // 过渡动画时长, 单位ms
    duration: {
      type: [String, Number],
      default: 0.5,
    },
    // 选中项的主题颜色
    activeColor: {
      type: String,
      default: "#2979ff",
    },
    // 未选中项的颜色
    inactiveColor: {
      type: String,
      default: "#303133",
    },
    // 菜单底部移动的bar的宽度，单位px
    barWidth: {
      type: [String, Number],
      default: '20',
    },
    // 移动bar的高度
    barHeight: {
      type: [String, Number],
      default: '3',
    },
    // 单个tab的左或有内边距（左右相同）
    gutter: {
      type: [String, Number],
      default: 15,
    },
    // 导航栏的背景颜色
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    // 读取传入的数组对象的属性
    name: {
      type: String,
      default: "name",
    },
    // 活动tab字体是否加粗
    bold: {
      type: Boolean,
      default: true,
    },
    // 当前活动tab item的样式
    activeItemStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 是否显示底部的滑块
    showBar: {
      type: Boolean,
      default: true,
    },
    // 底部滑块的自定义样式
    barStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 标签的宽度
    itemWidth: {
      type: [Number, String],
      default: "auto",
    },
  },
  data() {
    return {
      scrollLeft: 0, // 滚动scroll-view的左边滚动距离
      tabQueryInfo: [], // 存放对tab菜单查询后的节点信息
      componentWidth: 0, // 屏幕宽度，单位为px
      scrollBarLeft: 0, // 移动bar需要通过translateX()移动的距离
      parentLeft: 0, // 父元素(tabs组件)到屏幕左边的距离
      // id: this.$u.guid(), // id值
      currentIndex: this.current,
      barFirstTimeMove: true, // 滑块第一次移动时(页面刚生成时)，无需动画，否则给人怪异的感觉
    };
  },
  watch: {
    // 监听tab的变化，重新计算tab菜单的布局信息，因为实际使用中菜单可能是通过
    // 后台获取的（如新闻app顶部的菜单），获取返回需要一定时间，所以list变化时，重新获取布局信息
    list(n, o) {
      // list变动时，重制内部索引，否则可能导致超出数组边界的情况
      if (n.length !== o.length) this.currentIndex = 0;
      // 用$nextTick等待视图更新完毕后再计算tab的局部信息，否则可能因为tab还没生成就获取，就会有问题
      this.$nextTick(() => {
        this.init();
      });
    },
    current: {
      immediate: true,
      handler(nVal, oVal) {
        // 视图更新后再执行移动操作
        this.$nextTick(() => {
          this.currentIndex = nVal;
          // this.scrollByIndex();
        });
      },
    },
  },
  computed: {
    // 移动bar的样式
    tabBarStyle() {
      return (index) => {
        let style = {}
        if(index === this.currentIndex) {
          style = {
            "--transform": `translate(${this.scrollBarLeft}px, -100%)`,
            // 滑块在页面渲染后第一次滑动时，无需动画效果
            "--transitionDuration": `${this.barFirstTimeMove ? 0 : this.duration}s`,
            "--borderRadius": `${this.barHeight / 2}px`,
            "--barWidth": this.barWidth + "px",
            "--barHeight": this.barHeight + "px",
            "--activeColor": this.activeColor
          };
          console.log(style)
          Object.assign(style, this.barStyle);
        }
        return style;
      }
    },
    // tab的样式
    tabItemStyle() {
      return (index) => {
        let style = {
          height: this.height + "px",
          "line-height": this.height + "px",
          "font-size": this.fontSize + "px",
          "transition-duration": `${this.duration}s`,
          padding: this.isScroll ? `0 ${this.gutter}px` : "",
          flex: this.isScroll ? "auto" : "1",
          width: addUnit(this.itemWidth)
        };
        // 字体加粗
        if (index == this.currentIndex && this.bold) style.fontWeight = "bold";
        if (index == this.currentIndex) {
         
          style.color = this.activeColor;
          // 给选中的tab item添加外部自定义的样式
          style = Object.assign(style, this.activeItemStyle);
        } else {
          style.color = this.inactiveColor;
        }
        return style;
      };
    },
  },
  methods: {
    // 设置一个init方法，方便多处调用
    async init() {
      // this.getTabRect();
    },
    // 点击某一个tab菜单
    clickTab(index) {
      // 点击当前活动tab，不触发事件
      if (index == this.currentIndex) return;
      this.currentIndex =index
      // 发送事件给父组件
      this.$emit("change", index);
    }
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
@import '../../style/common/flex.scss';
.gwi-tabs{
  // height: 30px;
  // overflow: hidden;
}
::-webkit-scrollbar,
::-webkit-scrollbar,
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
.gwi-scroll-box {
  position: relative;
}

.gwi-scroll-box ::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}

.gwi-scroll-view {
  width: 100%;
  white-space: nowrap;
  position: relative;
  overflow-x: auto;
}

.gwi-tab-item {
  position: relative;
  display: inline-block;
  text-align: center;
  transition-property: background-color, color;
}

.gwi-tab-bar {
  position: absolute;
  bottom: 0;
}

.gwi-tabs-scorll-flex {
  display: flex;
  justify-content: space-between;
}
.tab-active {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: var(--barWidth);
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--barHeight);
    background-color:var(--activeColor);
    z-index: 1;
    list-style: none;
    margin: 0 auto;
    // transform: var(--transform);
    border-radius: var(--borderRadius);
    transition-duration: var(--transitionDuration);
  }
}
</style>
