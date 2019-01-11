const rev = require('gulp-rev'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),//合并scss
cleanCss = require('gulp-clean-css');// 压缩css


let src = PATH_MODULE.sass.src,
    dist = PATH_MODULE.sass.dist;
let func = {
    sass: function(){
        
            // console.log(src, dist)
        return  gulp
                .src(src)
                // gulp-rev自带热更新，检测是否有文件变动，所以不用下面的东西了
                // .pipe(plumber())
                // .pipe(newers({
                //     // 需要加上后分割线
                //     dest: dist+'/',
                //     ext: '.sass'
                // }))
                // 压缩文件
                .pipe(sass())
                .pipe(gulp.dest(dist))
                // .pipe(rev())//添加hash后缀
                // .pipe(gulp.dest(dist))
                // .pipe(rev.manifest())//生成文件映射
                // .pipe(gulp.dest('rev/sass'))//将映射文件导出到rev/sass
                // .pipe(gulpprint.default(filepath => `Finished: ${filepath}`));
                // 综合的
                .pipe(concat('all.css'))
                .pipe(cleanCss())
                .pipe(gulp.dest( dist[0]+'/concat'))

    },

    // 分步骤的
    css: function(){
        console.log(dist[0]+'*.css',111)
        return gulp
               .src(dist[0]+'/*.css')
               .pipe(concat('all.css'))
               .pipe(cleanCss())
               .pipe(gulp.dest( dist[0]+'/concat'))
    }
}

module.exports = func.sass;