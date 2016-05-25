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

	function hideShow(id) {

	    this.$id = $('#' + id);
	    this.$region = $('#' + this.$id.attr('aria-controls'));

	    this.keys = {
	        enter: 13,
	        space: 32
	    };

	    this.toggleSpeed = 100;

	    this.bindHandlers();
	}

	hideShow.prototype.bindHandlers = function () {

	    var thisObj = this;

	    this.$id.click(function (e) {

	        thisObj.toggleRegion();

	        e.stopPropagation();
	        return false;
	    });
	};

	hideShow.prototype.toggleRegion = function () {

	    var thisObj = this;

	    this.$region.slideToggle(this.toggleSpeed, function () {

	        if ($(this).attr('aria-expanded') == 'false') {

	            $(this).attr('aria-expanded', 'true');

	            $(this).focus();

	            thisObj.$id.find('span').html('Hide');
	        } else {

	            $(this).attr('aria-expanded', 'false');

	            thisObj.$id.find('span').html('Show');
	        }
	    });
	};

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

	function tabpanel(id, accordian) {

	    this.panel_id = id;
	    this.accordian = accordian;
	    this.$panel = $('#' + id);
	    this.keys = new keyCodes();
	    this.$tabs = this.$panel.find('.tabs-list__item');
	    this.$panels = this.$panel.children('.tabs__inner');

	    this.bindHandlers();

	    this.init();
	}

	tabpanel.prototype.init = function () {
	    var $tab;

	    this.$panels.attr('aria-hidden', 'true');

	    $tab = this.$tabs.filter('[aria-selected="true"]');

	    if ($tab == undefined) {
	        $tab = this.$tabs.first();
	    }

	    this.$panel.find('#' + $tab.attr('aria-controls')).attr('aria-hidden', 'false');
	};

	tabpanel.prototype.switchTabs = function ($curTab, $newTab) {

	    $curTab.removeClass('focus');

	    $curTab.attr('tabindex', '-1').attr('aria-selected', 'false');

	    $newTab.attr('aria-selected', 'true');

	    if (this.accordian == false) {

	        this.$panel.find('#' + $curTab.attr('aria-controls')).attr('aria-hidden', 'true');

	        this.$panel.find('#' + $newTab.attr('aria-controls')).attr('aria-hidden', 'false');
	    }

	    $newTab.attr('tabindex', '0');

	    $newTab.focus();
	};

	tabpanel.prototype.togglePanel = function ($tab) {

	    var $panel = this.$panel.find('#' + $tab.attr('aria-controls'));

	    if ($panel.attr('aria-hidden') == 'true') {
	        $panel.slideDown(100);
	        $panel.attr('aria-hidden', 'false');
	    } else {
	        $panel.slideUp(100);
	        $panel.attr('aria-hidden', 'true');
	    }
	};
	tabpanel.prototype.bindHandlers = function () {

	    var thisObj = this;

	    this.$tabs.keydown(function (e) {
	        return thisObj.handleTabKeyDown($(this), e);
	    });

	    this.$tabs.keypress(function (e) {
	        return thisObj.handleTabKeyPress($(this), e);
	    });

	    this.$tabs.click(function (e) {
	        return thisObj.handleTabClick($(this), e);
	    });

	    this.$tabs.focus(function (e) {
	        return thisObj.handleTabFocus($(this), e);
	    });

	    this.$tabs.blur(function (e) {
	        return thisObj.handleTabBlur($(this), e);
	    });

	    this.$panels.keydown(function (e) {
	        return thisObj.handlePanelKeyDown($(this), e);
	    });

	    this.$panels.keypress(function (e) {
	        return thisObj.handlePanelKeyPress($(this), e);
	    });
	};

	tabpanel.prototype.handleTabKeyDown = function ($tab, e) {

	    if (e.altKey) {

	        return true;
	    }

	    switch (e.keyCode) {
	        case this.keys.enter:
	        case this.keys.space:
	            {

	                if (this.accordian == true) {

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
	                var $prevTab;
	                var $newTab;

	                if (e.ctrlKey) {} else {
	                    var curNdx = this.$tabs.index($tab);

	                    if (curNdx == 0) {

	                        $newTab = this.$tabs.last();
	                    } else {

	                        $newTab = this.$tabs.eq(curNdx - 1);
	                    }

	                    this.switchTabs($tab, $newTab);
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

	                var curNdx = this.$tabs.index($tab);

	                if (curNdx == this.$tabs.length - 1) {

	                    $newTab = this.$tabs.first();
	                } else {

	                    $newTab = this.$tabs.eq(curNdx + 1);
	                }

	                this.switchTabs($tab, $newTab);

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.home:
	            {

	                this.switchTabs($tab, this.$tabs.first());

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.end:
	            {

	                this.switchTabs($tab, this.$tabs.last());

	                e.stopPropagation();
	                return false;
	            }
	    }
	};

	tabpanel.prototype.handleTabKeyPress = function ($tab, e) {

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

	tabpanel.prototype.handleTabClick = function ($tab, e) {

	    this.$panels.attr('aria-hidden', 'true');

	    this.$tabs.attr('tabindex', '-1').attr('aria-selected', 'false');

	    $tab.attr('aria-selected', 'true');

	    this.$panel.find('#' + $tab.attr('aria-controls')).attr('aria-hidden', 'false');

	    $tab.attr('tabindex', '0');

	    $tab.focus();

	    return true;
	};

	tabpanel.prototype.handleTabFocus = function ($tab, e) {

	    $tab.addClass('focus');

	    return true;
	};

	tabpanel.prototype.handleTabBlur = function ($tab, e) {

	    $tab.removeClass('focus');

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

	                var $tab = $('#' + $elem.attr('aria-labelledby'));

	                $tab.focus();

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.pageup:
	            {

	                var $newTab;

	                if (!e.ctrlKey) {

	                    return true;
	                }

	                var $tab = this.$tabs.filter('[aria-selected="true"]');

	                var curNdx = this.$tabs.index($tab);

	                if (curNdx == 0) {

	                    $newTab = this.$tabs.last();
	                } else {

	                    $newTab = this.$tabs.eq(curNdx - 1);
	                }

	                this.switchTabs($tab, $newTab);

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

	                var $tab = $('#' + $elem.attr('aria-labelledby'));

	                var curNdx = this.$tabs.index($tab);

	                if (curNdx == this.$tabs.length - 1) {

	                    $newTab = this.$tabs.first();
	                } else {

	                    $newTab = this.$tabs.eq(curNdx + 1);
	                }

	                this.switchTabs($tab, $newTab);

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

	$.extend($.expr[':'], {
	    focusable: function focusable(element) {
	        var nodeName = element.nodeName.toLowerCase();
	        var tabIndex = $(element).attr('tabindex');

	        if ($(element)[nodeName == 'area' ? 'parents' : 'closest'](':hidden').length == true) {
	            return false;
	        }

	        if (!isNaN(tabIndex) && tabIndex < 0) {
	            return false;
	        }

	        if (/input|select|textarea|button|object/.test(nodeName) == true) {

	            return !element.disabled;
	        }

	        if ((nodeName == 'a' || nodeName == 'area') == true) {

	            return element.href.length > 0;
	        }

	        return false;
	    }
		});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhN2NiOTRmNDEyZTVhZmM1NmYxMCIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Jlc2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvYm9vdHN0cmFwLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29va2llL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L25hdi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsL3BhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYS9tZWRpYS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhZ2luYXRpb24vcGFnaW5hdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Byb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcHJvZ3Jlc3MvcHJvZ3Jlc3Muc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYWxlcnQvYWxlcnQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb2xsYXBzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlL2NvbGxhcHNlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RhYnMvdGFicy5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC90aHVtYm5haWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2xhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYmFkZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9iYWRnZS9iYWRnZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTdjYjk0ZjQxMmU1YWZjNTZmMTBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9yZXNldCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2dyaWQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wcm9ncmVzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9hbGVydCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvY29sbGFwc2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RhYnMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JhZGdlJztcclxuXHJcbmltcG9ydCB7aGlkZVNob3d9IGZyb20gJy4vY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlJztcclxuaW1wb3J0IHt0YWJwYW5lbH0gZnJvbSAnLi9jb21wb25lbnRzL2RlZmF1bHQvdGFicyc7XHJcbi8vIFRPRE8g0LrQsNC6INCyINCx0YPRgdGC0YDQsNC/0LUg0LDQutGC0LjQstC40YDQvtCy0LDRgtGMINGBINC/0L7QvNC+0YnRjNGOIGRhdGFcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBhbmVsMSA9IG5ldyB0YWJwYW5lbChcInRhYnBhbmVsMVwiLCBmYWxzZSk7IC8v0YLQsNCx0YtcclxuICAgIHZhciBoczEgPSBuZXcgaGlkZVNob3coJ2J1dHRvbjEnKTsgLy/QutC90L7Qv9C60LAg0YHQutGA0YvRgtGMINC/0L7QutCw0LfQsNGC0YxcclxufSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hY2Nlc3NpYmlsaXR5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25vcm1hbGl6ZS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ub3JtYWxpemUvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25vcm1hbGl6ZS9ub3JtYWxpemUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9yZXNldC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yZXNldC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvcmVzZXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9pbnB1dC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvYm9vdHN0cmFwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2FwcGxpY2F0aW9uLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vY29va2llJztcclxuaW1wb3J0ICcuL2NvbnRyb2wtcGFuZWwuc2Nzcyc7XHJcblxyXG5jb25zdCBDT09LSUVfUEFUSCA9IHtwYXRoOiAnLyd9O1xyXG5cclxuY2xhc3MgQ29udHJvbFBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuYXBwID0gJCgnLmFwcGxpY2F0aW9uJyk7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtdGV4dCcpO1xyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LWNvbG9yJyk7XHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdCA9ICQoJy5jb250cm9sLXBhbmVsX19zZWxlY3QtaW1hZ2UnKTtcclxuXHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC10ZXh0JykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtdGV4dCcsICdub3JtYWwnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtY29sb3InLCAnd2hpdGUnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuICAgICAgICAhY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykgPyBjb29raWUuc2V0Q29va2llKCdhcHAtaW1hZ2UnLCAndmlzaWJsZScsIENPT0tJRV9QQVRIKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcbiAgICAgICAgc2VsZi53cmFwSW1hZ2VBbHQoKTtcclxuICAgICAgICBzZWxmLnRvZ2dsZUltYWdlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuaGFuZGxlVGV4dENoYW5nZSgpO1xyXG4gICAgICAgIHNlbGYuaGFuZGxlQ29sb3JDaGFuZ2UoKTtcclxuICAgICAgICBzZWxmLmhhbmRsZUltYWdlQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuYXBwLmFkZENsYXNzKCdhcHBsaWNhdGlvbl9zaG93Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRleHRDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpKTtcclxuXHJcbiAgICAgICAgc2VsZi50ZXh0U2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC10ZXh0JywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDb2xvckNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtY29sb3InKSk7XHJcblxyXG4gICAgICAgIHNlbGYuY29sb3JTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLWNvbG9yJywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbWFnZUNoYW5nZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0LnZhbChjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSk7XHJcblxyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29va2llLnNldENvb2tpZSgnYXBwLWltYWdlJywgJCh0aGlzKS52YWwoKSwgQ09PS0lFX1BBVEgpO1xyXG4gICAgICAgICAgICBzZWxmLnNldEFwcGxpY2F0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRvZ2dsZUltYWdlKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHdyYXBJbWFnZUFsdCgpIHtcclxuXHJcbiAgICAgICAgJCgnaW1nJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbHQgPSAkKHRoaXMpLmF0dHIoJ2FsdCcpO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS53cmFwKGA8c3BhbiBjbGFzcz1cImltYWdlLWFsdFwiLz5gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbHQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoYDxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0X190ZXh0XCI+JHthbHR9PC9zcGFuPmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZnRlcignPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRfX3RleHRcIj7QntC/0LjRgdCw0L3QuNC1INC+0YLRgdGD0YLRgdGC0LLRg9C10YI8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUltYWdlKCkge1xyXG5cclxuICAgICAgICBpZiAoY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykgPT0gJ2hpZGRlbicpIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLmFkZENsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaW1hZ2UtYWx0JykucmVtb3ZlQ2xhc3MoJ2ltYWdlLWFsdF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnaW1nJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEFwcGxpY2F0aW9uU3R5bGVzKCkge1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5hdHRyKCdkYXRhLXRleHQnLCBjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpKTtcclxuICAgICAgICB0aGlzLmFwcC5hdHRyKCdkYXRhLWNvbG9yJywgY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykpO1xyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtaW1hZ2UnLCBjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29udHJvbFBhbmVsKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29va2llIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZSwg0LXRgdC70Lgg0LXRgdGC0YwsINC10YHQu9C4INC90LXRgiwg0YLQviB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWUg0Lgg0LfQvdCw0YfQtdC90LjQtdC8IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSAtINC30L3QsNGH0LXQvdC40LUgY29va2llXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtINC+0LHRitC10LrRgiDRgSDRgdCy0L7QudGB0YLQstCw0LzQuCBjb29raWUgKGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKVxyXG4gICAgICovXHJcbiAgICBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZXhwaXJlcyA9PSBcIm51bWJlclwiICYmIGV4cGlyZXMpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVzICogMTAwMCk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMgPSBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhwaXJlcyAmJiBleHBpcmVzLnRvVVRDU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgdmFyIHVwZGF0ZWRDb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIHByb3BOYW1lO1xyXG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gb3B0aW9uc1twcm9wTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBwcm9wVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICovXHJcbiAgICBkZWxldGVDb29raWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIFwiXCIsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogLTFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvY29va2llL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsL2NvbnRyb2wtcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbmF2LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L25hdi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L25hdi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vYnV0dG9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3BhbmVsLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9tZWRpYS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvbWVkaWEuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vdHlwb2dyYXBoeS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vaW1hZ2UtYWx0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0L2ltYWdlLWFsdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9zZWxlY3Quc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3Qvc2VsZWN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2JyZWFkY3J1bWJzLnNjc3MnO1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBIZWFkRmlyZTk0V29yayBvbiAwNC4wNC4yMDE2LlxyXG4gKi9cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9icmVhZGNydW1icy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vZm9ybS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2Zvcm0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcGFnaW5hdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdpbmF0aW9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBIZWFkRmlyZTk0V29yayBvbiAxMi4wNS4yMDE2LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3Byb2dyZXNzLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3Byb2dyZXNzL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wcm9ncmVzcy9wcm9ncmVzcy5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlYWRGaXJlOTRXb3JrIG9uIDEyLjA1LjIwMTYuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcmFkaW8uc2Nzcyc7XHJcbi8vQHRvZG8g0YDQtdGE0LDQutGC0L7RgNC40L3Qs1xyXG5cclxudmFyIHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1yYWRpb10nKTtcclxuXHJcbmZ1bmN0aW9uIHJhZGlvVG9nZ2xlQXJpYSgpIHtcclxuICAgIC8v0YPQtNCw0LvRj9C10LwgYXJpYS1jaGVja2VkINGDINCy0YHQtdGFXHJcbiAgICB2YXIgZ3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncm91cFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgLy/RgdGC0LDQstC40Lwg0YLQvtC70YzQutC+INCy0YvQsdGA0LDQvdC+0LzRg1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYWRpb0V2ZW50SGFuZGxlcih0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgcmFkaW9Ub2dnbGVBcmlhKTtcclxuICAgICAgICBpZih0W2ldLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnJhZGlvRXZlbnRIYW5kbGVyKHJhZGlvKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8vcmFkaW8uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vY2hlY2tib3guc2Nzcyc7XHJcbnZhciBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcblxyXG4vL0B0b2RvINGA0LXRhNCw0LrRgtC+0YDQuNC90LNcclxuZnVuY3Rpb24gY2hlY2tib3hFdmVudEhhbmRsZXIodCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tib3hUb2dnbGVBcmlhKTtcclxuICAgICAgICBpZih0W2ldLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrYm94VG9nZ2xlQXJpYSgpIHtcclxuICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKSA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcInRydWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbn1cclxuXHJcbmNoZWNrYm94RXZlbnRIYW5kbGVyKGNoZWNrYm94KTtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94L2NoZWNrYm94LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2FsZXJ0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2FsZXJ0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hbGVydC9hbGVydC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9jb2xsYXBzZS5zY3NzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZVNob3coaWQpIHtcclxuXHJcbiAgICB0aGlzLiRpZCA9ICQoJyMnICsgaWQpO1xyXG4gICAgdGhpcy4kcmVnaW9uID0gJCgnIycgKyB0aGlzLiRpZC5hdHRyKCdhcmlhLWNvbnRyb2xzJykpO1xyXG5cclxuICAgIHRoaXMua2V5cyA9IHtcclxuICAgICAgICBlbnRlcjogMTMsXHJcbiAgICAgICAgc3BhY2U6IDMyXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU3BlZWQgPSAxMDA7XHJcblxyXG5cclxuICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XHJcblxyXG59XHJcblxyXG5cclxuaGlkZVNob3cucHJvdG90eXBlLmJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kaWQuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgdGhpc09iai50b2dnbGVSZWdpb24oKTtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5oaWRlU2hvdy5wcm90b3R5cGUudG9nZ2xlUmVnaW9uID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuXHJcblxyXG4gICAgdGhpcy4kcmVnaW9uLnNsaWRlVG9nZ2xlKHRoaXMudG9nZ2xlU3BlZWQsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcpID09ICdmYWxzZScpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICQodGhpcykuZm9jdXMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzT2JqLiRpZC5maW5kKCdzcGFuJykuaHRtbCgnSGlkZScpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpc09iai4kaWQuZmluZCgnc3BhbicpLmh0bWwoJ1Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvY29sbGFwc2UvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlL2NvbGxhcHNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3RhYnMuc2Nzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24ga2V5Q29kZXMoKSB7XHJcblxyXG4gICAgdGhpcy50YWIgPSA5O1xyXG4gICAgdGhpcy5lbnRlciA9IDEzO1xyXG4gICAgdGhpcy5lc2MgPSAyNztcclxuXHJcbiAgICB0aGlzLnNwYWNlID0gMzI7XHJcbiAgICB0aGlzLnBhZ2V1cCA9IDMzO1xyXG4gICAgdGhpcy5wYWdlZG93biA9IDM0O1xyXG4gICAgdGhpcy5lbmQgPSAzNTtcclxuICAgIHRoaXMuaG9tZSA9IDM2O1xyXG5cclxuICAgIHRoaXMubGVmdCA9IDM3O1xyXG4gICAgdGhpcy51cCA9IDM4O1xyXG4gICAgdGhpcy5yaWdodCA9IDM5O1xyXG4gICAgdGhpcy5kb3duID0gNDA7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYnBhbmVsKGlkLCBhY2NvcmRpYW4pIHtcclxuXHJcblxyXG4gICAgdGhpcy5wYW5lbF9pZCA9IGlkO1xyXG4gICAgdGhpcy5hY2NvcmRpYW4gPSBhY2NvcmRpYW47XHJcbiAgICB0aGlzLiRwYW5lbCA9ICQoJyMnICsgaWQpO1xyXG4gICAgdGhpcy5rZXlzID0gbmV3IGtleUNvZGVzKCk7XHJcbiAgICB0aGlzLiR0YWJzID0gdGhpcy4kcGFuZWwuZmluZCgnLnRhYnMtbGlzdF9faXRlbScpO1xyXG4gICAgdGhpcy4kcGFuZWxzID0gdGhpcy4kcGFuZWwuY2hpbGRyZW4oJy50YWJzX19pbm5lcicpO1xyXG5cclxuXHJcbiAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xyXG5cclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuXHJcbn1cclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkdGFiO1xyXG5cclxuXHJcbiAgICB0aGlzLiRwYW5lbHMuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuXHJcbiAgICAkdGFiID0gdGhpcy4kdGFicy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xyXG5cclxuICAgIGlmICgkdGFiID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICR0YWIgPSB0aGlzLiR0YWJzLmZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuJHBhbmVsLmZpbmQoJyMnICsgJHRhYi5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG59O1xyXG5cclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5zd2l0Y2hUYWJzID0gZnVuY3Rpb24gKCRjdXJUYWIsICRuZXdUYWIpIHtcclxuXHJcblxyXG4gICAgJGN1clRhYi5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuXHJcblxyXG4gICAgJGN1clRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuXHJcblxyXG4gICAgJG5ld1RhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMuYWNjb3JkaWFuID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuJHBhbmVsLmZpbmQoJyMnICsgJGN1clRhYi5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuJHBhbmVsLmZpbmQoJyMnICsgJG5ld1RhYi5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICRuZXdUYWIuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xyXG5cclxuXHJcbiAgICAkbmV3VGFiLmZvY3VzKCk7XHJcblxyXG59O1xyXG5cclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS50b2dnbGVQYW5lbCA9IGZ1bmN0aW9uICgkdGFiKSB7XHJcblxyXG4gICAgdmFyICRwYW5lbCA9IHRoaXMuJHBhbmVsLmZpbmQoJyMnICsgJHRhYi5hdHRyKCdhcmlhLWNvbnRyb2xzJykpO1xyXG5cclxuICAgIGlmICgkcGFuZWwuYXR0cignYXJpYS1oaWRkZW4nKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAkcGFuZWwuc2xpZGVEb3duKDEwMCk7XHJcbiAgICAgICAgJHBhbmVsLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkcGFuZWwuc2xpZGVVcCgxMDApO1xyXG4gICAgICAgICRwYW5lbC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbn07XHJcbnRhYnBhbmVsLnByb3RvdHlwZS5iaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG5cclxuXHJcbiAgICB0aGlzLiR0YWJzLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJLZXlEb3duKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuJHRhYnMua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJLZXlQcmVzcygkKHRoaXMpLCBlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLiR0YWJzLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiQ2xpY2soJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy4kdGFicy5mb2N1cyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkZvY3VzKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuJHRhYnMuYmx1cihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkJsdXIoJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy4kcGFuZWxzLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVQYW5lbEtleURvd24oJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy4kcGFuZWxzLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlUGFuZWxLZXlQcmVzcygkKHRoaXMpLCBlKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiS2V5RG93biA9IGZ1bmN0aW9uICgkdGFiLCBlKSB7XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZW50ZXI6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuc3BhY2U6XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY29yZGlhbiA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYW5lbCgkdGFiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkcHJldlRhYjtcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJOZHggPSB0aGlzLiR0YWJzLmluZGV4KCR0YWIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJOZHggPT0gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMubGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmVxKGN1ck5keCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnMoJHRhYiwgJG5ld1RhYik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucmlnaHQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZG93bjpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZFRhYiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgJG5ld1RhYjtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJOZHggPSB0aGlzLiR0YWJzLmluZGV4KCR0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSB0aGlzLiR0YWJzLmxlbmd0aCAtIDEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5lcShjdXJOZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuaG9tZTpcclxuICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKCR0YWIsIHRoaXMuJHRhYnMuZmlyc3QoKSk7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVuZDpcclxuICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKCR0YWIsIHRoaXMuJHRhYnMubGFzdCgpKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYktleVByZXNzID0gZnVuY3Rpb24gKCR0YWIsIGUpIHtcclxuXHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lbnRlcjpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5zcGFjZTpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5sZWZ0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnVwOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnJpZ2h0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmRvd246XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuaG9tZTpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lbmQ6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2V1cDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdlZG93bjpcclxuICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiQ2xpY2sgPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuXHJcbiAgICB0aGlzLiRwYW5lbHMuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuXHJcbiAgICB0aGlzLiR0YWJzLmF0dHIoJ3RhYmluZGV4JywgJy0xJykuYXR0cignYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xyXG5cclxuXHJcbiAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG5cclxuXHJcbiAgICB0aGlzLiRwYW5lbC5maW5kKCcjJyArICR0YWIuYXR0cignYXJpYS1jb250cm9scycpKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuXHJcbiAgICAkdGFiLmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcclxuXHJcblxyXG4gICAgJHRhYi5mb2N1cygpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiRm9jdXMgPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuXHJcbiAgICAkdGFiLmFkZENsYXNzKCdmb2N1cycpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiQmx1ciA9IGZ1bmN0aW9uICgkdGFiLCBlKSB7XHJcblxyXG5cclxuICAgICR0YWIucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG5cclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVQYW5lbEtleURvd24gPSBmdW5jdGlvbiAoJGVsZW0sIGUpIHtcclxuXHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lc2M6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciAkdGFiID0gJCgnIycgKyAkZWxlbS5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHRhYi5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdldXA6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyICR0YWIgPSB0aGlzLiR0YWJzLmZpbHRlcignW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IHRoaXMuJHRhYnMuaW5kZXgoJHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5sYXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZXEoY3VyTmR4IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnMoJHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZWRvd246XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyICR0YWIgPSAkKCcjJyArICRlbGVtLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScpKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY3VyTmR4ID0gdGhpcy4kdGFicy5pbmRleCgkdGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJOZHggPT0gdGhpcy4kdGFicy5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5lcShjdXJOZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVBhbmVsS2V5UHJlc3MgPSBmdW5jdGlvbiAoJGVsZW0sIGUpIHtcclxuXHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY3RybEtleSAmJiAoZS5rZXlDb2RlID09IHRoaXMua2V5cy5wYWdldXAgfHwgZS5rZXlDb2RlID09IHRoaXMua2V5cy5wYWdlZG93bikpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lc2M6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG5cclxuXHJcbiQuZXh0ZW5kKCQuZXhwclsnOiddLCB7XHJcbiAgICBmb2N1c2FibGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB0YWJJbmRleCA9ICQoZWxlbWVudCkuYXR0cigndGFiaW5kZXgnKTtcclxuXHJcblxyXG4gICAgICAgIGlmICgoJChlbGVtZW50KVtub2RlTmFtZSA9PSAnYXJlYScgPyAncGFyZW50cycgOiAnY2xvc2VzdCddKCc6aGlkZGVuJykubGVuZ3RoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKHRhYkluZGV4KSAmJiB0YWJJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICgvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvLnRlc3Qobm9kZU5hbWUpID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhZWxlbWVudC5kaXNhYmxlZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoKG5vZGVOYW1lID09ICdhJyB8fCBub2RlTmFtZSA9PSAnYXJlYScpID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudC5ocmVmLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdGFicy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdGFicy90YWJzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3RodW1ibmFpbC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90aHVtYm5haWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC90aHVtYm5haWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbGFiZWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2xhYmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2JhZGdlLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2JhZGdlL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9iYWRnZS9iYWRnZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7Ozs7OztBQzFIQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7QUFHQTs7Ozs7O0FDOURBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7OztBQ0dBO0FBQ0E7Ozs7Ozs7QUNKQTs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBSkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNuRUE7Ozs7Ozs7QUNBQTtBQUNBOzs7O0FBd0JBO0FBQ0E7QUF4QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkE7QUE2RkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUEwQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZGQTtBQUNBO0FBeUZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE3QkE7Ozs7OztBQy9jQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==