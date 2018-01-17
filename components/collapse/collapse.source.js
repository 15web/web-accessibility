'use strict';

class Collapse {
    constructor(container) {
        this.container = container;
        this.trigger = this.container.querySelector('[aria-controls]');

        if (!this.trigger) return;

        this.content = this.container.querySelector('#'+this.trigger.getAttribute('aria-controls'));

        if (!this.content) return;

        this.handleClick();
    }

    handleClick() {
        this.trigger.addEventListener('click', (event) => {
            event.preventDefault();
            this.toggleDropdown();
        });
    }

    toggleDropdown() {
        if (this.trigger.getAttribute('aria-expanded') === 'false') {
            this.trigger.setAttribute('aria-expanded', 'true');
            this.content.removeAttribute('hidden');
        }
        else {
            this.trigger.setAttribute('aria-expanded', 'false');
            this.content.setAttribute('hidden', 'true');
        }
    }
}

const collapseItems = document.querySelectorAll('[data-role="collapse"]');

[].forEach.call(collapseItems, function (collapse) {
    new Collapse(collapse);
});

