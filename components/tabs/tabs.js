'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEYS = {
    enter: 13,
    arrowLeft: 37,
    arrowRight: 39
};

var Tabs = function () {
    function Tabs(container) {
        _classCallCheck(this, Tabs);

        this.container = container;
        this.tabsRoot = this.container.querySelector('[role=tablist]');
        this.tabs = this.container.querySelectorAll('[role=tab]');
        this.panels = this.container.querySelectorAll('[role=tabpanel]');
        this.setEventHandlers();
    }

    _createClass(Tabs, [{
        key: 'setEventHandlers',
        value: function setEventHandlers() {
            var _this = this;

            this.tabsRoot.addEventListener('click', function (event) {
                if (!_this.tabsRoot.contains(event.target) || event.target === _this.tabsRoot) return;
                _this.setTabActive(event.target);
            });

            this.tabsRoot.addEventListener('keydown', function (event) {
                if (event.keyCode !== KEYS.enter) return;
                _this.setTabActive(event.target);
            });

            this.tabsRoot.addEventListener('keydown', function (event) {
                if (event.keyCode !== KEYS.arrowLeft && event.keyCode !== KEYS.arrowRight) return;

                var activeTab = _this.tabsRoot.querySelector('[aria-selected="true"]');

                var target = activeTab[event.keyCode === KEYS.arrowLeft ? 'previousElementSibling' : 'nextElementSibling'];

                if (target) {
                    _this.setTabActive(target);
                    target.focus();
                }
            });
        }
    }, {
        key: 'setTabActive',
        value: function setTabActive(targetTab) {
            [].forEach.call(this.tabs, function (tab) {
                tab.setAttribute('aria-selected', tab === targetTab ? 'true' : 'false');
            });

            [].forEach.call(this.panels, function (panel) {
                panel.setAttribute('aria-hidden', targetTab.getAttribute('aria-controls') === panel.id ? 'false' : 'true');
            });
        }
    }]);

    return Tabs;
}();

var tabs = document.querySelectorAll('[data-role="tabs"]');

[].forEach.call(tabs, function (tabsContainer) {
    new Tabs(tabsContainer);
});