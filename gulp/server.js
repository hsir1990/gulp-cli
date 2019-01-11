const webServer = require('gulp-webserver');

let server = () => {
    return  gulp
            .src('./dist')
            .pipe(webServer({
                host: '0.0.0.0',
                port: "8080",
                allowEmpty:true,
                livereload: {enable:true,port:35280},
                open: false,
                directoryListing: {
                    enable: true,
                    path: './dist'
                }
            }))
}

module.exports = server;