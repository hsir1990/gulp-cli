# gulp-cli

gulp4的使用.

npm run build 构建dist文件，生成，可以加版本号。(css版本号有坑，只能生成一次，再次生成时，会有多个css，大家可以仿照js的版本号修改去进行设置)。
<br/>
npm run dev 可开启服务（没有使用服务器递归，可能会引起端口号占用问题），同时可实时监听js等文件的变化，去修改相应的文件。
