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


export function tabpanel(id, accordian) {


    this.panel_id = id;
    this.accordian = accordian;
    this.$panel = $('#' + id);
    this.keys = new keyCodes();
    this.$tabs = this.$panel.find('.tabs-list__item');
    this.$panels = this.$panel.children('.tabs__inner');


    this.bindHandlers();


    this.init();

}


tabpanel.prototype.init = function () {
    var $tab;


    this.$panels.attr('aria-hidden', 'true');


    $tab = this.$tabs.filter('[aria-selected="true"]');

    if ($tab == undefined) {
        $tab = this.$tabs.first();
    }


    this.$panel.find('#' + $tab.attr('aria-controls')).attr('aria-hidden', 'false');

};


tabpanel.prototype.switchTabs = function ($curTab, $newTab) {


    $curTab.removeClass('focus');


    $curTab.attr('tabindex', '-1').attr('aria-selected', 'false');


    $newTab.attr('aria-selected', 'true');


    if (this.accordian == false) {

        this.$panel.find('#' + $curTab.attr('aria-controls')).attr('aria-hidden', 'true');


        this.$panel.find('#' + $newTab.attr('aria-controls')).attr('aria-hidden', 'false');
    }


    $newTab.attr('tabindex', '0');


    $newTab.focus();

};


tabpanel.prototype.togglePanel = function ($tab) {

    var $panel = this.$panel.find('#' + $tab.attr('aria-controls'));

    if ($panel.attr('aria-hidden') == 'true') {
        $panel.slideDown(100);
        $panel.attr('aria-hidden', 'false');
    }
    else {
        $panel.slideUp(100);
        $panel.attr('aria-hidden', 'true');
    }
};
tabpanel.prototype.bindHandlers = function () {

    var thisObj = this;


    this.$tabs.keydown(function (e) {
        return thisObj.handleTabKeyDown($(this), e);
    });


    this.$tabs.keypress(function (e) {
        return thisObj.handleTabKeyPress($(this), e);
    });


    this.$tabs.click(function (e) {
        return thisObj.handleTabClick($(this), e);
    });


    this.$tabs.focus(function (e) {
        return thisObj.handleTabFocus($(this), e);
    });


    this.$tabs.blur(function (e) {
        return thisObj.handleTabBlur($(this), e);
    });


    this.$panels.keydown(function (e) {
        return thisObj.handlePanelKeyDown($(this), e);
    });


    this.$panels.keypress(function (e) {
        return thisObj.handlePanelKeyPress($(this), e);
    });

};


tabpanel.prototype.handleTabKeyDown = function ($tab, e) {

    if (e.altKey) {

        return true;
    }

    switch (e.keyCode) {
        case this.keys.enter:
        case this.keys.space:
        {


            if (this.accordian == true) {

                this.togglePanel($tab);

                e.stopPropagation();
                return false;
            }

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
                var curNdx = this.$tabs.index($tab);

                if (curNdx == 0) {


                    $newTab = this.$tabs.last();
                }
                else {

                    $newTab = this.$tabs.eq(curNdx - 1);
                }


                this.switchTabs($tab, $newTab);
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

            var curNdx = this.$tabs.index($tab);

            if (curNdx == this.$tabs.length - 1) {


                $newTab = this.$tabs.first();
            }
            else {

                $newTab = this.$tabs.eq(curNdx + 1);
            }


            this.switchTabs($tab, $newTab);

            e.stopPropagation();
            return false;
        }
        case this.keys.home:
        {


            this.switchTabs($tab, this.$tabs.first());

            e.stopPropagation();
            return false;
        }
        case this.keys.end:
        {


            this.switchTabs($tab, this.$tabs.last());

            e.stopPropagation();
            return false;
        }
    }
};


tabpanel.prototype.handleTabKeyPress = function ($tab, e) {

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


tabpanel.prototype.handleTabClick = function ($tab, e) {


    this.$panels.attr('aria-hidden', 'true');


    this.$tabs.attr('tabindex', '-1').attr('aria-selected', 'false');


    $tab.attr('aria-selected', 'true');


    this.$panel.find('#' + $tab.attr('aria-controls')).attr('aria-hidden', 'false');


    $tab.attr('tabindex', '0');


    $tab.focus();

    return true;

};


tabpanel.prototype.handleTabFocus = function ($tab, e) {


    $tab.addClass('focus');

    return true;

};


tabpanel.prototype.handleTabBlur = function ($tab, e) {


    $tab.removeClass('focus');

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


            var $tab = $('#' + $elem.attr('aria-labelledby'));


            $tab.focus();

            e.stopPropagation();
            return false;
        }
        case this.keys.pageup:
        {

            var $newTab;

            if (!e.ctrlKey) {

                return true;
            }


            var $tab = this.$tabs.filter('[aria-selected="true"]');


            var curNdx = this.$tabs.index($tab);

            if (curNdx == 0) {

                $newTab = this.$tabs.last();
            }
            else {

                $newTab = this.$tabs.eq(curNdx - 1);
            }


            this.switchTabs($tab, $newTab);

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


            var $tab = $('#' + $elem.attr('aria-labelledby'));


            var curNdx = this.$tabs.index($tab);

            if (curNdx == this.$tabs.length - 1) {

                $newTab = this.$tabs.first();
            }
            else {

                $newTab = this.$tabs.eq(curNdx + 1);
            }


            this.switchTabs($tab, $newTab);

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


$.extend($.expr[':'], {
    focusable: function (element) {
        var nodeName = element.nodeName.toLowerCase();
        var tabIndex = $(element).attr('tabindex');


        if (($(element)[nodeName == 'area' ? 'parents' : 'closest'](':hidden').length) == true) {
            return false;
        }


        if (!isNaN(tabIndex) && tabIndex < 0) {
            return false;
        }


        if (/input|select|textarea|button|object/.test(nodeName) == true) {

            return !element.disabled;
        }


        if ((nodeName == 'a' || nodeName == 'area') == true) {

            return (element.href.length > 0);
        }


        return false;
    }
});
