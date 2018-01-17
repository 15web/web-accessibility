class Menu {
    constructor(menu, options) {
        this.menu = menu;
        this.popupLinks = this.menu.querySelectorAll('[aria-haspopup="true"]');

        this.config = {
            /* Запретить hover эффекты? */
            disableHover: options && options.disableHover || false,
            /* Сколько ждать, преждем чем скрыть меню в событии mouseleave */
            hideTimeout: options && options.hideTimeout || 0,
        };

        if (!this.popupLinks.length) {
            return;
        }

        this.handleEvents();
    }

    handleEvents() {
        /* Если при навигации табом мы ушли из пункта меню, то закрываем его */
        document.addEventListener('keyup', event => {
            if (event.keyCode !== 9) return;

            [].forEach.call(this.popupLinks, link => {
                if (!link.parentElement.contains(event.target)) {
                    this.closeSubmenu(link);
                }
            })
        });

        [].forEach.call(this.popupLinks, link => {

            /**
             * Если hover эффекты разрешены, то пользуемся ими.
             * Если запрещены, то раскрываем меню по клику
             */
            if (!this.config.disableHover) {
                let hideMenuTimer;
                // На hover открываем меню
                link.parentElement.addEventListener('mouseenter', event => {
                    this.openSubmenu(link);
                    clearTimeout(hideMenuTimer);
                });

                // На unhover закрываем
                link.parentElement.addEventListener('mouseleave', event => {
                    hideMenuTimer = setTimeout(() => {
                        this.closeSubmenu(link);
                    }, this.config.hideTimeout)
                });

                /**
                 * Отрабатываем "клик" touch устройствами
                 */
                link.addEventListener('touchend', event => {
                    this.toggleSubmenu(link);
                });
            } else {
                link.addEventListener('click', event => {
                    this.toggleSubmenu(link);
                });
            }

            link.addEventListener('keydown', event => {
                // Нажали Enter и это не ссылка
                if (event.keyCode === 13 && !link.hasAttribute('href'))  {
                    event.preventDefault();
                    this.toggleSubmenu(link);
                }

                // Надали стрелку внизу
                if (event.keyCode === 40) {
                    event.preventDefault();
                    this.openSubmenu(link);
                }

                // Нажали пробел
                if (event.keyCode === 32) {
                    event.preventDefault();
                    this.toggleSubmenu(link);
                }

                // Нажали стрелку вверх
                if (event.keyCode === 38) {
                    event.preventDefault();
                    this.closeSubmenu(link);
                }
            })
        });

        /**
         * Клик вне пункта меню всегда закрывает его.
         */
        document.addEventListener('click', event => {
            [].forEach.call(this.popupLinks, link => {
                if (!link.parentElement.contains(event.target)) {
                    this.closeSubmenu(link);
                }
            })
        })
    }

    isSubmenuOpen(link) {
        return link.getAttribute('aria-expanded') === 'false';
    }

    toggleSubmenu(link) {
        if (this.isSubmenuOpen(link)) {
            this.openSubmenu(link);
        } else {
            this.closeSubmenu(link);
        }
    }

    openSubmenu(link) {
        link.setAttribute('aria-expanded', 'true');
    }

    closeSubmenu(link) {
        link.setAttribute('aria-expanded', 'false');
    }
}

const menus = document.querySelectorAll('[data-role="menu"]');

[].forEach.call(menus, menu => new Menu(menu, {
    disableHover: menu.hasAttribute('data-disable-hover'),
    hideTimeout: menu.hasAttribute('data-hide-timeout') ? 300 : 0
}));