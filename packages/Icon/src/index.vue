<template>
	<div :style="[customStyle]" class="gwi-icon" @tap="click">
		<image class="gwi-icon__img" v-if="isImg" :src="name" :mode="imgMode" :style="[imgStyle]"></image>
		<i v-else class="gwi-icon__icon" :class="customClass" :style="[iconStyle]" :hover-class="hoverClass" @touchstart="touchstart">
		</i>
	</div>
</template>

<script>
/**
 * icon 图标
 * @description 基于字体的图标集。
 * @property {String} name 图标名称，见示例图标集
 * @property {String} color 图标颜色（默认inherit）
 * @property {String | Number} size 图标字体大小
 * @property {String | Number} label-size label字体大小
 * @property {String} label 图标右侧的label文字（默认28）
 * @property {String} label-pos label文字相对于图标的位置，只能right或bottom（默认right）
 * @property {String} label-color label字体颜色（默认#606266）
 * @property {Object} custom-style icon的样式，对象形式
 * @property {String} custom-prefix 自定义字体图标库时，需要写上此值
 * @property {String | Number} margin-left label在右侧时与图标的距离
 * @property {String | Number} margin-top label在下方时与图标的距离
 * @property {String | Number} margin-bottom label在上方时与图标的距离
 * @property {String | Number} margin-right label在左侧时与图标的距离
 * @property {String} label-pos label相对于图标的位置，只能right或bottom（默认right）
 * @property {String} index 一个用于区分多个图标的值，点击图标时通过click事件传出
 * @property {String} width 显示图片小图标时的宽度
 * @property {String} height 显示图片小图标时的高度
 * @property {String} top 图标在垂直方向上的定位
 * @property {String} top 图标在垂直方向上的定位
 * @property {String} top 图标在垂直方向上的定位
 * @event {Function} click 点击图标时触发
 * @example <gwi-icon name="photo" color="#2979ff" size="28"></gwi-icon>
 */
import addUnit from '../../../utils/addUnit.js'
export default {
	name: 'gwi-icon',
	props: {
		// 图标类名
		name: {
			type: String,
			default: ''
		},
		// 图标颜色，可接受主题色
		color: {
			type: String,
			default: ''
		},
		// 字体大小，单位rpx
		size: {
			type: [Number, String],
			default: 'inherit'
		},
		// 是否显示粗体
		bold: {
			type: Boolean,
			default: false
		},
		// 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
		index: {
			type: [Number, String],
			default: ''
		},
		// 触摸图标时的类名
		hoverClass: {
			type: String,
			default: ''
		},
		// 自定义扩展前缀，方便扩展自己的图标库
		customPrefix: {
			type: String,
			default: 'uicon'
		},
		// 图片的mode
		imgMode: {
			type: String,
			default: 'widthFix'
		},
		// 自定义样式
		customStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 用于显示图片小图标时，图片的宽度
		width: {
			type: [String, Number],
			default: ''
		},
		// 用于显示图片小图标时，图片的高度
		height: {
			type: [String, Number],
			default: ''
		},
		// 用于解决某些情况下，让图标垂直居中的用途
		top: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		customClass() {
			let classes = []
			classes.push(this.customPrefix + '-' + this.name)
			if (this.customPrefix === 'uicon') {
				classes.push('iconfont')
			} else {
				classes.push(this.customPrefix)
			}
			return classes.join(' ')
		},
		iconStyle() {
			let style = {}
			style = {
				fontSize: this.size === 'inherit' ? 'inherit' : addUnit(this.size),
				fontWeight: this.bold ? 'bold' : 'normal',
				// 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
				top: addUnit(this.top),
				color: this.color ? this.color : ''
			}
			return style
		},
		// 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
		isImg() {
			return this.name.indexOf('/') !== -1
		},
		imgStyle() {
			let style = {}
			// 如果设置width和height属性，则优先使用，否则使用size属性
			style.width = this.width ? addUnit(this.width) : addUnit(this.size)
			style.height = this.height ? addUnit(this.height) : addUnit(this.size)
			return style
		}
	},
	methods: {
		click() {
			this.$emit('click', this.index)
		},
		touchstart() {
			this.$emit('touchstart', this.index)
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/common/var.scss';
@import '../../style/common/iconfont.css';
.gwi-icon {
	display: inline-flex;
	align-items: center;

	&--left {
		flex-direction: row-reverse;
		align-items: center;
	}

	&--right {
		flex-direction: row;
		align-items: center;
	}

	&--top {
		flex-direction: column-reverse;
		justify-content: center;
	}

	&--bottom {
		flex-direction: column;
		justify-content: center;
	}

	&__icon {
		position: relative;

		&--primary {
			color: $green;
		}

		&--success {
			color: $white;
		}

		&--error {
			color: $red;
		}

		&--warning {
			color: $orange;
		}

		&--info {
			color: $blue;
		}
	}

	&__decimal {
		position: absolute;
		top: 0;
		left: 0;
		display: inline-block;
		overflow: hidden;
	}

	&__img {
		height: auto;
		will-change: transform;
	}

	&__label {
		line-height: 1;
	}
}
</style>
