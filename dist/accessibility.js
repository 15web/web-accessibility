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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkZmM2OWUyY2VkZTFhYzgxYTViOCIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Jlc2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvYm9vdHN0cmFwLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29va2llL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbmF2L25hdi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsL3BhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYS9tZWRpYS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3BhZ2luYXRpb24vcGFnaW5hdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Byb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcHJvZ3Jlc3MvcHJvZ3Jlc3Muc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYWxlcnQvYWxlcnQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb2xsYXBzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlL2NvbGxhcHNlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RhYnMvdGFicy5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbC90aHVtYm5haWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2xhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYmFkZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9iYWRnZS9iYWRnZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZGZjNjllMmNlZGUxYWM4MWE1YjhcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9yZXNldCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2dyaWQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3BhbmVsJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9tZWRpYSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9zZWxlY3QnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9wcm9ncmVzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9hbGVydCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvY29sbGFwc2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RhYnMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RodW1ibmFpbCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2JhZGdlJztcclxuXHJcbmltcG9ydCB7aGlkZVNob3d9IGZyb20gJy4vY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlJztcclxuaW1wb3J0IHt0YWJwYW5lbH0gZnJvbSAnLi9jb21wb25lbnRzL2RlZmF1bHQvdGFicyc7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYWNjZXNzaWJpbGl0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9ub3JtYWxpemUuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbm9ybWFsaXplL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ub3JtYWxpemUvbm9ybWFsaXplLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcmVzZXQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3Jlc2V0L3Jlc2V0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vaW5wdXQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2lucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2Jvb3RzdHJhcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hcHBsaWNhdGlvbi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29va2llIGZyb20gJy4uL2Nvb2tpZSc7XHJcbmltcG9ydCAnLi9jb250cm9sLXBhbmVsLnNjc3MnO1xyXG5cclxuY29uc3QgQ09PS0lFX1BBVEggPSB7cGF0aDogJy8nfTtcclxuXHJcbmNsYXNzIENvbnRyb2xQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmFwcCA9ICQoJy5hcHBsaWNhdGlvbicpO1xyXG5cclxuICAgICAgICBzZWxmLnRleHRTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LXRleHQnKTtcclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0ID0gJCgnLmNvbnRyb2wtcGFuZWxfX3NlbGVjdC1jb2xvcicpO1xyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LWltYWdlJyk7XHJcblxyXG4gICAgICAgICFjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpID8gY29va2llLnNldENvb2tpZSgnYXBwLXRleHQnLCAnbm9ybWFsJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC1jb2xvcicpID8gY29va2llLnNldENvb2tpZSgnYXBwLWNvbG9yJywgJ3doaXRlJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpID8gY29va2llLnNldENvb2tpZSgnYXBwLWltYWdlJywgJ3Zpc2libGUnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG4gICAgICAgIHNlbGYud3JhcEltYWdlQWx0KCk7XHJcbiAgICAgICAgc2VsZi50b2dnbGVJbWFnZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmhhbmRsZVRleHRDaGFuZ2UoKTtcclxuICAgICAgICBzZWxmLmhhbmRsZUNvbG9yQ2hhbmdlKCk7XHJcbiAgICAgICAgc2VsZi5oYW5kbGVJbWFnZUNoYW5nZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmFwcC5hZGRDbGFzcygnYXBwbGljYXRpb25fc2hvdycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUZXh0Q2hhbmdlKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLXRleHQnKSk7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdhcHAtdGV4dCcsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ29sb3JDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5jb2xvclNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykpO1xyXG5cclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC1jb2xvcicsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW1hZ2VDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykpO1xyXG5cclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC1pbWFnZScsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi50b2dnbGVJbWFnZSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB3cmFwSW1hZ2VBbHQoKSB7XHJcblxyXG4gICAgICAgICQoJ2ltZycpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWx0ID0gJCh0aGlzKS5hdHRyKCdhbHQnKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykud3JhcChgPHNwYW4gY2xhc3M9XCJpbWFnZS1hbHRcIi8+YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWx0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFmdGVyKGA8c3BhbiBjbGFzcz1cImltYWdlLWFsdF9fdGV4dFwiPiR7YWx0fTwvc3Bhbj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0X190ZXh0XCI+0J7Qv9C40YHQsNC90LjQtSDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCPC9zcGFuPicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpID09ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgICAgICQoJy5pbWFnZS1hbHQnKS5hZGRDbGFzcygnaW1hZ2UtYWx0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmltYWdlLWFsdCcpLnJlbW92ZUNsYXNzKCdpbWFnZS1hbHRfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRBcHBsaWNhdGlvblN0eWxlcygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS10ZXh0JywgY29va2llLmdldENvb2tpZSgnYXBwLXRleHQnKSk7XHJcbiAgICAgICAgdGhpcy5hcHAuYXR0cignZGF0YS1jb2xvcicsIGNvb2tpZS5nZXRDb29raWUoJ2FwcC1jb2xvcicpKTtcclxuICAgICAgICB0aGlzLmFwcC5hdHRyKCdkYXRhLWltYWdlJywgY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xQYW5lbCgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvb2tpZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWUsINC10YHQu9C4INC10YHRgtGMLCDQtdGB0LvQuCDQvdC10YIsINGC0L4gdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIgY29va2llINGBINC40LzQtdC90LXQvCBuYW1lINC4INC30L3QsNGH0LXQvdC40LXQvCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG5hbWUgLSDQuNC80Y8gY29va2llXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgLSDQt9C90LDRh9C10L3QuNC1IGNvb2tpZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSDQvtCx0YrQtdC60YIg0YEg0YHQstC+0LnRgdGC0LLQsNC80LggY29va2llIChleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSlcclxuICAgICAqL1xyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXMgPT0gXCJudW1iZXJcIiAmJiBleHBpcmVzKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDEwMDApO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzID0gZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4cGlyZXMgJiYgZXhwaXJlcy50b1VUQ1N0cmluZykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB1cGRhdGVkQ29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBwcm9wTmFtZTtcclxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IG9wdGlvbnNbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgcHJvcFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPQtNCw0LvRj9C10YIgY29va2llINGBINC40LzQtdC90LXQvCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqL1xyXG4gICAgZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldENvb2tpZShuYW1lLCBcIlwiLCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IC0xXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvb2tpZSgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2Nvb2tpZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25hdi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9uYXYvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L25hdi9uYXYuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYnV0dG9uLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2J1dHRvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2J1dHRvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9wYW5lbC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wYW5lbC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFuZWwvcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbWVkaWEuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvbWVkaWEvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L21lZGlhL21lZGlhLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3R5cG9ncmFwaHkuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlLWFsdC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbWFnZS1hbHQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vc2VsZWN0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9icmVhZGNydW1icy5zY3NzJztcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVhZEZpcmU5NFdvcmsgb24gMDQuMDQuMjAxNi5cclxuICovXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYnJlYWRjcnVtYnMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2Zvcm0uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3BhZ2luYXRpb24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVhZEZpcmU5NFdvcmsgb24gMTIuMDUuMjAxNi5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9wcm9ncmVzcy5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9wcm9ncmVzcy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcHJvZ3Jlc3MvcHJvZ3Jlc3Muc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSBIZWFkRmlyZTk0V29yayBvbiAxMi4wNS4yMDE2LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3JhZGlvLnNjc3MnO1xyXG4vL0B0b2RvINGA0LXRhNCw0LrRgtC+0YDQuNC90LNcclxuXHJcbnZhciByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9cmFkaW9dJyk7XHJcblxyXG5mdW5jdGlvbiByYWRpb1RvZ2dsZUFyaWEoKSB7XHJcbiAgICAvL9GD0LTQsNC70Y/QtdC8IGFyaWEtY2hlY2tlZCDRgyDQstGB0LXRhVxyXG4gICAgdmFyIGdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUodGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JvdXBbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcclxuICAgIH1cclxuICAgIC8v0YHRgtCw0LLQuNC8INGC0L7Qu9GM0LrQviDQstGL0LHRgNCw0L3QvtC80YNcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwidHJ1ZVwiKTtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFkaW9FdmVudEhhbmRsZXIodCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHJhZGlvVG9nZ2xlQXJpYSk7XHJcbiAgICAgICAgaWYodFtpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5yYWRpb0V2ZW50SGFuZGxlcihyYWRpbyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2NoZWNrYm94LnNjc3MnO1xyXG52YXIgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG5cclxuLy9AdG9kbyDRgNC10YTQsNC60YLQvtGA0LjQvdCzXHJcbmZ1bmN0aW9uIGNoZWNrYm94RXZlbnRIYW5kbGVyKHQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrYm94VG9nZ2xlQXJpYSk7XHJcbiAgICAgICAgaWYodFtpXS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0W2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja2JveFRvZ2dsZUFyaWEoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIikgPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1cygpO1xyXG59XHJcblxyXG5jaGVja2JveEV2ZW50SGFuZGxlcihjaGVja2JveCk7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NoZWNrYm94L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hbGVydC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hbGVydC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYWxlcnQvYWxlcnQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vY29sbGFwc2Uuc2Nzcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVTaG93KGlkKSB7XHJcblxyXG4gICAgdGhpcy4kaWQgPSAkKCcjJyArIGlkKTtcclxuICAgIHRoaXMuJHJlZ2lvbiA9ICQoJyMnICsgdGhpcy4kaWQuYXR0cignYXJpYS1jb250cm9scycpKTtcclxuXHJcbiAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgZW50ZXI6IDEzLFxyXG4gICAgICAgIHNwYWNlOiAzMlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNwZWVkID0gMTAwO1xyXG5cclxuXHJcbiAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xyXG5cclxufVxyXG5cclxuXHJcbmhpZGVTaG93LnByb3RvdHlwZS5iaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuJGlkLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIHRoaXNPYmoudG9nZ2xlUmVnaW9uKCk7XHJcblxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuaGlkZVNob3cucHJvdG90eXBlLnRvZ2dsZVJlZ2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcblxyXG5cclxuICAgIHRoaXMuJHJlZ2lvbi5zbGlkZVRvZ2dsZSh0aGlzLnRvZ2dsZVNwZWVkLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpc09iai4kaWQuZmluZCgnc3BhbicpLmh0bWwoJ0hpZGUnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuXHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXNPYmouJGlkLmZpbmQoJ3NwYW4nKS5odG1sKCdTaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbGxhcHNlL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb2xsYXBzZS9jb2xsYXBzZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi90YWJzLnNjc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGtleUNvZGVzKCkge1xyXG5cclxuICAgIHRoaXMudGFiID0gOTtcclxuICAgIHRoaXMuZW50ZXIgPSAxMztcclxuICAgIHRoaXMuZXNjID0gMjc7XHJcblxyXG4gICAgdGhpcy5zcGFjZSA9IDMyO1xyXG4gICAgdGhpcy5wYWdldXAgPSAzMztcclxuICAgIHRoaXMucGFnZWRvd24gPSAzNDtcclxuICAgIHRoaXMuZW5kID0gMzU7XHJcbiAgICB0aGlzLmhvbWUgPSAzNjtcclxuXHJcbiAgICB0aGlzLmxlZnQgPSAzNztcclxuICAgIHRoaXMudXAgPSAzODtcclxuICAgIHRoaXMucmlnaHQgPSAzOTtcclxuICAgIHRoaXMuZG93biA9IDQwO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJwYW5lbChpZCwgYWNjb3JkaWFuKSB7XHJcblxyXG5cclxuICAgIHRoaXMucGFuZWxfaWQgPSBpZDtcclxuICAgIHRoaXMuYWNjb3JkaWFuID0gYWNjb3JkaWFuO1xyXG4gICAgdGhpcy4kcGFuZWwgPSAkKCcjJyArIGlkKTtcclxuICAgIHRoaXMua2V5cyA9IG5ldyBrZXlDb2RlcygpO1xyXG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJHBhbmVsLmZpbmQoJy50YWJzLWxpc3RfX2l0ZW0nKTtcclxuICAgIHRoaXMuJHBhbmVscyA9IHRoaXMuJHBhbmVsLmNoaWxkcmVuKCcudGFic19faW5uZXInKTtcclxuXHJcblxyXG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuXHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcblxyXG59XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJHRhYjtcclxuXHJcblxyXG4gICAgdGhpcy4kcGFuZWxzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcblxyXG4gICAgJHRhYiA9IHRoaXMuJHRhYnMuZmlsdGVyKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcclxuXHJcbiAgICBpZiAoJHRhYiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkdGFiID0gdGhpcy4kdGFicy5maXJzdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLiRwYW5lbC5maW5kKCcjJyArICR0YWIuYXR0cignYXJpYS1jb250cm9scycpKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuc3dpdGNoVGFicyA9IGZ1bmN0aW9uICgkY3VyVGFiLCAkbmV3VGFiKSB7XHJcblxyXG5cclxuICAgICRjdXJUYWIucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcblxyXG5cclxuICAgICRjdXJUYWIuYXR0cigndGFiaW5kZXgnLCAnLTEnKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XHJcblxyXG5cclxuICAgICRuZXdUYWIuYXR0cignYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XHJcblxyXG5cclxuICAgIGlmICh0aGlzLmFjY29yZGlhbiA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICB0aGlzLiRwYW5lbC5maW5kKCcjJyArICRjdXJUYWIuYXR0cignYXJpYS1jb250cm9scycpKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLiRwYW5lbC5maW5kKCcjJyArICRuZXdUYWIuYXR0cignYXJpYS1jb250cm9scycpKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkbmV3VGFiLmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcclxuXHJcblxyXG4gICAgJG5ld1RhYi5mb2N1cygpO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUudG9nZ2xlUGFuZWwgPSBmdW5jdGlvbiAoJHRhYikge1xyXG5cclxuICAgIHZhciAkcGFuZWwgPSB0aGlzLiRwYW5lbC5maW5kKCcjJyArICR0YWIuYXR0cignYXJpYS1jb250cm9scycpKTtcclxuXHJcbiAgICBpZiAoJHBhbmVsLmF0dHIoJ2FyaWEtaGlkZGVuJykgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgJHBhbmVsLnNsaWRlRG93bigxMDApO1xyXG4gICAgICAgICRwYW5lbC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgJHBhbmVsLnNsaWRlVXAoMTAwKTtcclxuICAgICAgICAkcGFuZWwuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfVxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuYmluZEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuXHJcblxyXG4gICAgdGhpcy4kdGFicy5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiS2V5RG93bigkKHRoaXMpLCBlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLiR0YWJzLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiS2V5UHJlc3MoJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy4kdGFicy5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkNsaWNrKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuJHRhYnMuZm9jdXMoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJGb2N1cygkKHRoaXMpLCBlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLiR0YWJzLmJsdXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJCbHVyKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuJHBhbmVscy5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlUGFuZWxLZXlEb3duKCQodGhpcyksIGUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMuJHBhbmVscy5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVBhbmVsS2V5UHJlc3MoJCh0aGlzKSwgZSk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYktleURvd24gPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5hY2NvcmRpYW4gPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGFuZWwoJHRhYik7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgJHByZXZUYWI7XHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyTmR4ID0gdGhpcy4kdGFicy5pbmRleCgkdGFiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyTmR4ID09IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmxhc3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy4kdGFicy5lcShjdXJOZHggLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKCR0YWIsICRuZXdUYWIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnJpZ2h0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmRvd246XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZm91bmRUYWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VyTmR4ID0gdGhpcy4kdGFicy5pbmRleCgkdGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJOZHggPT0gdGhpcy4kdGFicy5sZW5ndGggLSAxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZXEoY3VyTmR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnMoJHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmhvbWU6XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCB0aGlzLiR0YWJzLmZpcnN0KCkpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lbmQ6XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicygkdGFiLCB0aGlzLiR0YWJzLmxhc3QoKSk7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVUYWJLZXlQcmVzcyA9IGZ1bmN0aW9uICgkdGFiLCBlKSB7XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZW50ZXI6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuc3BhY2U6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5yaWdodDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5kb3duOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmhvbWU6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZW5kOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdldXA6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZWRvd246XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkNsaWNrID0gZnVuY3Rpb24gKCR0YWIsIGUpIHtcclxuXHJcblxyXG4gICAgdGhpcy4kcGFuZWxzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcblxyXG4gICAgdGhpcy4kdGFicy5hdHRyKCd0YWJpbmRleCcsICctMScpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuXHJcblxyXG4gICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcblxyXG4gICAgdGhpcy4kcGFuZWwuZmluZCgnIycgKyAkdGFiLmF0dHIoJ2FyaWEtY29udHJvbHMnKSkuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcblxyXG4gICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICcwJyk7XHJcblxyXG5cclxuICAgICR0YWIuZm9jdXMoKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkZvY3VzID0gZnVuY3Rpb24gKCR0YWIsIGUpIHtcclxuXHJcblxyXG4gICAgJHRhYi5hZGRDbGFzcygnZm9jdXMnKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkJsdXIgPSBmdW5jdGlvbiAoJHRhYiwgZSkge1xyXG5cclxuXHJcbiAgICAkdGFiLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxuXHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlUGFuZWxLZXlEb3duID0gZnVuY3Rpb24gKCRlbGVtLCBlKSB7XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZXNjOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5sZWZ0OlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgJHRhYiA9ICQoJyMnICsgJGVsZW0uYXR0cignYXJpYS1sYWJlbGxlZGJ5JykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICR0YWIuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciAkdGFiID0gdGhpcy4kdGFicy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJOZHggPSB0aGlzLiR0YWJzLmluZGV4KCR0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMubGFzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmVxKGN1ck5keCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKCR0YWIsICRuZXdUYWIpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2Vkb3duOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciAkdGFiID0gJCgnIycgKyAkZWxlbS5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IHRoaXMuJHRhYnMuaW5kZXgoJHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IHRoaXMuJHRhYnMubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLiR0YWJzLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMuJHRhYnMuZXEoY3VyTmR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnMoJHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG5cclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5oYW5kbGVQYW5lbEtleVByZXNzID0gZnVuY3Rpb24gKCRlbGVtLCBlKSB7XHJcblxyXG4gICAgaWYgKGUuYWx0S2V5KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgJiYgKGUua2V5Q29kZSA9PSB0aGlzLmtleXMucGFnZXVwIHx8IGUua2V5Q29kZSA9PSB0aGlzLmtleXMucGFnZWRvd24pKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZXNjOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxuXHJcblxyXG4kLmV4dGVuZCgkLmV4cHJbJzonXSwge1xyXG4gICAgZm9jdXNhYmxlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgdGFiSW5kZXggPSAkKGVsZW1lbnQpLmF0dHIoJ3RhYmluZGV4Jyk7XHJcblxyXG5cclxuICAgICAgICBpZiAoKCQoZWxlbWVudClbbm9kZU5hbWUgPT0gJ2FyZWEnID8gJ3BhcmVudHMnIDogJ2Nsb3Nlc3QnXSgnOmhpZGRlbicpLmxlbmd0aCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCFpc05hTih0YWJJbmRleCkgJiYgdGFiSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0Ly50ZXN0KG5vZGVOYW1lKSA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWVsZW1lbnQuZGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKChub2RlTmFtZSA9PSAnYScgfHwgbm9kZU5hbWUgPT0gJ2FyZWEnKSA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQuaHJlZi5sZW5ndGggPiAwKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3RhYnMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RhYnMvdGFicy5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi90aHVtYm5haWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvdGh1bWJuYWlsL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90aHVtYm5haWwvdGh1bWJuYWlsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2xhYmVsLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9sYWJlbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9iYWRnZS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9iYWRnZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYmFkZ2UvYmFkZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7Ozs7OztBQzFIQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7QUFHQTs7Ozs7O0FDOURBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7OztBQ0dBO0FBQ0E7Ozs7Ozs7QUNKQTs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBSkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNuRUE7Ozs7Ozs7QUNBQTtBQUNBOzs7O0FBd0JBO0FBQ0E7QUF4QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkE7QUE2RkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUEwQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZGQTtBQUNBO0FBeUZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE3QkE7Ozs7OztBQy9jQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==