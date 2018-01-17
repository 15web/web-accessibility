class Menu {
    constructor(menu) {
        this.menu = menu;
        this.popupLinks = this.menu.querySelectorAll('[aria-haspopup="true"]');
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
            // На hover открываем меню
            link.parentElement.addEventListener('mouseenter', event => {
                this.openSubmenu(link);
            });

            // На unhover закрываем
            link.parentElement.addEventListener('mouseleave', event => {
                this.closeSubmenu(link);
            });

            link.addEventListener('click', event => {
                this.toggleSubmenu(link);
            });

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
         * Клик вне пункта меню закрывает его.
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

[].forEach.call(menus, menu => new Menu(menu));