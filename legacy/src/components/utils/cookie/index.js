'use strict';

class Cookie {

    /**
     * Возвращает cookie с именем name, если есть, если нет, то undefined
     * @param name - имя cookie
     * @returns {*}
     */
    getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /**
     * Устанавливает cookie с именем name и значением value
     * @param name - имя cookie
     * @param value - значение cookie
     * @param options - объект с свойствами cookie (expires, path, domain, secure)
     */
    setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    /**
     * Удаляет cookie с именем name
     * @param name - имя cookie
     */
    deleteCookie(name) {
        this.setCookie(name, "", {
            expires: -1
        })
    }
}

export default new Cookie();
