/* ================================
 *   Обработчик события изменения параметров панели ВДС
 *  ================================ */
document.addEventListener('wcag:action', function (event) {

    var config = event.detail.wcagState;
    if (config) {
        var html = document.documentElement;
        config.forEach(function (key) {
            html.setAttribute('data-'+key.name, key.value);
        });
    }


});

/*  ================================
 *   Панель ВДС и полифил для кастомных событий
 *  ================================ */

// Полифилл CustomEvent от Mozilla
(function () {

    if ( typeof window.CustomEvent === "function" ) return false;

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

var WCAGPanel = (function () {
    // Polyfill for safari, ie 8/9
    (function() {
        // helpers
        var regExp = function(name) {
            return new RegExp('(^| )'+ name +'( |$)');
        };
        var forEach = function(list, fn, scope) {
            for (var i = 0; i < list.length; i++) {
                fn.call(scope, list[i]);
            }
        };

        // class list object with basic methods
        function ClassList(element) {
            this.element = element;
        }

        ClassList.prototype = {
            add: function() {
                forEach(arguments, function(name) {
                    if (!this.contains(name)) {
                        this.element.className += ' '+ name;
                    }
                }, this);
            },
            remove: function() {
                forEach(arguments, function(name) {
                    this.element.className =
                        this.element.className.replace(regExp(name), '');
                }, this);
            },
            toggle: function(name) {
                return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
            },
            contains: function(name) {
                return regExp(name).test(this.element.className);
            },
            // bonus..
            replace: function(oldName, newName) {
                this.remove(oldName), this.add(newName);
            }
        };

        // IE8/9, Safari
        if (!('classList' in Element.prototype)) {
            Object.defineProperty(Element.prototype, 'classList', {
                get: function() {
                    return new ClassList(this);
                }
            });
        }

        // replace() support for others
        if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
            DOMTokenList.prototype.replace = ClassList.prototype.replace;
        }
    })();

    /**
     * WCAGPanel
     * Обрабатывает клик по кнопке "Настройки" и открывает дропдаун
     * При клике генерирует событие wcag:action на элементе панели, в которое передает
     * данные о том, какое было действие и с каким значением
     * @constructor
     */

    var WCAGPanel = function () {
        this.controlPanel = document.getElementById('wcag-panel');
        this.dropdownBtn = document.getElementById('wcagDropdownBtn');
        this.dropdownBtnClose = document.getElementById('wcagDropdownBtnClose');
        this.dropdown = document.getElementById('wcagDropdownMenu');
        // this.anchorLink = document.getElementById('anchor-link'); смотреть метод ниже
        this.state = [];

        this.event = new CustomEvent('wcag:action', {
            bubbles: true,
            detail: {}
        });

        this.init();
    };

    WCAGPanel.prototype.init = function () {
        this.restoreConfigFromStorage();
        this.handleDropdown();
        this.handleChange();
        this.handleNumberInputsChange();
        this.handleResetForm();
        // this.handleAnchorLinkClick(); смотреть метод ниже

        this.controlPanel.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    };

    WCAGPanel.prototype.getPanelState = function () {
        var self = this;
        this.state = [];

        [].forEach.call(this.controlPanel.elements, function (element) {
            if (element.type == 'radio' && element.checked) {
                self.state.push({
                    name: element.name,
                    value: element.value,
                    type: element.type
                });
            }

            if (element.type == 'checkbox') {
                self.state.push({
                    name: element.name,
                    value: element.checked,
                    type: element.type
                });
            }

            if (element.type == 'select-one') {
                self.state.push({
                    name: element.name,
                    value: element.value,
                    type: element.type
                });
            }

            if (element.type == 'number') {
                self.state.push({
                    name: element.name,
                    value: element.value,
                    type: element.type
                });
            }

        });

        return this.state;
    };

    WCAGPanel.prototype.restorePanelState = function (state) {
        var self = this;
        this.state = state;
        if (state) {
            [].forEach.call(state, function (elementState) {
                //IE9+ radio buttons restore
                if (elementState.type === 'radio') {
                    var radios = document.getElementsByName(elementState.name);
                    [].forEach.call(radios, function (radio) {
                        if (radio.value === elementState.value) {
                            radio.checked = true;
                        } else {
                            radio.checked = false;
                        }
                    });
                }

                if (elementState.type === 'select-one' || elementState.type === 'number') {
                    self.controlPanel[elementState.name].value = elementState.value;
                }

                if (elementState.type === 'checkbox') {
                    self.controlPanel[elementState.name].checked = elementState.value;
                }
            });
        }

    };

    WCAGPanel.prototype.handleResetForm = function () {
        var self = this;

        document.getElementById('wcag-panel-restore-button').addEventListener('click', function () {
            self.controlPanel.reset();
            self.triggerEvent();
        });
    };

    WCAGPanel.prototype.handleChange = function () {
        var self = this;
        this.controlPanel.addEventListener('change', function (e) {
            self.triggerEvent();
        });
    };

    WCAGPanel.prototype.handleNumberInputsChange = function () {
        var self = this;
        var numbers = this.controlPanel.querySelectorAll('input[type="number"]');

        [].forEach.call(numbers, function (input) {
            input.parentNode.addEventListener('click', function (e) {
                if (e.target.hasAttribute('data-wcag-action')) {
                    var step = +input.step;
                    if (e.target.getAttribute('data-wcag-action') === "lower") {
                        if (input.min && (+input.value - step >= +input.min)) {
                            input.value = +input.value - step;
                            self.triggerEvent(input);
                        }
                    }

                    if (e.target.getAttribute('data-wcag-action') === "higher") {
                        if (input.max && (+input.value + step <= +input.max)) {
                            input.value = +input.value + step;
                            self.triggerEvent(input);
                        }
                    }
                }
            });

            input.addEventListener('change', function () {
                if (+input.value > +input.max) {
                    input.value = input.max;
                }

                if (+input.value < +input.min) {
                    input.value = input.min;
                }
            })
        })
    };

    WCAGPanel.prototype.triggerEvent = function (element) {
        this.event.detail.wcagState = this.getPanelState();
        this.storeConfigToStorage();
        this.controlPanel.dispatchEvent(this.event);
    };

    WCAGPanel.prototype.storeConfigToStorage = function () {
        window.localStorage.setItem('wcagState', JSON.stringify(this.state));
    };

    WCAGPanel.prototype.restoreConfigFromStorage = function () {
        try {
            var config = JSON.parse(window.localStorage.getItem('wcagState'));
            this.restorePanelState(config);
            this.triggerEvent();
        } catch(e) {
            console.log('Cannot get state from storage');
        }
    };

    WCAGPanel.prototype.handleDropdown = function () {
        this.setDefaultDropdown();
        this.handleDropdownBtnClick();
        this.handleDropdownCloseBtnClick();
        this.handleOutsideDropdownClick();
        this.handleOutsideDropdownKeydown();
    };

    WCAGPanel.prototype.handleOutsideDropdownClick = function () {
        var self = this;
        document.onclick = function (e) {
            if (e.target != self.dropdownBtn && !self.isChildOf(e.target, self.controlPanel)) {
                self.closeDropdown();
            }
        }
    };

    // Закрытие дополнительного меню при выходе из него TABом и потере фокуса или при нажатии ESC.
    WCAGPanel.prototype.handleOutsideDropdownKeydown = function () {
        var self = this;
        document.onkeyup = function (e) {
            if (e.keyCode === 27) {
                self.closeDropdown();
            } else if (e.keyCode === 9 && !self.isChildOf(e.target, self.controlPanel)) {
                self.closeDropdown();
            }
        };
    };

    WCAGPanel.prototype.handleDropdownBtnClick = function () {
        var self = this;
        this.dropdownBtnClose.addEventListener('click', function () {
            self.closeDropdown();
        });
    };

    WCAGPanel.prototype.handleDropdownCloseBtnClick = function () {
        var self = this;
        this.dropdownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (self.dropdownBtn.getAttribute('aria-expanded') == 'false') {
                self.openDropdown();
            }
            else {
                self.closeDropdown();
            }
        });
    };

    WCAGPanel.prototype.openDropdown = function () {
        this.dropdownBtn.setAttribute('aria-expanded', 'true');
        this.controlPanel.classList.add('wcag-panel_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'false');
        this.dropdown.setAttribute('aria-expanded', 'true');
    };

    WCAGPanel.prototype.closeDropdown = function () {
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.controlPanel.classList.remove('wcag-panel_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'true');
        this.dropdown.setAttribute('aria-expanded', 'false');
    };

    WCAGPanel.prototype.setDefaultDropdown = function () {
        this.dropdownBtn.setAttribute('aria-haspopup', 'true');
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-hidden', 'true');
    };

    WCAGPanel.prototype.isChildOf = function (child,parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    };

    return WCAGPanel;
})();

new WCAGPanel();