<template>
  <div
    class="gwi-toast"
    :class="[
      isShow ? 'gwi-show' : '',
      'gwi-type-' + tmpConfig.type,
      'gwi-position-' + tmpConfig.position,
    ]"
    :style="{
      zIndex: uZIndex,
    }"
  >
    <div class="gwi-icon-wrap">
      <gwi-icon
        v-if="tmpConfig.icon"
        class="gwi-icon"
        :name="iconName"
        :size="30"
        :color="tmpConfig.type"
      ></gwi-icon>
    </div>
    <div class="gwi-text">{{ tmpConfig.title }}</div>
  </div>
</template>

<script>
/**
 * toast 消息提示
 * @description 消息提示
 * @property {String} z-index toast展示时的z-index值
 * @example <gwi-toast  />
 */
import { type2icon, deepMerge } from "../../../utils/index.js";
import GwiIcon from "../../Icon/index";
export default {
  name: "gwi-toast",
  props: {
    zIndex: {
      type: [Number, String],
      default: "",
    },
  },
  components: { GwiIcon },
  data() {
    return {
      isShow: false,
      timer: null, // 定时器
      config: {
        title: "", // 显示文本
        type: "", // 主题类型，primary，success，error，warning，black
        duration: 2000, // 显示的时间，毫秒
        icon: true, // 显示的图标
        position: "center", // toast出现的位置
        callback: null, // 执行完后的回调函数
        back: false, // 结束toast是否自动返回上一页
      },
      tmpConfig: {}, // 将用户配置和内置配置合并后的临时配置变量
    };
  },
  computed: {
    iconName() {
      if (
        ["error", "warning", "success", "info"].indexOf(this.tmpConfig.type) >=
          0 &&
        this.tmpConfig.icon
      ) {
        let icon = type2icon(this.tmpConfig.type);
        return icon;
      }
      return "";
    },
    uZIndex() {
      // 显示toast时候，如果用户有传递z-index值，有限使用
      return this.isShow ? (this.zIndex ? this.zIndex : "9999") : "999999";
    },
  },
  methods: {
    // 显示toast组件，由父组件通过this.$refs.xxx.show(options)形式调用
    show(options) {
      console.log(options);
      // 不降结果合并到this.config变量，避免多次条用u-toast，前后的配置造成混论
      this.tmpConfig = deepMerge(this.config, options);
      if (this.timer) {
        // 清除定时器
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.isShow = true;
      this.timer = setTimeout(() => {
        // 倒计时结束，清除定时器，隐藏toast组件
        this.isShow = false;
        clearTimeout(this.timer);
        this.timer = null;
        // 判断是否存在callback方法，如果存在就执行
        typeof this.tmpConfig.callback === "function" &&
          this.tmpConfig.callback();
      }, this.tmpConfig.duration);
    },
    // 隐藏toast组件，由父组件通过this.$refs.xxx.hide()形式调用
    hide() {
      this.isShow = false;
      if (this.timer) {
        // 清除定时器
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/common/var.scss";
.gwi-toast {
  position: fixed;
  z-index: -1;
  transition: opacity 0.3s;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: #585858;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  opacity: 0;
  pointer-events: none;
  padding: 5px 10px;
}

.gwi-show {
  opacity: 1;
}

.gwi-icon {
  margin-right: 5px;
  display: flex;
  align-items: center;
  line-height: normal;
}

.gwi-position-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 70%;
}

.gwi-position-top {
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}

.gwi-position-bottom {
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -50%);
}

.gwi-type-primary {
  color: $blue;
  background-color: $blue;
  border: 1px solid rgb(215, 234, 254);
}

.gwi-type-success {
  color: $white;
  background-color: $green;
  border: 1px solid #bef5c8;
}

.gwi-type-error {
  color: $white;
  background-color: $red;
  border: 1px solid #fde2e2;
}

.gwi-type-warning {
  color: $white;
  background-color: $orange;
  border: 1px solid #faecd8;
}

.gwi-type-info {
  color: $white;
  background-color: $white;
  border: 1px solid #ebeef5;
}

.gwi-type-default {
  color: #fff;
  background-color: #585858;
}
</style>
