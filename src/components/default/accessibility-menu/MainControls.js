class MainControls {
    constructor(controls) {
        this.controls = controls;
        this.render();
    }


    // can be called repeatedly and will rerender
    render() {
        if (this.controls) {
            this.mainControls = $("<div class='accessibility-menu__main-controls'/>");

            this.mainControls.append(this.renderControl(1))
                .append(this.renderControl(2))
                .append(this.renderControl(3))
                .append(this.renderControl(4));
        }


    }


    renderControl(index) {
        var controlName = this.controls[index];
        if (controlName) {
            var controlWrap = $('<div class="accessibility-menu__col"></div>');
            return controlWrap.append(this.getControl(controlName));
        }
    }

    getControl(controlName) {
        switch (controlName) {
            case 'fontsize' : {
                return this.getFontSizeControl();
            }
        }
    }

    getFontSizeControl() {
        var control = $('<div>Размер шрифта</div>');
        return control
    }

}

new MainControls({
    1: 'fontsize'
});