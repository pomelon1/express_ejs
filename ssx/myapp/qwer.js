var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    //解决跨域问题
    res.writeHeader(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });



    http.createServer(function(req, res){
        var post = '';     //定义了一个post变量，用于暂存请求体的信息

        req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            post += chunk;
        });

        req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            post = querystring.parse(post);
            res.end(util.inspect(post));
        });// url.parse 方法来解析 URL 中的参数
    var pathname = url.parse(req.url, true).pathname;
    if (pathname == '/pomelon.html') {
        // 定义了一个body变量，用于暂存请求体的信息
        var body = '';
        //// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
        req.on('data', function (data) {
            body += data;
            console.log(body);
        });

        req.on('end', function () {
            var myBody = querystring.parse(body); //querystring.parse将post解析为真正的POST请求格式
            res.write(JSON.stringify(myBody));
            console.log(myBody);
            res.end();
        })
    }
});

server.listen(8081, function () {
    console.log('server start at localhost:8081');
});

