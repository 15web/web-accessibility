var WCAGPanelWithHandlers = (function () {

    var WCAGPanelWithHandlers = function () {
        this.switchers = document.getElementsByClassName('js-wcag-panel-switcher');
        this.constants = {
            switcherSelector: 'js-wcag-panel-switcher',
            switcherItemSelector: 'js-wcag-panel-switcher-item',
            switcherItemSelectorActive: 'active'
        };
        this.storageKey = 'wcag-panel';
        this.document = document.documentElement;

        WCAGPanel.apply(this);
    };
    WCAGPanelWithHandlers.prototype = Object.create(WCAGPanel.prototype);
    WCAGPanelWithHandlers.prototype.construnctor = WCAGPanel;


    WCAGPanelWithHandlers.prototype.init = function () {
        WCAGPanel.prototype.init.apply(this, arguments);
        this.handleSwitcherClick();
        this.setDefaultDataAttrs();
    };

    WCAGPanelWithHandlers.prototype.setDefaultDataAttrs = function () {
        var storage = this.getLocalStorage();
        localStorage[this.storageKey] = JSON.stringify(storage);
        this.updateDataAttrs(storage);
    };

    WCAGPanelWithHandlers.prototype.handleSwitcherClick = function () {
        //клик по группе переключателей
        for (var i = 0; i < this.switchers.length; i++) {
            this.switchers[i].addEventListener("click", this.handleSwitcherItemClick.bind(this), false);
        }
    };

    WCAGPanelWithHandlers.prototype.handleSwitcherItemClick = function (e) {
        var target = e.target;
        //клик по элементу переключателя
        if (target !== e.currentTarget) {
            var siblings = Array.prototype.filter.call(target.parentNode.children, function (child) {
                return child !== target;
            });
            for (var i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove(this.constants.switcherItemSelectorActive);
            }
            target.classList.toggle(this.constants.switcherItemSelectorActive);

            var action = target.getAttribute('data-action');
            if (action) {
                this[action]();
            }
        }
    };

    WCAGPanelWithHandlers.prototype.getLocalStorage = function () {
        var state = localStorage.getItem(this.storageKey);
        if (state) {
            return JSON.parse(state);
        }
        return {
            "fontsize": "normal",
            "images": "on",
            "color": "white"
        };
    };

    WCAGPanelWithHandlers.prototype.setLocalStorageItem = function (name, value) {
        var state = this.getLocalStorage();
        state[name] = value;
        localStorage[this.storageKey] = JSON.stringify(state);
        this.updateDataAttrs(state);
    };

    WCAGPanelWithHandlers.prototype.updateDataAttrs = function (storage) {
        for (var i = 0; i < Object.keys(storage).length; i++) {
            var key = Object.keys(storage)[i];
            var value = storage[key];
            this.document.dataset[key] = value;
        }
    };

    WCAGPanelWithHandlers.prototype.largeFontSize = function () {
        this.setLocalStorageItem('fontsize', 'large');
    };

    WCAGPanelWithHandlers.prototype.normalFontSize = function () {
        this.setLocalStorageItem('fontsize', 'normal');
    };

    WCAGPanelWithHandlers.prototype.smallFontSize = function () {
        this.setLocalStorageItem('fontsize', 'small');
    };

    WCAGPanelWithHandlers.prototype.showImages = function () {
        this.setLocalStorageItem('image', 'on');
    };

    WCAGPanelWithHandlers.prototype.hideImages = function () {
        this.setLocalStorageItem('image', 'off');
    };

    WCAGPanelWithHandlers.prototype.setWhiteColor = function () {
        this.setLocalStorageItem('color', 'white');
    };

    WCAGPanelWithHandlers.prototype.setBlackColor = function () {
        this.setLocalStorageItem('color', 'black');
    };

    WCAGPanelWithHandlers.prototype.setBlueColor = function () {
        this.setLocalStorageItem('color', 'blue');
    };


    return WCAGPanelWithHandlers;
})();