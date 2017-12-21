/* ================================
 *   Обработчик события изменения параметров панели ВДС
 *  ================================ */
document.addEventListener('wcag:action', function (event) {
    var config = event.wcagState;
    if (config && config instanceof Object) {
        var html = document.documentElement;
        config.forEach(function (key) {
            html.setAttribute('data-'+key.name, key.value);
        });
    }

});

/*  ================================
 *   Панель ВДС и полифил для кастомных событий
 *  ================================ */

/**
 * WCAGPanel
 * Обрабатывает клик по кнопке "Настройки" и открывает дропдаун
 * При клике генерирует событие wcag:action на элементе панели, в которое передает
 * данные о том, какое было действие и с каким значением
 * @constructor
 */

var WCAGPanel = function (panel) {
    this.controlPanel = panel;
    this.dropdownBtnOpen = panel.querySelector('[data-wcag-panel="dropdown-open"]');
    this.dropdownBtnClose = panel.querySelector('[data-wcag-panel="dropdown-close"]');
    this.dropdown = panel.querySelector('[data-wcag-panel="dropdown"]');
    // this.anchorLink = document.getElementById('anchor-link'); смотреть метод ниже
    this.state = [];

    this.event = document.createEvent('Event');
    this.event.initEvent('wcag:action', true, false);

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
    this.event.wcagState = this.getPanelState();
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
        if (e.target != self.dropdownBtnOpen && !self.isChildOf(e.target, self.controlPanel)) {
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
    this.dropdownBtnOpen.addEventListener('click', function (e) {
        e.preventDefault();
        if (self.dropdownBtnOpen.getAttribute('aria-expanded') == 'false') {
            self.openDropdown();
        }
        else {
            self.closeDropdown();
        }
    });
};

WCAGPanel.prototype.openDropdown = function () {
    this.dropdownBtnOpen.setAttribute('aria-expanded', 'true');
    this.controlPanel.classList.add('wcag-panel_show-dropdown');
    this.dropdown.setAttribute('aria-hidden', 'false');
    this.dropdown.setAttribute('aria-expanded', 'true');
};

WCAGPanel.prototype.closeDropdown = function () {
    this.dropdownBtnOpen.setAttribute('aria-expanded', 'false');
    this.controlPanel.classList.remove('wcag-panel_show-dropdown');
    this.dropdown.setAttribute('aria-hidden', 'true');
    this.dropdown.setAttribute('aria-expanded', 'false');
};

WCAGPanel.prototype.setDefaultDropdown = function () {
    this.dropdownBtnOpen.setAttribute('aria-haspopup', 'true');
    this.dropdownBtnOpen.setAttribute('aria-expanded', 'false');
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

var panel = document.getElementById('wcag-panel');
if (panel) {
    new WCAGPanel(panel);
}
