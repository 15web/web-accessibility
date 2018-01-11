const KEYS = {
    enter: 13,
    arrowLeft: 37,
    arrowRight: 39,
};

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabsRoot = this.container.querySelector('[role=tablist]');
        this.tabs = this.container.querySelectorAll('[role=tab]');
        this.panels = this.container.querySelectorAll('[role=tabpanel]');
        this.setEventHandlers();
    }

    setEventHandlers() {
        /**
         *  При клике мышью делаем вкладку активной
         */
        this.tabsRoot.addEventListener('click', (event) => {
            this.setTabActive(event.target);
        });

        /**
         * При нажатии клавиши Enter делаем вкладку активной
         */
        this.tabsRoot.addEventListener('keydown', event => {
            if (event.keyCode !== KEYS.enter) return;
            this.setTabActive(event.target);
        });

        /**
         * Обрабатываем нажатие стрелок клавиатуры
         */
        this.tabsRoot.addEventListener('keydown', event => {
            if (event.keyCode !== KEYS.arrowLeft && event.keyCode !== KEYS.arrowRight) return;

            const activeTab = this.tabsRoot.querySelector('[aria-selected="true"]');

            // В зависимости от того, нажата стрелка влево или вправо, берем либо следующий, либо предыдущий элемент.
            const target = activeTab[event.keyCode === KEYS.arrowLeft ? 'previousElementSibling' : 'nextElementSibling'];

            if (target) {
                this.setTabActive(target);
                target.focus();
            }
        });

    }

    /**
     * Установить targetTab активной.
     * Меняет aria атрибуты у навигационных элементов и у контента
     * @param targetTab
     */
    setTabActive(targetTab) {
        [].forEach.call(this.tabs, (tab) => {
            tab.setAttribute('aria-selected', tab === targetTab ? 'true' : 'false');
        });

        [].forEach.call(this.panels, (panel) => {
            panel.setAttribute('aria-hidden', targetTab.getAttribute('aria-controls') === panel.id ? 'false' : 'true');
        });
    }
}

const tabs = document.querySelectorAll('[data-role="tabs"]');

[].forEach.call(tabs, function (tabsContainer) {
   new Tabs(tabsContainer);
});
