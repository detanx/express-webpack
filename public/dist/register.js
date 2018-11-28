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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n *  base64.js\n *\n *  Licensed under the BSD 3-Clause License.\n *    http://opensource.org/licenses/BSD-3-Clause\n *\n *  References:\n *    http://en.wikipedia.org/wiki/Base64\n */\n;(function (global, factory) {\n     true\n        ? module.exports = factory(global)\n        : undefined\n}((\n    typeof self !== 'undefined' ? self\n        : typeof window !== 'undefined' ? window\n        : typeof global !== 'undefined' ? global\n: this\n), function(global) {\n    'use strict';\n    // existing version for noConflict()\n    var _Base64 = global.Base64;\n    var version = \"2.4.9\";\n    // if node.js and NOT React Native, we use Buffer\n    var buffer;\n    if (typeof module !== 'undefined' && module.exports) {\n        try {\n            buffer = eval(\"require('buffer').Buffer\");\n        } catch (err) {\n            buffer = undefined;\n        }\n    }\n    // constants\n    var b64chars\n        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n    var b64tab = function(bin) {\n        var t = {};\n        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;\n        return t;\n    }(b64chars);\n    var fromCharCode = String.fromCharCode;\n    // encoder stuff\n    var cb_utob = function(c) {\n        if (c.length < 2) {\n            var cc = c.charCodeAt(0);\n            return cc < 0x80 ? c\n                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))\n                                + fromCharCode(0x80 | (cc & 0x3f)))\n                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))\n                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))\n                   + fromCharCode(0x80 | ( cc         & 0x3f)));\n        } else {\n            var cc = 0x10000\n                + (c.charCodeAt(0) - 0xD800) * 0x400\n                + (c.charCodeAt(1) - 0xDC00);\n            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))\n                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))\n                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))\n                    + fromCharCode(0x80 | ( cc         & 0x3f)));\n        }\n    };\n    var re_utob = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFFF]|[^\\x00-\\x7F]/g;\n    var utob = function(u) {\n        return u.replace(re_utob, cb_utob);\n    };\n    var cb_encode = function(ccc) {\n        var padlen = [0, 2, 1][ccc.length % 3],\n        ord = ccc.charCodeAt(0) << 16\n            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)\n            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),\n        chars = [\n            b64chars.charAt( ord >>> 18),\n            b64chars.charAt((ord >>> 12) & 63),\n            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),\n            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)\n        ];\n        return chars.join('');\n    };\n    var btoa = global.btoa ? function(b) {\n        return global.btoa(b);\n    } : function(b) {\n        return b.replace(/[\\s\\S]{1,3}/g, cb_encode);\n    };\n    var _encode = buffer ?\n        buffer.from && Uint8Array && buffer.from !== Uint8Array.from\n        ? function (u) {\n            return (u.constructor === buffer.constructor ? u : buffer.from(u))\n                .toString('base64')\n        }\n        :  function (u) {\n            return (u.constructor === buffer.constructor ? u : new  buffer(u))\n                .toString('base64')\n        }\n        : function (u) { return btoa(utob(u)) }\n    ;\n    var encode = function(u, urisafe) {\n        return !urisafe\n            ? _encode(String(u))\n            : _encode(String(u)).replace(/[+\\/]/g, function(m0) {\n                return m0 == '+' ? '-' : '_';\n            }).replace(/=/g, '');\n    };\n    var encodeURI = function(u) { return encode(u, true) };\n    // decoder stuff\n    var re_btou = new RegExp([\n        '[\\xC0-\\xDF][\\x80-\\xBF]',\n        '[\\xE0-\\xEF][\\x80-\\xBF]{2}',\n        '[\\xF0-\\xF7][\\x80-\\xBF]{3}'\n    ].join('|'), 'g');\n    var cb_btou = function(cccc) {\n        switch(cccc.length) {\n        case 4:\n            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)\n                |    ((0x3f & cccc.charCodeAt(1)) << 12)\n                |    ((0x3f & cccc.charCodeAt(2)) <<  6)\n                |     (0x3f & cccc.charCodeAt(3)),\n            offset = cp - 0x10000;\n            return (fromCharCode((offset  >>> 10) + 0xD800)\n                    + fromCharCode((offset & 0x3FF) + 0xDC00));\n        case 3:\n            return fromCharCode(\n                ((0x0f & cccc.charCodeAt(0)) << 12)\n                    | ((0x3f & cccc.charCodeAt(1)) << 6)\n                    |  (0x3f & cccc.charCodeAt(2))\n            );\n        default:\n            return  fromCharCode(\n                ((0x1f & cccc.charCodeAt(0)) << 6)\n                    |  (0x3f & cccc.charCodeAt(1))\n            );\n        }\n    };\n    var btou = function(b) {\n        return b.replace(re_btou, cb_btou);\n    };\n    var cb_decode = function(cccc) {\n        var len = cccc.length,\n        padlen = len % 4,\n        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)\n            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)\n            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)\n            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),\n        chars = [\n            fromCharCode( n >>> 16),\n            fromCharCode((n >>>  8) & 0xff),\n            fromCharCode( n         & 0xff)\n        ];\n        chars.length -= [0, 0, 2, 1][padlen];\n        return chars.join('');\n    };\n    var atob = global.atob ? function(a) {\n        return global.atob(a);\n    } : function(a){\n        return a.replace(/[\\s\\S]{1,4}/g, cb_decode);\n    };\n    var _decode = buffer ?\n        buffer.from && Uint8Array && buffer.from !== Uint8Array.from\n        ? function(a) {\n            return (a.constructor === buffer.constructor\n                    ? a : buffer.from(a, 'base64')).toString();\n        }\n        : function(a) {\n            return (a.constructor === buffer.constructor\n                    ? a : new buffer(a, 'base64')).toString();\n        }\n        : function(a) { return btou(atob(a)) };\n    var decode = function(a){\n        return _decode(\n            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })\n                .replace(/[^A-Za-z0-9\\+\\/]/g, '')\n        );\n    };\n    var noConflict = function() {\n        var Base64 = global.Base64;\n        global.Base64 = _Base64;\n        return Base64;\n    };\n    // export Base64\n    global.Base64 = {\n        VERSION: version,\n        atob: atob,\n        btoa: btoa,\n        fromBase64: decode,\n        toBase64: encode,\n        utob: utob,\n        encode: encode,\n        encodeURI: encodeURI,\n        btou: btou,\n        decode: decode,\n        noConflict: noConflict,\n        __buffer__: buffer\n    };\n    // if ES5 is available, make Base64.extendString() available\n    if (typeof Object.defineProperty === 'function') {\n        var noEnum = function(v){\n            return {value:v,enumerable:false,writable:true,configurable:true};\n        };\n        global.Base64.extendString = function () {\n            Object.defineProperty(\n                String.prototype, 'fromBase64', noEnum(function () {\n                    return decode(this)\n                }));\n            Object.defineProperty(\n                String.prototype, 'toBase64', noEnum(function (urisafe) {\n                    return encode(this, urisafe)\n                }));\n            Object.defineProperty(\n                String.prototype, 'toBase64URI', noEnum(function () {\n                    return encode(this, true)\n                }));\n        };\n    }\n    //\n    // export Base64 to the namespace\n    //\n    if (global['Meteor']) { // Meteor.js\n        Base64 = global.Base64;\n    }\n    // module.exports and AMD are mutually exclusive.\n    // module.exports has precedence.\n    if (typeof module !== 'undefined' && module.exports) {\n        module.exports.Base64 = global.Base64;\n    }\n    else if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n    // that's it!\n    return {Base64: global.Base64}\n}));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/js-base64/base64.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./public/javascripts/jsSrc/npm.js":
/*!*****************************************!*\
  !*** ./public/javascripts/jsSrc/npm.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * @author detanx <detanxit@163.com>\r\n * @version 0.0.1 2018-9-19 11:14am\r\n */\n\n/**\r\n * @constant  {object}\r\n */\nvar RE_UNAME = /((?=[\\x21-\\x7e]+)[^A-Za-z0-9])/; //匹配用户名\nvar RE_PWD = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\+\\*~!@&%$^\\(\\)#_,\\.]{6,16}$/; //匹配密码\nvar RE_EMAIL = /^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$/; //匹配邮箱\nvar BASEPATH = \"http://localhost:3000\"; //请求地址\n\n/* \r\n * layerOpen layer弹出函数\r\n * @param {string} contents - 弹出内容.\r\n */\nfunction layerOpen(contents) {\n  var str = '<div style=\"padding:50px;\">' + contents + '</div>';\n\n  layer.open({\n    type: 1,\n    //page层\n    area: ['500px', '300px'],\n    btn: ['确定'],\n    yes: function yes(index, layero) {\n      layer.close(index);\n    },\n    time: 3000,\n    title: '提示',\n    shade: 0.6,\n    //遮罩透明度\n    moveType: 1,\n    //拖拽风格，0是默认，1是传统拖动\n    shift: 1,\n    //0-6的动画形式，-1不开启\n    content: str\n  });\n}\n\n/* \r\n * XMLHttpRequest fetch请求函数\r\n * @param {object} data - 请求数据.\r\n * @param {string} url -  请求地址.\r\n * @param {function} callback -  回掉函数.\r\n */\nfunction XMLHttpRequest(data, url, callback) {\n  var myHeaders = new Headers();\n  myHeaders.append(\"Content-Type\", \"text/plain\");\n  myHeaders.append(\"X-Custom-Header\", \"ProcessThisImmediately\");\n\n  var myInit = {\n    method: 'POST',\n    headers: myHeaders,\n    mode: 'cors',\n    cache: 'default',\n    body: JSON.stringify(data)\n  };\n\n  fetch(url, myInit).then(function (res) {\n    return res.text();\n  }).then(function (res) {\n    return callback(res);\n  });\n}\n\nmodule.exports = {\n  layerOpen: layerOpen,\n  XMLHttpRequest: XMLHttpRequest,\n  RE_UNAME: RE_UNAME,\n  RE_PWD: RE_PWD,\n  RE_EMAIL: RE_EMAIL,\n  BASEPATH: BASEPATH\n};\n\n//# sourceURL=webpack:///./public/javascripts/jsSrc/npm.js?");

/***/ }),

/***/ "./public/javascripts/register.js":
/*!****************************************!*\
  !*** ./public/javascripts/register.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * @author detanx <detanxit@163.com>\r\n * @version 0.0.1 2018-9-19 11:14am\r\n */\n\n/**\r\n * @constant  {object}\r\n */\nvar Base64 = __webpack_require__(/*! js-base64 */ \"./node_modules/js-base64/base64.js\").Base64; //base64加密\nvar npm = __webpack_require__(/*! ./jsSrc/npm.js */ \"./public/javascripts/jsSrc/npm.js\");\n(function ($) {\n  var Base64 = __webpack_require__(/*! js-base64 */ \"./node_modules/js-base64/base64.js\").Base64; //base64加密\n  var npm = __webpack_require__(/*! ./jsSrc/npm.js */ \"./public/javascripts/jsSrc/npm.js\");\n  var registerObj = {\n    //清空函数\n    emptyFunction: function emptyFunction() {\n      $('.username').val(\"\");\n      $('.password').val(\"\");\n      $('.password2').val(\"\");\n      $('.email').val(\"\");\n      $('.verify').val(\"\");\n    },\n    //点击事件\n    clickEvent: function clickEvent() {\n      var _this = this;\n      //获取验证码\n      $('.getCode').on('click', function () {\n        var email = $('.email').val();\n        if (email.trim() === \"\") {\n          npm.layerOpen(\"邮箱为空！\");\n        } else if (!npm.RE_EMAIL.test(email)) {\n          npm.layerOpen(\"邮箱格式错误！\");\n        } else {\n          var time = 60;\n          $('.getCode').attr('disabled', 'disabled');\n          var timer = setInterval(function () {\n            time--;\n            if (time <= 0) {\n              clearInterval(timer);\n              $('.getCode').attr('disabled', false).html('验证码');\n              return;\n            }\n            $('.getCode').html(time + '秒');\n          }, 1000);\n          npm.XMLHttpRequest({ email: email }, npm.BASEPATH + \"/login_register/getVerifyCode\", function (data) {\n            var newdata = JSON.parse(data);\n            //console.log(newdata)\n            if (newdata.code === 200) {\n              npm.layerOpen(newdata.msg);\n            } else if (newdata.code === 201) {\n              npm.layerOpen(newdata.msg);\n            } else {\n              npm.layerOpen(newdata.msg);\n            }\n          });\n        }\n      });\n      //点击注册\n      $('.submit').on('click', function () {\n        var username = $('.username').val().trim();\n        var password = $('.password').val().trim();\n        var password2 = $('.password2').val().trim();\n        var email = $('.email').val().trim();\n        var verify = $('.verify').val().trim();\n        if (username === '' || npm.RE_UNAME.test(username)) {\n          npm.layerOpen('用户名为空或含有特殊字符！');\n          return;\n        }\n        if (password === '' || !npm.RE_PWD.test(password)) {\n          npm.layerOpen('密码不能为空或长度不符(6-18位，不能为纯字母或数字)！');\n          return;\n        }\n        if (password2 !== password) {\n          npm.layerOpen('两次密码不一致！');\n          return;\n        }\n        if (email === '' || !npm.RE_EMAIL.test(email)) {\n          npm.layerOpen(\"邮箱为空或格式错误！\");\n          return;\n        }\n        if (verify === '' || verify.length !== 4) {\n          npm.layerOpen(\"验证码为空或长度错误！\");\n          return;\n        }\n        var data = {\n          username: username,\n          password: Base64.encode(password),\n          email: email,\n          verify: verify\n        };\n        npm.XMLHttpRequest(data, npm.BASEPATH + \"/login_register/register\", function (data) {\n          var newdata = JSON.parse(data);\n          console.log(newdata);\n          if (newdata.code === 200) {\n            _this.emptyFunction();\n            alert(\"注册成功！\");\n            var href = npm.BASEPATH + \"/index\";\n          } else if (newdata.code === 201) {\n            npm.layerOpen(newdata.msg);\n          } else {\n            npm.layerOpen(newdata.msg);\n          }\n        });\n      });\n    },\n    start: function start() {\n      this.clickEvent();\n    }\n  };\n  registerObj.start();\n})(jQuery);\n\n//# sourceURL=webpack:///./public/javascripts/register.js?");

/***/ })

/******/ });