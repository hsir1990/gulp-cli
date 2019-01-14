const rev = require('gulp-rev'),
uglify = require('gulp-uglify-es').default,
// es6配置
babel = require('gulp-babel'),
sourcemaps = require('gulp-sourcemaps'),
babelenv = require('babel-preset-env');



let func = {
    js: function(){
        let src = PATH_MODULE.js.src[0],
            dist = PATH_MODULE.js.dist[0];
            console.log(src, dist)
        return  gulp
                .src(src)
                // .pipe(sourcemaps.init())
                // gulp-rev自带热更新，检测是否有文件变动，所以不用下面的东西了
                // .pipe(plumber())
                // .pipe(newers({
                //     // 需要加上后分割线
                //     dest: dist+'/',
                //     ext: '.js'
                // }))
                // 压缩文件
                .pipe(babel({
                    // presets: ['@babel/env']//报错，需要引入babelenv才行
                    presets: [babelenv]
                }))        
                .pipe(uglify({ mangle: false }))
                .pipe(gulp.dest(dist))
                // .pipe(rev())//添加hash后缀
                // .pipe(gulp.dest(dist))
                // .pipe(rev.manifest())//生成文件映射
                // .pipe(gulp.dest('rev/js'))//将映射文件导出到rev/js
                // .pipe(gulpprint.default(filepath => `Finished: ${filepath}`));

    }
}

module.exports = func.js;