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
