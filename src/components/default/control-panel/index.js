'use strict';
import cookie from '../../utils/cookie';

const COOKIE_PATH = {path: '/'};

class ControlPanel {
    constructor() {
        var self = this;
        self.app = $('html');
        self.changer = $('.js-control-changer');
        self.reset = $('#js-control-reset');

        self.getAttrNames();
        self.setDefaultCookies();
        self.setApplicationStyles();
        self.handleChangerClick();
        self.handleReset();
    }

    /**
     * дефолтные значения записываются в куки, если те пусты.
     * проходимся по списку из названий дата-атрибутов, и записываем соответсвующие названия кук
     */
    setDefaultCookies() {
        for(var i=0;i<this.attrNames.length; i++) {
            !cookie.getCookie('app-'+this.attrNames[i]) ? cookie.setCookie('app-'+this.attrNames[i], 'normal', COOKIE_PATH) : false;
        }

    }

    /**
     * записываем в массив все названия дата-атрибутов переключателей
     */
    getAttrNames() {
        var self = this;
        self.attrNames = [];
        $('.js-control-changer').each(function (index,elem) {
            var attrName = Object.keys($(elem).data())[0];
           if (self.attrNames.indexOf(attrName) == -1 && attrName) {
               self.attrNames.push(attrName);
           }
        });
    }

    handleChangerClick() {
        var self = this;
        self.changer.on('click', function (e) {
            e.preventDefault();
            var data = $(e.target).data();
            var dataName = Object.keys(data)[0]; //получаем ключ название дата атрибута
            var dataValue = data[dataName]; //получаем значение дата атрибута
            cookie.setCookie('app-'+dataName, dataValue, COOKIE_PATH);
            self.setApplicationStyles();
        })
    }

    /**
     * проходимся по списку из названий дата-атрибутов, и ставим такие же в куки и дата-атрибуты html
     */
    setApplicationStyles() {
        for(var i=0;i<this.attrNames.length; i++) {
            this.app.attr('data-'+this.attrNames[i], cookie.getCookie('app-'+this.attrNames[i]));
        }
    }

    handleReset() {
        this.reset.on('click', (e)=> {
            e.preventDefault();
            for(var i=0;i<this.attrNames.length; i++) {
                cookie.setCookie('app-'+this.attrNames[i], 'normal', COOKIE_PATH);
                this.setApplicationStyles();
            }
        })
    }
}

export default new ControlPanel();