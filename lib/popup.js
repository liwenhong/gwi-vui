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

/***/ "0dc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9781100a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4453");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9781100a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9781100a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9781100a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "16f5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4453":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5448":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44a3b13c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("16f5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44a3b13c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44a3b13c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44a3b13c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "d357":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dfca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35ec28dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d357");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35ec28dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35ec28dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35ec28dc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d581c4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Popup/src/index.vue?vue&type=template&id=9781100a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visibleSync)?_c('div',{staticClass:"gwi-drawer",style:([_vm.customStyle, { zIndex: _vm.uZindex - 1 }]),attrs:{"hover-stop-propagation":""}},[_c('gwi-mask',{attrs:{"duration":_vm.duration,"custom-style":_vm.maskCustomStyle,"maskClickAble":_vm.maskCloseAble,"z-index":_vm.uZindex - 2,"show":_vm.showDrawer && _vm.mask},on:{"click":_vm.maskClick}}),_c('div',{staticClass:"gwi-drawer-content",class:[
      _vm.safeAreaInsetBottom ? 'safe-area-inset-bottom' : '',
      'gwi-drawer-' + _vm.mode,
      _vm.showDrawer ? 'gwi-drawer-content-visible' : '',
      _vm.zoom && _vm.mode == 'center' ? 'gwi-animation-zoom' : '' ],style:([_vm.style]),on:{"click":[function($event){return _vm.modeCenterClose(_vm.mode)},function($event){$event.stopPropagation();$event.preventDefault();}],"touchmove":function($event){$event.stopPropagation();$event.preventDefault();}}},[(_vm.mode == 'center')?_c('div',{staticClass:"gwi-mode-center-box",style:([_vm.centerStyle]),on:{"click":function($event){$event.stopPropagation();$event.preventDefault();},"touchmove":function($event){$event.stopPropagation();$event.preventDefault();}}},[(_vm.closeable)?_c('gwi-icon',{staticClass:"gwi-close",class:['gwi-close--' + _vm.closeIconPos],attrs:{"name":_vm.closeIcon,"color":_vm.closeIconColor,"size":_vm.closeIconSize},on:{"click":_vm.close}}):_vm._e(),_vm._t("default")],2):_c('div',[_vm._t("default")],2),_c('div',{staticClass:"gwi-close",class:['gwi-close--' + _vm.closeIconPos],on:{"click":_vm.close}},[(_vm.mode != 'center' && _vm.closeable)?_c('gwi-icon',{attrs:{"name":_vm.closeIcon,"color":_vm.closeIconColor,"size":_vm.closeIconSize}}):_vm._e()],1)])],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Popup/src/index.vue?vue&type=template&id=9781100a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d581c4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Icon/src/index.vue?vue&type=template&id=44a3b13c&scoped=true&
var srcvue_type_template_id_44a3b13c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gwi-icon",style:([_vm.customStyle]),on:{"tap":_vm.click}},[(_vm.isImg)?_c('image',{staticClass:"gwi-icon__img",style:([_vm.imgStyle]),attrs:{"src":_vm.name,"mode":_vm.imgMode}}):_c('i',{staticClass:"gwi-icon__icon",class:_vm.customClass,style:([_vm.iconStyle]),attrs:{"hover-class":_vm.hoverClass},on:{"touchstart":_vm.touchstart}})])}
var srcvue_type_template_id_44a3b13c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Icon/src/index.vue?vue&type=template&id=44a3b13c&scoped=true&

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Icon/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

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

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
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
});

// CONCATENATED MODULE: ./packages/Icon/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Icon_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Icon/src/index.vue?vue&type=style&index=0&id=44a3b13c&scoped=true&lang=scss&
var srcvue_type_style_index_0_id_44a3b13c_scoped_true_lang_scss_ = __webpack_require__("5448");

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

// CONCATENATED MODULE: ./packages/Icon/src/index.vue






/* normalize component */

var component = normalizeComponent(
  Icon_srcvue_type_script_lang_js_,
  srcvue_type_template_id_44a3b13c_scoped_true_render,
  srcvue_type_template_id_44a3b13c_scoped_true_staticRenderFns,
  false,
  null,
  "44a3b13c",
  null
  
)

/* harmony default export */ var Icon_src = (component.exports);
// CONCATENATED MODULE: ./packages/Icon/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Icon_src.install = function (Vue) {
  Vue.component(Icon_src.name, Icon_src)
}

// 导出组件
/* harmony default export */ var Icon = (Icon_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d581c4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Mask/src/index.vue?vue&type=template&id=35ec28dc&scoped=true&
var srcvue_type_template_id_35ec28dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gwi-mask",class:{
    'gwi-mask-zoom': _vm.zoom,
    'gwi-mask-show': _vm.show,
  },style:([_vm.maskStyle, _vm.zoomStyle]),attrs:{"hover-stop-propagation":""},on:{"click":_vm.click,"touchmove":function($event){$event.stopPropagation();$event.preventDefault();return (function () {})($event)}}},[_vm._t("default")],2)}
var srcvue_type_template_id_35ec28dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Mask/src/index.vue?vue&type=template&id=35ec28dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Mask/src/index.vue?vue&type=script&lang=js&
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
//
//
//

/**
 * mask 遮罩
 * @property {Boolean} show 是否显示遮罩（默认false）
 * @property {String Number} z-index z-index 层级（默认1070）
 * @property {Object} custom-style 自定义样式对象
 * @property {String Number} duration 动画时长，单位毫秒（默认300）
 * @property {Boolean} zoom 是否使用scale对这招进行缩放（默认true）
 * @property {Boolean} mask-click-able 遮罩是否可点击，为false时点击不会发送click事件（默认true）
 * @event {Function} click mask-click-able为true时，点击遮罩发送此事件
 * @example <gwi-mask :show="show" @click="show = false"></gwi-mask>
 */
/* harmony default export */ var Mask_srcvue_type_script_lang_js_ = ({
  name: "gwi-mask",
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: false,
    },
    // 层级z-index
    zIndex: {
      type: [Number, String],
      default: "",
    },
    // 用户自定义样式
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 遮罩的动画样式， 是否使用使用zoom进行scale进行缩放
    zoom: {
      type: Boolean,
      default: true,
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [Number, String],
      default: 300,
    },
    // 是否可以通过点击遮罩进行关闭
    maskClickAble: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      zoomStyle: {
        transform: "",
      },
      scale: "scale(1.2, 1.2)",
    };
  },
  watch: {
    show(n) {
      if (n && this.zoom) {
        // 当展示遮罩的时候，设置scale为1，达到缩小(原来为1.2)的效果
        this.zoomStyle.transform = "scale(1, 1)";
      } else if (!n && this.zoom) {
        // 当隐藏遮罩的时候，设置scale为1.2，达到放大(因为显示遮罩时已重置为1)的效果
        this.zoomStyle.transform = this.scale;
      }
    },
  },
  computed: {
    maskStyle() {
      let style = {};
      style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      if (this.show)
        style.zIndex = this.zIndex ? this.zIndex : '999';
      else style.zIndex = -1;
      style.transition = `all ${this.duration / 1000}s ease-in-out`;
      // 判断用户传递的对象是否为空，不为空就进行合并
      if (Object.keys(this.customStyle).length)
        style = {
          ...style,
          ...this.customStyle,
        };
      return style;
    },
  },
  methods: {
    click() {
      if (!this.maskClickAble) return;
      this.$emit("click");
    },
  },
});

// CONCATENATED MODULE: ./packages/Mask/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Mask_srcvue_type_script_lang_js_ = (Mask_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Mask/src/index.vue?vue&type=style&index=0&id=35ec28dc&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_35ec28dc_lang_scss_scoped_true_ = __webpack_require__("dfca");

// CONCATENATED MODULE: ./packages/Mask/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_Mask_srcvue_type_script_lang_js_,
  srcvue_type_template_id_35ec28dc_scoped_true_render,
  srcvue_type_template_id_35ec28dc_scoped_true_staticRenderFns,
  false,
  null,
  "35ec28dc",
  null
  
)

/* harmony default export */ var Mask_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/Mask/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Mask_src.install = function (Vue) {
  Vue.component(Mask_src.name, Mask_src)
}

// 导出组件
/* harmony default export */ var Mask = (Mask_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Popup/src/index.vue?vue&type=script&lang=js&
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
 * popup 弹窗
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义
 * @property {String} mode 弹出方向（默认left）
 * @property {Boolean} mask 是否显示遮罩（默认true）
 * @property {Stringr | Number} length 默认auto
 * @property {Boolean} zoom 是否开启缩放动画，只在mode为center时有效（默认true）
 * @property {Boolean} safe-area-inset-bottom 是否开启底部安全区适配（默认false）
 * @property {Boolean} mask-close-able 点击遮罩是否可以关闭弹出层（默认true）
 * @property {Object} custom-style 用户自定义样式
 * @property {Stringr | Number} negative-top 中部弹出时，往上偏移的值
 * @property {Numberr | String} border-radius 弹窗圆角值（默认0）
 * @property {Numberr | String} z-index 弹出内容的z-index值（默认1075）
 * @property {Boolean} closeable 是否显示关闭图标（默认false）
 * @property {String} close-icon 关闭图标的名称，只能内置图标
 * @property {String} close-icon-pos 自定义关闭图标位置（默认top-right）
 * @property {String} close-icon-color 关闭图标的颜色（默认#909399）
 * @property {Number | String} close-icon-size 关闭图标的大小，单位px（默认30）
 * @event {Function} open 弹出层打开
 * @event {Function} close 弹出层收起
 * @example <gwi-popup v-model="show"></gwi-popup>
 */



/* harmony default export */ var Popup_srcvue_type_script_lang_js_ = ({
  name: "gwi-popup",
  components: { GwiMask: Mask, GwiIcon: Icon },
  props: {
    /**
     * 显示状态
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * 弹出方向，left|right|top|bottom|center
     */
    mode: {
      type: String,
      default: "bottom",
    },
    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: true,
    },
    // 抽屉的宽度(mode=left|right)，或者高度(mode=top|bottom),或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度
    length: {
      type: [Number, String],
      default: "auto",
    },
    // 是否开启缩放动画，只在mode=center时有效
    zoom: {
      type: Boolean,
      default: true,
    },
    // 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
    safeAreaInsetBottom: {
      type: Boolean,
      default: false,
    },
    // 是否可以通过点击遮罩进行关闭
    maskCloseAble: {
      type: Boolean,
      default: true,
    },
    // 用户自定义样式
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: Boolean,
      default: false,
    },
    // 显示显示弹窗的圆角，单位px
    borderRadius: {
      type: [Number, String],
      default: 0,
    },
    zIndex: {
      type: [Number, String],
      default: "",
    },
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false,
    },
    // 关闭图标的名称，只能内置图标
    closeIcon: {
      type: String,
      default: "close",
    },
    // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
    closeIconPos: {
      type: String,
      default: "top-right",
    },
    // 关闭图标的颜色
    closeIconColor: {
      type: String,
      default: "#909399",
    },
    // 关闭图标的大小，单位px
    closeIconSize: {
      type: [String, Number],
      default: "15",
    },
    // 宽度，只对左，右，中部弹出时起作用，单位px，或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
    width: {
      type: String,
      default: "",
    },
    // 高度，只对上，下，中部弹出时起作用，单位px，或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
    height: {
      type: String,
      default: "",
    },
    // 给一个负的margin-top，往上偏移，避免和键盘重合的情况，仅在mode=center时有效
    negativeTop: {
      type: [String, Number],
      default: 0,
    },
    // 遮罩的样式，一般用于修改遮罩的透明度
    maskCustomStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 遮罩打开或收起的动画过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: 250,
    },
  },
  data() {
    return {
      visibleSync: false,
      showDrawer: false,
      timer: null,
      closeFromInner: false, // value的值改变，是发生在内部还是外部
    };
  },
  computed: {
    // 根据mode的位置，设定其弹窗的宽度(mode = left|right)，或者高度(mode = top|bottom)
    style() {
      let style = {};
      // 如果是左边或者上边弹出时，需要给translate设置为负值，用于隐藏
      if (this.mode == "left" || this.mode == "right") {
        style = {
          width: this.width
            ? this.getUnitValue(this.width)
            : this.getUnitValue(this.length),
          height: "100%",
          transform: `translate3D(${
            this.mode == "left" ? "-100%" : "100%"
          },0px,0px)`,
        };
      } else if (this.mode == "top" || this.mode == "bottom") {
        style = {
          width: "100%",
          height: this.height
            ? this.getUnitValue(this.height)
            : this.getUnitValue(this.length),
          transform: `translate3D(0px,${
            this.mode == "top" ? "-100%" : "100%"
          },0px)`,
        };
      }
      style.zIndex = this.uZindex;
      // 如果用户设置了borderRadius值，添加弹窗的圆角
      if (this.borderRadius) {
        switch (this.mode) {
          case "left":
            style.borderRadius = `0 ${this.borderRadius}px ${this.borderRadius}px 0`;
            break;
          case "top":
            style.borderRadius = `0 0 ${this.borderRadius}px ${this.borderRadius}px`;
            break;
          case "right":
            style.borderRadius = `${this.borderRadius}px 0 0 ${this.borderRadius}px`;
            break;
          case "bottom":
            style.borderRadius = `${this.borderRadius}px ${this.borderRadius}px 0 0`;
            break;
          default:
        }
        style.overflow = "hidden";
      }
      if (this.duration)
        style.transition = `all ${this.duration / 1000}s linear`;
      return style;
    },
    // 中部弹窗的特有样式
    centerStyle() {
      let style = {};
      style.width = this.width
        ? this.getUnitValue(this.width)
        : this.getUnitValue(this.length);
      // 中部弹出的模式，如果没有设置高度，就用auto值，由内容撑开高度
      style.height = this.height ? this.getUnitValue(this.height) : "auto";
      style.zIndex = this.uZindex;
      style.marginTop = `-${addUnit(this.negativeTop)}`;
      if (this.borderRadius) {
        style.borderRadius = `${this.borderRadius}px`;
        // 不加可能圆角无效
        style.overflow = "hidden";
      }
      console.log(style)
      return style;
    },
    // 计算整理后的z-index值
    uZindex() {
      return this.zIndex ? this.zIndex : "99999";
    },
  },
  watch: {
    value(val) {
      console.log("watch...");
      console.log(val);
      if (val) {
        this.open();
      } else if (!this.closeFromInner) {
        this.close();
      }
      this.closeFromInner = false;
    },
  },
  mounted() {
    // 组件渲染完成时，检查value是否为true，如果是，弹出popup
    this.value && this.open();
  },
  methods: {
    // 判断传入的值，是否带有单位，如果没有，就默认用px单位
    getUnitValue(val) {
      if (/(%|px|rpx|auto)$/.test(val)) return val;
      else return val + "px";
    },
    // 遮罩被点击
    maskClick() {
      this.close();
    },
    close() {
      // 标记关闭是内部发生的，否则修改了value值，导致watch中对value检测，导致再执行一遍close
      // 造成@close事件触发两次
      this.closeFromInner = true;
      this.change("showDrawer", "visibleSync", false);
    },
    modeCenterClose(mode) {
      if (mode != "center" || !this.maskCloseAble) return;
      this.close();
    },
    open() {
      this.change("visibleSync", "showDrawer", true);
    },
    // 此处的原理是，关闭时先通过动画隐藏弹窗和遮罩，再移除整个组件
    // 打开时，先渲染组件，延时一定时间再让遮罩和弹窗的动画起作用
    change(param1, param2, status) {
      // // 如果this.popup为false，意味着为picker，actionsheet等组件调用了popup组件
      // if (this.popup == true) {
      // 	this.$emit('input', status);
      // }
      this[param1] = status;
      if (status) {
        this.timer = setTimeout(() => {
          this[param2] = status;
          this.$emit(status ? "open" : "close");
        }, 50);
        this.$nextTick(() => {
          this[param2] = status;
          this.$emit(status ? "open" : "close");
        });
      } else {
        this.timer = setTimeout(() => {
          this[param2] = status;
          this.$emit(status ? "open" : "close");
        }, this.duration);
      }
    },
  },
});

// CONCATENATED MODULE: ./packages/Popup/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Popup_srcvue_type_script_lang_js_ = (Popup_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Popup/src/index.vue?vue&type=style&index=0&id=9781100a&scoped=true&lang=scss&
var srcvue_type_style_index_0_id_9781100a_scoped_true_lang_scss_ = __webpack_require__("0dc0");

// CONCATENATED MODULE: ./packages/Popup/src/index.vue






/* normalize component */

var Popup_src_component = normalizeComponent(
  packages_Popup_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9781100a",
  null
  
)

/* harmony default export */ var Popup_src = (Popup_src_component.exports);
// CONCATENATED MODULE: ./packages/Popup/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Popup_src.install = function (Vue) {
  Vue.component(Popup_src.name, Popup_src)
}

// 导出组件
/* harmony default export */ var Popup = (Popup_src);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Popup);



/***/ })

/******/ });