var accessibility =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(9);

	__webpack_require__(12);

	__webpack_require__(15);

	__webpack_require__(18);

	__webpack_require__(22);

	__webpack_require__(25);

	__webpack_require__(28);

	__webpack_require__(31);

	__webpack_require__(34);

	__webpack_require__(37);

	__webpack_require__(40);

	__webpack_require__(43);

	__webpack_require__(46);

	__webpack_require__(49);

		console.log('Hello world!');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

		__webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _cookie = __webpack_require__(19);

	var _cookie2 = _interopRequireDefault(_cookie);

	__webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var COOKIE_PATH = { path: '/' };

	var ControlPanel = function () {
	        function ControlPanel() {
	                _classCallCheck(this, ControlPanel);

	                var self = this;

	                self.app = $('.application');

	                self.textSelect = $('.control-panel__select-text');
	                self.colorSelect = $('.control-panel__select-color');
	                self.imageSelect = $('.control-panel__select-image');

	                !_cookie2.default.getCookie('app-text') ? _cookie2.default.setCookie('app-text', 'normal', COOKIE_PATH) : false;
	                !_cookie2.default.getCookie('app-color') ? _cookie2.default.setCookie('app-color', 'white', COOKIE_PATH) : false;
	                !_cookie2.default.getCookie('app-image') ? _cookie2.default.setCookie('app-image', 'visible', COOKIE_PATH) : false;

	                self.setApplicationStyles();
	                self.wrapImageAlt();
	                self.toggleImage();

	                self.handleTextChange();
	                self.handleColorChange();
	                self.handleImageChange();

	                self.app.addClass('application_show');
	        }

	        _createClass(ControlPanel, [{
	                key: 'handleTextChange',
	                value: function handleTextChange() {

	                        var self = this;

	                        self.textSelect.val(_cookie2.default.getCookie('app-text'));

	                        self.textSelect.on('change', function () {

	                                _cookie2.default.setCookie('app-text', $(this).val(), COOKIE_PATH);
	                                self.setApplicationStyles();
	                        });
	                }
	        }, {
	                key: 'handleColorChange',
	                value: function handleColorChange() {

	                        var self = this;

	                        self.colorSelect.val(_cookie2.default.getCookie('app-color'));

	                        self.colorSelect.on('change', function () {

	                                _cookie2.default.setCookie('app-color', $(this).val(), COOKIE_PATH);
	                                self.setApplicationStyles();
	                        });
	                }
	        }, {
	                key: 'handleImageChange',
	                value: function handleImageChange() {

	                        var self = this;

	                        self.imageSelect.val(_cookie2.default.getCookie('app-image'));

	                        self.imageSelect.on('change', function () {

	                                _cookie2.default.setCookie('app-image', $(this).val(), COOKIE_PATH);
	                                self.setApplicationStyles();

	                                self.toggleImage();
	                        });
	                }
	        }, {
	                key: 'wrapImageAlt',
	                value: function wrapImageAlt() {

	                        $('img').each(function () {

	                                var alt = $(this).attr('alt');

	                                $(this).wrap('<span class="image-alt"/>');

	                                if (alt != '') {
	                                        $(this).after('<span class="image-alt__text">' + alt + '</span>');
	                                } else {
	                                        $(this).after('<span class="image-alt__text">Описание отсутствует</span>');
	                                }
	                        });
	                }
	        }, {
	                key: 'toggleImage',
	                value: function toggleImage() {

	                        if (_cookie2.default.getCookie('app-image') == 'hidden') {
	                                $('.image-alt').addClass('image-alt_active');
	                                $('img').css('visibility', 'hidden');
	                        } else {
	                                $('.image-alt').removeClass('image-alt_active');
	                                $('img').css('visibility', 'visible');
	                        }
	                }
	        }, {
	                key: 'setApplicationStyles',
	                value: function setApplicationStyles() {

	                        this.app.attr('data-text', _cookie2.default.getCookie('app-text'));
	                        this.app.attr('data-color', _cookie2.default.getCookie('app-color'));
	                        this.app.attr('data-image', _cookie2.default.getCookie('app-image'));
	                }
	        }]);

	        return ControlPanel;
	}();

		exports.default = new ControlPanel();

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cookie = function () {
	    function Cookie() {
	        _classCallCheck(this, Cookie);
	    }

	    _createClass(Cookie, [{
	        key: 'getCookie',


	        /**
	         * Возвращает cookie с именем name, если есть, если нет, то undefined
	         * @param name - имя cookie
	         * @returns {*}
	         */
	        value: function getCookie(name) {
	            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	            return matches ? decodeURIComponent(matches[1]) : undefined;
	        }

	        /**
	         * Устанавливает cookie с именем name и значением value
	         * @param name - имя cookie
	         * @param value - значение cookie
	         * @param options - объект с свойствами cookie (expires, path, domain, secure)
	         */

	    }, {
	        key: 'setCookie',
	        value: function setCookie(name, value, options) {
	            options = options || {};

	            var expires = options.expires;

	            if (typeof expires == "number" && expires) {
	                var d = new Date();
	                d.setTime(d.getTime() + expires * 1000);
	                expires = options.expires = d;
	            }
	            if (expires && expires.toUTCString) {
	                options.expires = expires.toUTCString();
	            }

	            value = encodeURIComponent(value);

	            var updatedCookie = name + "=" + value;

	            for (var propName in options) {
	                updatedCookie += "; " + propName;
	                var propValue = options[propName];
	                if (propValue !== true) {
	                    updatedCookie += "=" + propValue;
	                }
	            }

	            document.cookie = updatedCookie;
	        }

	        /**
	         * Удаляет cookie с именем name
	         * @param name - имя cookie
	         */

	    }, {
	        key: 'deleteCookie',
	        value: function deleteCookie(name) {
	            this.setCookie(name, "", {
	                expires: -1
	            });
	        }
	    }]);

	    return Cookie;
	}();

		exports.default = new Cookie();

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(23);

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(26);

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(35);

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(38);

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(41);

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(44);

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(47);

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(50);

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYTJmMjBhOGU3MzgzMmMwMzk1ZCIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yZXNldC9yZXNldC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZS9ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvYm9vdHN0cmFwLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29va2llL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L25hdi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsL3BhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYS9tZWRpYS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhZ2luYXRpb24vcGFnaW5hdGlvbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmEyZjIwYThlNzM4MzJjMDM5NWRcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2dyaWQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdpbmF0aW9uJztcclxuXHJcblxyXG5jb25zb2xlLmxvZygnSGVsbG8gd29ybGQhJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FjY2Vzc2liaWxpdHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Jlc2V0L3Jlc2V0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbm9ybWFsaXplLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL25vcm1hbGl6ZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2lucHV0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAnLi9ib290c3RyYXAuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9ib290c3RyYXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYXBwbGljYXRpb24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi9jb29raWUnO1xyXG5pbXBvcnQgJy4vY29udHJvbC1wYW5lbC5zY3NzJztcclxuXHJcbmNvbnN0IENPT0tJRV9QQVRIID0ge3BhdGg6ICcvJ307XHJcblxyXG5jbGFzcyBDb250cm9sUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5hcHAgPSAkKCcuYXBwbGljYXRpb24nKTtcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0ID0gJCgnLmNvbnRyb2wtcGFuZWxfX3NlbGVjdC10ZXh0Jyk7XHJcbiAgICAgICAgc2VsZi5jb2xvclNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtY29sb3InKTtcclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0ID0gJCgnLmNvbnRyb2wtcGFuZWxfX3NlbGVjdC1pbWFnZScpO1xyXG5cclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLXRleHQnKSA/IGNvb2tpZS5zZXRDb29raWUoJ2FwcC10ZXh0JywgJ25vcm1hbCcsIENPT0tJRV9QQVRIKSA6IGZhbHNlO1xyXG4gICAgICAgICFjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSA/IGNvb2tpZS5zZXRDb29raWUoJ2FwcC1jb2xvcicsICd3aGl0ZScsIENPT0tJRV9QQVRIKSA6IGZhbHNlO1xyXG4gICAgICAgICFjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSA/IGNvb2tpZS5zZXRDb29raWUoJ2FwcC1pbWFnZScsICd2aXNpYmxlJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcblxyXG4gICAgICAgIHNlbGYuc2V0QXBwbGljYXRpb25TdHlsZXMoKTtcclxuICAgICAgICBzZWxmLndyYXBJbWFnZUFsdCgpO1xyXG4gICAgICAgIHNlbGYudG9nZ2xlSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgc2VsZi5oYW5kbGVUZXh0Q2hhbmdlKCk7XHJcbiAgICAgICAgc2VsZi5oYW5kbGVDb2xvckNoYW5nZSgpO1xyXG4gICAgICAgIHNlbGYuaGFuZGxlSW1hZ2VDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgc2VsZi5hcHAuYWRkQ2xhc3MoJ2FwcGxpY2F0aW9uX3Nob3cnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGV4dENoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLnRleHRTZWxlY3QudmFsKGNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykpO1xyXG5cclxuICAgICAgICBzZWxmLnRleHRTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLXRleHQnLCAkKHRoaXMpLnZhbCgpLCBDT09LSUVfUEFUSCk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0QXBwbGljYXRpb25TdHlsZXMoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNvbG9yQ2hhbmdlKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3QudmFsKGNvb2tpZS5nZXRDb29raWUoJ2FwcC1jb2xvcicpKTtcclxuXHJcbiAgICAgICAgc2VsZi5jb2xvclNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdhcHAtY29sb3InLCAkKHRoaXMpLnZhbCgpLCBDT09LSUVfUEFUSCk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0QXBwbGljYXRpb25TdHlsZXMoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUltYWdlQ2hhbmdlKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3QudmFsKGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpKTtcclxuXHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdhcHAtaW1hZ2UnLCAkKHRoaXMpLnZhbCgpLCBDT09LSUVfUEFUSCk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0QXBwbGljYXRpb25TdHlsZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgd3JhcEltYWdlQWx0KCkge1xyXG5cclxuICAgICAgICAkKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFsdCA9ICQodGhpcykuYXR0cignYWx0Jyk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLndyYXAoYDxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0XCIvPmApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFsdCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZnRlcihgPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRfX3RleHRcIj4ke2FsdH08L3NwYW4+YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImltYWdlLWFsdF9fdGV4dFwiPtCe0L/QuNGB0LDQvdC40LUg0L7RgtGB0YPRgtGB0YLQstGD0LXRgjwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlSW1hZ2UoKSB7XHJcblxyXG4gICAgICAgIGlmIChjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSA9PSAnaGlkZGVuJykge1xyXG4gICAgICAgICAgICAkKCcuaW1hZ2UtYWx0JykuYWRkQ2xhc3MoJ2ltYWdlLWFsdF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnaW1nJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5pbWFnZS1hbHQnKS5yZW1vdmVDbGFzcygnaW1hZ2UtYWx0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXBwbGljYXRpb25TdHlsZXMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtdGV4dCcsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykpO1xyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtY29sb3InLCBjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSk7XHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS1pbWFnZScsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb250cm9sUGFuZWwoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb29raWUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIgY29va2llINGBINC40LzQtdC90LXQvCBuYW1lLCDQtdGB0LvQuCDQtdGB0YLRjCwg0LXRgdC70Lgg0L3QtdGCLCDRgtC+IHVuZGVmaW5lZFxyXG4gICAgICogQHBhcmFtIG5hbWUgLSDQuNC80Y8gY29va2llXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcclxuICAgICAgICApKTtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZSDQuCDQt9C90LDRh9C10L3QuNC10LwgdmFsdWVcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIC0g0LfQvdCw0YfQtdC90LjQtSBjb29raWVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0g0L7QsdGK0LXQutGCINGBINGB0LLQvtC50YHRgtCy0LDQvNC4IGNvb2tpZSAoZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpXHJcbiAgICAgKi9cclxuICAgIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICB2YXIgZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzID09IFwibnVtYmVyXCIgJiYgZXhwaXJlcykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4cGlyZXMgKiAxMDAwKTtcclxuICAgICAgICAgICAgZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcyA9IGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleHBpcmVzICYmIGV4cGlyZXMudG9VVENTdHJpbmcpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG5cclxuICAgICAgICB2YXIgdXBkYXRlZENvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgcHJvcE5hbWU7XHJcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0LTQsNC70Y/QtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgLSDQuNC80Y8gY29va2llXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb29raWUoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb29raWUvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9uYXYuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYvbmF2LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9idXR0b24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcGFuZWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFuZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsL3BhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL21lZGlhLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L21lZGlhL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYS9tZWRpYS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi90eXBvZ3JhcGh5LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9pbWFnZS1hbHQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3NlbGVjdC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3QvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9zZWxlY3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYnJlYWRjcnVtYnMuc2Nzcyc7XHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlYWRGaXJlOTRXb3JrIG9uIDA0LjA0LjIwMTYuXHJcbiAqL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9icmVhZGNydW1icy9icmVhZGNydW1icy5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9mb3JtLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2Zvcm0vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2Zvcm0vZm9ybS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9wYWdpbmF0aW9uLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhZ2luYXRpb24vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhZ2luYXRpb24vcGFnaW5hdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7Ozs7OztBQzFIQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7QUFHQTs7Ozs7O0FDOURBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==