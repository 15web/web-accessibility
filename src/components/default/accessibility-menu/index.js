import './accessibility-menu.scss';

class ControlPanel {
    constructor() {
        this.controlPanel = document.getElementById('accessibility-menu');
        this.dropdownBtn = document.getElementById('dropdownBtn');
        this.dropdown = document.getElementById('dropdownMenu');
        this.init();
    }

    init() {
        this.handleDropdown();
    }

    handleDropdown() {
        this.setDefaultDropdown();
        this.dropdownBtn.addEventListener('click' , (e)=> {
            e.preventDefault();
            if(this.dropdownBtn.getAttribute('aria-expanded') == 'false') {
                this.dropdownBtn.setAttribute('aria-expanded', 'true');
                this.controlPanel.classList.add('accessibility-menu_show-dropdown');
                this.dropdown.setAttribute('aria-hidden','false');
                this.dropdown.setAttribute('aria-expanded','true');
            }
            else {
                this.dropdownBtn.setAttribute('aria-expanded', 'false');
                this.controlPanel.classList.remove('accessibility-menu_show-dropdown');
                this.dropdown.setAttribute('aria-hidden','true');
                this.dropdown.setAttribute('aria-expanded','false');
            }
        });
    }

    setDefaultDropdown() {
        this.dropdownBtn.setAttribute('aria-haspopup', 'true');
        this.dropdownBtn.setAttribute('aria-expanded', 'false');
        this.dropdown.setAttribute('aria-expanded','false');
        this.dropdown.setAttribute('aria-hidden','true');
    }
}

if(document.getElementById('accessibility-menu')) {
    new ControlPanel();
}
export default ControlPanel;