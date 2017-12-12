var WCAGPanel = (function () {

    /**
     * WCAGPanel
     * Обрабатывает клик по кнопке "Настройки" и открывает дропдаун
     * @constructor
     */

    var WCAGPanel = function () {
        this.controlPanel = document.getElementById('wcag-panel');
        this.dropdownBtn = document.getElementById('wcagDropdownBtn');
        this.dropdownBtnClose = document.getElementById('wcagDropdownBtnClose');
        this.dropdown = document.getElementById('wcagDropdownMenu');

        this.init();
    };

    WCAGPanel.prototype.init = function () {
        this.handleDropdown();
    };


    WCAGPanel.prototype.handleDropdown = function () {
        this.setDefaultDropdown();
        this.handleDropdownBtnClick();
        this.handleDropdownCloseBtnClick();
        this.handleOutsideDropdownClick();
    };

    WCAGPanel.prototype.handleOutsideDropdownClick = function () {
        var self = this;
        document.onclick = function (e) {
            if (e.target != self.dropdownBtn && !self.isChildOf(e.target, self.controlPanel)) {
                self.closeDropdown();
            }

        }
    };

    WCAGPanel.prototype.handleDropdownBtnClick = function () {
        var self = this;
        this.dropdownBtnClose.addEventListener('click', function () {
                self.closeDropdown();
        });
    };

    WCAGPanel.prototype.handleDropdownCloseBtnClick = function () {
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
    };

    WCAGPanel.prototype.openDropdown = function () {
        this.dropdownBtn.setAttribute('aria-expanded', 'true');
        this.controlPanel.classList.add('wcag-panel_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'false');
        this.dropdown.setAttribute('aria-expanded', 'true');
    };

    WCAGPanel.prototype.closeDropdown = function () {
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.controlPanel.classList.remove('wcag-panel_show-dropdown');
        this.dropdown.setAttribute('aria-hidden', 'true');
        this.dropdown.setAttribute('aria-expanded', 'false');
    };

    WCAGPanel.prototype.setDefaultDropdown = function () {
        this.dropdownBtn.setAttribute('aria-haspopup', 'true');
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-hidden', 'true');
    };

    WCAGPanel.prototype.isChildOf = function (child,parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    };

    return WCAGPanel;
})();




