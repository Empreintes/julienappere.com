var gulp = require("gulp");
var less = require("gulp-less");
var csscomb = require("gulp-csscomb");
var rename = require("gulp-rename");

gulp.task("default", function() {
    console.log("demarage des watcher css/js");
    gulp.watch("_Less/**/*.less", ["css"]);
    gulp.watch("_js/*.js", ["js"]);
});

gulp.task("css",function () {
    return gulp.src("_Less/style.less")
        .pipe(less())
        .pipe(csscomb()) // pour la beauté de la chose
        .pipe(gulp.dest("_site/css/"));
});

gulp.task("js",function () {
    return gulp.src("_js/core.js")
        .pipe(rename("core.min.js"))
        .pipe(gulp.dest("_site/js/"));
});