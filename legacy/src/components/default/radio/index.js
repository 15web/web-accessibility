'use strict';

import _ from 'lodash';
import './radio.scss';

class Radio {
    constructor() {
        this.radio = document.querySelectorAll('input[type=radio]');
        this.init();
    }

    setDefaultAria(item) {

        if (item.disabled) {
            item.setAttribute('aria-disabled', 'true');
        }
        if (item.checked) {
            item.setAttribute('aria-checked', 'true');
        }
        else if (!item.checked) {
            item.setAttribute('aria-checked', 'false');
        }
    }

    init() {
        _.each(this.radio, (item, index, collection) => {
            this.setDefaultAria(item);
            this.handleChange(item);
        });
    }

    radioToggleAria(e) {
        var target = e.target;
        var radioGroup = document.getElementsByName(target.getAttribute('name'));
        // delete aria for each in group
        _.each(radioGroup, (item, index, collection) => {
            item.setAttribute('aria-checked', 'false');
        });

        target.setAttribute('aria-checked', true);
        target.focus();
    }

    handleChange(item) {
        item.addEventListener('change', this.radioToggleAria)
    }
}

$(document).ready(function () {
    new Radio();
});