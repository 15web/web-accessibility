'use strict';

import './tabs.scss';


function keyCodes() {

    this.tab = 9;
    this.enter = 13;
    this.esc = 27;

    this.space = 32;
    this.pageup = 33;
    this.pagedown = 34;
    this.end = 35;
    this.home = 36;

    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;

}

export function tabsInit() {
    var tabs = document.querySelectorAll('.tabs');
    [].forEach.call(tabs,function (tab) {
        var panel = new tabpanel(tab);
    });
}
function tabpanel(tab) {
    this.panel = tab;
    this.keys = new keyCodes();
    this.tabs = tab.querySelectorAll('.tabs-list__item');
    this.panels = tab.querySelectorAll('.tabs__inner');
    this.bindHandlers();
    this.init();
}

tabpanel.prototype.init = function () {
    var tab;
    for (var i=0; i < this.panels.length; i++) {
        this.panels[i].setAttribute('aria-hidden', 'true');
    }

    tab = this.panel.querySelector('[aria-selected="true"]');

    this.panel.querySelector('#' + tab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
};


tabpanel.prototype.switchTabs = function ($curTab, $newTab) {
    $curTab.classList.remove('focus');

    $curTab.setAttribute('tabindex', '-1');
    $curTab.setAttribute('aria-selected', 'false');


    $newTab.setAttribute('aria-selected', 'true');
    // hide the current tab panel and set aria-hidden to true
    this.panel.querySelector('#' + $curTab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');

    // show the new tab panel and set aria-hidden to false
    this.panel.querySelector('#' + $newTab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');

    $newTab.setAttribute('tabindex', '0');

    $newTab.focus();

};

tabpanel.prototype.bindHandlers = function () {

    var thisObj = this;
    for(var i=0; i< this.tabs.length; i++) {
        this.tabs[i].addEventListener("keydown", function (e) {
            return thisObj.handleTabKeyDown(this, e);
        });
        this.tabs[i].addEventListener('keypress', function (e) {
            return thisObj.handleTabKeyPress(this, e);
        });
        this.tabs[i].addEventListener('click',function (e) {
            return thisObj.handleTabClick(this, e);
        });
        this.tabs[i].addEventListener('focus',function (e) {
            return thisObj.handleTabFocus(this, e);
        });
        this.tabs[i].addEventListener('blur',function (e) {
            return thisObj.handleTabBlur(this, e);
        });
        this.tabs[i].addEventListener('keydown',function (e) {
            return thisObj.handlePanelKeyDown(this, e);
        });
        this.tabs[i].addEventListener('keypress',function (e) {
            return thisObj.handlePanelKeyPress(this, e);
        });
    }


};
tabpanel.prototype.handleTabKeyDown = function (tab, e) {

    if (e.altKey) {
        return true;
    }

    switch (e.keyCode) {
        case this.keys.enter:
        case this.keys.space:
        {
            return true;
        }
        case this.keys.left:
        case this.keys.up:
        {
            var thisObj = this;
            var $prevTab;
            var $newTab;
            if (e.ctrlKey) {
            }
            else {
                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);
                if (curNdx == 0) {
                    var index = this.tabs.length;
                    $newTab = this.tabs[index-1];
                }
                else {
                    $newTab = this.tabs[curNdx - 1];
                }

                this.switchTabs(tab, $newTab);
            }

            e.stopPropagation();
            return false;
        }
        case this.keys.right:
        case this.keys.down:
        {

            var thisObj = this;
            var foundTab = false;
            var $newTab;

            var curNdx =  Array.prototype.indexOf.call(this.tabs, tab);

            if (curNdx == this.tabs.length - 1) {
                $newTab = this.tabs[0];
            }
            else {
                $newTab = this.tabs[curNdx + 1];
            }
            this.switchTabs(tab, $newTab);

            e.stopPropagation();
            return false;
        }
        case this.keys.home:
        {

            this.switchTabs(tab, this.tabs.first());

            e.stopPropagation();
            return false;
        }
        case this.keys.end:
        {


            this.switchTabs(tab, this.tabs.last());

            e.stopPropagation();
            return false;
        }
    }
};
tabpanel.prototype.handleTabKeyPress = function (tab, e) {

    if (e.altKey) {

        return true;
    }

    switch (e.keyCode) {
        case this.keys.enter:
        case this.keys.space:
        case this.keys.left:
        case this.keys.up:
        case this.keys.right:
        case this.keys.down:
        case this.keys.home:
        case this.keys.end:
        {
            e.stopPropagation();
            return false;
        }
        case this.keys.pageup:
        case this.keys.pagedown:
        {


            if (!e.ctrlKey) {
                return true;
            }

            e.stopPropagation();
            return false;
        }
    }

    return true;

};
tabpanel.prototype.handleTabClick = function (tab, e) {

    for (var i=0; i < this.panels.length; i++) {
        this.panels[i].setAttribute('aria-hidden', 'true');
    }

    for (var i=0; i < this.tabs.length; i++) {
        this.tabs[i].setAttribute('tabindex', '-1');
    }

    tab.setAttribute('aria-selected', 'true');

    this.panel.querySelector('#' + tab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
    tab.setAttribute('tabindex', '0');
    tab.focus();
    return true;

};
tabpanel.prototype.handleTabFocus = function (tab, e) {
    tab.classList.add('focus');
    return true;
};
tabpanel.prototype.handleTabBlur = function (tab, e) {
    tab.classList.remove('focus');
    return true;
};
tabpanel.prototype.handlePanelKeyDown = function ($elem, e) {
    if (e.altKey) {
        return true;
    }

    switch (e.keyCode) {
        case this.keys.esc:
        {
            e.stopPropagation();
            return false;
        }
        case this.keys.left:
        case this.keys.up:
        {

            if (!e.ctrlKey) {

                return true;
            }
            var tab = document.querySelector('#' + $elem.getAttribute('aria-labelledby'));
            tab.focus();

            e.stopPropagation();
            return false;
        }
        case this.keys.pageup:
        {

            var $newTab;

            if (!e.ctrlKey) {

                return true;
            }


            var tab = this.tabs.querySelector('[aria-selected="true"]');

            var curNdx = Array.prototype.indexOf.call(this.tabs, tab);

            if (curNdx == 0) {
                var index = this.tabs.length;
                $newTab = this.tabs[index-1];
            }
            else {
                $newTab = this.tabs[curNdx - 1];
            }

            this.switchTabs(tab, $newTab);

            e.stopPropagation();
            e.preventDefault();
            return false;
        }
        case this.keys.pagedown:
        {

            var $newTab;

            if (!e.ctrlKey) {

                return true;
            }


            var tab = $('#' + $elem.attr('aria-labelledby'));


            var curNdx = Array.prototype.indexOf.call(this.tabs, tab);

            if (curNdx == this.tabs.length - 1) {

                $newTab = this.tabs[0];
            }
            else {
                $newTab = this.tabs[curNdx + 1];
            }


            this.switchTabs(tab, $newTab);

            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    }

    return true;

};
tabpanel.prototype.handlePanelKeyPress = function ($elem, e) {

    if (e.altKey) {

        return true;
    }

    if (e.ctrlKey && (e.keyCode == this.keys.pageup || e.keyCode == this.keys.pagedown)) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }

    switch (e.keyCode) {
        case this.keys.esc:
        {
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    }

    return true;

};
