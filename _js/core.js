'use strict';

if (typeof console === "undefined") {
    window.console = {
        log: function () {}
    };
}

(function () {
    var imgs = null;
    document.addEventListener("DOMContentLoaded", function () {
        imgs = Array.prototype.slice.call(document.getElementsByTagName("img"));
        imgs.forEach(function (img) {
            window.preloadImage(img);
        });
    });

})();

window.preloadImage = function (img) {
    var imgobj = new Image();
    img.setAttribute("data-src", img.src.valueOf());
    imgobj.src = img.src;
    img.src = "/images/loading.svg";

    imgobj.onload = function (evt) {
        console.log(evt);
        img.src = this.src;
    };

    imgobj.onerror = function () {
        console.log(this.src + " introuvable");
    };
}


