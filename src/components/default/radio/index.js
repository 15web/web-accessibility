/**
 * Created by HeadFire94Work on 12.05.2016.
 */
'use strict';

import './radio.scss';
//@todo рефакторинг

var radio = document.querySelectorAll('input[type=radio]');

function radioToggleAria() {
    //удаляем aria-checked у всех
    var group = document.getElementsByName(this.getAttribute('name'));
    for (var i = 0; i < group.length; i++) {
        group[i].setAttribute('aria-checked', 'false');
    }
    //ставим только выбраному
    this.setAttribute("aria-checked", "true");
    this.focus();
}

function radioEventHandler(t) {
    for (var i = 0; i < t.length; i++) {
        t[i].addEventListener("change", radioToggleAria);
        if(t[i].disabled) {
            t[i].setAttribute('aria-disabled', 'true');
        }
        if(t[i].checked) {
            t[i].setAttribute('aria-checked', 'true');
        }
        else if (!t[i].checked) {
            t[i].setAttribute('aria-checked', 'false');
        }
    }
}

radioEventHandler(radio);
