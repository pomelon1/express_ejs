//1.导入http模块
var http = require('http');
var fs = require('fs');
var path = require('path');

//2.创建服务器
http.createServer(function(request,response){
    fs.readFile('s.html', function (err, data) {
        response.end(data);
})

}).listen(8009);

console.log('Server running at http://118.24.126.217:8009/');