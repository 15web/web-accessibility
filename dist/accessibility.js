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

	__webpack_require__(52);

	__webpack_require__(55);

	__webpack_require__(58);

	__webpack_require__(61);

	var _collapse = __webpack_require__(64);

	var _tabs = __webpack_require__(67);

	__webpack_require__(70);

	__webpack_require__(73);

	__webpack_require__(76);

	// TODO как в бустрапе активировать с помощью data
	$(document).ready(function () {
	    var panel1 = new _tabs.tabpanel("tabpanel1", false); //табы
	    var hs1 = new _collapse.hideShow('button1'); //кнопка скрыть показать
	});

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

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by HeadFire94Work on 12.05.2016.
	 */
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

	/**
	 * Created by HeadFire94Work on 12.05.2016.
	 */
	'use strict';

	__webpack_require__(56);

	//@todo рефакторинг

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
	    }
	}

	radioEventHandler(radio);

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

	var checkbox = document.querySelectorAll('input[type=checkbox]');

	//@todo рефакторинг
	function checkboxEventHandler(t) {
	    for (var i = 0; i < t.length; i++) {
	        t[i].addEventListener("click", checkboxToggleAria);
	        if (t[i].disabled) {
	            t[i].setAttribute('aria-disabled', 'true');
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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hideShow = hideShow;

	__webpack_require__(65);

	///////////////////////////////////////////////////////
	// Collapse СТАРТ
	///////////////////////////////////////////////////////

	function hideShow(id) {

	    this.$id = $('#' + id);
	    this.$region = $('#' + this.$id.attr('aria-controls'));

	    this.keys = {
	        enter: 13,
	        space: 32
	    };

	    this.toggleSpeed = 100;

	    // bind handlers
	    this.bindHandlers();
	} // end hidShow() constructor

	//
	// Function bindHandlers() is a member function to bind event handlers to the hideShow region
	//
	// return N/A
	//
	hideShow.prototype.bindHandlers = function () {

	    var thisObj = this;

	    this.$id.click(function (e) {

	        thisObj.toggleRegion();

	        e.stopPropagation();
	        return false;
	    });
	};

	//
	// Function toggleRegion() is a member function to toggle the display of the hideShow region
	//
	// return N/A
	//
	hideShow.prototype.toggleRegion = function () {

	    var thisObj = this;

	    // toggle the region
	    this.$region.slideToggle(this.toggleSpeed, function () {

	        if ($(this).attr('aria-expanded') == 'false') {
	            // region is collapsed

	            // update the aria-expanded attribute of the region
	            $(this).attr('aria-expanded', 'true');

	            // move focus to the region
	            $(this).focus();

	            // update the button label
	            thisObj.$id.find('span').html('Hide');
	        } else {
	            // region is expanded

	            // update the aria-expanded attribute of the region
	            $(this).attr('aria-expanded', 'false');

	            // update the button label
	            thisObj.$id.find('span').html('Show');
	        }
	    });
	}; // end toggleRegion()

	///////////////////////////////////////////////////////
	// Collapse конец
	///////////////////////////////////////////////////////

/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tabpanel = tabpanel;

	__webpack_require__(68);

	///////////////////////////////////////////////////////
	// ТАБЫ СТАРТ
	///////////////////////////////////////////////////////

	// keyCodes() is an object to contain keycodes needed for the application
	function keyCodes() {
	    // Define values for keycodes
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
	} // end keyCodes

	//
	// tabpanel() is a class constructor to create a ARIA-enabled tab panel widget.
	//
	// @param (id string) id is the id of the div containing the tab panel.
	//
	// @param (accordian boolean) accordian is true if the tab panel should operate
	//         as an accordian; false if a tab panel
	//
	// @return N/A
	//
	// Usage: Requires a div container and children as follows:
	//
	//         1. tabs/accordian headers have class 'tab'
	//
	//         2. panels are divs with class 'panel'
	//
	function tabpanel(id, accordian) {

	    // define the class properties

	    this.panel_id = id; // store the id of the containing div
	    this.accordian = accordian; // true if this is an accordian control
	    this.$panel = $('#' + id); // store the jQuery object for the panel
	    this.keys = new keyCodes(); // keycodes needed for event handlers
	    this.$tabs = this.$panel.find('.tabs-list__item'); // Array of panel tabs.
	    this.$panels = this.$panel.children('.tabs__inner'); // Array of panels.

	    // Bind event handlers
	    this.bindHandlers();

	    // Initialize the tab panel
	    this.init();
	} // end tabpanel() constructor

	//
	// Function init() is a member function to initialize the tab/accordian panel. Hides all panels. If a tab
	// has the class 'selected', makes that panel visible; otherwise, makes first panel visible.
	//
	// @return N/A
	//
	tabpanel.prototype.init = function () {
	    var $tab; // the selected tab - if one is selected

	    // add aria attributes to the panels
	    this.$panels.attr('aria-hidden', 'true');

	    // get the selected tab
	    $tab = this.$tabs.filter('[aria-selected="true"]');

	    if ($tab == undefined) {
	        $tab = this.$tabs.first();
	    }

	    // show the panel that the selected tab controls and set aria-hidden to false
	    this.$panel.find('#' + $tab.attr('aria-controls')).attr('aria-hidden', 'false');
	}; // end init()

	//
	// Function switchTabs() is a member function to give focus to a new tab or accordian header.
	// If it's a tab panel, the currently displayed panel is hidden and the panel associated with the new tab
	// is displayed.
	//
	// @param ($curTab obj) $curTab is the jQuery object of the currently selected tab
	//
	// @param ($newTab obj) $newTab is the jQuery object of new tab to switch to
	//
	// @return N/A
	//
	tabpanel.prototype.switchTabs = function ($curTab, $newTab) {

	    // Remove the highlighting from the current tab
	    $curTab.removeClass('focus');

	    // remove tab from the tab order and update its aria-selected attribute
	    $curTab.attr('tabindex', '-1').attr('aria-selected', 'false');

	    // update the aria attributes

	    // Highlight the new tab and update its aria-selected attribute
	    $newTab.attr('aria-selected', 'true');

	    // If this is a tab panel, swap displayed tabs
	    if (this.accordian == false) {
	        // hide the current tab panel and set aria-hidden to true
	        this.$panel.find('#' + $curTab.attr('aria-controls')).attr('aria-hidden', 'true');

	        // show the new tab panel and set aria-hidden to false
	        this.$panel.find('#' + $newTab.attr('aria-controls')).attr('aria-hidden', 'false');
	    }

	    // Make new tab navigable
	    $newTab.attr('tabindex', '0');

	    // give the new tab focus
	    $newTab.focus();
	}; // end switchTabs()

	//
	// Function togglePanel() is a member function to display or hide the panel associated with an accordian header
	//
	// @param ($tab obj) $tab is the jQuery object of the currently selected tab
	//
	// @return N/A
	//
	tabpanel.prototype.togglePanel = function ($tab) {

	    $panel = this.$panel.find('#' + $tab.attr('aria-controls'));

	    if ($panel.attr('aria-hidden') == 'true') {
	        $panel.slideDown(100);
	        $panel.attr('aria-hidden', 'false');
	    } else {
	        $panel.slideUp(100);
	        $panel.attr('aria-hidden', 'true');
	    }
	}; // end togglePanel()

	//
	// Function bindHandlers() is a member function to bind event handlers for the tabs
	//
	// @return N/A
	//
	tabpanel.prototype.bindHandlers = function () {

	    var thisObj = this; // Store the this pointer for reference

	    //////////////////////////////
	    // Bind handlers for the tabs / accordian headers

	    // bind a tab keydown handler
	    this.$tabs.keydown(function (e) {
	        return thisObj.handleTabKeyDown($(this), e);
	    });

	    // bind a tab keypress handler
	    this.$tabs.keypress(function (e) {
	        return thisObj.handleTabKeyPress($(this), e);
	    });

	    // bind a tab click handler
	    this.$tabs.click(function (e) {
	        return thisObj.handleTabClick($(this), e);
	    });

	    // bind a tab focus handler
	    this.$tabs.focus(function (e) {
	        return thisObj.handleTabFocus($(this), e);
	    });

	    // bind a tab blur handler
	    this.$tabs.blur(function (e) {
	        return thisObj.handleTabBlur($(this), e);
	    });

	    /////////////////////////////
	    // Bind handlers for the panels

	    // bind a keydown handlers for the panel focusable elements
	    this.$panels.keydown(function (e) {
	        return thisObj.handlePanelKeyDown($(this), e);
	    });

	    // bind a keypress handler for the panel
	    this.$panels.keypress(function (e) {
	        return thisObj.handlePanelKeyPress($(this), e);
	    });
	}; // end bindHandlers()

	//
	// Function handleTabKeyDown() is a member function to process keydown events for a tab
	//
	// @param ($tab obj) $tab is the jquery object of the tab being processed
	//
	// @param (e obj) e is the associated event object
	//
	// @return (boolean) Returns true if propagating; false if consuming event
	//
	tabpanel.prototype.handleTabKeyDown = function ($tab, e) {

	    if (e.altKey) {
	        // do nothing
	        return true;
	    }

	    switch (e.keyCode) {
	        case this.keys.enter:
	        case this.keys.space:
	            {

	                // Only process if this is an accordian widget
	                if (this.accordian == true) {
	                    // display or collapse the panel
	                    this.togglePanel($tab);

	                    e.stopPropagation();
	                    return false;
	                }

	                return true;
	            }
	        case this.keys.left:
	        case this.keys.up:
	            {

	                var thisObj = this;
	                var $prevTab; // holds jQuery object of tab from previous pass
	                var $newTab; // the new tab to switch to

	                if (e.ctrlKey) {
	                    // Ctrl+arrow moves focus from panel content to the open
	                    // tab/accordian header.
	                } else {
	                        var curNdx = this.$tabs.index($tab);

	                        if (curNdx == 0) {
	                            // tab is the first one:
	                            // set newTab to last tab
	                            $newTab = this.$tabs.last();
	                        } else {
	                            // set newTab to previous
	                            $newTab = this.$tabs.eq(curNdx - 1);
	                        }

	                        // switch to the new tab
	                        this.switchTabs($tab, $newTab);
	                    }

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.right:
	        case this.keys.down:
	            {

	                var thisObj = this;
	                var foundTab = false; // set to true when current tab found in array
	                var $newTab; // the new tab to switch to

	                var curNdx = this.$tabs.index($tab);

	                if (curNdx == this.$tabs.length - 1) {
	                    // tab is the last one:
	                    // set newTab to first tab
	                    $newTab = this.$tabs.first();
	                } else {
	                    // set newTab to next tab
	                    $newTab = this.$tabs.eq(curNdx + 1);
	                }

	                // switch to the new tab
	                this.switchTabs($tab, $newTab);

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.home:
	            {

	                // switch to the first tab
	                this.switchTabs($tab, this.$tabs.first());

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.end:
	            {

	                // switch to the last tab
	                this.switchTabs($tab, this.$tabs.last());

	                e.stopPropagation();
	                return false;
	            }
	    }
	}; // end handleTabKeyDown()

	//
	// Function handleTabKeyPress() is a member function to process keypress events for a tab.
	//
	//
	// @param ($tab obj) $tab is the jquery object of the tab being processed
	//
	// @param (e obj) e is the associated event object
	//
	// @return (boolean) Returns true if propagating; false if consuming event
	//
	tabpanel.prototype.handleTabKeyPress = function ($tab, e) {

	    if (e.altKey) {
	        // do nothing
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

	                // The tab keypress handler must consume pageup and pagedown
	                // keypresses to prevent Firefox from switching tabs
	                // on ctrl+pageup and ctrl+pagedown

	                if (!e.ctrlKey) {
	                    return true;
	                }

	                e.stopPropagation();
	                return false;
	            }
	    }

	    return true;
	}; // end handleTabKeyPress()

	//
	// Function handleTabClick() is a member function to process click events for tabs
	//
	// @param ($tab object) $tab is the jQuery object of the tab being processed
	//
	// @param (e object) e is the associated event object
	//
	// @return (boolean) returns true
	//
	tabpanel.prototype.handleTabClick = function ($tab, e) {

	    // hide the panels
	    this.$panels.attr('aria-hidden', 'true');

	    // remove all tabs from the tab order and reset their aria-selected attribute
	    this.$tabs.attr('tabindex', '-1').attr('aria-selected', 'false');

	    // Update the selected tab's aria-selected attribute
	    $tab.attr('aria-selected', 'true');

	    // show the clicked tab panel
	    this.$panel.find('#' + $tab.attr('aria-controls')).attr('aria-hidden', 'false');

	    // make clicked tab navigable
	    $tab.attr('tabindex', '0');

	    // give the tab focus
	    $tab.focus();

	    return true;
	}; // end handleTabClick()

	//
	// Function handleTabFocus() is a member function to process focus events for tabs
	//
	// @param ($tab object) $tab is the jQuery object of the tab being processed
	//
	// @param (e object) e is the associated event object
	//
	// @return (boolean) returns true
	//
	tabpanel.prototype.handleTabFocus = function ($tab, e) {

	    // Add the focus class to the tab
	    $tab.addClass('focus');

	    return true;
	}; // end handleTabFocus()

	//
	// Function handleTabBlur() is a member function to process blur events for tabs
	//
	// @param ($tab object) $tab is the jQuery object of the tab being processed
	//
	// @param (e object) e is the associated event object
	//
	// @return (boolean) returns true
	//
	tabpanel.prototype.handleTabBlur = function ($tab, e) {

	    // Remove the focus class to the tab
	    $tab.removeClass('focus');

	    return true;
	}; // end handleTabBlur()

	/////////////////////////////////////////////////////////
	// Panel Event handlers
	//

	//
	// Function handlePanelKeyDown() is a member function to process keydown events for a panel
	//
	// @param ($elem obj) $elem is the jquery object of the element being processed
	//
	// @param (e obj) e is the associated event object
	//
	// @return (boolean) Returns true if propagating; false if consuming event
	//
	tabpanel.prototype.handlePanelKeyDown = function ($elem, e) {

	    if (e.altKey) {
	        // do nothing
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
	                    // do not process
	                    return true;
	                }

	                // get the jQuery object of the tab
	                var $tab = $('#' + $elem.attr('aria-labelledby'));

	                // Move focus to the tab
	                $tab.focus();

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.pageup:
	            {

	                var $newTab;

	                if (!e.ctrlKey) {
	                    // do not process
	                    return true;
	                }

	                // get the jQuery object of the tab
	                var $tab = this.$tabs.filter('[aria-selected="true"]');

	                // get the index of the tab in the tab list
	                var curNdx = this.$tabs.index($tab);

	                if (curNdx == 0) {
	                    // this is the first tab, set focus on the last one
	                    $newTab = this.$tabs.last();
	                } else {
	                    // set focus on the previous tab
	                    $newTab = this.$tabs.eq(curNdx - 1);
	                }

	                // switch to the new tab
	                this.switchTabs($tab, $newTab);

	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	        case this.keys.pagedown:
	            {

	                var $newTab;

	                if (!e.ctrlKey) {
	                    // do not process
	                    return true;
	                }

	                // get the jQuery object of the tab
	                var $tab = $('#' + $elem.attr('aria-labelledby'));

	                // get the index of the tab in the tab list
	                var curNdx = this.$tabs.index($tab);

	                if (curNdx == this.$tabs.length - 1) {
	                    // this is the last tab, set focus on the first one
	                    $newTab = this.$tabs.first();
	                } else {
	                    // set focus on the next tab
	                    $newTab = this.$tabs.eq(curNdx + 1);
	                }

	                // switch to the new tab
	                this.switchTabs($tab, $newTab);

	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	    }

	    return true;
	}; // end handlePanelKeyDown()

	//
	// Function handlePanelKeyPress() is a member function to process keypress events for a panel
	//
	// @param ($elem obj) $elem is the jquery object of the element being processed
	//
	// @param (e obj) e is the associated event object
	//
	// @return (boolean) Returns true if propagating; false if consuming event
	//
	tabpanel.prototype.handlePanelKeyPress = function ($elem, e) {

	    if (e.altKey) {
	        // do nothing
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
	}; // end handlePanelKeyPress()

	// focusable is a small jQuery extension to add a :focusable selector. It is used to
	// get a list of all focusable elements in a panel. Credit to ajpiano on the jQuery forums.
	//
	$.extend($.expr[':'], {
	    focusable: function focusable(element) {
	        var nodeName = element.nodeName.toLowerCase();
	        var tabIndex = $(element).attr('tabindex');

	        // the element and all of its ancestors must be visible
	        if ($(element)[nodeName == 'area' ? 'parents' : 'closest'](':hidden').length == true) {
	            return false;
	        }

	        // If tabindex is defined, its value must be greater than 0
	        if (!isNaN(tabIndex) && tabIndex < 0) {
	            return false;
	        }

	        // if the element is a standard form control, it must not be disabled
	        if (/input|select|textarea|button|object/.test(nodeName) == true) {

	            return !element.disabled;
	        }

	        // if the element is a link, href must be defined
	        if ((nodeName == 'a' || nodeName == 'area') == true) {

	            return element.href.length > 0;
	        }

	        // this is some other page element that is not normally focusable.
	        return false;
	    }
	});

	///////////////////////////////////////////////////////
	// ТАБЫ конец
	///////////////////////////////////////////////////////

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MTMyY2IxOTliNzg3YjRhYjRjYSIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yZXNldC9yZXNldC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZS9ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvYm9vdHN0cmFwLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29va2llL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L25hdi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsL3BhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYS9tZWRpYS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhZ2luYXRpb24vcGFnaW5hdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Byb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcHJvZ3Jlc3MvcHJvZ3Jlc3Muc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYWxlcnQvYWxlcnQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb2xsYXBzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlL2NvbGxhcHNlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RhYnMvdGFicy5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC90aHVtYm5haWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2xhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYmFkZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9iYWRnZS9iYWRnZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjEzMmNiMTk5Yjc4N2I0YWI0Y2FcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2dyaWQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wcm9ncmVzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9hbGVydCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvY29sbGFwc2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RhYnMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JhZGdlJztcclxuXHJcbmltcG9ydCB7aGlkZVNob3d9IGZyb20gJy4vY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlJztcclxuaW1wb3J0IHt0YWJwYW5lbH0gZnJvbSAnLi9jb21wb25lbnRzL2RlZmF1bHQvdGFicyc7XHJcbi8vIFRPRE8g0LrQsNC6INCyINCx0YPRgdGC0YDQsNC/0LUg0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOIGRhdGFcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBhbmVsMSA9IG5ldyB0YWJwYW5lbChcInRhYnBhbmVsMVwiLCBmYWxzZSk7IC8v0YLQsNCx0YtcclxuICAgIHZhciBoczEgPSBuZXcgaGlkZVNob3coJ2J1dHRvbjEnKTsgLy/QutC90L7Qv9C60LAg0YHQutGA0YvRgtGMINC/0L7QutCw0LfQsNGC0YxcclxufSk7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYWNjZXNzaWJpbGl0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9yZXNldC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yZXNldC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvcmVzZXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9ub3JtYWxpemUuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ub3JtYWxpemUvbm9ybWFsaXplLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vaW5wdXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2Jvb3RzdHJhcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hcHBsaWNhdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29va2llIGZyb20gJy4uL2Nvb2tpZSc7XHJcbmltcG9ydCAnLi9jb250cm9sLXBhbmVsLnNjc3MnO1xyXG5cclxuY29uc3QgQ09PS0lFX1BBVEggPSB7cGF0aDogJy8nfTtcclxuXHJcbmNsYXNzIENvbnRyb2xQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmFwcCA9ICQoJy5hcHBsaWNhdGlvbicpO1xyXG5cclxuICAgICAgICBzZWxmLnRleHRTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LXRleHQnKTtcclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0ID0gJCgnLmNvbnRyb2wtcGFuZWxfX3NlbGVjdC1jb2xvcicpO1xyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LWltYWdlJyk7XHJcblxyXG4gICAgICAgICFjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpID8gY29va2llLnNldENvb2tpZSgnYXBwLXRleHQnLCAnbm9ybWFsJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC1jb2xvcicpID8gY29va2llLnNldENvb2tpZSgnYXBwLWNvbG9yJywgJ3doaXRlJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpID8gY29va2llLnNldENvb2tpZSgnYXBwLWltYWdlJywgJ3Zpc2libGUnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG4gICAgICAgIHNlbGYud3JhcEltYWdlQWx0KCk7XHJcbiAgICAgICAgc2VsZi50b2dnbGVJbWFnZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmhhbmRsZVRleHRDaGFuZ2UoKTtcclxuICAgICAgICBzZWxmLmhhbmRsZUNvbG9yQ2hhbmdlKCk7XHJcbiAgICAgICAgc2VsZi5oYW5kbGVJbWFnZUNoYW5nZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmFwcC5hZGRDbGFzcygnYXBwbGljYXRpb25fc2hvdycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUZXh0Q2hhbmdlKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLXRleHQnKSk7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdhcHAtdGV4dCcsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ29sb3JDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5jb2xvclNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykpO1xyXG5cclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC1jb2xvcicsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW1hZ2VDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykpO1xyXG5cclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC1pbWFnZScsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi50b2dnbGVJbWFnZSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB3cmFwSW1hZ2VBbHQoKSB7XHJcblxyXG4gICAgICAgICQoJ2ltZycpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWx0ID0gJCh0aGlzKS5hdHRyKCdhbHQnKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykud3JhcChgPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRcIi8+YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWx0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFmdGVyKGA8c3BhbiBjbGFzcz1cImltYWdlLWFsdF9fdGV4dFwiPiR7YWx0fTwvc3Bhbj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0X190ZXh0XCI+0J7Qv9C40YHQsNC90LjQtSDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCPC9zcGFuPicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpID09ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgICAgICQoJy5pbWFnZS1hbHQnKS5hZGRDbGFzcygnaW1hZ2UtYWx0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLnJlbW92ZUNsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRBcHBsaWNhdGlvblN0eWxlcygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS10ZXh0JywgY29va2llLmdldENvb2tpZSgnYXBwLXRleHQnKSk7XHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS1jb2xvcicsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC1jb2xvcicpKTtcclxuICAgICAgICB0aGlzLmFwcC5hdHRyKCdkYXRhLWltYWdlJywgY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xQYW5lbCgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvb2tpZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWUsINC10YHQu9C4INC10YHRgtGMLCDQtdGB0LvQuCDQvdC10YIsINGC0L4gdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIgY29va2llINGBINC40LzQtdC90LXQvCBuYW1lINC4INC30L3QsNGH0LXQvdC40LXQvCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG5hbWUgLSDQuNC80Y8gY29va2llXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgLSDQt9C90LDRh9C10L3QuNC1IGNvb2tpZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSDQvtCx0YrQtdC60YIg0YEg0YHQstC+0LnRgdGC0LLQsNC80LggY29va2llIChleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSlcclxuICAgICAqL1xyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXMgPT0gXCJudW1iZXJcIiAmJiBleHBpcmVzKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDEwMDApO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzID0gZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4cGlyZXMgJiYgZXhwaXJlcy50b1VUQ1N0cmluZykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB1cGRhdGVkQ29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBwcm9wTmFtZTtcclxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IG9wdGlvbnNbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgcHJvcFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPQtNCw0LvRj9C10YIgY29va2llINGBINC40LzQtdC90LXQvCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqL1xyXG4gICAgZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldENvb2tpZShuYW1lLCBcIlwiLCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IC0xXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvb2tpZSgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2Nvb2tpZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25hdi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25hdi9uYXYuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2J1dHRvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9wYW5lbC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFuZWwvcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbWVkaWEuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L21lZGlhL21lZGlhLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3R5cG9ncmFwaHkuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlLWFsdC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbWFnZS1hbHQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vc2VsZWN0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9icmVhZGNydW1icy5zY3NzJztcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVhZEZpcmU5NFdvcmsgb24gMDQuMDQuMjAxNi5cclxuICovXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2Zvcm0uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3BhZ2luYXRpb24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVhZEZpcmU5NFdvcmsgb24gMTIuMDUuMjAxNi5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9wcm9ncmVzcy5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wcm9ncmVzcy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcHJvZ3Jlc3MvcHJvZ3Jlc3Muc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBIZWFkRmlyZTk0V29yayBvbiAxMi4wNS4yMDE2LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3JhZGlvLnNjc3MnO1xyXG4vL0B0b2RvINGA0LXRhNCw0LrRgtC+0YDQuNC90LNcclxuXHJcbnZhciByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9cmFkaW9dJyk7XHJcblxyXG5mdW5jdGlvbiByYWRpb1RvZ2dsZUFyaWEoKSB7XHJcbiAgICAvL9GD0LTQsNC70Y/QtdC8IGFyaWEtY2hlY2tlZCDRgyDQstGB0LXRhVxyXG4gICAgdmFyIGdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUodGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JvdXBbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcclxuICAgIH1cclxuICAgIC8v0YHRgtCw0LLQuNC8INGC0L7Qu9GM0LrQviDQstGL0LHRgNCw0L3QvtC80YNcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwidHJ1ZVwiKTtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFkaW9FdmVudEhhbmRsZXIodCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHJhZGlvVG9nZ2xlQXJpYSk7XHJcbiAgICAgICAgaWYodFtpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5yYWRpb0V2ZW50SGFuZGxlcihyYWRpbyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2NoZWNrYm94LnNjc3MnO1xyXG52YXIgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG5cclxuLy9AdG9kbyDRgNC10YTQsNC60YLQvtGA0LjQvdCzXHJcbmZ1bmN0aW9uIGNoZWNrYm94RXZlbnRIYW5kbGVyKHQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrYm94VG9nZ2xlQXJpYSk7XHJcbiAgICAgICAgaWYodFtpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja2JveFRvZ2dsZUFyaWEoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIikgPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1cygpO1xyXG59XHJcblxyXG5jaGVja2JveEV2ZW50SGFuZGxlcihjaGVja2JveCk7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hbGVydC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hbGVydC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYWxlcnQvYWxlcnQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vY29sbGFwc2Uuc2Nzcyc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ29sbGFwc2Ug0KHQotCQ0KDQolxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZVNob3coaWQpIHtcclxuXHJcbiAgICB0aGlzLiRpZCA9ICQoJyMnICsgaWQpO1xyXG4gICAgdGhpcy4kcmVnaW9uID0gJCgnIycgKyB0aGlzLiRpZC5hdHRyKCdhcmlhLWNvbnRyb2xzJykpO1xyXG5cclxuICAgIHRoaXMua2V5cyA9IHtcclxuICAgICAgICBlbnRlcjogMTMsXHJcbiAgICAgICAgc3BhY2U6IDMyXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU3BlZWQgPSAxMDA7XHJcblxyXG4gICAgLy8gYmluZCBoYW5kbGVyc1xyXG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuXHJcbn0gLy8gZW5kIGhpZFNob3coKSBjb25zdHJ1Y3RvclxyXG5cclxuLy9cclxuLy8gRnVuY3Rpb24gYmluZEhhbmRsZXJzKCkgaXMgYSBtZW1iZXIgZnVuY3Rpb24gdG8gYmluZCBldmVudCBoYW5kbGVycyB0byB0aGUgaGlkZVNob3cgcmVnaW9uXHJcbi8vXHJcbi8vIHJldHVybiBOL0FcclxuLy9cclxuaGlkZVNob3cucHJvdG90eXBlLmJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kaWQuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgdGhpc09iai50b2dnbGVSZWdpb24oKTtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vXHJcbi8vIEZ1bmN0aW9uIHRvZ2dsZVJlZ2lvbigpIGlzIGEgbWVtYmVyIGZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgZGlzcGxheSBvZiB0aGUgaGlkZVNob3cgcmVnaW9uXHJcbi8vXHJcbi8vIHJldHVybiBOL0FcclxuLy9cclxuaGlkZVNob3cucHJvdG90eXBlLnRvZ2dsZVJlZ2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcblxyXG4gICAgLy8gdG9nZ2xlIHRoZSByZWdpb25cclxuICAgIHRoaXMuJHJlZ2lvbi5zbGlkZVRvZ2dsZSh0aGlzLnRvZ2dsZVNwZWVkLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7IC8vIHJlZ2lvbiBpcyBjb2xsYXBzZWRcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYXJpYS1leHBhbmRlZCBhdHRyaWJ1dGUgb2YgdGhlIHJlZ2lvblxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSBmb2N1cyB0byB0aGUgcmVnaW9uXHJcbiAgICAgICAgICAgICQodGhpcykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYnV0dG9uIGxhYmVsXHJcbiAgICAgICAgICAgIHRoaXNPYmouJGlkLmZpbmQoJ3NwYW4nKS5odG1sKCdIaWRlJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgLy8gcmVnaW9uIGlzIGV4cGFuZGVkXHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlIG9mIHRoZSByZWdpb25cclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGJ1dHRvbiBsYWJlbFxyXG4gICAgICAgICAgICB0aGlzT2JqLiRpZC5maW5kKCdzcGFuJykuaHRtbCgnU2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufTsgLy8gZW5kIHRvZ2dsZVJlZ2lvbigpXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIENvbGxhcHNlINC60L7QvdC10YZcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvY29sbGFwc2UvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlL2NvbGxhcHNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3RhYnMuc2Nzcyc7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyDQotCQ0JHQqyDQodCi0JDQoNCiXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIGtleUNvZGVzKCkgaXMgYW4gb2JqZWN0IHRvIGNvbnRhaW4ga2V5Y29kZXMgbmVlZGVkIGZvciB0aGUgYXBwbGljYXRpb25cclxuZnVuY3Rpb24ga2V5Q29kZXMoKSB7XHJcbiAgICAvLyBEZWZpbmUgdmFsdWVzIGZvciBrZXljb2Rlc1xyXG4gICAgdGhpcy50YWIgPSA5O1xyXG4gICAgdGhpcy5lbnRlciA9IDEzO1xyXG4gICAgdGhpcy5lc2MgPSAyNztcclxuXHJcbiAgICB0aGlzLnNwYWNlID0gMzI7XHJcbiAgICB0aGlzLnBhZ2V1cCA9IDMzO1xyXG4gICAgdGhpcy5wYWdlZG93biA9IDM0O1xyXG4gICAgdGhpcy5lbmQgPSAzNTtcclxuICAgIHRoaXMuaG9tZSA9IDM2O1xyXG5cclxuICAgIHRoaXMubGVmdCA9IDM3O1xyXG4gICAgdGhpcy51cCA9IDM4O1xyXG4gICAgdGhpcy5yaWdodCA9IDM5O1xyXG4gICAgdGhpcy5kb3duID0gNDA7XHJcblxyXG59IC8vIGVuZCBrZXlDb2Rlc1xyXG5cclxuLy9cclxuLy8gdGFicGFuZWwoKSBpcyBhIGNsYXNzIGNvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIEFSSUEtZW5hYmxlZCB0YWIgcGFuZWwgd2lkZ2V0LlxyXG4vL1xyXG4vLyBAcGFyYW0gKGlkIHN0cmluZykgaWQgaXMgdGhlIGlkIG9mIHRoZSBkaXYgY29udGFpbmluZyB0aGUgdGFiIHBhbmVsLlxyXG4vL1xyXG4vLyBAcGFyYW0gKGFjY29yZGlhbiBib29sZWFuKSBhY2NvcmRpYW4gaXMgdHJ1ZSBpZiB0aGUgdGFiIHBhbmVsIHNob3VsZCBvcGVyYXRlXHJcbi8vICAgICAgICAgYXMgYW4gYWNjb3JkaWFuOyBmYWxzZSBpZiBhIHRhYiBwYW5lbFxyXG4vL1xyXG4vLyBAcmV0dXJuIE4vQVxyXG4vL1xyXG4vLyBVc2FnZTogUmVxdWlyZXMgYSBkaXYgY29udGFpbmVyIGFuZCBjaGlsZHJlbiBhcyBmb2xsb3dzOlxyXG4vL1xyXG4vLyAgICAgICAgIDEuIHRhYnMvYWNjb3JkaWFuIGhlYWRlcnMgaGF2ZSBjbGFzcyAndGFiJ1xyXG4vL1xyXG4vLyAgICAgICAgIDIuIHBhbmVscyBhcmUgZGl2cyB3aXRoIGNsYXNzICdwYW5lbCdcclxuLy9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYnBhbmVsKGlkLCBhY2NvcmRpYW4pIHtcclxuXHJcbiAgICAvLyBkZWZpbmUgdGhlIGNsYXNzIHByb3BlcnRpZXNcclxuXHJcbiAgICB0aGlzLnBhbmVsX2lkID0gaWQ7IC8vIHN0b3JlIHRoZSBpZCBvZiB0aGUgY29udGFpbmluZyBkaXZcclxuICAgIHRoaXMuYWNjb3JkaWFuID0gYWNjb3JkaWFuOyAvLyB0cnVlIGlmIHRoaXMgaXMgYW4gYWNjb3JkaWFuIGNvbnRyb2xcclxuICAgIHRoaXMuJHBhbmVsID0gJCgnIycgKyBpZCk7ICAvLyBzdG9yZSB0aGUgalF1ZXJ5IG9iamVjdCBmb3IgdGhlIHBhbmVsXHJcbiAgICB0aGlzLmtleXMgPSBuZXcga2V5Q29kZXMoKTsgLy8ga2V5Y29kZXMgbmVlZGVkIGZvciBldmVudCBoYW5kbGVyc1xyXG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJHBhbmVsLmZpbmQoJy50YWJzLWxpc3RfX2l0ZW0nKTsgLy8gQXJyYXkgb2YgcGFuZWwgdGFicy5cclxuICAgIHRoaXMuJHBhbmVscyA9IHRoaXMuJHBhbmVsLmNoaWxkcmVuKCcudGFic19faW5uZXInKTsgLy8gQXJyYXkgb2YgcGFuZWxzLlxyXG5cclxuICAgIC8vIEJpbmQgZXZlbnQgaGFuZGxlcnNcclxuICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdGFiIHBhbmVsXHJcbiAgICB0aGlzLmluaXQoKTtcclxuXHJcbn0gLy8gZW5kIHRhYnBhbmVsKCkgY29uc3RydWN0b3JcclxuXHJcbi8vXHJcbi8vIEZ1bmN0aW9uIGluaXQoKSBpcyBhIG1lbWJlciBmdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSB0YWIvYWNjb3JkaWFuIHBhbmVsLiBIaWRlcyBhbGwgcGFuZWxzLiBJZiBhIHRhYlxyXG4vLyBoYXMgdGhlIGNsYXNzICdzZWxlY3RlZCcsIG1ha2VzIHRoYXQgcGFuZWwgdmlzaWJsZTsgb3RoZXJ3aXNlLCBtYWtlcyBmaXJzdCBwYW5lbCB2aXNpYmxlLlxyXG4vL1xyXG4vLyBAcmV0dXJuIE4vQVxyXG4vL1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkdGFiOyAvLyB0aGUgc2VsZWN0ZWQgdGFiIC0gaWYgb25lIGlzIHNlbGVjdGVkXHJcblxyXG4gICAgLy8gYWRkIGFyaWEgYXR0cmlidXRlcyB0byB0aGUgcGFuZWxzXHJcbiAgICB0aGlzLiRwYW5lbHMuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuICAgIC8vIGdldCB0aGUgc2VsZWN0ZWQgdGFiXHJcbiAgICAkdGFiID0gdGhpcy4kdGFicy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xyXG5cclxuICAgIGlmICgkdGFiID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICR0YWIgPSB0aGlzLiR0YWJzLmZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvdyB0aGUgcGFuZWwgdGhhdCB0aGUgc2VsZWN0ZWQgdGFiIGNvbnRyb2xzIGFuZCBzZXQgYXJpYS1oaWRkZW4gdG8gZmFsc2VcclxuICAgIHRoaXMuJHBhbmVsLmZpbmQoJyMnICsgJHRhYi5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG59OyAvLyBlbmQgaW5pdCgpXHJcblxyXG4vL1xyXG4vLyBGdW5jdGlvbiBzd2l0Y2hUYWJzKCkgaXMgYSBtZW1iZXIgZnVuY3Rpb24gdG8gZ2l2ZSBmb2N1cyB0byBhIG5ldyB0YWIgb3IgYWNjb3JkaWFuIGhlYWRlci5cclxuLy8gSWYgaXQncyBhIHRhYiBwYW5lbCwgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgcGFuZWwgaXMgaGlkZGVuIGFuZCB0aGUgcGFuZWwgYXNzb2NpYXRlZCB3aXRoIHRoZSBuZXcgdGFiXHJcbi8vIGlzIGRpc3BsYXllZC5cclxuLy9cclxuLy8gQHBhcmFtICgkY3VyVGFiIG9iaikgJGN1clRhYiBpcyB0aGUgalF1ZXJ5IG9iamVjdCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYlxyXG4vL1xyXG4vLyBAcGFyYW0gKCRuZXdUYWIgb2JqKSAkbmV3VGFiIGlzIHRoZSBqUXVlcnkgb2JqZWN0IG9mIG5ldyB0YWIgdG8gc3dpdGNoIHRvXHJcbi8vXHJcbi8vIEByZXR1cm4gTi9BXHJcbi8vXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5zd2l0Y2hUYWJzID0gZnVuY3Rpb24gKCRjdXJUYWIsICRuZXdUYWIpIHtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGhpZ2hsaWdodGluZyBmcm9tIHRoZSBjdXJyZW50IHRhYlxyXG4gICAgJGN1clRhYi5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuXHJcbiAgICAvLyByZW1vdmUgdGFiIGZyb20gdGhlIHRhYiBvcmRlciBhbmQgdXBkYXRlIGl0cyBhcmlhLXNlbGVjdGVkIGF0dHJpYnV0ZVxyXG4gICAgJGN1clRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIGFyaWEgYXR0cmlidXRlc1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgbmV3IHRhYiBhbmQgdXBkYXRlIGl0cyBhcmlhLXNlbGVjdGVkIGF0dHJpYnV0ZVxyXG4gICAgJG5ld1RhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcbiAgICAvLyBJZiB0aGlzIGlzIGEgdGFiIHBhbmVsLCBzd2FwIGRpc3BsYXllZCB0YWJzXHJcbiAgICBpZiAodGhpcy5hY2NvcmRpYW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAvLyBoaWRlIHRoZSBjdXJyZW50IHRhYiBwYW5lbCBhbmQgc2V0IGFyaWEtaGlkZGVuIHRvIHRydWVcclxuICAgICAgICB0aGlzLiRwYW5lbC5maW5kKCcjJyArICRjdXJUYWIuYXR0cignYXJpYS1jb250cm9scycpKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAgIC8vIHNob3cgdGhlIG5ldyB0YWIgcGFuZWwgYW5kIHNldCBhcmlhLWhpZGRlbiB0byBmYWxzZVxyXG4gICAgICAgIHRoaXMuJHBhbmVsLmZpbmQoJyMnICsgJG5ld1RhYi5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFrZSBuZXcgdGFiIG5hdmlnYWJsZVxyXG4gICAgJG5ld1RhYi5hdHRyKCd0YWJpbmRleCcsICcwJyk7XHJcblxyXG4gICAgLy8gZ2l2ZSB0aGUgbmV3IHRhYiBmb2N1c1xyXG4gICAgJG5ld1RhYi5mb2N1cygpO1xyXG5cclxufTsgLy8gZW5kIHN3aXRjaFRhYnMoKVxyXG5cclxuLy9cclxuLy8gRnVuY3Rpb24gdG9nZ2xlUGFuZWwoKSBpcyBhIG1lbWJlciBmdW5jdGlvbiB0byBkaXNwbGF5IG9yIGhpZGUgdGhlIHBhbmVsIGFzc29jaWF0ZWQgd2l0aCBhbiBhY2NvcmRpYW4gaGVhZGVyXHJcbi8vXHJcbi8vIEBwYXJhbSAoJHRhYiBvYmopICR0YWIgaXMgdGhlIGpRdWVyeSBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWJcclxuLy9cclxuLy8gQHJldHVybiBOL0FcclxuLy9cclxudGFicGFuZWwucHJvdG90eXBlLnRvZ2dsZVBhbmVsID0gZnVuY3Rpb24gKCR0YWIpIHtcclxuXHJcbiAgICAkcGFuZWwgPSB0aGlzLiRwYW5lbC5maW5kKCcjJyArICR0YWIuYXR0cignYXJpYS1jb250cm9scycpKTtcclxuXHJcbiAgICBpZiAoJHBhbmVsLmF0dHIoJ2FyaWEtaGlkZGVuJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgJHBhbmVsLnNsaWRlRG93bigxMDApO1xyXG4gICAgICAgICRwYW5lbC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgJHBhbmVsLnNsaWRlVXAoMTAwKTtcclxuICAgICAgICAkcGFuZWwuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfVxyXG59OyAvLyBlbmQgdG9nZ2xlUGFuZWwoKVxyXG5cclxuLy9cclxuLy8gRnVuY3Rpb24gYmluZEhhbmRsZXJzKCkgaXMgYSBtZW1iZXIgZnVuY3Rpb24gdG8gYmluZCBldmVudCBoYW5kbGVycyBmb3IgdGhlIHRhYnNcclxuLy9cclxuLy8gQHJldHVybiBOL0FcclxuLy9cclxudGFicGFuZWwucHJvdG90eXBlLmJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGhpc09iaiA9IHRoaXM7IC8vIFN0b3JlIHRoZSB0aGlzIHBvaW50ZXIgZm9yIHJlZmVyZW5jZVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gQmluZCBoYW5kbGVycyBmb3IgdGhlIHRhYnMgLyBhY2NvcmRpYW4gaGVhZGVyc1xyXG5cclxuICAgIC8vIGJpbmQgYSB0YWIga2V5ZG93biBoYW5kbGVyXHJcbiAgICB0aGlzLiR0YWJzLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJLZXlEb3duKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYmluZCBhIHRhYiBrZXlwcmVzcyBoYW5kbGVyXHJcbiAgICB0aGlzLiR0YWJzLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiS2V5UHJlc3MoJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBiaW5kIGEgdGFiIGNsaWNrIGhhbmRsZXJcclxuICAgIHRoaXMuJHRhYnMuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJDbGljaygkKHRoaXMpLCBlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJpbmQgYSB0YWIgZm9jdXMgaGFuZGxlclxyXG4gICAgdGhpcy4kdGFicy5mb2N1cyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkZvY3VzKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYmluZCBhIHRhYiBibHVyIGhhbmRsZXJcclxuICAgIHRoaXMuJHRhYnMuYmx1cihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkJsdXIoJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gQmluZCBoYW5kbGVycyBmb3IgdGhlIHBhbmVsc1xyXG5cclxuICAgIC8vIGJpbmQgYSBrZXlkb3duIGhhbmRsZXJzIGZvciB0aGUgcGFuZWwgZm9jdXNhYmxlIGVsZW1lbnRzXHJcbiAgICB0aGlzLiRwYW5lbHMua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVBhbmVsS2V5RG93bigkKHRoaXMpLCBlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJpbmQgYSBrZXlwcmVzcyBoYW5kbGVyIGZvciB0aGUgcGFuZWxcclxuICAgIHRoaXMuJHBhbmVscy5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVBhbmVsS2V5UHJlc3MoJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcbn07IC8vIGVuZCBiaW5kSGFuZGxlcnMoKVxyXG5cclxuLy9cclxuLy8gRnVuY3Rpb24gaGFuZGxlVGFiS2V5RG93bigpIGlzIGEgbWVtYmVyIGZ1bmN0aW9uIHRvIHByb2Nlc3Mga2V5ZG93biBldmVudHMgZm9yIGEgdGFiXHJcbi8vXHJcbi8vIEBwYXJhbSAoJHRhYiBvYmopICR0YWIgaXMgdGhlIGpxdWVyeSBvYmplY3Qgb2YgdGhlIHRhYiBiZWluZyBwcm9jZXNzZWRcclxuLy9cclxuLy8gQHBhcmFtIChlIG9iaikgZSBpcyB0aGUgYXNzb2NpYXRlZCBldmVudCBvYmplY3RcclxuLy9cclxuLy8gQHJldHVybiAoYm9vbGVhbikgUmV0dXJucyB0cnVlIGlmIHByb3BhZ2F0aW5nOyBmYWxzZSBpZiBjb25zdW1pbmcgZXZlbnRcclxuLy9cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYktleURvd24gPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgcHJvY2VzcyBpZiB0aGlzIGlzIGFuIGFjY29yZGlhbiB3aWRnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWNjb3JkaWFuID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgb3IgY29sbGFwc2UgdGhlIHBhbmVsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKCR0YWIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5sZWZ0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgdmFyICRwcmV2VGFiOyAvLyBob2xkcyBqUXVlcnkgb2JqZWN0IG9mIHRhYiBmcm9tIHByZXZpb3VzIHBhc3NcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7IC8vIHRoZSBuZXcgdGFiIHRvIHN3aXRjaCB0b1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3RybCthcnJvdyBtb3ZlcyBmb2N1cyBmcm9tIHBhbmVsIGNvbnRlbnQgdG8gdGhlIG9wZW5cclxuICAgICAgICAgICAgICAgIC8vIHRhYi9hY2NvcmRpYW4gaGVhZGVyLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1ck5keCA9IHRoaXMuJHRhYnMuaW5kZXgoJHRhYik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1ck5keCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFiIGlzIHRoZSBmaXJzdCBvbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IG5ld1RhYiB0byBsYXN0IHRhYlxyXG4gICAgICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmxhc3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBuZXdUYWIgdG8gcHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5lcShjdXJOZHggLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggdG8gdGhlIG5ldyB0YWJcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCAkbmV3VGFiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5yaWdodDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5kb3duOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGZvdW5kVGFiID0gZmFsc2U7IC8vIHNldCB0byB0cnVlIHdoZW4gY3VycmVudCB0YWIgZm91bmQgaW4gYXJyYXlcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7IC8vIHRoZSBuZXcgdGFiIHRvIHN3aXRjaCB0b1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IHRoaXMuJHRhYnMuaW5kZXgoJHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IHRoaXMuJHRhYnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGFiIGlzIHRoZSBsYXN0IG9uZTpcclxuICAgICAgICAgICAgICAgIC8vIHNldCBuZXdUYWIgdG8gZmlyc3QgdGFiXHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5maXJzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0IG5ld1RhYiB0byBuZXh0IHRhYlxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZXEoY3VyTmR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCB0byB0aGUgbmV3IHRhYlxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnMoJHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmhvbWU6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgLy8gc3dpdGNoIHRvIHRoZSBmaXJzdCB0YWJcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKCR0YWIsIHRoaXMuJHRhYnMuZmlyc3QoKSk7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVuZDpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggdG8gdGhlIGxhc3QgdGFiXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCB0aGlzLiR0YWJzLmxhc3QoKSk7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyAvLyBlbmQgaGFuZGxlVGFiS2V5RG93bigpXHJcblxyXG4vL1xyXG4vLyBGdW5jdGlvbiBoYW5kbGVUYWJLZXlQcmVzcygpIGlzIGEgbWVtYmVyIGZ1bmN0aW9uIHRvIHByb2Nlc3Mga2V5cHJlc3MgZXZlbnRzIGZvciBhIHRhYi5cclxuLy9cclxuLy9cclxuLy8gQHBhcmFtICgkdGFiIG9iaikgJHRhYiBpcyB0aGUganF1ZXJ5IG9iamVjdCBvZiB0aGUgdGFiIGJlaW5nIHByb2Nlc3NlZFxyXG4vL1xyXG4vLyBAcGFyYW0gKGUgb2JqKSBlIGlzIHRoZSBhc3NvY2lhdGVkIGV2ZW50IG9iamVjdFxyXG4vL1xyXG4vLyBAcmV0dXJuIChib29sZWFuKSBSZXR1cm5zIHRydWUgaWYgcHJvcGFnYXRpbmc7IGZhbHNlIGlmIGNvbnN1bWluZyBldmVudFxyXG4vL1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiS2V5UHJlc3MgPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucmlnaHQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZG93bjpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5ob21lOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVuZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2Vkb3duOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSB0YWIga2V5cHJlc3MgaGFuZGxlciBtdXN0IGNvbnN1bWUgcGFnZXVwIGFuZCBwYWdlZG93blxyXG4gICAgICAgICAgICAvLyBrZXlwcmVzc2VzIHRvIHByZXZlbnQgRmlyZWZveCBmcm9tIHN3aXRjaGluZyB0YWJzXHJcbiAgICAgICAgICAgIC8vIG9uIGN0cmwrcGFnZXVwIGFuZCBjdHJsK3BhZ2Vkb3duXHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59OyAvLyBlbmQgaGFuZGxlVGFiS2V5UHJlc3MoKVxyXG5cclxuLy9cclxuLy8gRnVuY3Rpb24gaGFuZGxlVGFiQ2xpY2soKSBpcyBhIG1lbWJlciBmdW5jdGlvbiB0byBwcm9jZXNzIGNsaWNrIGV2ZW50cyBmb3IgdGFic1xyXG4vL1xyXG4vLyBAcGFyYW0gKCR0YWIgb2JqZWN0KSAkdGFiIGlzIHRoZSBqUXVlcnkgb2JqZWN0IG9mIHRoZSB0YWIgYmVpbmcgcHJvY2Vzc2VkXHJcbi8vXHJcbi8vIEBwYXJhbSAoZSBvYmplY3QpIGUgaXMgdGhlIGFzc29jaWF0ZWQgZXZlbnQgb2JqZWN0XHJcbi8vXHJcbi8vIEByZXR1cm4gKGJvb2xlYW4pIHJldHVybnMgdHJ1ZVxyXG4vL1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiQ2xpY2sgPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuICAgIC8vIGhpZGUgdGhlIHBhbmVsc1xyXG4gICAgdGhpcy4kcGFuZWxzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAvLyByZW1vdmUgYWxsIHRhYnMgZnJvbSB0aGUgdGFiIG9yZGVyIGFuZCByZXNldCB0aGVpciBhcmlhLXNlbGVjdGVkIGF0dHJpYnV0ZVxyXG4gICAgdGhpcy4kdGFicy5hdHRyKCd0YWJpbmRleCcsICctMScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHNlbGVjdGVkIHRhYidzIGFyaWEtc2VsZWN0ZWQgYXR0cmlidXRlXHJcbiAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG5cclxuICAgIC8vIHNob3cgdGhlIGNsaWNrZWQgdGFiIHBhbmVsXHJcbiAgICB0aGlzLiRwYW5lbC5maW5kKCcjJyArICR0YWIuYXR0cignYXJpYS1jb250cm9scycpKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgIC8vIG1ha2UgY2xpY2tlZCB0YWIgbmF2aWdhYmxlXHJcbiAgICAkdGFiLmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcclxuXHJcbiAgICAvLyBnaXZlIHRoZSB0YWIgZm9jdXNcclxuICAgICR0YWIuZm9jdXMoKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07IC8vIGVuZCBoYW5kbGVUYWJDbGljaygpXHJcblxyXG4vL1xyXG4vLyBGdW5jdGlvbiBoYW5kbGVUYWJGb2N1cygpIGlzIGEgbWVtYmVyIGZ1bmN0aW9uIHRvIHByb2Nlc3MgZm9jdXMgZXZlbnRzIGZvciB0YWJzXHJcbi8vXHJcbi8vIEBwYXJhbSAoJHRhYiBvYmplY3QpICR0YWIgaXMgdGhlIGpRdWVyeSBvYmplY3Qgb2YgdGhlIHRhYiBiZWluZyBwcm9jZXNzZWRcclxuLy9cclxuLy8gQHBhcmFtIChlIG9iamVjdCkgZSBpcyB0aGUgYXNzb2NpYXRlZCBldmVudCBvYmplY3RcclxuLy9cclxuLy8gQHJldHVybiAoYm9vbGVhbikgcmV0dXJucyB0cnVlXHJcbi8vXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVUYWJGb2N1cyA9IGZ1bmN0aW9uICgkdGFiLCBlKSB7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBmb2N1cyBjbGFzcyB0byB0aGUgdGFiXHJcbiAgICAkdGFiLmFkZENsYXNzKCdmb2N1cycpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTsgLy8gZW5kIGhhbmRsZVRhYkZvY3VzKClcclxuXHJcbi8vXHJcbi8vIEZ1bmN0aW9uIGhhbmRsZVRhYkJsdXIoKSBpcyBhIG1lbWJlciBmdW5jdGlvbiB0byBwcm9jZXNzIGJsdXIgZXZlbnRzIGZvciB0YWJzXHJcbi8vXHJcbi8vIEBwYXJhbSAoJHRhYiBvYmplY3QpICR0YWIgaXMgdGhlIGpRdWVyeSBvYmplY3Qgb2YgdGhlIHRhYiBiZWluZyBwcm9jZXNzZWRcclxuLy9cclxuLy8gQHBhcmFtIChlIG9iamVjdCkgZSBpcyB0aGUgYXNzb2NpYXRlZCBldmVudCBvYmplY3RcclxuLy9cclxuLy8gQHJldHVybiAoYm9vbGVhbikgcmV0dXJucyB0cnVlXHJcbi8vXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVUYWJCbHVyID0gZnVuY3Rpb24gKCR0YWIsIGUpIHtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGZvY3VzIGNsYXNzIHRvIHRoZSB0YWJcclxuICAgICR0YWIucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59OyAvLyBlbmQgaGFuZGxlVGFiQmx1cigpXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFBhbmVsIEV2ZW50IGhhbmRsZXJzXHJcbi8vXHJcblxyXG4vL1xyXG4vLyBGdW5jdGlvbiBoYW5kbGVQYW5lbEtleURvd24oKSBpcyBhIG1lbWJlciBmdW5jdGlvbiB0byBwcm9jZXNzIGtleWRvd24gZXZlbnRzIGZvciBhIHBhbmVsXHJcbi8vXHJcbi8vIEBwYXJhbSAoJGVsZW0gb2JqKSAkZWxlbSBpcyB0aGUganF1ZXJ5IG9iamVjdCBvZiB0aGUgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcclxuLy9cclxuLy8gQHBhcmFtIChlIG9iaikgZSBpcyB0aGUgYXNzb2NpYXRlZCBldmVudCBvYmplY3RcclxuLy9cclxuLy8gQHJldHVybiAoYm9vbGVhbikgUmV0dXJucyB0cnVlIGlmIHByb3BhZ2F0aW5nOyBmYWxzZSBpZiBjb25zdW1pbmcgZXZlbnRcclxuLy9cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVBhbmVsS2V5RG93biA9IGZ1bmN0aW9uICgkZWxlbSwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVzYzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IHByb2Nlc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGpRdWVyeSBvYmplY3Qgb2YgdGhlIHRhYlxyXG4gICAgICAgICAgICB2YXIgJHRhYiA9ICQoJyMnICsgJGVsZW0uYXR0cignYXJpYS1sYWJlbGxlZGJ5JykpO1xyXG5cclxuICAgICAgICAgICAgLy8gTW92ZSBmb2N1cyB0byB0aGUgdGFiXHJcbiAgICAgICAgICAgICR0YWIuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBwcm9jZXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBqUXVlcnkgb2JqZWN0IG9mIHRoZSB0YWJcclxuICAgICAgICAgICAgdmFyICR0YWIgPSB0aGlzLiR0YWJzLmZpbHRlcignW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSB0YWIgaW4gdGhlIHRhYiBsaXN0XHJcbiAgICAgICAgICAgIHZhciBjdXJOZHggPSB0aGlzLiR0YWJzLmluZGV4KCR0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCB0YWIsIHNldCBmb2N1cyBvbiB0aGUgbGFzdCBvbmVcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmxhc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBmb2N1cyBvbiB0aGUgcHJldmlvdXMgdGFiXHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5lcShjdXJOZHggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc3dpdGNoIHRvIHRoZSBuZXcgdGFiXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdlZG93bjpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJG5ld1RhYjtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgalF1ZXJ5IG9iamVjdCBvZiB0aGUgdGFiXHJcbiAgICAgICAgICAgIHZhciAkdGFiID0gJCgnIycgKyAkZWxlbS5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSB0YWIgaW4gdGhlIHRhYiBsaXN0XHJcbiAgICAgICAgICAgIHZhciBjdXJOZHggPSB0aGlzLiR0YWJzLmluZGV4KCR0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSB0aGlzLiR0YWJzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGxhc3QgdGFiLCBzZXQgZm9jdXMgb24gdGhlIGZpcnN0IG9uZVxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBmb2N1cyBvbiB0aGUgbmV4dCB0YWJcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmVxKGN1ck5keCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggdG8gdGhlIG5ldyB0YWJcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKCR0YWIsICRuZXdUYWIpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTsgLy8gZW5kIGhhbmRsZVBhbmVsS2V5RG93bigpXHJcblxyXG4vL1xyXG4vLyBGdW5jdGlvbiBoYW5kbGVQYW5lbEtleVByZXNzKCkgaXMgYSBtZW1iZXIgZnVuY3Rpb24gdG8gcHJvY2VzcyBrZXlwcmVzcyBldmVudHMgZm9yIGEgcGFuZWxcclxuLy9cclxuLy8gQHBhcmFtICgkZWxlbSBvYmopICRlbGVtIGlzIHRoZSBqcXVlcnkgb2JqZWN0IG9mIHRoZSBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxyXG4vL1xyXG4vLyBAcGFyYW0gKGUgb2JqKSBlIGlzIHRoZSBhc3NvY2lhdGVkIGV2ZW50IG9iamVjdFxyXG4vL1xyXG4vLyBAcmV0dXJuIChib29sZWFuKSBSZXR1cm5zIHRydWUgaWYgcHJvcGFnYXRpbmc7IGZhbHNlIGlmIGNvbnN1bWluZyBldmVudFxyXG4vL1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlUGFuZWxLZXlQcmVzcyA9IGZ1bmN0aW9uICgkZWxlbSwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIChlLmtleUNvZGUgPT0gdGhpcy5rZXlzLnBhZ2V1cCB8fCBlLmtleUNvZGUgPT0gdGhpcy5rZXlzLnBhZ2Vkb3duKSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVzYzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07IC8vIGVuZCBoYW5kbGVQYW5lbEtleVByZXNzKClcclxuXHJcbi8vIGZvY3VzYWJsZSBpcyBhIHNtYWxsIGpRdWVyeSBleHRlbnNpb24gdG8gYWRkIGEgOmZvY3VzYWJsZSBzZWxlY3Rvci4gSXQgaXMgdXNlZCB0b1xyXG4vLyBnZXQgYSBsaXN0IG9mIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gYSBwYW5lbC4gQ3JlZGl0IHRvIGFqcGlhbm8gb24gdGhlIGpRdWVyeSBmb3J1bXMuXHJcbi8vXHJcbiQuZXh0ZW5kKCQuZXhwclsnOiddLCB7XHJcbiAgICBmb2N1c2FibGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB0YWJJbmRleCA9ICQoZWxlbWVudCkuYXR0cigndGFiaW5kZXgnKTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGVsZW1lbnQgYW5kIGFsbCBvZiBpdHMgYW5jZXN0b3JzIG11c3QgYmUgdmlzaWJsZVxyXG4gICAgICAgIGlmICgoJChlbGVtZW50KVtub2RlTmFtZSA9PSAnYXJlYScgPyAncGFyZW50cycgOiAnY2xvc2VzdCddKCc6aGlkZGVuJykubGVuZ3RoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRhYmluZGV4IGlzIGRlZmluZWQsIGl0cyB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwXHJcbiAgICAgICAgaWYgKCFpc05hTih0YWJJbmRleCkgJiYgdGFiSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGlzIGEgc3RhbmRhcmQgZm9ybSBjb250cm9sLCBpdCBtdXN0IG5vdCBiZSBkaXNhYmxlZFxyXG4gICAgICAgIGlmICgvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvLnRlc3Qobm9kZU5hbWUpID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZWxlbWVudC5kaXNhYmxlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGlzIGEgbGluaywgaHJlZiBtdXN0IGJlIGRlZmluZWRcclxuICAgICAgICBpZiAoKG5vZGVOYW1lID09ICdhJyB8fCBub2RlTmFtZSA9PSAnYXJlYScpID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudC5ocmVmLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyBpcyBzb21lIG90aGVyIHBhZ2UgZWxlbWVudCB0aGF0IGlzIG5vdCBub3JtYWxseSBmb2N1c2FibGUuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vINCi0JDQkdCrINC60L7QvdC10YZcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90YWJzL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90YWJzL3RhYnMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vdGh1bWJuYWlsLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdGh1bWJuYWlsL3RodW1ibmFpbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9sYWJlbC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvbGFiZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYmFkZ2Uuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYmFkZ2UvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JhZGdlL2JhZGdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTs7Ozs7O0FDMUhBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7OztBQUdBOzs7Ozs7QUM5REE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7O0FDR0E7QUFDQTs7Ozs7OztBQ0pBOzs7Ozs7Ozs7O0FDR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7OztBQVNBO0FBQ0E7QUFUQTtBQUNBOzs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaEZBOzs7Ozs7O0FDQUE7QUFDQTs7OztBQTRDQTtBQUNBO0FBNUNBO0FBQ0E7Ozs7OztBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNGQTtBQTZGQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQ0E7QUE2QkE7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZGQTtBQUNBO0FBeUZBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBN0JBO0FBQ0E7Ozs7Ozs7OztBQzNrQkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7OzsiLCJzb3VyY2VSb290IjoiIn0=