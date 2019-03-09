var gulp = require("gulp");
var less = require("gulp-less");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task("default", function() {
    console.log("demarage des watcher css/js");
    gulp.watch("_Less/**/*.less", ["css"]);
    gulp.watch("_js/*.js", ["js"]);
});

gulp.task("css",function () {
    return gulp.src("_Less/style.less")
        .pipe(less())
        .pipe(gulp.dest("_site/css/"));
});

gulp.task("js",function () {
    return gulp.src("_js/*.js")
        .pipe(concat("core.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("_site/js/"));
});