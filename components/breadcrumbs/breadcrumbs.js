'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Breadcrumbs = function () {
    function Breadcrumbs(container) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Breadcrumbs);

        this.container = container;
        this.dropdownLinks = this.container.querySelectorAll('[aria-haspopup="true"]');
        this.options = {
            hideTimeout: options.hideTimeout || 200
        };

        if (!this.dropdownLinks.length) return;

        this.init();
    }

    _createClass(Breadcrumbs, [{
        key: 'init',
        value: function init() {
            var _this = this;

            [].forEach.call(this.dropdownLinks, function (item) {
                item.addEventListener('keydown', function (event) {
                    if (event.keyCode !== 40 && event.keyCode !== 32) return;
                    event.preventDefault();
                    _this.toggleDropdown(item);
                });

                var arrow = item.querySelector('span');
                if (arrow) {
                    arrow.addEventListener('touchend', function (event) {
                        event.preventDefault();
                        _this.toggleDropdown(item);
                    });
                }

                var timer = void 0;
                item.parentElement.addEventListener('mouseenter', function () {
                    clearTimeout(timer);
                    _this.openDropdown(item);
                });
                item.parentElement.addEventListener('mouseleave', function () {
                    timer = setTimeout(function () {
                        _this.closeDropdown(item);
                    }, _this.options.hideTimeout);
                });

                var dropdown = _this.getDropdownByItem(item);

                dropdown.style.display = 'none';

                dropdown.addEventListener('transitionend', function (event) {
                    if (event.propertyName !== 'opacity') return;

                    if (dropdown.hasAttribute('aria-hidden')) {
                        dropdown.style.display = 'none';
                    }
                });
            });

            var closeNotTargetedItems = function closeNotTargetedItems(event) {
                [].forEach.call(_this.dropdownLinks, function (item) {
                    var parent = item.parentNode;
                    if (!parent.contains(event.target)) {
                        _this.closeDropdown(item);
                    }
                });
            };

            document.addEventListener('click', closeNotTargetedItems);
            document.addEventListener('touchend', closeNotTargetedItems);

            document.addEventListener('keyup', function (event) {
                if (event.keyCode !== 9) return;

                closeNotTargetedItems(event);
            });
        }
    }, {
        key: 'getDropdownByItem',
        value: function getDropdownByItem(item) {
            return item.nextElementSibling;
        }
    }, {
        key: 'toggleDropdown',
        value: function toggleDropdown(item) {
            item.getAttribute('aria-expanded') === 'false' ? this.openDropdown(item) : this.closeDropdown(item);
        }
    }, {
        key: 'openDropdown',
        value: function openDropdown(item) {
            var dropdown = this.getDropdownByItem(item);
            item.setAttribute('aria-expanded', 'true');
            dropdown.style.display = '';

            setTimeout(function () {
                return dropdown.removeAttribute('aria-hidden');
            }, 0);
        }
    }, {
        key: 'closeDropdown',
        value: function closeDropdown(item) {
            var dropdown = this.getDropdownByItem(item);
            item.setAttribute('aria-expanded', 'false');
            dropdown.setAttribute('aria-hidden', 'true');
        }
    }]);

    return Breadcrumbs;
}();

var crumbs = document.querySelectorAll('[data-role="breadcrumbs"]');

[].forEach.call(crumbs, function (item) {
    new Breadcrumbs(item);
});