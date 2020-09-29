module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6305":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "da6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ce5691d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6305");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ce5691d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ce5691d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ce5691d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d581c4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Tabs/src/index.vue?vue&type=template&id=2ce5691d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gwi-tabs",style:({ background: _vm.bgColor })},[_c('div',{staticClass:"gwi-scroll-view"},[_c('div',{staticClass:"gwi-scroll-box",class:{ 'gwi-tabs-scorll-flex': !_vm.isScroll }},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"gwi-tab-item",class:{'tab-active': index === _vm.currentIndex},style:([_vm.tabItemStyle(index), _vm.tabBarStyle(index)]),on:{"click":function($event){return _vm.clickTab(index)}}},[_vm._v(" "+_vm._s(item[_vm.name] || item["name"])+" ")])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Tabs/src/index.vue?vue&type=template&id=2ce5691d&scoped=true&

// CONCATENATED MODULE: ./utils/test.js
/*eslint-disable*/
/**
 * 验证电子邮箱格式
 */
function email(value) {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
	return /^1[23456789]\d{9}$/.test(value)
}

/**
 * 验证URL格式
 */
function url(value) {
	return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/
		.test(value)
}

/**
 * 验证日期格式
 */
function date(value) {
	return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
	return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
function number(value) {
	return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
function digits(value) {
	return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
function idCard(value) {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
		value)
}

/**
 * 是否车牌号
 */
function carNo(value) {
	// 新能源车牌
	const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
	// 旧车牌
	const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
	if (value.length === 7) {
		return creg.test(value);
	} else if (value.length === 8) {
		return xreg.test(value);
	} else {
		return false;
	}
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
	//金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
	let reg = /^[\u4e00-\u9fa5]+$/gi;
	return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
	return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
function landline(value) {
	let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
	return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
	switch (typeof value) {
		case 'undefined':
			return true;
		case 'string':
			if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
			break;
		case 'boolean':
			if (!value) return true;
			break;
		case 'number':
			if (0 === value || isNaN(value)) return true;
			break;
		case 'object':
			if (null === value || value.length === 0) return true;
			for (var i in value) {
				return false;
			}
			return true;
	}
	return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
	if (typeof value == 'string') {
		try {
			var obj = JSON.parse(value);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}


/**
 * 是否数组
 */
function array(value) {
	if (typeof Array.isArray === "function") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}

/**
 * 是否对象
 */
function object(value) {
	return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value, len = 6) {
	return new RegExp(`^\\d{${len}}$`).test(value);
}


/* harmony default export */ var test = ({
	email,
	mobile,
	url,
	date,
	dateISO,
	number,
	digits,
	idCard,
	carNo,
	amount,
	chinese,
	letter,
	enOrNum,
	contains,
	range,
	rangeLength,
	empty,
	isEmpty: empty,
	jsonString,
	landline,
	object,
	array,
	code
});

// CONCATENATED MODULE: ./utils/addUnit.js


// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
function addUnit(value = 'auto', unit = 'px') {
    value = String(value);
	// 用uView内置验证规则中的number判断是否为数值
    return test.number(value) ? `${value}${unit}` : value;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Tabs/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

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

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
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
});

// CONCATENATED MODULE: ./packages/Tabs/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Tabs/src/index.vue?vue&type=style&index=0&id=2ce5691d&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_2ce5691d_lang_scss_scoped_true_ = __webpack_require__("da6a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/Tabs/src/index.vue






/* normalize component */

var component = normalizeComponent(
  Tabs_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2ce5691d",
  null
  
)

/* harmony default export */ var Tabs_src = (component.exports);
// CONCATENATED MODULE: ./packages/Tabs/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Tabs_src.install = function (Vue) {
  Vue.component(Tabs_src.name, Tabs_src)
}

// 导出组件
/* harmony default export */ var Tabs = (Tabs_src);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Tabs);



/***/ })

/******/ });