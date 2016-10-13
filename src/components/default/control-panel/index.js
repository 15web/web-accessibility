'use strict';

import cookie from '../cookie';
import './control-panel.scss';


const COOKIE_PATH = {path: '/'};

class ControlPanel {
    constructor() {
        this.app = $('html');

        this.controlPanel = $('.new-control-panel');
        this.controls = this.controlPanel.find('[data-type]');
        this.dropdownBtn = this.controlPanel.find('#dropdownBtn');
        this.dropdown = this.controlPanel.find('#dropdownMenu');
        console.log(this.dropdown);
        this.handleControlClick();
        this.handleDropdown();
        // self.app = $('.application');
        //
        // self.textSelect = $('.control-panel__select-text');
        // self.colorSelect = $('.control-panel__select-color');
        // self.imageSelect = $('.control-panel__select-image');

        // !cookie.getCookie('app-text') ? cookie.setCookie('app-text', 'normal', COOKIE_PATH) : false;
        // !cookie.getCookie('app-color') ? cookie.setCookie('app-color', 'white', COOKIE_PATH) : false;
        // !cookie.getCookie('app-image') ? cookie.setCookie('app-image', 'visible', COOKIE_PATH) : false;


    }

    handleControlClick() {
        this.controls.on('click', (e)=> {
            e.preventDefault();
            var data = $(e.target).data();
            this.setAppStyle(data);
        })
    }
    handleDropdown() {
        this.setDefaultDropdown();
        this.dropdownBtn.on('click' , (e)=> {
            e.preventDefault();
            if(this.dropdownBtn.attr('aria-expanded') == 'false') {
                this.dropdownBtn.attr('aria-expanded', 'true');
                this.controlPanel.addClass('new-control-panel_show-dropdown');
                this.dropdown.attr('aria-hidden','false');
                this.dropdown.attr('aria-expanded','true');
            }
            else {
                this.dropdownBtn.attr('aria-expanded', 'false');
                this.controlPanel.removeClass('new-control-panel_show-dropdown');
                this.dropdown.attr('aria-hidden','true');
                this.dropdown.attr('aria-expanded','false');
            }
        });
    }
    setDefaultDropdown() {
        this.dropdownBtn.attr('aria-haspopup', 'true');
        this.dropdownBtn.attr('aria-expanded', 'false');
        this.dropdown.attr('aria-expanded','false');
        this.dropdown.attr('aria-hidden','true');
    }

    setAppStyle(data) {
        switch (data.type) {

            case 'font-size' : {
                if(data.increase) {
                    this.app.css(data.type, '+=1px')
                }
                else {
                    this.app.css(data.type, '-=1px')
                }
                break;
            }
            case 'letter-spacing' : {
                if(data.increase) {
                    this.app.css(data.type, '+=0.025em')
                }
                else {
                    this.app.css(data.type, '-=0.025em')
                }
                break;
            }

            case 'img' : {
                if (data.view) {
                    this.app.find('img').css('visibility','visible');
                }
                else {
                    this.app.find('img').css('visibility','hidden');
                }
                break;
            }
        }


    }

    // handleTextChange() {
    //
    //     var self = this;
    //
    //     self.textSelect.val(cookie.getCookie('app-text'));
    //
    //     self.textSelect.on('change', function() {
    //
    //         cookie.setCookie('app-text', $(this).val(), COOKIE_PATH);
    //         self.setApplicationStyles();
    //
    //     });
    //
    // }
    //
    // handleColorChange() {
    //
    //     var self = this;
    //
    //     self.colorSelect.val(cookie.getCookie('app-color'));
    //
    //     self.colorSelect.on('change', function() {
    //
    //         cookie.setCookie('app-color', $(this).val(), COOKIE_PATH);
    //         self.setApplicationStyles();
    //
    //     });
    //
    // }
    //
    // handleImageChange() {
    //
    //     var self = this;
    //
    //     self.imageSelect.val(cookie.getCookie('app-image'));
    //
    //     self.imageSelect.on('change', function() {
    //
    //         cookie.setCookie('app-image', $(this).val(), COOKIE_PATH);
    //         self.setApplicationStyles();
    //
    //         self.toggleImage();
    //
    //     });
    //
    //
    //
    // }
    //
    // wrapImageAlt() {
    //
    //     $('img').each(function() {
    //
    //         var alt = $(this).attr('alt');
    //
    //         if (alt != '') {
    //             $(this).wrap(`<span class="image-alt"/>`);
    //             $(this).after(`<span class="image-alt__text">${alt}</span>`);
    //         } else {
    //             $(this).wrap(`<span class="image-alt image-alt_empty"/>`);
    //         }
    //
    //     });
    //
    // }
    //
    // toggleImage() {
    //
    //     if (cookie.getCookie('app-image') == 'hidden') {
    //         $('.image-alt').addClass('image-alt_active');
    //         $('img').css('visibility', 'hidden');
    //     } else {
    //         $('.image-alt').removeClass('image-alt_active');
    //         $('img').css('visibility', 'visible');
    //     }
    //
    // }
    //
    // setApplicationStyles() {
    //
    //     this.app.attr('data-text', cookie.getCookie('app-text'));
    //     this.app.attr('data-color', cookie.getCookie('app-color'));
    //     this.app.attr('data-image', cookie.getCookie('app-image'));
    //
    // }
}

export default new ControlPanel();