// 方便全局引用gulp
global.gulp = require('gulp');
// 查看对最后时间的修改时间进行对比
global.newers = require('gulp-newer');
// 打印出stream里面的所有文件名，通常调试的时候比较需要。
global.gulpprint = require('gulp-print');
// 使用gulp-plumber来捕获处理任务中的错误
global.plumber = require('gulp-plumber');
//清除文件
clean = require('gulp-clean');

// 定义路径
global.PATH_MODULE = {
    // html
    html:{
        src: ['./resources/html/*.html'],
        dist:['./dist/html']
    },
    // css
    css:{
        src: ['./resources/css/*.css'],
        dist:['./dist/css']
    },
    // js
    js:{
        src: ['./resources/js/*.js'],
        dist:['./dist/js']
    },
    // sass
    sass:{
        src: ['./resources/sass/*.scss'],
        dist:['./dist/sass']
    }
}

// 压缩html
let htmlGulp = require('./gulp/module/html');
// 压缩css
let cssGulp = require('./gulp/module/css');
// 压缩js
let jsGulp = require('./gulp/module/js');
// 压缩sass
let sassGulp = require('./gulp/module/sass');
// 启动服务
let serverGulp = require('./gulp/server');
// 链接远程ssh 
let sshGulp = require('./gulp/ssh');

function aa(){
    return  gulp.src('./dist/css', {read: true})
        .pipe(clean());
}

//gulp4新增的两个方法
// 串行
// gulp.task('series', gulp.series('text'));
gulp.task('aa', gulp.series(aa))
// 并行
gulp.task('parallel', gulp.series(sassGulp, cssGulp, jsGulp,  htmlGulp, serverGulp));

// 传送服务器
gulp.task('ssh', gulp.series(sshGulp))