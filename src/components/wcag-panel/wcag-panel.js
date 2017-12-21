/* ================================
 *   Обработчик события изменения параметров панели ВДС
 *  ================================ */
document.addEventListener('wcag:action', function (event) {
    var config = event.wcagState;
    if (config && config instanceof Object) {
        var html = document.documentElement;
        /**
         * Добавляем к html атрибуты из конфигурации
         */
        config.forEach(function (key) {
            html.setAttribute('data-'+key.name, key.value);
        });
    }

});

/*  ================================
 *   Панель ВДС
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
    this.dropdownToggleBtn = panel.querySelector('[data-wcag-panel="dropdown-toggle"]');
    this.dropdown = panel.querySelector('[data-wcag-panel="dropdown"]');
    this.state = [];

    this.event = document.createEvent('Event');
    this.event.initEvent('wcag:action', true, false);

    this.init();
};

WCAGPanel.prototype.init = function () {
    this.restoreConfigFromStorage();

    this.handleClick();

    this.handleDropdownKeyup();

    this.handleChange();

    this.controlPanel.addEventListener('submit', function (event) {
        event.preventDefault();
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

/**
 * Обработка кликов по элементам панели
 */
WCAGPanel.prototype.handleClick = function () {
    var self = this;

    this.controlPanel.addEventListener('click', function (event) {
        if (event.target.hasAttribute('data-wcag-panel')) {
            var targetRole = event.target.getAttribute('data-wcag-panel');

            switch (targetRole) {
                case 'dropdown-toggle': // Клик по кнопке скрывающей/отображающей панель
                    if (event.target.getAttribute('aria-expanded') === 'false') {
                        self.openDropdown();
                    } else {
                        self.closeDropdown();
                    }
                    break;
                case 'dropdown-close': // Клик по кнопке "Закрыть панель"
                    self.closeDropdown();
                    break;
                case 'reset-config': // Клик по кнопке "Сбросить настройки"
                    self.controlPanel.reset();
                    self.triggerEvent();
                    break;
                default:
                    break;
            }
        }
    });

    /**
     * При клике вне панели, закрываем dropdown, если dropdown еще не закрыт
     */
    if (this.dropdown) {
        document.addEventListener('click', function (event) {
            if (self.isChildOf(event.target, self.controlPanel)) {
                return;
            }

            if (self.dropdown.getAttribute('aria-hidden') === 'true') {
                return;
            }

            self.closeDropdown();
        });
    }
};

/**
 * Обрабатываем изменение элементов формы
 */
WCAGPanel.prototype.handleChange = function () {
    var self = this;
    this.controlPanel.addEventListener('change', function (e) {
        self.triggerEvent();
    });
};

/**
 * Обработчик нажатия ESC и ухода из панели с помощью TAB
 */
WCAGPanel.prototype.handleDropdownKeyup = function () {
    var self = this;

    if (!this.dropdown) {
        return;
    }

    document.addEventListener('keyup', function (event) {
        /* Нажали ESC */
        if (event.keyCode === 27) {
            self.closeDropdown();
        }

        /* Клавишей TAB вышли за пределы dropdown */
        if (event.keyCode === 9 && !self.isChildOf(event.target, self.controlPanel) && self.dropdown.getAttribute('aria-hidden') !== 'true') {
            self.closeDropdown();
        }
    });
};

WCAGPanel.prototype.openDropdown = function () {
    if (!this.dropdown || !this.dropdownToggleBtn) {
        return;
    }
    this.dropdownToggleBtn.setAttribute('aria-expanded', 'true');
    this.dropdown.setAttribute('aria-hidden', 'false');
    this.dropdown.setAttribute('aria-expanded', 'true');
};

WCAGPanel.prototype.closeDropdown = function () {
    if (!this.dropdown || !this.dropdownToggleBtn) {
        return;
    }
    this.dropdownToggleBtn.setAttribute('aria-expanded', 'false');
    this.dropdown.setAttribute('aria-hidden', 'true');
    this.dropdown.setAttribute('aria-expanded', 'false');
};

/**
 * Проверяем, является ли child потомком для parent
 * @param child
 * @param parent
 * @returns {boolean}
 */
WCAGPanel.prototype.isChildOf = function (child, parent) {
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
