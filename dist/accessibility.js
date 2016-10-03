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
	
	__webpack_require__(16);
	
	__webpack_require__(19);
	
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
	
	__webpack_require__(52);
	
	var _tabs = __webpack_require__(55);
	
	__webpack_require__(58);
	
	__webpack_require__(61);
	
	__webpack_require__(64);
	
	var _collapse = __webpack_require__(67);
	
	__webpack_require__(70);
	
	__webpack_require__(73);
	
	__webpack_require__(76);
	
	// ==========================================================================
	// Initialization @TODO: Можно обойтись?
	// ==========================================================================
	
	// Panels
	
	
	// Collapse
	
	
	// Breadcrumbs
	
	
	// Tabs
	
	
	// Media object
	
	
	// Typography
	
	
	// ==========================================================================
	// Default components
	// ==========================================================================
	
	// Control panel
	(0, _collapse.collapseInit)();
	
	// Badge
	
	
	// Thumbnail
	
	
	// Progress bar
	
	
	// Navigation
	
	
	// Pagination
	
	
	// ==========================================================================
	// Additional components
	// ==========================================================================
	
	// Alerts
	
	
	// Form elements
	
	
	// Grid systems
	
	(0, _tabs.tabsInit)();

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
	
	__webpack_require__(80);
	
	var _cookie = __webpack_require__(79);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var COOKIE_PATH = { path: '/' };
	
	var ControlPanel = function () {
	    function ControlPanel() {
	        _classCallCheck(this, ControlPanel);
	
	        var self = this;
	        self.app = $('html');
	        self.changer = $('.js-control-changer');
	        self.controlPanel = $('.js-control-panel');
	        self.reset = $('#js-control-reset');
	
	        self.init();
	        self.getAttrNames();
	        self.setDefaultCookies();
	        self.setApplicationStyles();
	        self.handleChangerClick();
	        self.handleReset();
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
/* 10 */
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
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(14);

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(17);

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(20);

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
	
	// @TODO: Рефакторинг компонента.
	
	__webpack_require__(32);
	
	var radio = document.querySelectorAll('input[type=radio]');
	
	function radioToggleAria() {
	    //удаляем aria-checked у всех
	    var group = document.getElementsByName(this.getAttribute('name'));
	    for (var i = 0; i < group.length; i++) {
	        group[i].setAttribute('aria-checked', 'false');
	    }
	    //ставим только выбраному
	    this.setAttribute("aria-checked", "true");
	    this.focus();
	}
	
	function radioEventHandler(t) {
	    for (var i = 0; i < t.length; i++) {
	        t[i].addEventListener("change", radioToggleAria);
	        if (t[i].disabled) {
	            t[i].setAttribute('aria-disabled', 'true');
	        }
	        if (t[i].checked) {
	            t[i].setAttribute('aria-checked', 'true');
	        } else if (!t[i].checked) {
	            t[i].setAttribute('aria-checked', 'false');
	        }
	    }
	}
	
	radioEventHandler(radio);

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @TODO: Рефакторинг компонента.
	
	__webpack_require__(35);
	
	var checkbox = document.querySelectorAll('input[type=checkbox]');
	
	function checkboxEventHandler(t) {
	    for (var i = 0; i < t.length; i++) {
	        t[i].addEventListener("click", checkboxToggleAria);
	        if (t[i].disabled) {
	            t[i].setAttribute('aria-disabled', 'true');
	        }
	        if (t[i].checked) {
	            t[i].setAttribute('aria-checked', 'true');
	        } else if (!t[i].checked) {
	            t[i].setAttribute('aria-checked', 'false');
	        }
	    }
	}
	
	function checkboxToggleAria() {
	    if (this.getAttribute("aria-checked") == "false") {
	        this.setAttribute("aria-checked", "true");
	    } else {
	        this.setAttribute("aria-checked", "false");
	    }
	    this.focus();
	}
	
	checkboxEventHandler(checkbox);

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

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(53);

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @TODO: Рефакторинг компонента.
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tabsInit = tabsInit;
	
	__webpack_require__(56);
	
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
	}function tabsInit() {
	    var tabs = document.querySelectorAll('.tabs');
	    [].forEach.call(tabs, function (tab) {
	        var panel = new tabpanel(tab);
	    });
	}
	function tabpanel(tab) {
	    this.panel = tab;
	    this.keys = new keyCodes();
	    this.tabs = tab.querySelectorAll('.tabs-list__item');
	    this.panels = tab.querySelectorAll('.tabs__inner');
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
	    }
	
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

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(59);

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(62);

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(65);

/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @TODO: Рефакторинг компонента.
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.collapseInit = collapseInit;
	
	__webpack_require__(68);
	
	function collapseInit() {
	    var collapses = document.querySelectorAll('.collapse-button');
	    [].forEach.call(collapses, function (collapse) {
	        var collapse = new hideShow(collapse);
	    });
	}
	
	function hideShow(target) {
	    this.target = target;
	    this.region = document.querySelector('#' + this.target.getAttribute('aria-controls'));
	    this.keys = {
	        enter: 13,
	        space: 32
	    };
	
	    this.toggleSpeed = 100;
	
	    this.bindHandlers();
	}
	
	hideShow.prototype.bindHandlers = function () {
	    var thisObj = this;
	    this.target.addEventListener('click', function (e) {
	        thisObj.toggleRegion();
	        e.stopPropagation();
	        return false;
	    });
	};
	
	hideShow.prototype.toggleRegion = function () {
	    var thisObj = this.region;
	    console.log(thisObj);
	    this.region.classList.toggle('collapse');
	    if (thisObj.getAttribute('aria-expanded') == 'false') {
	        thisObj.setAttribute('aria-expanded', 'true');
	        thisObj.focus();
	    } else {
	        thisObj.setAttribute('aria-expanded', 'false');
	    }
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(71);

/***/ },
/* 71 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(74);

/***/ },
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */,
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(77);

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */,
/* 79 */
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
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=accessibility.js.map