'use strict';

import './collapse.scss';


export function hideShow(id) {

    this.$id = $('#' + id);
    this.$region = $('#' + this.$id.attr('aria-controls'));

    this.keys = {
        enter: 13,
        space: 32
    };

    this.toggleSpeed = 100;


    this.bindHandlers();

}


hideShow.prototype.bindHandlers = function () {

    var thisObj = this;

    this.$id.click(function (e) {

        thisObj.toggleRegion();

        e.stopPropagation();
        return false;
    });
};


hideShow.prototype.toggleRegion = function () {

    var thisObj = this;


    this.$region.slideToggle(this.toggleSpeed, function () {

        if ($(this).attr('aria-expanded') == 'false') {


            $(this).attr('aria-expanded', 'true');


            $(this).focus();


            thisObj.$id.find('span').html('Hide');

        }
        else {


            $(this).attr('aria-expanded', 'false');


            thisObj.$id.find('span').html('Show');
        }
    });

};


///////////////////////////////////////////////////////