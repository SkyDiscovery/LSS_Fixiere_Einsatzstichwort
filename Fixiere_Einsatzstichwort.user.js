// ==UserScript==
// @name         Fixiere Einsatzstichwort
// @namespace    https://youtube.com/tuteplays
// @version      1.0
// @description  Fixiert die Kopfzeile im Einsatzfenster
// @author       TutePlays
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.mission_header_info').css('position', 'fixed');
    $('.mission_header_info').css('width', '100%');
    $('.mission_header_info').css('z-index', '10000');
    $('.close').css('z-index', '10001');

    var mission_header_height;
    function changeHeight() {
        mission_header_height = $('.mission_header_info').height();
        $('.mission_header_info').css('margin-top', -mission_header_height-21+'px');
        $('.container-fluid').css('margin-top', mission_header_height+21+'px');
        $('.close').css('margin-top', -mission_header_height-21+'px');
        console.log("Changed");
    };

    changeHeight();
    checkForHeightChange();

    function checkForHeightChange() {
        if ($('.mission_header_info').height() != mission_header_height){
            console.log("Difference");
            changeHeight();
        }
        console.log("Checked");
        //setInterval(checkForHeightChange, 5000);
    };
    $(document).ready(function() {
        setTimeout(checkForHeightChange, 2000);
    });
    $(document).ready(function() {
        setTimeout(checkForHeightChange, 4000);
    });
     $(document).mouseup(function() {
        setTimeout(checkForHeightChange, 4000);
    });
})();
