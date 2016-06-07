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

	// ==========================================================================
	// Utils
	// ==========================================================================

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(9);

	__webpack_require__(12);

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

	__webpack_require__(55);

	var _tabs = __webpack_require__(58);

	__webpack_require__(61);

	__webpack_require__(64);

	__webpack_require__(67);

	var _collapse = __webpack_require__(70);

	__webpack_require__(73);

	__webpack_require__(76);

	__webpack_require__(79);

	// ==========================================================================
	// Initialization @TODO: Можно обойтись?
	// ==========================================================================

	// Panels


	// Collapse


	// Breadcrumbs


	// Tabs


	// Media object


	// Form elements


	// Typography


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


	// Images


	// Grid systems


	// ==========================================================================
	// Default components
	// ==========================================================================

	// Application

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

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _cookie = __webpack_require__(13);

	var _cookie2 = _interopRequireDefault(_cookie);

	__webpack_require__(14);

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

	                        $('img').not('code img').each(function () {

	                                var alt = $(this).attr('alt'),
	                                    width = $(this).width(),
	                                    height = $(this).height();

	                                $(this).wrap('<span class="image-alt" style="width: ' + width + 'px; height: ' + height + 'px;"/>');

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
	                                $('img').not('code img').css('visibility', 'hidden');
	                        } else {
	                                $('.image-alt').removeClass('image-alt_active');
	                                $('img').not('code img').css('visibility', 'visible');
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
/* 13 */
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

	// @TODO: Рефакторинг компонента.

	__webpack_require__(35);

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
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	__webpack_require__(38);

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

	__webpack_require__(56);

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tabsInit = tabsInit;

	__webpack_require__(59);

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

	function tabsInit() {
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

	__webpack_require__(68);

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.collapseInit = collapseInit;

	__webpack_require__(71);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(80);

/***/ },
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3Mjc0MzI2M2MxMjMxYTU3OTZhYSIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3V0aWxzL25vcm1hbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9ub3JtYWxpemUvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3V0aWxzL2Nvb2tpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2Jvb3RzdHJhcC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2Zvcm0vZm9ybS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvbGFiZWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90ZXh0YXJlYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhL3RleHRhcmVhLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9yYWRpby5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvY2hlY2tib3guc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3Qvc2VsZWN0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2J1dHRvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5wdXQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9hbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2FsZXJ0L2FsZXJ0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9tZWRpYS9tZWRpYS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90YWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicy90YWJzLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2L25hdi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2JyZWFkY3J1bWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzL3Byb2dyZXNzLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvY29sbGFwc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9jb2xsYXBzZS9jb2xsYXBzZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3RodW1ibmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3RodW1ibmFpbC90aHVtYm5haWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhbmVsL3BhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYmFkZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9iYWRnZS9iYWRnZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzI3NDMyNjNjMTIzMWE1Nzk2YWFcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVdGlsc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdXRpbHMvcmVzZXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGVmYXVsdCBjb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBBcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uJztcclxuXHJcbi8vIENvbnRyb2wgcGFuZWxcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsJztcclxuXHJcbi8vIEdyaWQgc3lzdGVtc1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2dyaWQnO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHknO1xyXG5cclxuLy8gSW1hZ2VzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0JztcclxuXHJcbi8vIEZvcm0gZWxlbWVudHNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvdGV4dGFyZWEnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2lucHV0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBBZGRpdGlvbmFsIGNvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEFsZXJ0c1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2FsZXJ0JztcclxuXHJcbi8vIE1lZGlhIG9iamVjdFxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL21lZGlhJztcclxuXHJcbi8vIFBhZ2luYXRpb25cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uJztcclxuXHJcbi8vIFRhYnNcclxuaW1wb3J0IHt0YWJzSW5pdH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicyc7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2JztcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMnO1xyXG5cclxuLy8gUHJvZ3Jlc3MgYmFyXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvcHJvZ3Jlc3MnO1xyXG5cclxuLy8gQ29sbGFwc2VcclxuaW1wb3J0IHtjb2xsYXBzZUluaXR9IGZyb20gJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2NvbGxhcHNlJztcclxuXHJcbi8vIFRodW1ibmFpbFxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL3RodW1ibmFpbCc7XHJcblxyXG4vLyBQYW5lbHNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYW5lbCc7XHJcblxyXG4vLyBCYWRnZVxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2JhZGdlJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEluaXRpYWxpemF0aW9uIEBUT0RPOiDQnNC+0LbQvdC+INC+0LHQvtC50YLQuNGB0Yw/XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb2xsYXBzZUluaXQoKTtcclxudGFic0luaXQoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FjY2Vzc2liaWxpdHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbm9ybWFsaXplLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy91dGlscy9ub3JtYWxpemUvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy91dGlscy9ub3JtYWxpemUvbm9ybWFsaXplLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbHMvcmVzZXQvcmVzZXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hcHBsaWNhdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBAVE9ETzog0KDQtdGE0LDQutGC0L7RgNC40L3QsyDQutC+0LzQv9C+0L3QtdC90YLQsC5cclxuXHJcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vdXRpbHMvY29va2llJztcclxuaW1wb3J0ICcuL2NvbnRyb2wtcGFuZWwuc2Nzcyc7XHJcblxyXG5jb25zdCBDT09LSUVfUEFUSCA9IHtwYXRoOiAnLyd9O1xyXG5cclxuY2xhc3MgQ29udHJvbFBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuYXBwID0gJCgnLmFwcGxpY2F0aW9uJyk7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtdGV4dCcpO1xyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LWNvbG9yJyk7XHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtaW1hZ2UnKTtcclxuXHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtdGV4dCcsICdub3JtYWwnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtY29sb3InLCAnd2hpdGUnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtaW1hZ2UnLCAndmlzaWJsZScsIENPT0tJRV9QQVRIKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcbiAgICAgICAgc2VsZi53cmFwSW1hZ2VBbHQoKTtcclxuICAgICAgICBzZWxmLnRvZ2dsZUltYWdlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuaGFuZGxlVGV4dENoYW5nZSgpO1xyXG4gICAgICAgIHNlbGYuaGFuZGxlQ29sb3JDaGFuZ2UoKTtcclxuICAgICAgICBzZWxmLmhhbmRsZUltYWdlQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuYXBwLmFkZENsYXNzKCdhcHBsaWNhdGlvbl9zaG93Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRleHRDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpKTtcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC10ZXh0JywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDb2xvckNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSk7XHJcblxyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLWNvbG9yJywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbWFnZUNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSk7XHJcblxyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLWltYWdlJywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRvZ2dsZUltYWdlKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHdyYXBJbWFnZUFsdCgpIHtcclxuXHJcbiAgICAgICAgJCgnaW1nJykubm90KCdjb2RlIGltZycpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWx0ID0gJCh0aGlzKS5hdHRyKCdhbHQnKSxcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gJCh0aGlzKS53aWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykud3JhcChgPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRcIiBzdHlsZT1cIndpZHRoOiAke3dpZHRofXB4OyBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1wiLz5gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoYDxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0X190ZXh0XCI+JHthbHR9PC9zcGFuPmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZnRlcignPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRfX3RleHRcIj7QntC/0LjRgdCw0L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YI8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUltYWdlKCkge1xyXG5cclxuICAgICAgICBpZiAoY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykgPT0gJ2hpZGRlbicpIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLmFkZENsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLm5vdCgnY29kZSBpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLnJlbW92ZUNsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLm5vdCgnY29kZSBpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXBwbGljYXRpb25TdHlsZXMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtdGV4dCcsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykpO1xyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtY29sb3InLCBjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSk7XHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS1pbWFnZScsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb250cm9sUGFuZWwoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb29raWUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIgY29va2llINGBINC40LzQtdC90LXQvCBuYW1lLCDQtdGB0LvQuCDQtdGB0YLRjCwg0LXRgdC70Lgg0L3QtdGCLCDRgtC+IHVuZGVmaW5lZFxyXG4gICAgICogQHBhcmFtIG5hbWUgLSDQuNC80Y8gY29va2llXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcclxuICAgICAgICApKTtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZSDQuCDQt9C90LDRh9C10L3QuNC10LwgdmFsdWVcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIC0g0LfQvdCw0YfQtdC90LjQtSBjb29raWVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0g0L7QsdGK0LXQutGCINGBINGB0LLQvtC50YHRgtCy0LDQvNC4IGNvb2tpZSAoZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpXHJcbiAgICAgKi9cclxuICAgIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICB2YXIgZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzID09IFwibnVtYmVyXCIgJiYgZXhwaXJlcykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4cGlyZXMgKiAxMDAwKTtcclxuICAgICAgICAgICAgZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcyA9IGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleHBpcmVzICYmIGV4cGlyZXMudG9VVENTdHJpbmcpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG5cclxuICAgICAgICB2YXIgdXBkYXRlZENvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgcHJvcE5hbWU7XHJcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBvcHRpb25zW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0LTQsNC70Y/QtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgLSDQuNC80Y8gY29va2llXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb29raWUoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvdXRpbHMvY29va2llL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsL2NvbnRyb2wtcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvYm9vdHN0cmFwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3R5cG9ncmFwaHkuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlLWFsdC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbWFnZS1hbHQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vZm9ybS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2Zvcm0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbGFiZWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2xhYmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3RleHRhcmVhLnNjc3MnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdGV4dGFyZWEvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhL3RleHRhcmVhLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQFRPRE86INCg0LXRhNCw0LrRgtC+0YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcblxyXG5pbXBvcnQgJy4vcmFkaW8uc2Nzcyc7XHJcblxyXG52YXIgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xyXG5cclxuZnVuY3Rpb24gcmFkaW9Ub2dnbGVBcmlhKCkge1xyXG4gICAgLy/Rg9C00LDQu9GP0LXQvCBhcmlhLWNoZWNrZWQg0YMg0LLRgdC10YVcclxuICAgIHZhciBncm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdyb3VwW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICAvL9GB0YLQsNCy0LjQvCDRgtC+0LvRjNC60L4g0LLRi9Cx0YDQsNC90L7QvNGDXHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcInRydWVcIik7XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhZGlvRXZlbnRIYW5kbGVyKHQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByYWRpb1RvZ2dsZUFyaWEpO1xyXG4gICAgICAgIGlmKHRbaV0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxucmFkaW9FdmVudEhhbmRsZXIocmFkaW8pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9yYWRpby5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIEBUT0RPOiDQoNC10YTQsNC60YLQvtGA0LjQvdCzINC60L7QvNC/0L7QvdC10L3RgtCwLlxyXG5cclxuaW1wb3J0ICcuL2NoZWNrYm94LnNjc3MnO1xyXG5cclxudmFyIGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrYm94RXZlbnRIYW5kbGVyKHQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrYm94VG9nZ2xlQXJpYSk7XHJcbiAgICAgICAgaWYodFtpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja2JveFRvZ2dsZUFyaWEoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIikgPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1cygpO1xyXG59XHJcblxyXG5jaGVja2JveEV2ZW50SGFuZGxlcihjaGVja2JveCk7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9zZWxlY3Quc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3Qvc2VsZWN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9idXR0b24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vaW5wdXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2FsZXJ0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2FsZXJ0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9hbGVydC9hbGVydC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9tZWRpYS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9tZWRpYS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbWVkaWEvbWVkaWEuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcGFnaW5hdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBAVE9ETzog0KDQtdGE0LDQutGC0L7RgNC40L3QsyDQutC+0LzQv9C+0L3QtdC90YLQsC5cclxuXHJcbmltcG9ydCAnLi90YWJzLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24ga2V5Q29kZXMoKSB7XHJcblxyXG4gICAgdGhpcy50YWIgPSA5O1xyXG4gICAgdGhpcy5lbnRlciA9IDEzO1xyXG4gICAgdGhpcy5lc2MgPSAyNztcclxuXHJcbiAgICB0aGlzLnNwYWNlID0gMzI7XHJcbiAgICB0aGlzLnBhZ2V1cCA9IDMzO1xyXG4gICAgdGhpcy5wYWdlZG93biA9IDM0O1xyXG4gICAgdGhpcy5lbmQgPSAzNTtcclxuICAgIHRoaXMuaG9tZSA9IDM2O1xyXG5cclxuICAgIHRoaXMubGVmdCA9IDM3O1xyXG4gICAgdGhpcy51cCA9IDM4O1xyXG4gICAgdGhpcy5yaWdodCA9IDM5O1xyXG4gICAgdGhpcy5kb3duID0gNDA7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFic0luaXQoKSB7XHJcbiAgICB2YXIgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJyk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwodGFicywgZnVuY3Rpb24gKHRhYikge1xyXG4gICAgICAgIHZhciBwYW5lbCA9IG5ldyB0YWJwYW5lbCh0YWIpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdGFicGFuZWwodGFiKSB7XHJcbiAgICB0aGlzLnBhbmVsID0gdGFiO1xyXG4gICAgdGhpcy5rZXlzID0gbmV3IGtleUNvZGVzKCk7XHJcbiAgICB0aGlzLnRhYnMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMtbGlzdF9faXRlbScpO1xyXG4gICAgdGhpcy5wYW5lbHMgPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2lubmVyJyk7XHJcbiAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbn1cclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRhYjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYW5lbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnBhbmVsc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWIgPSB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xyXG5cclxuICAgIHRoaXMucGFuZWwucXVlcnlTZWxlY3RvcignIycgKyB0YWIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuc3dpdGNoVGFicyA9IGZ1bmN0aW9uICgkY3VyVGFiLCAkbmV3VGFiKSB7XHJcbiAgICAkY3VyVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XHJcblxyXG4gICAgJGN1clRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICAkY3VyVGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xyXG5cclxuXHJcbiAgICAkbmV3VGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XHJcbiAgICAvLyBoaWRlIHRoZSBjdXJyZW50IHRhYiBwYW5lbCBhbmQgc2V0IGFyaWEtaGlkZGVuIHRvIHRydWVcclxuICAgIHRoaXMucGFuZWwucXVlcnlTZWxlY3RvcignIycgKyAkY3VyVGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAvLyBzaG93IHRoZSBuZXcgdGFiIHBhbmVsIGFuZCBzZXQgYXJpYS1oaWRkZW4gdG8gZmFsc2VcclxuICAgIHRoaXMucGFuZWwucXVlcnlTZWxlY3RvcignIycgKyAkbmV3VGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgJG5ld1RhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuXHJcbiAgICAkbmV3VGFiLmZvY3VzKCk7XHJcblxyXG59O1xyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudGFic1tpXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJLZXlEb3duKHRoaXMsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYktleVByZXNzKHRoaXMsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkNsaWNrKHRoaXMsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkZvY3VzKHRoaXMsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGFic1tpXS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiQmx1cih0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVBhbmVsS2V5RG93bih0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVQYW5lbEtleVByZXNzKHRoaXMsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVUYWJLZXlEb3duID0gZnVuY3Rpb24gKHRhYiwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZW50ZXI6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuc3BhY2U6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgdmFyICRwcmV2VGFiO1xyXG4gICAgICAgICAgICB2YXIgJG5ld1RhYjtcclxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1ck5keCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy50YWJzLCB0YWIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ck5keCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2N1ck5keCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicyh0YWIsICRuZXdUYWIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnJpZ2h0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmRvd246XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZm91bmRUYWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VyTmR4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnRhYnMsIHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IHRoaXMudGFicy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1tjdXJOZHggKyAxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuaG9tZTpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCB0aGlzLnRhYnMuZmlyc3QoKSk7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVuZDpcclxuICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgdGhpcy50YWJzLmxhc3QoKSk7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiS2V5UHJlc3MgPSBmdW5jdGlvbiAodGFiLCBlKSB7XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZW50ZXI6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuc3BhY2U6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5yaWdodDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5kb3duOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmhvbWU6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZW5kOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdldXA6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZWRvd246XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVUYWJDbGljayA9IGZ1bmN0aW9uICh0YWIsIGUpIHtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFuZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG5cclxuICAgIHRoaXMucGFuZWwucXVlcnlTZWxlY3RvcignIycgKyB0YWIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgIHRhYi5mb2N1cygpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiRm9jdXMgPSBmdW5jdGlvbiAodGFiLCBlKSB7XHJcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiQmx1ciA9IGZ1bmN0aW9uICh0YWIsIGUpIHtcclxuICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVQYW5lbEtleURvd24gPSBmdW5jdGlvbiAoJGVsZW0sIGUpIHtcclxuICAgIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZXNjOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5sZWZ0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgJGVsZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKSk7XHJcbiAgICAgICAgICAgIHRhYi5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdldXA6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHRhYiA9IHRoaXMudGFicy5xdWVyeVNlbGVjdG9yKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJOZHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMudGFicywgdGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJOZHggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbY3VyTmR4IC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicyh0YWIsICRuZXdUYWIpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2Vkb3duOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciB0YWIgPSAkKCcjJyArICRlbGVtLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScpKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY3VyTmR4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnRhYnMsIHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IHRoaXMudGFicy5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbY3VyTmR4ICsgMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVQYW5lbEtleVByZXNzID0gZnVuY3Rpb24gKCRlbGVtLCBlKSB7XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgKGUua2V5Q29kZSA9PSB0aGlzLmtleXMucGFnZXVwIHx8IGUua2V5Q29kZSA9PSB0aGlzLmtleXMucGFnZWRvd24pKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZXNjOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90YWJzL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90YWJzL3RhYnMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbmF2LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL25hdi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2L25hdi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9icmVhZGNydW1icy5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9icmVhZGNydW1icy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcHJvZ3Jlc3Muc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcHJvZ3Jlc3MvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzL3Byb2dyZXNzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQFRPRE86INCg0LXRhNCw0LrRgtC+0YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcblxyXG5pbXBvcnQgJy4vY29sbGFwc2Uuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VJbml0KCkge1xyXG4gICAgdmFyIGNvbGxhcHNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsYXBzZS1idXR0b24nKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChjb2xsYXBzZXMsZnVuY3Rpb24gKGNvbGxhcHNlKSB7XHJcbiAgICAgICAgdmFyIGNvbGxhcHNlID0gbmV3IGhpZGVTaG93KGNvbGxhcHNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU2hvdyh0YXJnZXQpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5yZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKTtcclxuICAgIHRoaXMua2V5cyA9IHtcclxuICAgICAgICBlbnRlcjogMTMsXHJcbiAgICAgICAgc3BhY2U6IDMyXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU3BlZWQgPSAxMDA7XHJcblxyXG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuXHJcbn1cclxuXHJcblxyXG5oaWRlU2hvdy5wcm90b3R5cGUuYmluZEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXNPYmoudG9nZ2xlUmVnaW9uKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5oaWRlU2hvdy5wcm90b3R5cGUudG9nZ2xlUmVnaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzLnJlZ2lvbjtcclxuICAgIGNvbnNvbGUubG9nKHRoaXNPYmopO1xyXG4gICAgdGhpcy5yZWdpb24uY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKTtcclxuICAgICAgICBpZiAodGhpc09iai5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXNPYmouc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgdGhpc09iai5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc09iai5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9jb2xsYXBzZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvY29sbGFwc2UvY29sbGFwc2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vdGh1bWJuYWlsLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3RodW1ibmFpbC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGh1bWJuYWlsL3RodW1ibmFpbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9wYW5lbC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYW5lbC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFuZWwvcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYmFkZ2Uuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYmFkZ2UvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2JhZGdlL2JhZGdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUNqRkE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTs7Ozs7O0FDOUhBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7OztBQUdBOzs7Ozs7QUM5REE7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQ0E7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUF3QkE7QUFDQTtBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRUE7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0VBO0FBQ0E7QUFpRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFFQTs7Ozs7O0FDbFdBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNoREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7OzsiLCJzb3VyY2VSb290IjoiIn0=