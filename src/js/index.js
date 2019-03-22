'use strict';
var nav = require('./scripts/nav');
var fallbackStyles = require('./scripts/fallbackStyles');


var app = {
    init: function() {
        nav.init();
        fallbackStyles.init();

        $("#js-hamburger").on("click", function() {
            nav.toggleMenu();
        });
    }
}

$(document).ready(function () {
    app.init();
});
