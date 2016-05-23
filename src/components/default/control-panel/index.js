'use strict';

import cookie from '../cookie';
import './control-panel.scss';

const COOKIE_PATH = {path: '/'};

class ControlPanel {
    constructor() {

        var self = this;

        self.app = $('.application');

        self.textSelect = $('.control-panel__select-text');
        self.colorSelect = $('.control-panel__select-color');
        self.imageSelect = $('.control-panel__select-image');

        !cookie.getCookie('app-text') ? cookie.setCookie('app-text', 'normal', COOKIE_PATH) : false;
        !cookie.getCookie('app-color') ? cookie.setCookie('app-color', 'white', COOKIE_PATH) : false;
        !cookie.getCookie('app-image') ? cookie.setCookie('app-image', 'visible', COOKIE_PATH) : false;

        self.setApplicationStyles();
        self.wrapImageAlt();
        self.toggleImage();

        self.handleTextChange();
        self.handleColorChange();
        self.handleImageChange();

        self.app.addClass('application_show');

    }

    handleTextChange() {

        var self = this;

        self.textSelect.val(cookie.getCookie('app-text'));

        self.textSelect.on('change', function() {

            cookie.setCookie('app-text', $(this).val(), COOKIE_PATH);
            self.setApplicationStyles();

        });

    }

    handleColorChange() {

        var self = this;

        self.colorSelect.val(cookie.getCookie('app-color'));

        self.colorSelect.on('change', function() {

            cookie.setCookie('app-color', $(this).val(), COOKIE_PATH);
            self.setApplicationStyles();

        });

    }

    handleImageChange() {

        var self = this;

        self.imageSelect.val(cookie.getCookie('app-image'));

        self.imageSelect.on('change', function() {

            cookie.setCookie('app-image', $(this).val(), COOKIE_PATH);
            self.setApplicationStyles();

            self.toggleImage();

        });



    }

    wrapImageAlt() {

        $('img').each(function() {

            var alt = $(this).attr('alt');

            $(this).wrap(`<span class="image-alt"/>`);

            if (alt != '') {
                $(this).after(`<span class="image-alt__text">${alt}</span>`);
            } else {
                $(this).after('<span class="image-alt__text">Описание отсутствует</span>');
            }

        });

    }

    toggleImage() {

        if (cookie.getCookie('app-image') == 'hidden') {
            $('.image-alt').addClass('image-alt_active');
            $('img').css('visibility', 'hidden');
        } else {
            $('.image-alt').removeClass('image-alt_active');
            $('img').css('visibility', 'visible');
        }

    }

    setApplicationStyles() {

        this.app.attr('data-text', cookie.getCookie('app-text'));
        this.app.attr('data-color', cookie.getCookie('app-color'));
        this.app.attr('data-image', cookie.getCookie('app-image'));

    }
}

export default new ControlPanel();