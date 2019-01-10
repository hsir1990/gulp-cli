const rev = require('gulp-rev'),
cssUglify = require('gulp-minify-css');


let func = {
    css: function(){
        let src = PATH_MODULE.css.src,
            dist = PATH_MODULE.css.dist;
            // console.log(src, dist)
        return  gulp
                .src(src)
                // gulp-rev自带热更新，检测是否有文件变动，所以不用下面的东西了
                // .pipe(plumber())
                // .pipe(newers({
                //     // 需要加上后分割线
                //     dest: dist+'/',
                //     ext: '.css'
                // }))
                // 压缩文件
                .pipe(cssUglify())
                .pipe(gulp.dest(dist))
                // .pipe(rev())//添加hash后缀
                // .pipe(gulp.dest(dist))
                // .pipe(rev.manifest())//生成文件映射
                // .pipe(gulp.dest('rev/css'))//将映射文件导出到rev/css
                // .pipe(gulpprint.default(filepath => `Finished: ${filepath}`));

    }
}

module.exports = func.css;