class Accordion {
    constructor(container, options) {
        this.container = container;
        this.triggers = this.container.querySelectorAll('[data-trigger]');

        this.options = {
            multiple: options && options.multiple || false // Если true, то позволяет раскрывать больше чем один элемент
        };

        this.handleEvents();
    }

    handleEvents() {
        this.container.addEventListener('click', event => {
            // Если кликнули не по триггеру, то дальше не идем.
            if (![].some.call(this.triggers, trigger => trigger === event.target)) return;

            /* Для multiple просто переключаем раскрытость текущего элемента, а для single переключаем текущий элемент и закрываем все остальные */
            if (this.options.multiple) {
                this.toggleItem(event.target);
            } else {
                [].forEach.call(this.triggers, trigger => event.target === trigger ? this.toggleItem(trigger) : this.closeItem(trigger));
            }
        })
    }

    /**
     * Переключить текущие элемент
     * @param trigger
     */
    toggleItem(trigger) {
        if (trigger.getAttribute('aria-expanded') === 'false') {
            this.openItem(trigger);
        } else {
            this.closeItem(trigger);
        }
    }

    /**
     * Получить элемент контента по его триггеру
     * @param trigger
     * @returns {Element}
     */
    getTriggerContent(trigger) {
        return trigger.nextElementSibling;
    }

    openItem(trigger) {
        const content = this.getTriggerContent(trigger);
        trigger.setAttribute('aria-expanded', 'true');
        content.removeAttribute('aria-hidden');
    }

    closeItem(trigger) {
        const content = this.getTriggerContent(trigger);
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
    }
}

const accordions = document.querySelectorAll('[data-role="accordion"]');

[].forEach.call(accordions, (item) => new Accordion(item, {multiple: item.hasAttribute('data-multiple')}));