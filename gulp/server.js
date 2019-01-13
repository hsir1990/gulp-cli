const webServer = require('gulp-webserver');

let server = () => {
    return  gulp
            .src('./dist')
            .pipe(webServer({
                host: '0.0.0.0',
                port: "8083",
                allowEmpty:true,
                livereload: {enable:true,port:35280},
                open: false,
                directoryListing: {
                    enable: true,
                    path: './dist'
                },
                proxies: [
                    {
                        source: '/api', target: 'http://www.hsir.com/api'//source 代理名称，target要代理的地址，用这个代理就行http://localhost.zongheng.com:8073/api/forums/details/postList
                    }
                  ]
        
            }))
}

module.exports = server;