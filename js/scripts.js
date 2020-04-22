jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Countdown
    // -------------------------------------------------------------
    (function () {

        $("#back-countdiown").countdown({
            date: "8 aug 2020 06:00:00",
            format: "on"
        });
    
    }()); 


}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})