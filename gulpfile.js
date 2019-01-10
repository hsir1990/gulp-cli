const gulp = require('gulp');

// gulp.src('resources/html/**')
//     .pipe(minify())
//     .pipe(gulp.dest('dist/html/'))


gulp.task('text', function(){
   return  console.log('text--success!');
})

//gulp的默认,gulp4不再支持之前的三个参数的形式
//gulp.task('two', ['one'], function() {
    // 'one' 完成后
// });
//gulp4新增的两个方法
// 串行
gulp.task('series', gulp.series('text'));
// 并行
gulp.task('parallel', gulp.paralle('text'));
gulp.task('default',gulp.parallel('text'))