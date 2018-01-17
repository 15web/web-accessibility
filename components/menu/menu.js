'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
    function Menu(menu, options) {
        _classCallCheck(this, Menu);

        this.menu = menu;
        this.popupLinks = this.menu.querySelectorAll('[aria-haspopup="true"]');

        this.config = {
            disableHover: options && options.disableHover || false,

            hideTimeout: options && options.hideTimeout || 0
        };

        if (!this.popupLinks.length) {
            return;
        }

        this.handleEvents();
    }

    _createClass(Menu, [{
        key: 'handleEvents',
        value: function handleEvents() {
            var _this = this;

            document.addEventListener('keyup', function (event) {
                if (event.keyCode !== 9) return;

                [].forEach.call(_this.popupLinks, function (link) {
                    if (!link.parentElement.contains(event.target)) {
                        _this.closeSubmenu(link);
                    }
                });
            });

            [].forEach.call(this.popupLinks, function (link) {
                if (!_this.config.disableHover) {
                    var hideMenuTimer = void 0;

                    link.parentElement.addEventListener('mouseenter', function (event) {
                        _this.openSubmenu(link);
                        clearTimeout(hideMenuTimer);
                    });

                    link.parentElement.addEventListener('mouseleave', function (event) {
                        hideMenuTimer = setTimeout(function () {
                            _this.closeSubmenu(link);
                        }, _this.config.hideTimeout);
                    });

                    link.addEventListener('touchend', function (event) {
                        _this.toggleSubmenu(link);
                    });
                } else {
                    link.addEventListener('click', function (event) {
                        _this.toggleSubmenu(link);
                    });
                }

                link.addEventListener('keydown', function (event) {
                    if (event.keyCode === 13 && !link.hasAttribute('href')) {
                        event.preventDefault();
                        _this.toggleSubmenu(link);
                    }

                    if (event.keyCode === 40) {
                        event.preventDefault();
                        _this.openSubmenu(link);
                    }

                    if (event.keyCode === 32) {
                        event.preventDefault();
                        _this.toggleSubmenu(link);
                    }

                    if (event.keyCode === 38) {
                        event.preventDefault();
                        _this.closeSubmenu(link);
                    }
                });
            });

            document.addEventListener('click', function (event) {
                [].forEach.call(_this.popupLinks, function (link) {
                    if (!link.parentElement.contains(event.target)) {
                        _this.closeSubmenu(link);
                    }
                });
            });
        }
    }, {
        key: 'isSubmenuOpen',
        value: function isSubmenuOpen(link) {
            return link.getAttribute('aria-expanded') === 'false';
        }
    }, {
        key: 'toggleSubmenu',
        value: function toggleSubmenu(link) {
            if (this.isSubmenuOpen(link)) {
                this.openSubmenu(link);
            } else {
                this.closeSubmenu(link);
            }
        }
    }, {
        key: 'openSubmenu',
        value: function openSubmenu(link) {
            link.setAttribute('aria-expanded', 'true');
        }
    }, {
        key: 'closeSubmenu',
        value: function closeSubmenu(link) {
            link.setAttribute('aria-expanded', 'false');
        }
    }]);

    return Menu;
}();

var menus = document.querySelectorAll('[data-role="menu"]');

[].forEach.call(menus, function (menu) {
    return new Menu(menu, {
        disableHover: menu.hasAttribute('data-disable-hover'),
        hideTimeout: menu.hasAttribute('data-hide-timeout') ? 300 : 0
    });
});