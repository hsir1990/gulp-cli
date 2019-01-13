const imagemin = require('gulp-imagemin');
 

let img = () => {
    
    return gulp.src('./resources/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))

}

module.exports = img;