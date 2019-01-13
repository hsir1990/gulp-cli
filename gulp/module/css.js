const rev = require('gulp-rev'),
cssUglify = require('gulp-minify-css');


let func = {
    css: function(){
        let src = PATH_MODULE.css.src,
            dist = PATH_MODULE.css.dist;

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
                .pipe(rev())//添加hash后缀//每次生成以后，html中不会改变，需要先删除一下文件，同时，每次生成，会产生新的css文件
                .pipe(gulp.dest(dist))
                .pipe(rev.manifest())//生成文件映射
                .pipe(gulp.dest('rev/css'))//将映射文件导出到rev/css
                .pipe(gulpprint.default(filepath => `Finished: ${filepath}`));

    }
}

module.exports = func.css;