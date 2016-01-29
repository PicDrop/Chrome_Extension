var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task('styles', function() {
//     gulp.src('./src/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./extension/main.css'));
// });

//Watch task
gulp.task('default',function() {
    gulp.watch('./src/sass/*.scss',['styles']);
});


gulp.task('styles', function () {
 return gulp.src('./src/sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./extension/css'));
});