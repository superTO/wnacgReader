// ==UserScript==
// @name         wnacgReader
// @version      2.1.1
// @description  https://wnacg.org/photos-index* replace -index- to -slide-
// @author       Adokun
// @include      https://wnacg.org/photos-index*
// @include      https://wnacg.com/photos-index*
// @include      https://www.wnacg.org/photos-index*
// @include      https://www.wnacg.com/photos-index*
// @grant        none
// @namespace http://tampermonkey.net/
// ==/UserScript==


(function() {
    var str = location.href;
    str = str.replace(/index/g, 'slide');
    window.location = str;
})();
