'use strict';

import './collapse.scss';



///////////////////////////////////////////////////////
// Collapse СТАРТ
///////////////////////////////////////////////////////

export function hideShow(id) {

    this.$id = $('#' + id);
    this.$region = $('#' + this.$id.attr('aria-controls'));

    this.keys = {
        enter: 13,
        space: 32
    };

    this.toggleSpeed = 100;

    // bind handlers
    this.bindHandlers();

} // end hidShow() constructor

//
// Function bindHandlers() is a member function to bind event handlers to the hideShow region
//
// return N/A
//
hideShow.prototype.bindHandlers = function () {

    var thisObj = this;

    this.$id.click(function (e) {

        thisObj.toggleRegion();

        e.stopPropagation();
        return false;
    });
};

//
// Function toggleRegion() is a member function to toggle the display of the hideShow region
//
// return N/A
//
hideShow.prototype.toggleRegion = function () {

    var thisObj = this;

    // toggle the region
    this.$region.slideToggle(this.toggleSpeed, function () {

        if ($(this).attr('aria-expanded') == 'false') { // region is collapsed

            // update the aria-expanded attribute of the region
            $(this).attr('aria-expanded', 'true');

            // move focus to the region
            $(this).focus();

            // update the button label
            thisObj.$id.find('span').html('Hide');

        }
        else { // region is expanded

            // update the aria-expanded attribute of the region
            $(this).attr('aria-expanded', 'false');

            // update the button label
            thisObj.$id.find('span').html('Show');
        }
    });

}; // end toggleRegion()

///////////////////////////////////////////////////////
// Collapse конец
///////////////////////////////////////////////////////