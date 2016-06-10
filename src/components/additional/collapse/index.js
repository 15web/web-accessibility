'use strict';

// @TODO: Рефакторинг компонента.

import './collapse.scss';

export function collapseInit() {
    var collapses = document.querySelectorAll('.collapse-button');
    [].forEach.call(collapses,function (collapse) {
        var collapse = new hideShow(collapse);
    });
}

function hideShow(target) {
    this.target = target;
    this.region = document.querySelector('#' + this.target.getAttribute('aria-controls'));
    this.keys = {
        enter: 13,
        space: 32
    };

    this.toggleSpeed = 100;

    this.bindHandlers();

}


hideShow.prototype.bindHandlers = function () {
    var thisObj = this;
    this.target.addEventListener('click', function (e) {
        thisObj.toggleRegion();
        e.stopPropagation();
        return false;
    });
};


hideShow.prototype.toggleRegion = function () {
    var thisObj = this.region;
    console.log(thisObj);
    this.region.classList.toggle('collapse');
        if (thisObj.getAttribute('aria-expanded') == 'false') {
            thisObj.setAttribute('aria-expanded', 'true');
            thisObj.focus();
        }
        else {
            thisObj.setAttribute('aria-expanded', 'false');
        }
};