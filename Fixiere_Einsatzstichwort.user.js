// ==UserScript==
// @name         Fixiere Einsatzstichwort
// @namespace    https://youtube.com/tuteplays
// @version      1.1
// @description  Fixiert die Kopfzeile im Einsatzfenster
// @author       TutePlays
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.missionchief.com/*
// @include      *://www.missionchief.com/
// @include      *://www.meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.mission_header_info').css('position', 'fixed');
    $('.mission_header_info').css('width', '100%');
    $('.mission_header_info').css('z-index', '10000');
    $('.close').css('z-index', '10001');

    var mission_header_height;
    var iframe_inside_container_height;
    function changeHeight() {
        mission_header_height = $('.mission_header_info').height();
        $('.mission_header_info').css('margin-top', -mission_header_height-21+'px');
        $('#iframe-inside-container').css('margin-top', mission_header_height+21+'px');
        $('#iframe-inside-container').css('margin-bottom', -mission_header_height-21+'px');
        if (self != top) {
            $('#iframe-inside-container').css('height', $('#iframe-inside-container').height()-$('#container_navbar_alarm').height()-46+'px');
        };
        //$('#iframe-inside-container').css('height', '100%');
        $('.close').css('margin-top', -mission_header_height-21+'px');
        iframe_inside_container_height = $('#iframe-inside-container').height();
    };

    changeHeight();
    checkForHeightChange();

    function checkForHeightChange() {
        if (($('.mission_header_info').height() != mission_header_height) || ($('#iframe-inside-container').height() != iframe_inside_container_height)){
            changeHeight();
        }

        //setInterval(checkForHeightChange, 5000);
    };
    $(document).ready(function() {
        setTimeout(checkForHeightChange, 100);
        setTimeout(checkForHeightChange, 300);
        setTimeout(checkForHeightChange, 400);
        setTimeout(checkForHeightChange, 500);
        setTimeout(checkForHeightChange, 650);
        setTimeout(checkForHeightChange, 800);
        setTimeout(checkForHeightChange, 1000);
        setTimeout(checkForHeightChange, 1200);
    });

     $(document).mouseup(function() {
        setTimeout(checkForHeightChange, 100);
    });
})();
