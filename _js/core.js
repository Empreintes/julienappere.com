(function () {
    var imgs = null;
    document.addEventListener('DOMContentLoaded', function () {
        imgs = Array.prototype.slice.call(document.getElementsByTagName("img"));
        imgs.forEach(function (img) {
             preloadImage(img);
        });
    });
})();

function preloadImage(img) {
    var imgobj = new Image();
    img.setAttribute('data-src', img.src.valueOf());
    imgobj.src = img.src;
    img.src = "/images/loading.svg";

    imgobj.onload = function () {
       img.src = this.src;
    };

    imgobj.onerror = function(){
        console.log(this.src + ' introuvable')
    }

}

