// 上传服务器，感觉有点鸡肋，不建议用，可以当作练习使用
const GulpSSH = require('gulp-ssh'),
fs = require('fs');

let ssh1 = {
    config: {
        "host": '47.92.48.144',
        "username": 'root',
        "password": 'Hsir190',
        "port": 22,
        "ignoreErrors": false
        // privateKey: fs.readFileSync('/root/dist')
      },

    con:  function(){
        // console.log(ssh1.config)
        return new GulpSSH({
            ignoreErrors: false,
            sshConfig: ssh1.config
        })
    },
    sshGulp: function(){
        // console.log(ssh1.con())
        // gulp
        // .src('./dist')
        // .pipe(ssh1.con().sftp('write', '/root/dist'))
        // return gulp.task('sftp-write', function () {
        //     return gulp.src('./dist/css/*.css')
        //     .pipe(ssh1.con().sftp('write', '/root/dist'))
        // })

        // return gulpSSH.shell(config.commands, {filePath: 'commands.log'})
        //         .pipe(gulp.dest('logs'));

       return  gulp
        .src('./dist/css/*.css')
        .pipe(ssh1.con().dest('/root/dist'))

    }
    
}
module.exports = ssh1.sshGulp;