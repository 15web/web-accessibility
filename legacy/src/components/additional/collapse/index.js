'use strict';
import _ from 'lodash';

import './collapse.scss';

class Collapse{
    constructor() {
        this.collapseButtons = document.querySelectorAll('.collapse__button');
        this.init();
    }
    init() {
        _.each(this.collapseButtons, (item, index, collapseButtons)=> {
            this.handleClick(item)
        })
    }

    handleClick(item) {
        item.addEventListener('click',(e)=> {
            e.preventDefault();
            const target = e.target;
            const collapseDropdown = document.querySelector('#' + target.getAttribute('aria-controls'));
            this.toggleDropdown(collapseDropdown, item);
        });
    }

    toggleDropdown(collapseDropdown, trigger) {
        collapseDropdown.classList.toggle('collapse__panel_hidden');
        if (trigger.getAttribute('aria-expanded') == 'false') {
            trigger.setAttribute('aria-expanded', 'true');
            collapseDropdown.focus();
        }
        else {
            trigger.setAttribute('aria-expanded', 'false');
        }
    }
}

$(document).ready(function () {
    new Collapse();
});