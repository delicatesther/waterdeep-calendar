'use strict';

var nav = ( function ($) {
    var priv = {
        openMenu: function() {
            $("#js-menu").addClass("menu-open");
        },

        closeMenu: function() {
            $("#js-menu").removeClass("menu-open");
        }
    }

    return {
        toggleMenu: function() {
            if ($("#js-menu").hasClass("menu-open")) {
                priv.closeMenu();
            } else {
                priv.openMenu();
            }
        },

        init: function() {
        }
    }
}(jQuery));

module.exports = nav;
