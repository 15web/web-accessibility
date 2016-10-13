var accessibility =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// ==========================================================================
	// Utils
	// ==========================================================================
	
	__webpack_require__(1);
	
	__webpack_require__(6);
	
	__webpack_require__(9);
	
	__webpack_require__(13);
	
	__webpack_require__(18);
	
	__webpack_require__(21);
	
	__webpack_require__(24);
	
	__webpack_require__(27);
	
	__webpack_require__(30);
	
	__webpack_require__(33);
	
	__webpack_require__(36);
	
	__webpack_require__(153);
	
	__webpack_require__(156);
	
	__webpack_require__(159);
	
	__webpack_require__(162);
	
	__webpack_require__(165);
	
	__webpack_require__(168);
	
	__webpack_require__(171);
	
	__webpack_require__(174);
	
	__webpack_require__(177);
	
	__webpack_require__(180);
	
	__webpack_require__(183);
	
	__webpack_require__(186);
	
	__webpack_require__(189);
	
	__webpack_require__(192);
	
	__webpack_require__(195);

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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cookie = __webpack_require__(10);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	__webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var COOKIE_PATH = { path: '/' };
	
	var ControlPanel = function () {
	    function ControlPanel() {
	        _classCallCheck(this, ControlPanel);
	
	        this.app = $('html');
	
	        this.controlPanel = $('.new-control-panel');
	        this.controls = this.controlPanel.find('[data-type]');
	        this.handleControlClick();
	        // self.app = $('.application');
	        //
	        // self.textSelect = $('.control-panel__select-text');
	        // self.colorSelect = $('.control-panel__select-color');
	        // self.imageSelect = $('.control-panel__select-image');
	
	        // !cookie.getCookie('app-text') ? cookie.setCookie('app-text', 'normal', COOKIE_PATH) : false;
	        // !cookie.getCookie('app-color') ? cookie.setCookie('app-color', 'white', COOKIE_PATH) : false;
	        // !cookie.getCookie('app-image') ? cookie.setCookie('app-image', 'visible', COOKIE_PATH) : false;
	
	    }
	
	    _createClass(ControlPanel, [{
	        key: 'handleControlClick',
	        value: function handleControlClick() {
	            var _this = this;
	
	            this.controls.on('click', function (e) {
	                e.preventDefault();
	                var data = $(e.target).data();
	                _this.setAppStyle(data);
	            });
	        }
	    }, {
	        key: 'setAppStyle',
	        value: function setAppStyle(data) {
	            switch (data.type) {
	
	                case 'font-size':
	                    {
	                        if (data.increase) {
	                            this.app.css(data.type, '+=1px');
	                        } else {
	                            this.app.css(data.type, '-=1px');
	                        }
	                        break;
	                    }
	                case 'letter-spacing':
	                    {
	                        if (data.increase) {
	                            this.app.css(data.type, '+=0.025em');
	                        } else {
	                            this.app.css(data.type, '-=0.025em');
	                        }
	                        break;
	                    }
	
	                case 'img':
	                    {
	                        if (data.view) {
	                            this.app.find('img').css('visibility', 'visible');
	                        } else {
	                            this.app.find('img').css('visibility', 'hidden');
	                        }
	                        break;
	                    }
	            }
	        }
	
	        // handleTextChange() {
	        //
	        //     var self = this;
	        //
	        //     self.textSelect.val(cookie.getCookie('app-text'));
	        //
	        //     self.textSelect.on('change', function() {
	        //
	        //         cookie.setCookie('app-text', $(this).val(), COOKIE_PATH);
	        //         self.setApplicationStyles();
	        //
	        //     });
	        //
	        // }
	        //
	        // handleColorChange() {
	        //
	        //     var self = this;
	        //
	        //     self.colorSelect.val(cookie.getCookie('app-color'));
	        //
	        //     self.colorSelect.on('change', function() {
	        //
	        //         cookie.setCookie('app-color', $(this).val(), COOKIE_PATH);
	        //         self.setApplicationStyles();
	        //
	        //     });
	        //
	        // }
	        //
	        // handleImageChange() {
	        //
	        //     var self = this;
	        //
	        //     self.imageSelect.val(cookie.getCookie('app-image'));
	        //
	        //     self.imageSelect.on('change', function() {
	        //
	        //         cookie.setCookie('app-image', $(this).val(), COOKIE_PATH);
	        //         self.setApplicationStyles();
	        //
	        //         self.toggleImage();
	        //
	        //     });
	        //
	        //
	        //
	        // }
	        //
	        // wrapImageAlt() {
	        //
	        //     $('img').each(function() {
	        //
	        //         var alt = $(this).attr('alt');
	        //
	        //         if (alt != '') {
	        //             $(this).wrap(`<span class="image-alt"/>`);
	        //             $(this).after(`<span class="image-alt__text">${alt}</span>`);
	        //         } else {
	        //             $(this).wrap(`<span class="image-alt image-alt_empty"/>`);
	        //         }
	        //
	        //     });
	        //
	        // }
	        //
	        // toggleImage() {
	        //
	        //     if (cookie.getCookie('app-image') == 'hidden') {
	        //         $('.image-alt').addClass('image-alt_active');
	        //         $('img').css('visibility', 'hidden');
	        //     } else {
	        //         $('.image-alt').removeClass('image-alt_active');
	        //         $('img').css('visibility', 'visible');
	        //     }
	        //
	        // }
	        //
	        // setApplicationStyles() {
	        //
	        //     this.app.attr('data-text', cookie.getCookie('app-text'));
	        //     this.app.attr('data-color', cookie.getCookie('app-color'));
	        //     this.app.attr('data-image', cookie.getCookie('app-image'));
	        //
	        // }
	
	    }]);
	
	    return ControlPanel;
	}();
	
	exports.default = new ControlPanel();

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(14);
	
	__webpack_require__(15);
	
	var _cookie = __webpack_require__(17);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var COOKIE_PATH = { path: '/' };
	
	var ControlPanel = function () {
	    function ControlPanel() {
	        _classCallCheck(this, ControlPanel);
	
	        var self = this;
	        self.app = $('html');
	        // self.changer = $('.js-control-changer');
	        self.controlPanel = $('.js-control-panel');
	        // self.reset = $('#js-control-reset');
	
	        self.init();
	        // self.getAttrNames();
	        // self.setDefaultCookies();
	        // self.setApplicationStyles();
	        // self.handleChangerClick();
	        // self.handleReset();
	    }
	
	    _createClass(ControlPanel, [{
	        key: 'init',
	        value: function init() {
	            var self = this;
	            if (jQuery) {
	                (function ($) {
	                    "use strict";
	
	                    $(document).ready(function () {
	                        // initialize the megamenu
	                        self.controlPanel.accessibleMegaMenu({
	                            uuidPrefix: "accessible-megamenu",
	
	                            /* css class used to define the megamenu styling */
	                            menuClass: "control-panel",
	
	                            /* css class for a top-level navigation item in the megamenu */
	                            topNavItemClass: "control-panel__nav-item",
	
	                            /* css class for a megamenu panel */
	                            panelClass: "control-panel__dropdown",
	
	                            /* css class for a group of items within a megamenu panel */
	                            panelGroupClass: "control-panel__dropdown-group",
	
	                            /* css class for the hover state */
	                            hoverClass: "hover",
	
	                            /* css class for the focus state */
	                            focusClass: "focus",
	
	                            /* css class for the open state */
	                            openClass: "open"
	                        });
	                        // hack so that the megamenu doesn't show flash of css animation after the page loads.
	                        setTimeout(function () {
	                            $('body').removeClass('init');
	                        }, 500);
	                    });
	                })(jQuery);
	            }
	        }
	
	        /**
	         * дефолтные значения записываются в куки, если те пусты.
	         * проходимся по списку из названий дата-атрибутов, и записываем соответсвующие названия кук
	         */
	
	    }, {
	        key: 'setDefaultCookies',
	        value: function setDefaultCookies() {
	            for (var i = 0; i < this.attrNames.length; i++) {
	                !_cookie2.default.getCookie('app-' + this.attrNames[i]) ? _cookie2.default.setCookie('app-' + this.attrNames[i], 'normal', COOKIE_PATH) : false;
	            }
	        }
	
	        /**
	         * записываем в массив все названия дата-атрибутов переключателей
	         */
	
	    }, {
	        key: 'getAttrNames',
	        value: function getAttrNames() {
	            var self = this;
	            self.attrNames = [];
	            $('.js-control-changer').each(function (index, elem) {
	                var attrName = Object.keys($(elem).data())[0];
	                if (self.attrNames.indexOf(attrName) == -1 && attrName) {
	                    self.attrNames.push(attrName);
	                }
	            });
	        }
	    }, {
	        key: 'handleChangerClick',
	        value: function handleChangerClick() {
	            var self = this;
	            self.changer.on('click', function (e) {
	                e.preventDefault();
	                var data = $(e.target).data();
	                var dataName = Object.keys(data)[0]; //получаем ключ название дата атрибута
	                var dataValue = data[dataName]; //получаем значение дата атрибута
	                _cookie2.default.setCookie('app-' + dataName, dataValue, COOKIE_PATH);
	                self.setApplicationStyles();
	            });
	        }
	
	        /**
	         * проходимся по списку из названий дата-атрибутов, и ставим такие же в куки и дата-атрибуты html
	         */
	
	    }, {
	        key: 'setApplicationStyles',
	        value: function setApplicationStyles() {
	            for (var i = 0; i < this.attrNames.length; i++) {
	                this.app.attr('data-' + this.attrNames[i], _cookie2.default.getCookie('app-' + this.attrNames[i]));
	            }
	        }
	    }, {
	        key: 'handleReset',
	        value: function handleReset() {
	            var _this = this;
	
	            this.reset.on('click', function (e) {
	                e.preventDefault();
	                for (var i = 0; i < _this.attrNames.length; i++) {
	                    _cookie2.default.setCookie('app-' + _this.attrNames[i], 'normal', COOKIE_PATH);
	                    _this.setApplicationStyles();
	                }
	            });
	        }
	    }]);
	
	    return ControlPanel;
	}();
	
	exports.default = new ControlPanel();

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * See <a href="http://jquery.com">http://jquery.com</a>.
	 * @name jquery
	 * @class
	 * See the jQuery Library  (<a href="http://jquery.com">http://jquery.com</a>) for full details.  This just
	 * documents the function and classes that are added to jQuery by this plug-in.
	 */
	
	/**
	 * See <a href="http://jquery.com">http://jquery.com</a>
	 * @name fn
	 * @class
	 * See the jQuery Library  (<a href="http://jquery.com">http://jquery.com</a>) for full details.  This just
	 * documents the function and classes that are added to jQuery by this plug-in.
	 * @memberOf jquery
	 */
	
	/**
	 * @fileOverview accessibleMegaMenu plugin
	 *
	 *<p>Licensed under the Apache License, Version 2.0 (the “License”)
	 *<br />Copyright © 2013 Adobe Systems Incorporated.
	 *<br />Project page <a href="https://github.com/adobe-accessibility/Accessible-Mega-Menu">https://github.com/adobe-accessibility/Accessible-Mega-Menu</a>
	 * @version 0.1
	 * @author Michael Jordan
	 * @requires jquery
	 */
	
	/*jslint browser: true, devel: true, plusplus: true, nomen: true */
	/*global jQuery */
	(function ($, window, document) {
	    "use strict";
	
	    var pluginName = "accessibleMegaMenu",
	        defaults = {
	        uuidPrefix: "accessible-megamenu", // unique ID's are required to indicate aria-owns, aria-controls and aria-labelledby
	        menuClass: "accessible-megamenu", // default css class used to define the megamenu styling
	        topNavItemClass: "accessible-megamenu-top-nav-item", // default css class for a top-level navigation item in the megamenu
	        panelClass: "accessible-megamenu-panel", // default css class for a megamenu panel
	        panelGroupClass: "accessible-megamenu-panel-group", // default css class for a group of items within a megamenu panel
	        hoverClass: "hover", // default css class for the hover state
	        focusClass: "focus", // default css class for the focus state
	        openClass: "open" // default css class for the open state
	    },
	        Keyboard = {
	        BACKSPACE: 8,
	        COMMA: 188,
	        DELETE: 46,
	        DOWN: 40,
	        END: 35,
	        ENTER: 13,
	        ESCAPE: 27,
	        HOME: 36,
	        LEFT: 37,
	        PAGE_DOWN: 34,
	        PAGE_UP: 33,
	        PERIOD: 190,
	        RIGHT: 39,
	        SPACE: 32,
	        TAB: 9,
	        UP: 38,
	        keyMap: {
	            48: "0",
	            49: "1",
	            50: "2",
	            51: "3",
	            52: "4",
	            53: "5",
	            54: "6",
	            55: "7",
	            56: "8",
	            57: "9",
	            59: ";",
	            65: "a",
	            66: "b",
	            67: "c",
	            68: "d",
	            69: "e",
	            70: "f",
	            71: "g",
	            72: "h",
	            73: "i",
	            74: "j",
	            75: "k",
	            76: "l",
	            77: "m",
	            78: "n",
	            79: "o",
	            80: "p",
	            81: "q",
	            82: "r",
	            83: "s",
	            84: "t",
	            85: "u",
	            86: "v",
	            87: "w",
	            88: "x",
	            89: "y",
	            90: "z",
	            96: "0",
	            97: "1",
	            98: "2",
	            99: "3",
	            100: "4",
	            101: "5",
	            102: "6",
	            103: "7",
	            104: "8",
	            105: "9",
	            190: "."
	        }
	    };
	    /**
	     * @desc Creates a new accessible mega menu instance.
	     * @param {jquery} element
	     * @param {object} [options] Mega Menu options
	     * @param {string} [options.uuidPrefix=accessible-megamenu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
	     * @param {string} [options.menuClass=accessible-megamenu] - CSS class used to define the megamenu styling
	     * @param {string} [options.topNavItemClass=accessible-megamenu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
	     * @param {string} [options.panelClass=accessible-megamenu-panel] - CSS class for a megamenu panel
	     * @param {string} [options.panelGroupClass=accessible-megamenu-panel-group] - CSS class for a group of items within a megamenu panel
	     * @param {string} [options.hoverClass=hover] - CSS class for the hover state
	     * @param {string} [options.focusClass=focus] - CSS class for the focus state
	     * @param {string} [options.openClass=open] - CSS class for the open state
	     * @constructor
	     */
	    function AccessibleMegaMenu(element, options) {
	        this.element = element;
	
	        // merge optional settings and defaults into settings
	        this.settings = $.extend({}, defaults, options);
	
	        this._defaults = defaults;
	        this._name = pluginName;
	
	        this.mouseTimeoutID = null;
	        this.focusTimeoutID = null;
	        this.mouseFocused = false;
	        this.justFocused = false;
	
	        this.init();
	    }
	
	    AccessibleMegaMenu.prototype = function () {
	
	        /* private attributes and methods ------------------------ */
	        var uuid = 0,
	            keydownTimeoutDuration = 1000,
	            keydownSearchString = "",
	            isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart"),
	            _getPlugin,
	            _addUniqueId,
	            _togglePanel,
	            _clickHandler,
	            _clickOutsideHandler,
	            _DOMAttrModifiedHandler,
	            _focusInHandler,
	            _focusOutHandler,
	            _keyDownHandler,
	            _mouseDownHandler,
	            _mouseOverHandler,
	            _mouseOutHandler,
	            _toggleExpandedEventHandlers;
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_getPlugin
	         * @desc Returns the parent accessibleMegaMenu instance for a given element
	         * @param {jQuery} element
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _getPlugin = function _getPlugin(element) {
	            return $(element).closest(':data(plugin_' + pluginName + ')').data("plugin_" + pluginName);
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_addUniqueId
	         * @desc Adds a unique id and element.
	         * The id string starts with the
	         * string defined in settings.uuidPrefix.
	         * @param {jQuery} element
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _addUniqueId = function _addUniqueId(element) {
	            element = $(element);
	            var settings = this.settings;
	            if (!element.attr("id")) {
	                element.attr("id", settings.uuidPrefix + "-" + new Date().getTime() + "-" + ++uuid);
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_togglePanel
	         * @desc Toggle the display of mega menu panels in response to an event.
	         * The optional boolean value 'hide' forces all panels to hide.
	         * @param {event} event
	         * @param {Boolean} [hide] Hide all mega menu panels when true
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _togglePanel = function _togglePanel(event, hide) {
	            var target = $(event.target),
	                that = this,
	                settings = this.settings,
	                menu = this.menu,
	                topli = target.closest('.' + settings.topNavItemClass),
	                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
	                newfocus;
	
	            _toggleExpandedEventHandlers.call(this, true);
	
	            if (hide) {
	                topli = menu.find('.' + settings.topNavItemClass + ' .' + settings.openClass + ':first').closest('.' + settings.topNavItemClass);
	                if (!(topli.is(event.relatedTarget) || topli.has(event.relatedTarget).length > 0)) {
	                    if ((event.type === 'mouseout' || event.type === 'focusout') && topli.has(document.activeElement).length > 0) {
	                        return;
	                    }
	                    topli.find('[aria-expanded]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
	                    if (event.type === 'keydown' && event.keyCode === Keyboard.ESCAPE || event.type === 'DOMAttrModified') {
	                        newfocus = topli.find(':tabbable:first');
	                        setTimeout(function () {
	                            menu.find('[aria-expanded].' + that.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
	                            newfocus.focus();
	                            that.justFocused = false;
	                        }, 99);
	                    }
	                } else if (topli.length === 0) {
	                    menu.find('[aria-expanded=true]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
	                }
	            } else {
	                clearTimeout(that.focusTimeoutID);
	                topli.siblings().find('[aria-expanded]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
	                topli.find('[aria-expanded]').attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false');
	                if (event.type === 'mouseover' && target.is(':tabbable') && topli.length === 1 && panel.length === 0 && menu.has(document.activeElement).length > 0) {
	                    target.focus();
	                    that.justFocused = false;
	                }
	
	                _toggleExpandedEventHandlers.call(that);
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_clickHandler
	         * @desc Handle click event on mega menu item
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _clickHandler = function _clickHandler(event) {
	            var target = $(event.currentTarget),
	                topli = target.closest('.' + this.settings.topNavItemClass),
	                panel = target.closest('.' + this.settings.panelClass);
	            if (topli.length === 1 && panel.length === 0 && topli.find('.' + this.settings.panelClass).length === 1) {
	                if (!target.hasClass(this.settings.openClass)) {
	                    event.preventDefault();
	                    event.stopPropagation();
	                    _togglePanel.call(this, event);
	                    this.justFocused = false;
	                } else {
	                    if (this.justFocused) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                        this.justFocused = false;
	                    } else if (isTouch) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                        _togglePanel.call(this, event, target.hasClass(this.settings.openClass));
	                    }
	                }
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_clickOutsideHandler
	         * @desc Handle click event outside of a the megamenu
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _clickOutsideHandler = function _clickOutsideHandler(event) {
	            if ($(event.target).closest(this.menu).length === 0) {
	                event.preventDefault();
	                event.stopPropagation();
	                _togglePanel.call(this, event, true);
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_DOMAttrModifiedHandler
	         * @desc Handle DOMAttrModified event on panel to respond to Windows 8 Narrator ExpandCollapse pattern
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _DOMAttrModifiedHandler = function _DOMAttrModifiedHandler(event) {
	            if (event.originalEvent.attrName === 'aria-expanded' && event.originalEvent.newValue === 'false' && $(event.target).hasClass(this.settings.openClass)) {
	                event.preventDefault();
	                event.stopPropagation();
	                _togglePanel.call(this, event, true);
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_focusInHandler
	         * @desc Handle focusin event on mega menu item.
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _focusInHandler = function _focusInHandler(event) {
	            clearTimeout(this.focusTimeoutID);
	            var target = $(event.target),
	                panel = target.closest('.' + this.settings.panelClass);
	            target.addClass(this.settings.focusClass).on('click.accessible-megamenu', $.proxy(_clickHandler, this));
	            this.justFocused = !this.mouseFocused;
	            this.mouseFocused = false;
	            if (this.panels.not(panel).filter('.' + this.settings.openClass).length) {
	                _togglePanel.call(this, event);
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_focusOutHandler
	         * @desc Handle focusout event on mega menu item.
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _focusOutHandler = function _focusOutHandler(event) {
	            this.justFocused = false;
	            var that = this,
	                target = $(event.target),
	                topli = target.closest('.' + this.settings.topNavItemClass),
	                keepOpen = false;
	            target.removeClass(this.settings.focusClass).off('click.accessible-megamenu');
	
	            if (window.cvox) {
	                // If ChromeVox is running...
	                that.focusTimeoutID = setTimeout(function () {
	                    window.cvox.Api.getCurrentNode(function (node) {
	                        if (topli.has(node).length) {
	                            // and the current node being voiced is in
	                            // the mega menu, clearTimeout,
	                            // so the panel stays open.
	                            clearTimeout(that.focusTimeoutID);
	                        } else {
	                            that.focusTimeoutID = setTimeout(function (scope, event, hide) {
	                                _togglePanel.call(scope, event, hide);
	                            }, 275, that, event, true);
	                        }
	                    });
	                }, 25);
	            } else {
	                that.focusTimeoutID = setTimeout(function () {
	                    _togglePanel.call(that, event, true);
	                }, 300);
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_keyDownHandler
	         * @desc Handle keydown event on mega menu.
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _keyDownHandler = function _keyDownHandler(event) {
	            var that = this.constructor === AccessibleMegaMenu ? this : _getPlugin(this),
	                // determine the AccessibleMegaMenu plugin instance
	            settings = that.settings,
	                target = $($(this).is('.' + settings.hoverClass + ':tabbable') ? this : event.target),
	                // if the element is hovered the target is this, otherwise, its the focused element
	            menu = that.menu,
	                topnavitems = that.topnavitems,
	                topli = target.closest('.' + settings.topNavItemClass),
	                tabbables = menu.find(':tabbable'),
	                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
	                panelGroups = panel.find('.' + settings.panelGroupClass),
	                currentPanelGroup = target.closest('.' + settings.panelGroupClass),
	                next,
	                keycode = event.keyCode || event.which,
	                start,
	                i,
	                o,
	                label,
	                found = false,
	                newString = Keyboard.keyMap[event.keyCode] || '',
	                regex,
	                isTopNavItem = topli.length === 1 && panel.length === 0;
	
	            if (target.is("input:focus, select:focus, textarea:focus, button:focus")) {
	                // if the event target is a form element we should handle keydown normally
	                return;
	            }
	
	            if (target.is('.' + settings.hoverClass + ':tabbable')) {
	                $('html').off('keydown.accessible-megamenu');
	            }
	
	            switch (keycode) {
	                case Keyboard.ESCAPE:
	                    _togglePanel.call(that, event, true);
	                    break;
	                case Keyboard.DOWN:
	                    event.preventDefault();
	                    if (isTopNavItem) {
	                        _togglePanel.call(that, event);
	                        found = topli.find('.' + settings.panelClass + ' :tabbable:first').focus().length === 1;
	                    } else {
	                        found = tabbables.filter(':gt(' + tabbables.index(target) + '):first').focus().length === 1;
	                    }
	
	                    if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
	                        tabbables = $(':tabbable');
	                        i = tabbables.index(target);
	                        found = $(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1;
	                    }
	                    break;
	                case Keyboard.UP:
	                    event.preventDefault();
	                    if (isTopNavItem && target.hasClass(settings.openClass)) {
	                        _togglePanel.call(that, event, true);
	                        next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
	                        if (next.children('.' + settings.panelClass).length) {
	                            found = next.children().attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false').find(':tabbable:last').focus() === 1;
	                        }
	                    } else if (!isTopNavItem) {
	                        found = tabbables.filter(':lt(' + tabbables.index(target) + '):last').focus().length === 1;
	                    }
	
	                    if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
	                        tabbables = $(':tabbable');
	                        i = tabbables.index(target);
	                        found = $(':tabbable:lt(' + $(':tabbable').index(target) + '):first').focus().length === 1;
	                    }
	                    break;
	                case Keyboard.RIGHT:
	                    event.preventDefault();
	                    if (isTopNavItem) {
	                        found = topnavitems.filter(':gt(' + topnavitems.index(topli) + '):first').find(':tabbable:first').focus().length === 1;
	                    } else {
	                        if (panelGroups.length && currentPanelGroup.length) {
	                            // if the current panel contains panel groups, and we are able to focus the first tabbable element of the next panel group
	                            found = panelGroups.filter(':gt(' + panelGroups.index(currentPanelGroup) + '):first').find(':tabbable:first').focus().length === 1;
	                        }
	
	                        if (!found) {
	                            found = topli.find(':tabbable:first').focus().length === 1;
	                        }
	                    }
	                    break;
	                case Keyboard.LEFT:
	                    event.preventDefault();
	                    if (isTopNavItem) {
	                        found = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last').find(':tabbable:first').focus().length === 1;
	                    } else {
	                        if (panelGroups.length && currentPanelGroup.length) {
	                            // if the current panel contains panel groups, and we are able to focus the first tabbable element of the previous panel group
	                            found = panelGroups.filter(':lt(' + panelGroups.index(currentPanelGroup) + '):last').find(':tabbable:first').focus().length === 1;
	                        }
	
	                        if (!found) {
	                            found = topli.find(':tabbable:first').focus().length === 1;
	                        }
	                    }
	                    break;
	                case Keyboard.TAB:
	                    i = tabbables.index(target);
	                    if (event.shiftKey && isTopNavItem && target.hasClass(settings.openClass)) {
	                        _togglePanel.call(that, event, true);
	                        next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
	                        if (next.children('.' + settings.panelClass).length) {
	                            found = next.children().attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false').find(':tabbable:last').focus();
	                        }
	                    } else if (event.shiftKey && i > 0) {
	                        found = tabbables.filter(':lt(' + i + '):last').focus().length === 1;
	                    } else if (!event.shiftKey && i < tabbables.length - 1) {
	                        found = tabbables.filter(':gt(' + i + '):first').focus().length === 1;
	                    } else if (window.opera && opera.toString() === "[object Opera]") {
	                        tabbables = $(':tabbable');
	                        i = tabbables.index(target);
	                        if (event.shiftKey) {
	                            found = $(':tabbable:lt(' + $(':tabbable').index(target) + '):last').focus().length === 1;
	                        } else {
	                            found = $(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1;
	                        }
	                    }
	
	                    if (found) {
	                        event.preventDefault();
	                    }
	                    break;
	                case Keyboard.SPACE:
	                    if (isTopNavItem) {
	                        event.preventDefault();
	                        _clickHandler.call(that, event);
	                    } else {
	                        return true;
	                    }
	                    break;
	                case Keyboard.ENTER:
	                    return true;
	                    break;
	                default:
	                    // alphanumeric filter
	                    clearTimeout(this.keydownTimeoutID);
	
	                    keydownSearchString += newString !== keydownSearchString ? newString : '';
	
	                    if (keydownSearchString.length === 0) {
	                        return;
	                    }
	
	                    this.keydownTimeoutID = setTimeout(function () {
	                        keydownSearchString = '';
	                    }, keydownTimeoutDuration);
	
	                    if (isTopNavItem && !target.hasClass(settings.openClass)) {
	                        tabbables = tabbables.filter(':not(.' + settings.panelClass + ' :tabbable)');
	                    } else {
	                        tabbables = topli.find(':tabbable');
	                    }
	
	                    if (event.shiftKey) {
	                        tabbables = $(tabbables.get().reverse());
	                    }
	
	                    for (i = 0; i < tabbables.length; i++) {
	                        o = tabbables.eq(i);
	                        if (o.is(target)) {
	                            start = keydownSearchString.length === 1 ? i + 1 : i;
	                            break;
	                        }
	                    }
	
	                    regex = new RegExp('^' + keydownSearchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'), 'i');
	
	                    for (i = start; i < tabbables.length; i++) {
	                        o = tabbables.eq(i);
	                        label = $.trim(o.text());
	                        if (regex.test(label)) {
	                            found = true;
	                            o.focus();
	                            break;
	                        }
	                    }
	                    if (!found) {
	                        for (i = 0; i < start; i++) {
	                            o = tabbables.eq(i);
	                            label = $.trim(o.text());
	                            if (regex.test(label)) {
	                                o.focus();
	                                break;
	                            }
	                        }
	                    }
	                    break;
	            }
	            that.justFocused = false;
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_mouseDownHandler
	         * @desc Handle mousedown event on mega menu.
	         * @param {event} Event object
	         * @memberof accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _mouseDownHandler = function _mouseDownHandler(event) {
	            if ($(event.target).is(this.settings.panelClass) || $(event.target).closest(":focusable").length) {
	                this.mouseFocused = true;
	            }
	            this.mouseTimeoutID = setTimeout(function () {
	                clearTimeout(this.focusTimeoutID);
	            }, 1);
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_mouseOverHandler
	         * @desc Handle mouseover event on mega menu.
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _mouseOverHandler = function _mouseOverHandler(event) {
	            clearTimeout(this.mouseTimeoutID);
	            $(event.target).addClass(this.settings.hoverClass);
	            _togglePanel.call(this, event);
	            if ($(event.target).is(':tabbable')) {
	                $('html').on('keydown.accessible-megamenu', $.proxy(_keyDownHandler, event.target));
	            }
	        };
	
	        /**
	         * @name jQuery.fn.accessibleMegaMenu~_mouseOutHandler
	         * @desc Handle mouseout event on mega menu.
	         * @param {event} Event object
	         * @memberof jQuery.fn.accessibleMegaMenu
	         * @inner
	         * @private
	         */
	        _mouseOutHandler = function _mouseOutHandler(event) {
	            var that = this;
	            $(event.target).removeClass(that.settings.hoverClass);
	
	            that.mouseTimeoutID = setTimeout(function () {
	                _togglePanel.call(that, event, true);
	            }, 250);
	            if ($(event.target).is(':tabbable')) {
	                $('html').off('keydown.accessible-megamenu');
	            }
	        };
	
	        _toggleExpandedEventHandlers = function _toggleExpandedEventHandlers(hide) {
	            var menu = this.menu;
	            if (hide) {
	                $('html').off('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu');
	
	                menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
	            } else {
	                $('html').on('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu', $.proxy(_clickOutsideHandler, this));
	
	                /* Narrator in Windows 8 automatically toggles the aria-expanded property on double tap or click.
	                   To respond to the change to collapse the panel, we must add a listener for a DOMAttrModified event. */
	                menu.find('[aria-expanded=true].' + this.settings.panelClass).on('DOMAttrModified.accessible-megamenu', $.proxy(_DOMAttrModifiedHandler, this));
	            }
	        };
	
	        /* public attributes and methods ------------------------- */
	        return {
	            constructor: AccessibleMegaMenu,
	
	            /**
	             * @lends jQuery.fn.accessibleMegaMenu
	             * @desc Initializes an instance of the accessibleMegaMenu plugins
	             * @memberof jQuery.fn.accessibleMegaMenu
	             * @instance
	             */
	            init: function init() {
	                var settings = this.settings,
	                    nav = $(this.element),
	                    menu = nav.children().first(),
	                    topnavitems = menu.children();
	                this.start(settings, nav, menu, topnavitems);
	            },
	
	            start: function start(settings, nav, menu, topnavitems) {
	                var that = this;
	                this.settings = settings;
	                this.menu = menu;
	                this.topnavitems = topnavitems;
	
	                nav.attr("role", "navigation");
	                menu.addClass(settings.menuClass);
	                topnavitems.each(function (i, topnavitem) {
	                    var topnavitemlink, topnavitempanel;
	                    topnavitem = $(topnavitem);
	                    topnavitem.addClass(settings.topNavItemClass);
	                    topnavitemlink = topnavitem.find(":tabbable:first");
	                    topnavitempanel = topnavitem.children(":not(:tabbable):last");
	                    _addUniqueId.call(that, topnavitemlink);
	                    if (topnavitempanel.length) {
	                        _addUniqueId.call(that, topnavitempanel);
	                        topnavitemlink.attr({
	                            "aria-haspopup": true,
	                            "aria-controls": topnavitempanel.attr("id"),
	                            "aria-expanded": false
	                        });
	
	                        topnavitempanel.attr({
	                            "role": "group",
	                            "aria-expanded": false,
	                            "aria-hidden": true
	                        }).addClass(settings.panelClass).not("[aria-labelledby]").attr("aria-labelledby", topnavitemlink.attr("id"));
	                    }
	                });
	
	                this.panels = menu.find("." + settings.panelClass);
	
	                menu.on("focusin.accessible-megamenu", ":focusable, ." + settings.panelClass, $.proxy(_focusInHandler, this)).on("focusout.accessible-megamenu", ":focusable, ." + settings.panelClass, $.proxy(_focusOutHandler, this)).on("keydown.accessible-megamenu", $.proxy(_keyDownHandler, this)).on("mouseover.accessible-megamenu", $.proxy(_mouseOverHandler, this)).on("mouseout.accessible-megamenu", $.proxy(_mouseOutHandler, this)).on("mousedown.accessible-megamenu", $.proxy(_mouseDownHandler, this));
	
	                if (isTouch) {
	                    menu.on("touchstart.accessible-megamenu", $.proxy(_clickHandler, this));
	                }
	
	                menu.find("hr").attr("role", "separator");
	
	                if ($(document.activeElement).closest(menu).length) {
	                    $(document.activeElement).trigger("focusin.accessible-megamenu");
	                }
	            },
	
	            /**
	             * @desc Get default values
	             * @example $(selector).accessibleMegaMenu("getDefaults");
	             * @return {object}
	             * @memberof jQuery.fn.accessibleMegaMenu
	             * @instance
	             */
	            getDefaults: function getDefaults() {
	                return this._defaults;
	            },
	
	            /**
	             * @desc Get any option set to plugin using its name (as string)
	             * @example $(selector).accessibleMegaMenu("getOption", some_option);
	             * @param {string} opt
	             * @return {string}
	             * @memberof jQuery.fn.accessibleMegaMenu
	             * @instance
	             */
	            getOption: function getOption(opt) {
	                return this.settings[opt];
	            },
	
	            /**
	             * @desc Get all options
	             * @example $(selector).accessibleMegaMenu("getAllOptions");
	             * @return {object}
	             * @memberof jQuery.fn.accessibleMegaMenu
	             * @instance
	             */
	            getAllOptions: function getAllOptions() {
	                return this.settings;
	            },
	
	            /**
	             * @desc Set option
	             * @example $(selector).accessibleMegaMenu("setOption", "option_name",  "option_value",  reinitialize);
	             * @param {string} opt - Option name
	             * @param {string} val - Option value
	             * @param {boolean} [reinitialize] - boolean to re-initialize the menu.
	             * @memberof jQuery.fn.accessibleMegaMenu
	             * @instance
	             */
	            setOption: function setOption(opt, value, reinitialize) {
	                this.settings[opt] = value;
	                if (reinitialize) {
	                    this.init();
	                }
	            }
	        };
	    }();
	
	    /* lightweight plugin wrapper around the constructor,
	       to prevent against multiple instantiations */
	
	    /**
	     * @class accessibleMegaMenu
	     * @memberOf jQuery.fn
	     * @classdesc Implements an accessible mega menu as a jQuery plugin.
	     * <p>The mega-menu It is modeled after the mega menu on {@link http://adobe.com|adobe.com} but has been simplified for use by others. A brief description of the interaction design choices can be found in a blog post at {@link http://blogs.adobe.com/accessibility/2013/05/adobe-com.html|Mega menu accessibility on adobe.com}.</p>
	     * <h3>Keyboard Accessibility</h3>
	     * <p>The accessible mega menu supports keyboard interaction modeled after the behavior described in the {@link http://www.w3.org/TR/wai-aria-practices/#menu|WAI-ARIA Menu or Menu bar (widget) design pattern}, however we also try to respect users' general expectations for the behavior of links in a global navigation. To this end, the accessible mega menu implementation permits tab focus on each of the six top-level menu items. When one of the menu items has focus, pressing the Enter key, Spacebar or Down arrow will open the submenu panel, and pressing the Left or Right arrow key will shift focus to the adjacent menu item. Links within the submenu panels are included in the tab order when the panel is open. They can also be navigated with the arrow keys or by typing the first character in the link name, which speeds up keyboard navigation considerably. Pressing the Escape key closes the submenu and restores focus to the parent menu item.</p>
	     * <h3>Screen Reader Accessibility</h3>
	     * <p>The accessible mega menu models its use of WAI-ARIA Roles, States, and Properties after those described in the {@link http://www.w3.org/TR/wai-aria-practices/#menu|WAI-ARIA Menu or Menu bar (widget) design pattern} with some notable exceptions, so that it behaves better with screen reader user expectations for global navigation. We don't use <code class="prettyprint prettyprinted" style=""><span class="pln">role</span><span class="pun">=</span><span class="str">"menu"</span></code> for the menu container and <code class="prettyprint prettyprinted" style=""><span class="pln">role</span><span class="pun">=</span><span class="str">"menuitem"</span></code> for each of the links therein, because if we do, assistive technology will no longer interpret the links as links, but instead, as menu items, and the links in our global navigation will no longer show up when a screen reader user executes a shortcut command to bring up a list of links in the page.</p>
	     * @example <h4>HTML</h4><hr/>
	    &lt;nav&gt;
	    &lt;ul class=&quot;nav-menu&quot;&gt;
	        &lt;li class=&quot;nav-item&quot;&gt;
	            &lt;a href=&quot;?movie&quot;&gt;Movies&lt;/a&gt;
	            &lt;div class=&quot;sub-nav&quot;&gt;
	                &lt;ul class=&quot;sub-nav-group&quot;&gt;
	                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=0&quot;&gt;Action &amp;amp; Adventure&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=2&quot;&gt;Children &amp;amp; Family&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
	                &lt;/ul&gt;
	                &lt;ul class=&quot;sub-nav-group&quot;&gt;
	                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=7&quot;&gt;Dramas&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=9&quot;&gt;Foreign&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
	                &lt;/ul&gt;
	                &lt;ul class=&quot;sub-nav-group&quot;&gt;
	                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=14&quot;&gt;Musicals&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&lt;a href=&quot;?movie&amp;genre=15&quot;&gt;Romance&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
	                &lt;/ul&gt;
	            &lt;/div&gt;
	        &lt;/li&gt;
	        &lt;li class=&quot;nav-item&quot;&gt;
	            &lt;a href=&quot;?tv&quot;&gt;TV Shows&lt;/a&gt;
	            &lt;div class=&quot;sub-nav&quot;&gt;
	                &lt;ul class=&quot;sub-nav-group&quot;&gt;
	                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=20&quot;&gt;Classic TV&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=21&quot;&gt;Crime TV&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
	                &lt;/ul&gt;
	                &lt;ul class=&quot;sub-nav-group&quot;&gt;
	                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=27&quot;&gt;Reality TV&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=30&quot;&gt;TV Action&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
	                &lt;/ul&gt;
	                &lt;ul class=&quot;sub-nav-group&quot;&gt;
	                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=33&quot;&gt;TV Dramas&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&lt;a href=&quot;?tv&amp;genre=34&quot;&gt;TV Horror&lt;/a&gt;&lt;/li&gt;
	                    &lt;li&gt;&amp;#8230;&lt;/li&gt;
	                &lt;/ul&gt;
	            &lt;/div&gt;
	        &lt;/li&gt;
	    &lt;/ul&gt;
	    &lt;/nav&gt;
	     * @example <h4>CSS</h4><hr/>
	    &#47;* Rudimentary mega menu CSS for demonstration *&#47;
	    &#47;* mega menu list *&#47;
	    .nav-menu {
	    display: block;
	    position: relative;
	    list-style: none;
	    margin: 0;
	    padding: 0;
	    z-index: 15;
	    }
	    &#47;* a top level navigation item in the mega menu *&#47;
	    .nav-item {
	    list-style: none;
	    display: inline-block;
	    padding: 0;
	    margin: 0;
	    }
	    &#47;* first descendant link within a top level navigation item *&#47;
	    .nav-item &gt; a {
	    position: relative;
	    display: inline-block;
	    padding: 0.5em 1em;
	    margin: 0 0 -1px 0;
	    border: 1px solid transparent;
	    }
	    &#47;* focus/open states of first descendant link within a top level
	    navigation item *&#47;
	    .nav-item &gt; a:focus,
	    .nav-item &gt; a.open {
	    border: 1px solid #dedede;
	    }
	    &#47;* open state of first descendant link within a top level
	    navigation item *&#47;
	    .nav-item &gt; a.open {
	    background-color: #fff;
	    border-bottom: none;
	    z-index: 1;
	    }
	    &#47;* sub-navigation panel *&#47;
	    .sub-nav {
	    position: absolute;
	    display: none;
	    top: 2.2em;
	    margin-top: -1px;
	    padding: 0.5em 1em;
	    border: 1px solid #dedede;
	    background-color: #fff;
	    }
	    &#47;* sub-navigation panel open state *&#47;
	    .sub-nav.open {
	    display: block;
	    }
	    &#47;* list of items within sub-navigation panel *&#47;
	    .sub-nav ul {
	    display: inline-block;
	    vertical-align: top;
	    margin: 0 1em 0 0;
	    padding: 0;
	    }
	    &#47;* list item within sub-navigation panel *&#47;
	    .sub-nav li {
	    display: block;
	    list-style-type: none;
	    margin: 0;
	    padding: 0;
	    }
	     * @example <h4>JavaScript</h4><hr/>
	    &lt;!-- include jquery --&gt;
	    &lt;script src=&quot;http://code.jquery.com/jquery-1.10.1.min.js&quot;&gt;&lt;/script&gt;
	    &lt;!-- include the jquery-accessibleMegaMenu plugin script --&gt;
	    &lt;script src=&quot;js/jquery-accessibleMegaMenu.js&quot;&gt;&lt;/script&gt;
	    &lt;!-- initialize a selector as an accessibleMegaMenu --&gt;
	    &lt;script&gt;
	    $(&quot;nav:first&quot;).accessibleMegaMenu({
	        &#47;* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby *&#47;
	        uuidPrefix: &quot;accessible-megamenu&quot;,
	          &#47;* css class used to define the megamenu styling *&#47;
	        menuClass: &quot;nav-menu&quot;,
	          &#47;* css class for a top-level navigation item in the megamenu *&#47;
	        topNavItemClass: &quot;nav-item&quot;,
	          &#47;* css class for a megamenu panel *&#47;
	        panelClass: &quot;sub-nav&quot;,
	          &#47;* css class for a group of items within a megamenu panel *&#47;
	        panelGroupClass: &quot;sub-nav-group&quot;,
	          &#47;* css class for the hover state *&#47;
	        hoverClass: &quot;hover&quot;,
	          &#47;* css class for the focus state *&#47;
	        focusClass: &quot;focus&quot;,
	          &#47;* css class for the open state *&#47;
	        openClass: &quot;open&quot;
	    });
	    &lt;/script&gt;
	     * @param {object} [options] Mega Menu options
	     * @param {string} [options.uuidPrefix=accessible-megamenu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
	     * @param {string} [options.menuClass=accessible-megamenu] - CSS class used to define the megamenu styling
	     * @param {string} [options.topNavItemClass=accessible-megamenu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
	     * @param {string} [options.panelClass=accessible-megamenu-panel] - CSS class for a megamenu panel
	     * @param {string} [options.panelGroupClass=accessible-megamenu-panel-group] - CSS class for a group of items within a megamenu panel
	     * @param {string} [options.hoverClass=hover] - CSS class for the hover state
	     * @param {string} [options.focusClass=focus] - CSS class for the focus state
	     * @param {string} [options.openClass=open] - CSS class for the open state
	     */
	    $.fn[pluginName] = function (options) {
	        return this.each(function () {
	            if (!$.data(this, "plugin_" + pluginName)) {
	                $.data(this, "plugin_" + pluginName, new $.fn[pluginName].AccessibleMegaMenu(this, options));
	            }
	        });
	    };
	
	    $.fn[pluginName].AccessibleMegaMenu = AccessibleMegaMenu;
	
	    /* :focusable and :tabbable selectors from
	       https://raw.github.com/jquery/jquery-ui/master/ui/jquery.ui.core.js */
	
	    /**
	     * @private
	     */
	    function visible(element) {
	        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
	            return $.css(this, "visibility") === "hidden";
	        }).length;
	    }
	
	    /**
	     * @private
	     */
	    function _focusable(element, isTabIndexNotNaN) {
	        var map,
	            mapName,
	            img,
	            nodeName = element.nodeName.toLowerCase();
	        if ("area" === nodeName) {
	            map = element.parentNode;
	            mapName = map.name;
	            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
	                return false;
	            }
	            img = $("img[usemap=#" + mapName + "]")[0];
	            return !!img && visible(img);
	        }
	        return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) &&
	        // the element and all of its ancestors must be visible
	        visible(element);
	    }
	
	    $.extend($.expr[":"], {
	        data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
	            return function (elem) {
	                return !!$.data(elem, dataName);
	            };
	        }) : // support: jQuery <1.8
	        function (elem, i, match) {
	            return !!$.data(elem, match[3]);
	        },
	
	        focusable: function focusable(element) {
	            return _focusable(element, !isNaN($.attr(element, "tabindex")));
	        },
	
	        tabbable: function tabbable(element) {
	            var tabIndex = $.attr(element, "tabindex"),
	                isTabIndexNaN = isNaN(tabIndex);
	            return (isTabIndexNaN || tabIndex >= 0) && _focusable(element, !isTabIndexNaN);
	        }
	    });
	})(jQuery, window, document);

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(19);

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(28);

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(31);

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _each2 = __webpack_require__(37);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(151);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Radio = function () {
	    function Radio() {
	        _classCallCheck(this, Radio);
	
	        this.radio = document.querySelectorAll('input[type=radio]');
	        this.init();
	    }
	
	    _createClass(Radio, [{
	        key: 'setDefaultAria',
	        value: function setDefaultAria(item) {
	
	            if (item.disabled) {
	                item.setAttribute('aria-disabled', 'true');
	            }
	            if (item.checked) {
	                item.setAttribute('aria-checked', 'true');
	            } else if (!item.checked) {
	                item.setAttribute('aria-checked', 'false');
	            }
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            (0, _each3.default)(this.radio, function (item, index, collection) {
	                _this.setDefaultAria(item);
	                _this.handleChange(item);
	            });
	        }
	    }, {
	        key: 'radioToggleAria',
	        value: function radioToggleAria(e) {
	            var target = e.target;
	            var radioGroup = document.getElementsByName(target.getAttribute('name'));
	            // delete aria for each in group
	            (0, _each3.default)(radioGroup, function (item, index, collection) {
	                item.setAttribute('aria-checked', 'false');
	            });
	
	            target.setAttribute('aria-checked', true);
	            target.focus();
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(item) {
	            item.addEventListener('change', this.radioToggleAria);
	        }
	    }]);
	
	    return Radio;
	}();
	
	$(document).ready(function () {
	    new Radio();
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(39),
	    baseEach = __webpack_require__(40),
	    baseIteratee = __webpack_require__(61),
	    isArray = __webpack_require__(54);
	
	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}
	
	module.exports = forEach;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(41),
	    createBaseEach = __webpack_require__(60);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(42),
	    keys = __webpack_require__(44);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(43);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(45),
	    baseKeys = __webpack_require__(56),
	    isArrayLike = __webpack_require__(49);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(46),
	    isArguments = __webpack_require__(47),
	    isArray = __webpack_require__(54),
	    isIndex = __webpack_require__(55);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(48);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(49),
	    isObjectLike = __webpack_require__(53);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(50),
	    isLength = __webpack_require__(52);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(51);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(57),
	    nativeKeys = __webpack_require__(58);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(59);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(49);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(62),
	    baseMatchesProperty = __webpack_require__(132),
	    identity = __webpack_require__(147),
	    isArray = __webpack_require__(54),
	    property = __webpack_require__(148);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(63),
	    getMatchData = __webpack_require__(129),
	    matchesStrictComparable = __webpack_require__(131);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(64),
	    baseIsEqual = __webpack_require__(102);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(65),
	    stackClear = __webpack_require__(73),
	    stackDelete = __webpack_require__(74),
	    stackGet = __webpack_require__(75),
	    stackHas = __webpack_require__(76),
	    stackSet = __webpack_require__(77);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(66),
	    listCacheDelete = __webpack_require__(67),
	    listCacheGet = __webpack_require__(70),
	    listCacheHas = __webpack_require__(71),
	    listCacheSet = __webpack_require__(72);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(69);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(65);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(65),
	    Map = __webpack_require__(78),
	    MapCache = __webpack_require__(87);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(83);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(80),
	    getValue = __webpack_require__(86);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(50),
	    isMasked = __webpack_require__(81),
	    isObject = __webpack_require__(51),
	    toSource = __webpack_require__(85);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(82);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(83);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(84);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 85 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(88),
	    mapCacheDelete = __webpack_require__(96),
	    mapCacheGet = __webpack_require__(99),
	    mapCacheHas = __webpack_require__(100),
	    mapCacheSet = __webpack_require__(101);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(89),
	    ListCache = __webpack_require__(65),
	    Map = __webpack_require__(78);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(90),
	    hashDelete = __webpack_require__(92),
	    hashGet = __webpack_require__(93),
	    hashHas = __webpack_require__(94),
	    hashSet = __webpack_require__(95);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(91);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(91);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(91);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(91);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(98);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(97);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(103),
	    isObject = __webpack_require__(51),
	    isObjectLike = __webpack_require__(53);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(64),
	    equalArrays = __webpack_require__(104),
	    equalByTag = __webpack_require__(110),
	    equalObjects = __webpack_require__(115),
	    getTag = __webpack_require__(116),
	    isArray = __webpack_require__(54),
	    isBuffer = __webpack_require__(122),
	    isTypedArray = __webpack_require__(125);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(105),
	    arraySome = __webpack_require__(108),
	    cacheHas = __webpack_require__(109);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(87),
	    setCacheAdd = __webpack_require__(106),
	    setCacheHas = __webpack_require__(107);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(111),
	    Uint8Array = __webpack_require__(112),
	    eq = __webpack_require__(69),
	    equalArrays = __webpack_require__(104),
	    mapToArray = __webpack_require__(113),
	    setToArray = __webpack_require__(114);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(83);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(83);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(44);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(117),
	    Map = __webpack_require__(78),
	    Promise = __webpack_require__(118),
	    Set = __webpack_require__(119),
	    WeakMap = __webpack_require__(120),
	    baseGetTag = __webpack_require__(121),
	    toSource = __webpack_require__(85);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(83);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(83);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(83);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(83);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(83),
	    stubFalse = __webpack_require__(124);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123)(module)))

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(126),
	    baseUnary = __webpack_require__(127),
	    nodeUtil = __webpack_require__(128);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(52),
	    isObjectLike = __webpack_require__(53);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(84);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123)(module)))

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(130),
	    keys = __webpack_require__(44);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(51);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(102),
	    get = __webpack_require__(133),
	    hasIn = __webpack_require__(144),
	    isKey = __webpack_require__(142),
	    isStrictComparable = __webpack_require__(130),
	    matchesStrictComparable = __webpack_require__(131),
	    toKey = __webpack_require__(143);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(134);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(135),
	    isKey = __webpack_require__(142),
	    toKey = __webpack_require__(143);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(54),
	    stringToPath = __webpack_require__(136);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(137),
	    toString = __webpack_require__(139);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(138);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(87);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(140);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(111),
	    isSymbol = __webpack_require__(141);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(53);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(54),
	    isSymbol = __webpack_require__(141);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(141);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(145),
	    hasPath = __webpack_require__(146);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(135),
	    isArguments = __webpack_require__(47),
	    isArray = __webpack_require__(54),
	    isIndex = __webpack_require__(55),
	    isKey = __webpack_require__(142),
	    isLength = __webpack_require__(52),
	    toKey = __webpack_require__(143);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 147 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(149),
	    basePropertyDeep = __webpack_require__(150),
	    isKey = __webpack_require__(142),
	    toKey = __webpack_require__(143);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(134);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */,
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _each2 = __webpack_require__(37);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(154);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CheckBox = function () {
	    function CheckBox() {
	        _classCallCheck(this, CheckBox);
	
	        this.checkboxes = document.querySelectorAll('input[type=checkbox]');
	        this.init();
	    }
	
	    _createClass(CheckBox, [{
	        key: 'setDefaultAria',
	        value: function setDefaultAria(item) {
	
	            if (item.disabled) {
	                item.setAttribute('aria-disabled', 'true');
	            }
	            if (item.checked) {
	                item.setAttribute('aria-checked', 'true');
	            } else if (!item.checked) {
	                item.setAttribute('aria-checked', 'false');
	            }
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            (0, _each3.default)(this.checkboxes, function (item, index, collection) {
	                _this.setDefaultAria(item);
	                _this.handleClick(item);
	            });
	        }
	    }, {
	        key: 'checkboxToggleAria',
	        value: function checkboxToggleAria(e) {
	            var target = e.target;
	            target.setAttribute("aria-checked", !JSON.parse(target.getAttribute("aria-checked")));
	            target.focus();
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(item) {
	            item.addEventListener('click', this.checkboxToggleAria);
	        }
	    }]);
	
	    return CheckBox;
	}();
	
	$(document).ready(function () {
	    new CheckBox();
	});

/***/ },
/* 154 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 155 */,
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(157);

/***/ },
/* 157 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 158 */,
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(160);

/***/ },
/* 160 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 161 */,
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(163);

/***/ },
/* 163 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 164 */,
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(166);

/***/ },
/* 166 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 167 */,
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(169);

/***/ },
/* 169 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 170 */,
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(172);

/***/ },
/* 172 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 173 */,
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @TODO: Рефакторинг компонента.
	
	__webpack_require__(175);
	
	function keyCodes() {
	
	    this.tab = 9;
	    this.enter = 13;
	    this.esc = 27;
	
	    this.space = 32;
	    this.pageup = 33;
	    this.pagedown = 34;
	    this.end = 35;
	    this.home = 36;
	
	    this.left = 37;
	    this.up = 38;
	    this.right = 39;
	    this.down = 40;
	}
	
	function tabpanel(tab) {
	    this.panel = tab;
	    this.keys = new keyCodes();
	    this.tabs = tab.querySelectorAll('.tabs__nav-item');
	    this.panels = tab.querySelectorAll('.tabs__panel');
	    this.bindHandlers();
	    this.init();
	}
	
	tabpanel.prototype.init = function () {
	    var tab;
	    for (var i = 0; i < this.panels.length; i++) {
	        this.panels[i].setAttribute('aria-hidden', 'true');
	    }
	
	    tab = this.panel.querySelector('[aria-selected="true"]');
	
	    this.panel.querySelector('#' + tab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
	};
	tabpanel.prototype.switchTabs = function ($curTab, $newTab) {
	    $curTab.classList.remove('focus');
	    console.log($curTab);
	    $curTab.setAttribute('tabindex', '-1');
	    $curTab.setAttribute('aria-selected', 'false');
	
	    $newTab.setAttribute('aria-selected', 'true');
	    // hide the current tab panel and set aria-hidden to true
	    this.panel.querySelector('#' + $curTab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');
	
	    // show the new tab panel and set aria-hidden to false
	    this.panel.querySelector('#' + $newTab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
	
	    $newTab.setAttribute('tabindex', '0');
	
	    $newTab.focus();
	};
	
	tabpanel.prototype.bindHandlers = function () {
	
	    var thisObj = this;
	    for (var i = 0; i < this.tabs.length; i++) {
	        this.tabs[i].addEventListener("keydown", function (e) {
	            return thisObj.handleTabKeyDown(this, e);
	        });
	        this.tabs[i].addEventListener('keypress', function (e) {
	            return thisObj.handleTabKeyPress(this, e);
	        });
	        this.tabs[i].addEventListener('click', function (e) {
	            return thisObj.handleTabClick(this, e);
	        });
	        this.tabs[i].addEventListener('focus', function (e) {
	            return thisObj.handleTabFocus(this, e);
	        });
	        this.tabs[i].addEventListener('blur', function (e) {
	            return thisObj.handleTabBlur(this, e);
	        });
	        this.tabs[i].addEventListener('keydown', function (e) {
	            return thisObj.handlePanelKeyDown(this, e);
	        });
	        this.tabs[i].addEventListener('keypress', function (e) {
	            return thisObj.handlePanelKeyPress(this, e);
	        });
	    }
	};
	tabpanel.prototype.handleTabKeyDown = function (tab, e) {
	
	    if (e.altKey) {
	        return true;
	    }
	
	    switch (e.keyCode) {
	        case this.keys.enter:
	        case this.keys.space:
	            {
	                return true;
	            }
	        case this.keys.left:
	        case this.keys.up:
	            {
	                var thisObj = this;
	                var $prevTab;
	                var $newTab;
	                if (e.ctrlKey) {} else {
	                    var curNdx = Array.prototype.indexOf.call(this.tabs, tab);
	                    if (curNdx == 0) {
	                        var index = this.tabs.length;
	                        $newTab = this.tabs[index - 1];
	                    } else {
	                        $newTab = this.tabs[curNdx - 1];
	                    }
	
	                    this.switchTabs(tab, $newTab);
	                }
	
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.right:
	        case this.keys.down:
	            {
	
	                var thisObj = this;
	                var foundTab = false;
	                var $newTab;
	
	                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);
	
	                if (curNdx == this.tabs.length - 1) {
	                    $newTab = this.tabs[0];
	                } else {
	                    $newTab = this.tabs[curNdx + 1];
	                }
	                this.switchTabs(tab, $newTab);
	
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.home:
	            {
	
	                this.switchTabs(tab, this.tabs.first());
	
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.end:
	            {
	
	                this.switchTabs(tab, this.tabs.last());
	
	                e.stopPropagation();
	                return false;
	            }
	    }
	};
	tabpanel.prototype.handleTabKeyPress = function (tab, e) {
	
	    if (e.altKey) {
	
	        return true;
	    }
	
	    switch (e.keyCode) {
	        case this.keys.enter:
	        case this.keys.space:
	        case this.keys.left:
	        case this.keys.up:
	        case this.keys.right:
	        case this.keys.down:
	        case this.keys.home:
	        case this.keys.end:
	            {
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.pageup:
	        case this.keys.pagedown:
	            {
	
	                if (!e.ctrlKey) {
	                    return true;
	                }
	
	                e.stopPropagation();
	                return false;
	            }
	    }
	
	    return true;
	};
	tabpanel.prototype.handleTabClick = function (tab, e) {
	
	    for (var i = 0; i < this.panels.length; i++) {
	        this.panels[i].setAttribute('aria-hidden', 'true');
	    }
	
	    for (var i = 0; i < this.tabs.length; i++) {
	        this.tabs[i].setAttribute('tabindex', '-1');
	        this.tabs[i].setAttribute('aria-selected', 'false');
	    }
	    console.log(tab);
	    tab.setAttribute('aria-selected', 'true');
	
	    this.panel.querySelector('#' + tab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
	    tab.setAttribute('tabindex', '0');
	    tab.focus();
	    return true;
	};
	tabpanel.prototype.handleTabFocus = function (tab, e) {
	    tab.classList.add('focus');
	    return true;
	};
	tabpanel.prototype.handleTabBlur = function (tab, e) {
	    tab.classList.remove('focus');
	    return true;
	};
	tabpanel.prototype.handlePanelKeyDown = function ($elem, e) {
	    if (e.altKey) {
	        return true;
	    }
	
	    switch (e.keyCode) {
	        case this.keys.esc:
	            {
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.left:
	        case this.keys.up:
	            {
	
	                if (!e.ctrlKey) {
	
	                    return true;
	                }
	                var tab = document.querySelector('#' + $elem.getAttribute('aria-labelledby'));
	                tab.focus();
	
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.pageup:
	            {
	
	                var $newTab;
	
	                if (!e.ctrlKey) {
	
	                    return true;
	                }
	
	                var tab = this.tabs.querySelector('[aria-selected="true"]');
	
	                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);
	
	                if (curNdx == 0) {
	                    var index = this.tabs.length;
	                    $newTab = this.tabs[index - 1];
	                } else {
	                    $newTab = this.tabs[curNdx - 1];
	                }
	
	                this.switchTabs(tab, $newTab);
	
	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	        case this.keys.pagedown:
	            {
	
	                var $newTab;
	
	                if (!e.ctrlKey) {
	
	                    return true;
	                }
	
	                var tab = $('#' + $elem.attr('aria-labelledby'));
	
	                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);
	
	                if (curNdx == this.tabs.length - 1) {
	
	                    $newTab = this.tabs[0];
	                } else {
	                    $newTab = this.tabs[curNdx + 1];
	                }
	
	                this.switchTabs(tab, $newTab);
	
	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	    }
	
	    return true;
	};
	tabpanel.prototype.handlePanelKeyPress = function ($elem, e) {
	
	    if (e.altKey) {
	
	        return true;
	    }
	
	    if (e.ctrlKey && (e.keyCode == this.keys.pageup || e.keyCode == this.keys.pagedown)) {
	        e.stopPropagation();
	        e.preventDefault();
	        return false;
	    }
	
	    switch (e.keyCode) {
	        case this.keys.esc:
	            {
	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	    }
	
	    return true;
	};
	
	$(document).ready(function () {
	    var tabs = document.querySelectorAll('.tabs');
	    [].forEach.call(tabs, function (tab) {
	        var panel = new tabpanel(tab);
	    });
	});

/***/ },
/* 175 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(178);

/***/ },
/* 178 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 179 */,
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(181);

/***/ },
/* 181 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 182 */,
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(184);

/***/ },
/* 184 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 185 */,
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _each2 = __webpack_require__(37);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(187);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Collapse = function () {
	    function Collapse() {
	        _classCallCheck(this, Collapse);
	
	        this.collapseButtons = document.querySelectorAll('.collapse__button');
	        this.init();
	    }
	
	    _createClass(Collapse, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            (0, _each3.default)(this.collapseButtons, function (item, index, collapseButtons) {
	                _this.handleClick(item);
	            });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(item) {
	            var _this2 = this;
	
	            item.addEventListener('click', function (e) {
	                e.preventDefault();
	                var target = e.target;
	                var collapseDropdown = document.querySelector('#' + target.getAttribute('aria-controls'));
	                _this2.toggleDropdown(collapseDropdown);
	            });
	        }
	    }, {
	        key: 'toggleDropdown',
	        value: function toggleDropdown(collapseDropdown) {
	            collapseDropdown.classList.toggle('collapse__panel_hidden');
	            if (collapseDropdown.getAttribute('aria-expanded') == 'false') {
	                collapseDropdown.setAttribute('aria-expanded', 'true');
	                collapseDropdown.focus();
	            } else {
	                collapseDropdown.setAttribute('aria-expanded', 'false');
	            }
	        }
	    }]);
	
	    return Collapse;
	}();
	
	$(document).ready(function () {
	    new Collapse();
	});

/***/ },
/* 187 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(190);

/***/ },
/* 190 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 191 */,
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(193);

/***/ },
/* 193 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 194 */,
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(196);

/***/ },
/* 196 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=accessibility.js.map