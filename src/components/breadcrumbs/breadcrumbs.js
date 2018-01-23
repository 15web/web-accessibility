class Breadcrumbs {
    constructor(container, options = {}) {
        this.container = container;
        this.dropdownLinks = this.container.querySelectorAll('[aria-haspopup="true"]');
        this.options = {
            hideTimeout: options.hideTimeout || 200
        };

        if (!this.dropdownLinks.length) return;

        this.init();
    }

    init() {
        [].forEach.call(this.dropdownLinks, item => {
            /**
             * При нажатии стрелки вниз или пробела переключаем открытость выпадающего списка.
             */
            item.addEventListener('keydown', event => {
                if (event.keyCode !== 40 && event.keyCode !== 32) return;
                event.preventDefault();
                this.toggleDropdown(item);
            });

            /**
             * При touchend на стрелку перекючаем открытость выпадающего списка.
             * @type {Element}
             */
            const arrow = item.querySelector('span');
            if (arrow) {
                arrow.addEventListener('touchend', event => {
                    event.preventDefault();
                    this.toggleDropdown(item);
                });
            }

            /**
             * Hover эффекты отрыбатываем через события, чтобы заканчивать hover через this.options.hideTimeout (мс) после увода курсора мыши.
             */
            let timer;
            item.parentElement.addEventListener('mouseenter', () => {
                clearTimeout(timer);
                this.openDropdown(item);
            });
            item.parentElement.addEventListener('mouseleave', () => {
                timer = setTimeout(() => {
                    this.closeDropdown(item);
                }, this.options.hideTimeout);
            });

            const dropdown = this.getDropdownByItem(item);
            /**
             * По-умолчанию делаем dropdown полностью скрытым через display:none
             */
            dropdown.style.display = 'none';

            /**
             * После того, как анимация скрытия отработает, будем полностью скрывать элемент через display = 'none'
             */
            dropdown.addEventListener('transitionend', (event) => {
                if (event.propertyName !== 'opacity') return;

                if (dropdown.hasAttribute('aria-hidden')) {
                    dropdown.style.display = 'none';
                }
            });
        });

        /**
         * Ниже скрываем выпадающие списки, если клавиатурой, кликом мыши или touch событием мы взаимодействовали
         * @param event
         */
        const closeNotTargetedItems = (event) => {
            [].forEach.call(this.dropdownLinks, item => {
                const parent = item.parentNode;
                if (!parent.contains(event.target)) {
                    this.closeDropdown(item);
                }
            })
        };

        document.addEventListener('click', closeNotTargetedItems);
        document.addEventListener('touchend', closeNotTargetedItems);

        document.addEventListener('keyup', event => {
            // Если табом ушли с элемента
            if (event.keyCode !== 9) return;

            closeNotTargetedItems(event);
        });
    }

    getDropdownByItem(item) {
        return item.nextElementSibling;
    }

    toggleDropdown(item) {
        item.getAttribute('aria-expanded') === 'false' ? this.openDropdown(item) : this.closeDropdown(item);
    }

    openDropdown(item) {
        const dropdown = this.getDropdownByItem(item);
        item.setAttribute('aria-expanded', 'true');
        dropdown.style.display = '';
        // Следующим тиком, после того, как элемент перестал быть display:none, убираем атрибут aria-hidden, чтобы элемент появился с анимацией
        setTimeout(() => dropdown.removeAttribute('aria-hidden'), 0);
    }

    closeDropdown(item) {
        const dropdown = this.getDropdownByItem(item);
        item.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
    }
}

const crumbs = document.querySelectorAll('[data-role="breadcrumbs"]');

[].forEach.call(crumbs, (item) => {
    new Breadcrumbs(item);
});