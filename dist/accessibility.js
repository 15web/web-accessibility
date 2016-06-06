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

	__webpack_require__(112);

	__webpack_require__(115);

	__webpack_require__(15);

	__webpack_require__(18);

	__webpack_require__(12);

	__webpack_require__(34);

	__webpack_require__(37);

	__webpack_require__(46);

	__webpack_require__(73);

	__webpack_require__(79);

	__webpack_require__(55);

	__webpack_require__(58);

	__webpack_require__(40);

	__webpack_require__(25);

	__webpack_require__(9);

	__webpack_require__(119);

	__webpack_require__(88);

	__webpack_require__(94);

	var _tabs = __webpack_require__(103);

	__webpack_require__(82);

	__webpack_require__(91);

	__webpack_require__(97);

	var _collapse = __webpack_require__(100);

	__webpack_require__(106);

	__webpack_require__(85);

	__webpack_require__(109);

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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
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

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _cookie = __webpack_require__(118);

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
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
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
/* 43 */,
/* 44 */,
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
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	__webpack_require__(56);

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
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	__webpack_require__(59);

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
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
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
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(80);

/***/ },
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 81 */,
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(83);

/***/ },
/* 83 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(86);

/***/ },
/* 86 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(89);

/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */,
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(92);

/***/ },
/* 92 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 93 */,
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(95);

/***/ },
/* 95 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(98);

/***/ },
/* 98 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 99 */,
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.collapseInit = collapseInit;

	__webpack_require__(101);

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
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tabsInit = tabsInit;

	__webpack_require__(104);

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
/* 104 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(107);

/***/ },
/* 107 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 108 */,
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(110);

/***/ },
/* 110 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(113);

/***/ },
/* 113 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 114 */,
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(116);

/***/ },
/* 116 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 117 */,
/* 118 */
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(120);

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNDA5Yzg0MTg4MWY1OGJmZTZmOSIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbnB1dC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2Jvb3RzdHJhcC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2J1dHRvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2Zvcm0uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvbGFiZWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90ZXh0YXJlYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhL3RleHRhcmVhLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2L25hdi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFuZWwvcGFuZWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL21lZGlhL21lZGlhLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9icmVhZGNydW1icy9icmVhZGNydW1icy5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzL3Byb2dyZXNzLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvY29sbGFwc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9jb2xsYXBzZS9jb2xsYXBzZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3RhYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90YWJzL3RhYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90aHVtYm5haWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90aHVtYm5haWwvdGh1bWJuYWlsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYmFkZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9iYWRnZS9iYWRnZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91dGlscy9ub3JtYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91dGlscy9yZXNldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9yZXNldC9yZXNldC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91dGlscy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYWxlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9hbGVydC9hbGVydC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjQwOWM4NDE4ODFmNThiZmU2ZjlcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVdGlsc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdXRpbHMvcmVzZXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGVmYXVsdCBjb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBBcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uJztcclxuXHJcbi8vIENvbnRyb2wgcGFuZWxcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsJztcclxuXHJcbi8vIEdyaWQgc3lzdGVtc1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2dyaWQnO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHknO1xyXG5cclxuLy8gSW1hZ2VzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0JztcclxuXHJcbi8vIEZvcm0gZWxlbWVudHNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvdGV4dGFyZWEnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2lucHV0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBBZGRpdGlvbmFsIGNvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEFsZXJ0c1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2FsZXJ0JztcclxuXHJcbi8vIE1lZGlhIG9iamVjdFxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL21lZGlhJztcclxuXHJcbi8vIFBhZ2luYXRpb25cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uJztcclxuXHJcbi8vIFRhYnNcclxuaW1wb3J0IHt0YWJzSW5pdH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicyc7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvbmF2JztcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMnO1xyXG5cclxuLy8gUHJvZ3Jlc3MgYmFyXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvcHJvZ3Jlc3MnO1xyXG5cclxuLy8gQ29sbGFwc2VcclxuaW1wb3J0IHtjb2xsYXBzZUluaXR9IGZyb20gJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2NvbGxhcHNlJztcclxuXHJcbi8vIFRodW1ibmFpbFxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL3RodW1ibmFpbCc7XHJcblxyXG4vLyBQYW5lbHNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYW5lbCc7XHJcblxyXG4vLyBCYWRnZVxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2JhZGdlJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEluaXRpYWxpemF0aW9uIEBUT0RPOiDQnNC+0LbQvdC+INC+0LHQvtC50YLQuNGB0Yw/XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb2xsYXBzZUluaXQoKTtcclxudGFic0luaXQoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FjY2Vzc2liaWxpdHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vaW5wdXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2Jvb3RzdHJhcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hcHBsaWNhdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBAVE9ETzog0KDQtdGE0LDQutGC0L7RgNC40L3QsyDQutC+0LzQv9C+0L3QtdC90YLQsC5cclxuXHJcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vdXRpbHMvY29va2llJztcclxuaW1wb3J0ICcuL2NvbnRyb2wtcGFuZWwuc2Nzcyc7XHJcblxyXG5jb25zdCBDT09LSUVfUEFUSCA9IHtwYXRoOiAnLyd9O1xyXG5cclxuY2xhc3MgQ29udHJvbFBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuYXBwID0gJCgnLmFwcGxpY2F0aW9uJyk7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtdGV4dCcpO1xyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LWNvbG9yJyk7XHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtaW1hZ2UnKTtcclxuXHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtdGV4dCcsICdub3JtYWwnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtY29sb3InLCAnd2hpdGUnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtaW1hZ2UnLCAndmlzaWJsZScsIENPT0tJRV9QQVRIKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcbiAgICAgICAgc2VsZi53cmFwSW1hZ2VBbHQoKTtcclxuICAgICAgICBzZWxmLnRvZ2dsZUltYWdlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuaGFuZGxlVGV4dENoYW5nZSgpO1xyXG4gICAgICAgIHNlbGYuaGFuZGxlQ29sb3JDaGFuZ2UoKTtcclxuICAgICAgICBzZWxmLmhhbmRsZUltYWdlQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuYXBwLmFkZENsYXNzKCdhcHBsaWNhdGlvbl9zaG93Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRleHRDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpKTtcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC10ZXh0JywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDb2xvckNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSk7XHJcblxyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLWNvbG9yJywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbWFnZUNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSk7XHJcblxyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLWltYWdlJywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRvZ2dsZUltYWdlKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHdyYXBJbWFnZUFsdCgpIHtcclxuXHJcbiAgICAgICAgJCgnaW1nJykubm90KCdjb2RlIGltZycpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWx0ID0gJCh0aGlzKS5hdHRyKCdhbHQnKSxcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gJCh0aGlzKS53aWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykud3JhcChgPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRcIiBzdHlsZT1cIndpZHRoOiAke3dpZHRofXB4OyBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1wiLz5gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoYDxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0X190ZXh0XCI+JHthbHR9PC9zcGFuPmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZnRlcignPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRfX3RleHRcIj7QntC/0LjRgdCw0L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YI8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUltYWdlKCkge1xyXG5cclxuICAgICAgICBpZiAoY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykgPT0gJ2hpZGRlbicpIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLmFkZENsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLm5vdCgnY29kZSBpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLnJlbW92ZUNsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLm5vdCgnY29kZSBpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXBwbGljYXRpb25TdHlsZXMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtdGV4dCcsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykpO1xyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtY29sb3InLCBjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSk7XHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS1pbWFnZScsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb250cm9sUGFuZWwoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vYnV0dG9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3R5cG9ncmFwaHkuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlLWFsdC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbWFnZS1hbHQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vc2VsZWN0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9mb3JtLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2Zvcm0vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2Zvcm0vZm9ybS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIEBUT0RPOiDQoNC10YTQsNC60YLQvtGA0LjQvdCzINC60L7QvNC/0L7QvdC10L3RgtCwLlxyXG5cclxuaW1wb3J0ICcuL3JhZGlvLnNjc3MnO1xyXG5cclxudmFyIHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1yYWRpb10nKTtcclxuXHJcbmZ1bmN0aW9uIHJhZGlvVG9nZ2xlQXJpYSgpIHtcclxuICAgIC8v0YPQtNCw0LvRj9C10LwgYXJpYS1jaGVja2VkINGDINCy0YHQtdGFXHJcbiAgICB2YXIgZ3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncm91cFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgLy/RgdGC0LDQstC40Lwg0YLQvtC70YzQutC+INCy0YvQsdGA0LDQvdC+0LzRg1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYWRpb0V2ZW50SGFuZGxlcih0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgcmFkaW9Ub2dnbGVBcmlhKTtcclxuICAgICAgICBpZih0W2ldLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnJhZGlvRXZlbnRIYW5kbGVyKHJhZGlvKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8vcmFkaW8uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBAVE9ETzog0KDQtdGE0LDQutGC0L7RgNC40L3QsyDQutC+0LzQv9C+0L3QtdC90YLQsC5cclxuXHJcbmltcG9ydCAnLi9jaGVja2JveC5zY3NzJztcclxuXHJcbnZhciBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcblxyXG5mdW5jdGlvbiBjaGVja2JveEV2ZW50SGFuZGxlcih0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja2JveFRvZ2dsZUFyaWEpO1xyXG4gICAgICAgIGlmKHRbaV0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tib3hUb2dnbGVBcmlhKCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9jdXMoKTtcclxufVxyXG5cclxuY2hlY2tib3hFdmVudEhhbmRsZXIoY2hlY2tib3gpO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvY2hlY2tib3guc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbGFiZWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2xhYmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3RleHRhcmVhLnNjc3MnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdGV4dGFyZWEvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhL3RleHRhcmVhLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25hdi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9uYXYvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL25hdi9uYXYuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcGFuZWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFuZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhbmVsL3BhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL21lZGlhLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL21lZGlhL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9tZWRpYS9tZWRpYS5zY3NzXG4gKiogbW9kdWxlIGlkID0gODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9icmVhZGNydW1icy5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9icmVhZGNydW1icy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcGFnaW5hdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcHJvZ3Jlc3Muc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcHJvZ3Jlc3MvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzL3Byb2dyZXNzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQFRPRE86INCg0LXRhNCw0LrRgtC+0YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcblxyXG5pbXBvcnQgJy4vY29sbGFwc2Uuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VJbml0KCkge1xyXG4gICAgdmFyIGNvbGxhcHNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsYXBzZS1idXR0b24nKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChjb2xsYXBzZXMsZnVuY3Rpb24gKGNvbGxhcHNlKSB7XHJcbiAgICAgICAgdmFyIGNvbGxhcHNlID0gbmV3IGhpZGVTaG93KGNvbGxhcHNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU2hvdyh0YXJnZXQpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5yZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKTtcclxuICAgIHRoaXMua2V5cyA9IHtcclxuICAgICAgICBlbnRlcjogMTMsXHJcbiAgICAgICAgc3BhY2U6IDMyXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU3BlZWQgPSAxMDA7XHJcblxyXG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuXHJcbn1cclxuXHJcblxyXG5oaWRlU2hvdy5wcm90b3R5cGUuYmluZEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXNPYmoudG9nZ2xlUmVnaW9uKCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5oaWRlU2hvdy5wcm90b3R5cGUudG9nZ2xlUmVnaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzLnJlZ2lvbjtcclxuICAgIGNvbnNvbGUubG9nKHRoaXNPYmopO1xyXG4gICAgdGhpcy5yZWdpb24uY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKTtcclxuICAgICAgICBpZiAodGhpc09iai5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXNPYmouc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgdGhpc09iai5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc09iai5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9jb2xsYXBzZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvY29sbGFwc2UvY29sbGFwc2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQFRPRE86INCg0LXRhNCw0LrRgtC+0YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcblxyXG5pbXBvcnQgJy4vdGFicy5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIGtleUNvZGVzKCkge1xyXG5cclxuICAgIHRoaXMudGFiID0gOTtcclxuICAgIHRoaXMuZW50ZXIgPSAxMztcclxuICAgIHRoaXMuZXNjID0gMjc7XHJcblxyXG4gICAgdGhpcy5zcGFjZSA9IDMyO1xyXG4gICAgdGhpcy5wYWdldXAgPSAzMztcclxuICAgIHRoaXMucGFnZWRvd24gPSAzNDtcclxuICAgIHRoaXMuZW5kID0gMzU7XHJcbiAgICB0aGlzLmhvbWUgPSAzNjtcclxuXHJcbiAgICB0aGlzLmxlZnQgPSAzNztcclxuICAgIHRoaXMudXAgPSAzODtcclxuICAgIHRoaXMucmlnaHQgPSAzOTtcclxuICAgIHRoaXMuZG93biA9IDQwO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYnNJbml0KCkge1xyXG4gICAgdmFyIHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKHRhYnMsIGZ1bmN0aW9uICh0YWIpIHtcclxuICAgICAgICB2YXIgcGFuZWwgPSBuZXcgdGFicGFuZWwodGFiKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHRhYnBhbmVsKHRhYikge1xyXG4gICAgdGhpcy5wYW5lbCA9IHRhYjtcclxuICAgIHRoaXMua2V5cyA9IG5ldyBrZXlDb2RlcygpO1xyXG4gICAgdGhpcy50YWJzID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzLWxpc3RfX2l0ZW0nKTtcclxuICAgIHRoaXMucGFuZWxzID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pbm5lcicpO1xyXG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0YWI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFuZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiID0gdGhpcy5wYW5lbC5xdWVyeVNlbGVjdG9yKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcclxuXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLnN3aXRjaFRhYnMgPSBmdW5jdGlvbiAoJGN1clRhYiwgJG5ld1RhYikge1xyXG4gICAgJGN1clRhYi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xyXG5cclxuICAgICRjdXJUYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgJGN1clRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuXHJcblxyXG4gICAgJG5ld1RhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG4gICAgLy8gaGlkZSB0aGUgY3VycmVudCB0YWIgcGFuZWwgYW5kIHNldCBhcmlhLWhpZGRlbiB0byB0cnVlXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgJGN1clRhYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgLy8gc2hvdyB0aGUgbmV3IHRhYiBwYW5lbCBhbmQgc2V0IGFyaWEtaGlkZGVuIHRvIGZhbHNlXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgJG5ld1RhYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICRuZXdUYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcblxyXG4gICAgJG5ld1RhYi5mb2N1cygpO1xyXG5cclxufTtcclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5iaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiS2V5RG93bih0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJLZXlQcmVzcyh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJDbGljayh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJGb2N1cyh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkJsdXIodGhpcywgZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50YWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVQYW5lbEtleURvd24odGhpcywgZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50YWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlUGFuZWxLZXlQcmVzcyh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiS2V5RG93biA9IGZ1bmN0aW9uICh0YWIsIGUpIHtcclxuXHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkcHJldlRhYjtcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJOZHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMudGFicywgdGFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJOZHggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudGFicy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1tjdXJOZHggLSAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCAkbmV3VGFiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5yaWdodDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5kb3duOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGZvdW5kVGFiID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy50YWJzLCB0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSB0aGlzLnRhYnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbY3VyTmR4ICsgMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmhvbWU6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgdGhpcy50YWJzLmZpcnN0KCkpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lbmQ6XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicyh0YWIsIHRoaXMudGFicy5sYXN0KCkpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYktleVByZXNzID0gZnVuY3Rpb24gKHRhYiwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucmlnaHQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZG93bjpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5ob21lOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVuZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2Vkb3duOlxyXG4gICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiQ2xpY2sgPSBmdW5jdGlvbiAodGFiLCBlKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhbmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMucGFuZWxzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW2ldLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcbiAgICB0YWIuZm9jdXMoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkZvY3VzID0gZnVuY3Rpb24gKHRhYiwgZSkge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkJsdXIgPSBmdW5jdGlvbiAodGFiLCBlKSB7XHJcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlUGFuZWxLZXlEb3duID0gZnVuY3Rpb24gKCRlbGVtLCBlKSB7XHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVzYzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArICRlbGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JykpO1xyXG4gICAgICAgICAgICB0YWIuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciB0YWIgPSB0aGlzLnRhYnMucXVlcnlTZWxlY3RvcignW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VyTmR4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnRhYnMsIHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudGFicy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2N1ck5keCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdlZG93bjpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJG5ld1RhYjtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgdGFiID0gJCgnIycgKyAkZWxlbS5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy50YWJzLCB0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSB0aGlzLnRhYnMubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2N1ck5keCArIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlUGFuZWxLZXlQcmVzcyA9IGZ1bmN0aW9uICgkZWxlbSwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIChlLmtleUNvZGUgPT0gdGhpcy5rZXlzLnBhZ2V1cCB8fCBlLmtleUNvZGUgPT0gdGhpcy5rZXlzLnBhZ2Vkb3duKSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVzYzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicy90YWJzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi90aHVtYm5haWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGh1bWJuYWlsL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90aHVtYm5haWwvdGh1bWJuYWlsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9iYWRnZS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9iYWRnZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYmFkZ2UvYmFkZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDExMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25vcm1hbGl6ZS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplL25vcm1hbGl6ZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbHMvcmVzZXQvcmVzZXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29va2llIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZSwg0LXRgdC70Lgg0LXRgdGC0YwsINC10YHQu9C4INC90LXRgiwg0YLQviB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWUg0Lgg0LfQvdCw0YfQtdC90LjQtdC8IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSAtINC30L3QsNGH0LXQvdC40LUgY29va2llXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtINC+0LHRitC10LrRgiDRgSDRgdCy0L7QudGB0YLQstCw0LzQuCBjb29raWUgKGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKVxyXG4gICAgICovXHJcbiAgICBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZXhwaXJlcyA9PSBcIm51bWJlclwiICYmIGV4cGlyZXMpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVzICogMTAwMCk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMgPSBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhwaXJlcyAmJiBleHBpcmVzLnRvVVRDU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgdmFyIHVwZGF0ZWRDb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIHByb3BOYW1lO1xyXG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gb3B0aW9uc1twcm9wTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBwcm9wVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICovXHJcbiAgICBkZWxldGVDb29raWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIFwiXCIsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogLTFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL3V0aWxzL2Nvb2tpZS9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hbGVydC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9hbGVydC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYWxlcnQvYWxlcnQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7Ozs7Ozs7QUM5SEE7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakNBOzs7Ozs7O0FDQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ2hEQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7OztBQXdCQTtBQUNBO0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5FQTtBQXFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvRUE7QUFDQTtBQWlGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUVBOzs7Ozs7QUNsV0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7O0FBR0E7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Iiwic291cmNlUm9vdCI6IiJ9