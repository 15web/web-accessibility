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
	
	__webpack_require__(125);
	
	__webpack_require__(9);
	
	__webpack_require__(12);
	
	__webpack_require__(128);
	
	__webpack_require__(17);
	
	__webpack_require__(20);
	
	__webpack_require__(23);
	
	__webpack_require__(26);
	
	__webpack_require__(29);
	
	__webpack_require__(32);
	
	__webpack_require__(35);
	
	__webpack_require__(77);
	
	__webpack_require__(80);
	
	__webpack_require__(83);
	
	__webpack_require__(86);
	
	__webpack_require__(89);
	
	__webpack_require__(92);
	
	__webpack_require__(95);
	
	__webpack_require__(98);
	
	__webpack_require__(101);
	
	__webpack_require__(104);
	
	__webpack_require__(107);
	
	__webpack_require__(110);
	
	__webpack_require__(113);
	
	__webpack_require__(116);
	
	__webpack_require__(119);

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
	
	__webpack_require__(10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ControlPanel = function () {
	    function ControlPanel() {
	        _classCallCheck(this, ControlPanel);
	
	        this.controlPanel = document.getElementById('accessibility-menu');
	        this.dropdownBtn = document.getElementById('dropdownBtn');
	        this.dropdown = document.getElementById('dropdownMenu');
	        this.init();
	    }
	
	    _createClass(ControlPanel, [{
	        key: 'init',
	        value: function init() {
	            this.handleDropdown();
	        }
	    }, {
	        key: 'handleDropdown',
	        value: function handleDropdown() {
	            var _this = this;
	
	            this.setDefaultDropdown();
	            this.dropdownBtn.addEventListener('click', function (e) {
	                e.preventDefault();
	                if (_this.dropdownBtn.getAttribute('aria-expanded') == 'false') {
	                    _this.dropdownBtn.setAttribute('aria-expanded', 'true');
	                    _this.controlPanel.classList.add('accessibility-menu_show-dropdown');
	                    _this.dropdown.setAttribute('aria-hidden', 'false');
	                    _this.dropdown.setAttribute('aria-expanded', 'true');
	                } else {
	                    _this.dropdownBtn.setAttribute('aria-expanded', 'false');
	                    _this.controlPanel.classList.remove('accessibility-menu_show-dropdown');
	                    _this.dropdown.setAttribute('aria-hidden', 'true');
	                    _this.dropdown.setAttribute('aria-expanded', 'false');
	                }
	            });
	        }
	    }, {
	        key: 'setDefaultDropdown',
	        value: function setDefaultDropdown() {
	            this.dropdownBtn.setAttribute('aria-haspopup', 'true');
	            this.dropdownBtn.setAttribute('aria-expanded', 'false');
	            this.dropdown.setAttribute('aria-expanded', 'false');
	            this.dropdown.setAttribute('aria-hidden', 'true');
	        }
	    }]);
	
	    return ControlPanel;
	}();
	
	if (document.getElementById('accessibility-menu')) {
	    new ControlPanel();
	}
	exports.default = ControlPanel;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(13);
	
	__webpack_require__(14);
	
	var _cookie = __webpack_require__(16);
	
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
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(21);

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(24);

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(27);

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(30);

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(33);

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _each2 = __webpack_require__(36);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(75);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(38),
	    baseEach = __webpack_require__(39),
	    castFunction = __webpack_require__(73),
	    isArray = __webpack_require__(55);
	
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
	  return func(collection, castFunction(iteratee));
	}
	
	module.exports = forEach;


/***/ },
/* 38 */
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
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(40),
	    createBaseEach = __webpack_require__(72);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(41),
	    keys = __webpack_require__(43);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(42);
	
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(44),
	    baseKeys = __webpack_require__(65),
	    isArrayLike = __webpack_require__(69);
	
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(45),
	    isArguments = __webpack_require__(46),
	    isArray = __webpack_require__(55),
	    isBuffer = __webpack_require__(56),
	    isIndex = __webpack_require__(59),
	    isTypedArray = __webpack_require__(60);
	
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
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(47),
	    isObjectLike = __webpack_require__(54);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
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
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(48),
	    isObjectLike = __webpack_require__(54);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(49),
	    getRawTag = __webpack_require__(52),
	    objectToString = __webpack_require__(53);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(50);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(51);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(49);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(50),
	    stubFalse = __webpack_require__(58);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ },
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(61),
	    baseUnary = __webpack_require__(63),
	    nodeUtil = __webpack_require__(64);
	
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(48),
	    isLength = __webpack_require__(62),
	    isObjectLike = __webpack_require__(54);
	
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
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(51);
	
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
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(66),
	    nativeKeys = __webpack_require__(67);
	
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(68);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(70),
	    isLength = __webpack_require__(62);
	
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(48),
	    isObject = __webpack_require__(71);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
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
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 71 */
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(69);
	
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(74);
	
	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}
	
	module.exports = castFunction;


/***/ },
/* 74 */
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
/* 75 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _each2 = __webpack_require__(36);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(78);
	
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
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(81);

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(84);

/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 85 */,
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(87);

/***/ },
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(90);

/***/ },
/* 90 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(93);

/***/ },
/* 93 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 94 */,
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(96);

/***/ },
/* 96 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @TODO: Рефакторинг компонента.
	
	__webpack_require__(99);
	
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
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(102);

/***/ },
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(105);

/***/ },
/* 105 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 106 */,
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(108);

/***/ },
/* 108 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _each2 = __webpack_require__(36);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(111);
	
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
/* 111 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(114);

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(117);

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */,
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(120);

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(126);

/***/ },
/* 126 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 127 */,
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(129);

/***/ },
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=accessibility.js.map