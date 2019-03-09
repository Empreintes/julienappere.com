'use strict';

(function () {

    var imgs = null;
    document.addEventListener("DOMContentLoaded", function () {
        imgs = Array.prototype.slice.call(document.getElementsByTagName("img"));
        imgs.forEach(function (img) {
            window.preloadImage(img);
        });
        bottenAnna();
    });
})();

window.preloadImage = function (img) {
    var imgobj = new Image();
    img.setAttribute("data-src", img.src.valueOf());
    imgobj.src = img.src;
    img.src = "/images/loading.svg";

    imgobj.onload = function (evt) {
        img.src = this.src;
    };

    imgobj.onerror = function () {
        console.log(this.src + " introuvable");
    };
};

function bottenAnna () {
    var text = [
    'Ce site est vraiment plus à jour ....',
    'je le trouve un peu moche,',
    'il faudrait que je le change complétement.',
    'Mais j\'ai un peu la flemme.',
    'Pacontre si vous vous avez besion d\'un coup de main',
    'Pour un projet web ou autre : contact@julienappere.com'
    ];

    var interval = setInterval(function(){
        if(text.length <= 1 ){
            clearInterval(interval);
        }

        console.log(text.shift());
    },
    3000
    );


}

