(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./scripts/fallbackStyles":3,"./scripts/nav":4}],2:[function(require,module,exports){
var browserOS = {
    iOS: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
    iE: navigator.userAgent.indexOf('Trident') >= 0,
    edge: navigator.userAgent.indexOf('Edge') >= 0,
};

module.exports = browserOS;

},{}],3:[function(require,module,exports){
/*IE and Edge don't support the details HTML5 element,
so they need some fallback JS to open and close details in the calendar*/
var browserOS = require('./browsersniffing');
var fallbackStyles = ( function ($) {

    var priv = {
        showDetails: function(el) {
            el.removeClass("details-hidden");
            el.parents("details").find("> div").slideDown(200);
        },

        hideDetails: function(el) {
            el.addClass("details-hidden");
            el.parents("details").find("> div").slideUp(200);
        },
    }

    return {
        toggleDetails: function(el) {
            if( el.hasClass("details-hidden") ) {
                priv.showDetails(el);
            }
            else {
                priv.hideDetails(el);
            }
        },

        init: function() {
            if(browserOS.iE || browserOS.edge) {
                var holidayName = $("summary h3");
                $("details div").hide();
                holidayName.addClass("details-hidden");
                holidayName.on("click", function () {
                    fallbackStyles.toggleDetails($(this));
                });
            }
        }
    }
}(jQuery));

module.exports = fallbackStyles;

},{"./browsersniffing":2}],4:[function(require,module,exports){
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

},{}]},{},[1]);
