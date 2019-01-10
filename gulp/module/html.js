// 压缩html
const gulpHtml = require('gulp-htmlmin'),
// 引用头部信息
fileInclude = require('gulp-file-include'),
// 添加版本号
revCollector = require('gulp-rev-collector');


let func = {
    optionHtml: {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    },
    html : function(){
        let _this = this,
            src = PATH_MODULE.html.src,
            dist = PATH_MODULE.html.dist;
            // console.log(src,dist)
            // console.log(['./rev/css/*.json',src[0]])
        // console.log(_this.optionHtml,111)  //undefind
        // console.log(func.optionHtml,111) //打印出这个optionHtml
        return  gulp
        // 路径引错了，竟然不报错！！
                .src(['./rev/css/*.json',src[0]])
                .pipe(plumber())
                .pipe(newers({
                    // 需要加上后分割线
                    dest: dist+'/',
                    ext: '.html'
                }))
                .pipe(revCollector({
                    replaceReved : true,//允许替换, 已经被替换过的文件
                    // 通过hash替换
                    // "/css/style.css" => "/dist/css/style-1d87bebe.css"
                    //"/js/script1.js" => "/dist/script1-61e0be79.js"
                    dirReplacements : {
                        '../dist/css':'../dist/css',//key参数是html中要替换的东西
                        // '../dist/js':'../dist/js',
                        // 'cdn': function(manifest_value){
                        //     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
                        // }
                    }
                }))
                .pipe(fileInclude({
                    prefix: '@@',//变量前缀 @@include
                    basepath: '@file',//引用文件路径
                    indent:true//保留文件的缩进
                }))
                .pipe(gulpHtml(func.optionHtml))
                .pipe(gulp.dest(dist))
                .pipe(gulpprint.default(filepath => `Finished: ${filepath}`));
    }

};

// 需定义出函数的名字，而非执行函数
module.exports = func.html;