'use strict';
import _ from 'lodash';
import './checkbox.scss';

class CheckBox {
    constructor() {
        this.checkboxes = document.querySelectorAll('input[type=checkbox]');
        this.init();
    }

    setDefaultAria(item) {

        if(item.disabled) {
            item.setAttribute('aria-disabled', 'true');
        }
        if(item.checked) {
            item.setAttribute('aria-checked', 'true');
        }
        else if (!item.checked) {
            item.setAttribute('aria-checked', 'false');
        }
    }

    init() {
        _.each(this.checkboxes, (item, index, collection) => {
            this.setDefaultAria(item);
            this.handleClick(item);
        });
    }

    checkboxToggleAria(e) {
        var target = e.target;
        target.setAttribute("aria-checked", !JSON.parse(target.getAttribute("aria-checked")));
        target.focus();
    }

    handleClick(item) {
        item.addEventListener('click', this.checkboxToggleAria)
    }
}

$(document).ready(function () {
    new CheckBox();
});

