import './accessibility-menu.scss';

class ControlPanel {
    constructor() {
        this.controlPanel = document.getElementById('accessibility-menu');
        this.dropdownBtn = document.getElementById('dropdownBtn');
        this.dropdown = document.getElementById('dropdownMenu');
        this.switchers = document.getElementsByClassName('js-accessibility-menu-switcher');
        this.constants = {
            switcherSelector: 'js-accessibility-menu-switcher',
            switcherItemSelector: 'js-accessibility-menu-switcher-item',
            switcherItemSelectorActive: 'js-accessibility-menu-switcher-item-active'
        }
        this.init();
    }

    init() {
        this.handleDropdown();
        this.handleSwitcherClick();
    }

    handleSwitcherClick() {

        for (var i = 0; i < this.switchers.length; i++) {
            this.switchers[i].addEventListener("click", this.handleSwitcherItemClick.bind(this), false);
        }

    }

    handleSwitcherItemClick(e) {
        //клик по дочернему элементу
        if (e.target !== e.currentTarget) {
            var siblings = Array.prototype.filter.call(e.target.parentNode.children, function (child) {
                return child !== e.target;
            });
            for (var i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove(this.constants.switcherItemSelectorActive);
            }
            e.target.classList.toggle(this.constants.switcherItemSelectorActive);
            console.log(e.target);
        }
        e.preventDefault();
    }

    handleDropdown() {

        this.setDefaultDropdown();
        this.handleDropdownBtnClick();
        this.handleOutsideDropdownClick();

    }

    handleOutsideDropdownClick() {
        var self = this;
        document.onclick = function (e) {
            if (e.target != self.dropdownBtn && !self.isChildOf(e.target, self.dropdown)) {
                self.closeDropdown();
            }

        }
    }

    isChildOf(child, parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    }

    handleDropdownBtnClick() {
        var self = this;
        this.dropdownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (self.dropdownBtn.getAttribute('aria-expanded') == 'false') {
                self.openDropdown();
            }
            else {
                self.closeDropdown();
            }
        });
    }

    openDropdown() {
        this.dropdownBtn.setAttribute('aria-expanded', 'true');
        this.controlPanel.classList.add('accessibility-menu_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'false');
        this.dropdown.setAttribute('aria-expanded', 'true');
    }

    closeDropdown() {
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.controlPanel.classList.remove('accessibility-menu_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'true');
        this.dropdown.setAttribute('aria-expanded', 'false');
    }

    setDefaultDropdown() {
        this.dropdownBtn.setAttribute('aria-haspopup', 'true');
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-hidden', 'true');
    }
}

if (document.getElementById('accessibility-menu')) {
    new ControlPanel();
}
export default ControlPanel;