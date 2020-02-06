const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass()) //с помощью этой функции определяем конвертацию
    .pipe(gulp.dest('./css')) //c помощью этой функции мы указываем куда мы ходим положить наш сконвертированный файл
    .pipe(browserSync.stream())
}

function watch() {
browserSync.init({
    server: {
        baseDir: './'
    }
})
gulp.watch('./scss/**/*.scss', style)
gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;



