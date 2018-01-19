'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accordion = function () {
    function Accordion(container, options) {
        _classCallCheck(this, Accordion);

        this.container = container;
        this.triggers = this.container.querySelectorAll('[data-trigger]');

        this.options = {
            multiple: options && options.multiple || false };

        this.handleEvents();
    }

    _createClass(Accordion, [{
        key: 'handleEvents',
        value: function handleEvents() {
            var _this = this;

            this.container.addEventListener('click', function (event) {
                if (![].some.call(_this.triggers, function (trigger) {
                    return trigger === event.target;
                })) return;

                if (_this.options.multiple) {
                    _this.toggleItem(event.target);
                } else {
                    [].forEach.call(_this.triggers, function (trigger) {
                        return event.target === trigger ? _this.toggleItem(trigger) : _this.closeItem(trigger);
                    });
                }
            });
        }
    }, {
        key: 'toggleItem',
        value: function toggleItem(trigger) {
            if (trigger.getAttribute('aria-expanded') === 'false') {
                this.openItem(trigger);
            } else {
                this.closeItem(trigger);
            }
        }
    }, {
        key: 'getTriggerContent',
        value: function getTriggerContent(trigger) {
            return trigger.nextElementSibling;
        }
    }, {
        key: 'openItem',
        value: function openItem(trigger) {
            var content = this.getTriggerContent(trigger);
            trigger.setAttribute('aria-expanded', 'true');
            content.removeAttribute('aria-hidden');
        }
    }, {
        key: 'closeItem',
        value: function closeItem(trigger) {
            var content = this.getTriggerContent(trigger);
            trigger.setAttribute('aria-expanded', 'false');
            content.setAttribute('aria-hidden', 'true');
        }
    }]);

    return Accordion;
}();

var accordions = document.querySelectorAll('[data-role="accordion"]');

[].forEach.call(accordions, function (item) {
    return new Accordion(item, { multiple: item.hasAttribute('data-multiple') });
});