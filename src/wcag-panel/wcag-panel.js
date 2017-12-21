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
    this.resetBtn = panel.querySelector('[data-wcag-panel="reset"]');
    this.dropdown = panel.querySelector('[data-wcag-panel="dropdown"]');
    // this.anchorLink = document.getElementById('anchor-link'); смотреть метод ниже
    this.state = [];

    this.event = document.createEvent('Event');
    this.event.initEvent('wcag:action', true, false);

    this.init();
};

WCAGPanel.prototype.init = function () {
    this.restoreConfigFromStorage();

    this.handleClick();

    this.handleDropdown();
    this.handleChange();
    // this.handleAnchorLinkClick(); смотреть метод ниже

    this.controlPanel.addEventListener('submit', function (e) {
        e.preventDefault();
    });
};

/**
 * Получаем состояние формы.
 * Проходимся по всем выбранным элементам группы и собираем из них значения для состояния формы.
 * @returns {Array}: [{name: 'fontsize', value: 'big'}, {name: 'color', value: 'black'}, ...]
 */
WCAGPanel.prototype.getPanelState = function () {
    var state = [];

    var checkedElements = this.controlPanel.querySelectorAll('input:checked');

    [].forEach.call(checkedElements, function (element) {
        state.push({
            name: element.name,
            value: element.value
        });
    });

    return state;
};

/**
 * Восстанавливаем состояние формы до переданного state.
 * Ищем управляющий элемент с именем и значением из elementState и делаем его выбранным.
 * @param state {Array}: [{name: 'fontsize', value: 'big'}, {name: 'color', value: 'black'}, ...]
 */
WCAGPanel.prototype.restorePanelState = function (state) {
    var self = this;

    if (state instanceof Array) {

        state.forEach(function (elementState) {
            var element = self.controlPanel.querySelector('[name="'+ elementState.name +'"][value="'+ elementState.value +'"]');

            if (element) {
                element.checked = true;
            }
        });
    }
};

/**
 * Генерируем событие с состоянием формы
 * @param element
 */
WCAGPanel.prototype.triggerEvent = function () {
    this.state = this.getPanelState();
    this.event.wcagState = this.state;
    this.storeConfigToStorage(this.state);
    this.controlPanel.dispatchEvent(this.event);
};

/**
 * Сохраняем конфигурацию в localStorage браузера
 */
WCAGPanel.prototype.storeConfigToStorage = function (config) {
    window.localStorage.setItem('wcagState', JSON.stringify(config));
};

/**
 * Восстанавливаем состояние панели ВДС из localStorage
 */
WCAGPanel.prototype.restoreConfigFromStorage = function () {
    try {
        var config = JSON.parse(window.localStorage.getItem('wcagState'));
        this.restorePanelState(config);
        this.triggerEvent();
    } catch(e) {
        console.error('Cannot get state from storage');
    }
};

WCAGPanel.prototype.handleClick = function () {
    var self = this;
    this.controlPanel.addEventListener('click', function (event) {
        if (event.target.hasAttribute('data-wcag-panel')) {
            var targetRole = event.target.getAttribute('data-wcag-panel');

            switch (targetRole) {
                case 'dropdown-open':
                    console.log('dropdown-open');
                    break;
                case 'dropdown-close':
                    console.log('dropdown-close');
                    break;
                case 'reset-config':
                    self.controlPanel.reset();
                    self.triggerEvent();
                    break;
                default:
                    break;
            }
        }
    })
};

WCAGPanel.prototype.handleChange = function () {
    var self = this;
    this.controlPanel.addEventListener('change', function (e) {
        self.triggerEvent();
    });
};


WCAGPanel.prototype.handleDropdown = function () {
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
