var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if(req.url === '/'){
        fs.readFile('./templates/index.html', 'utf-8', function(err, data){
            if(!err){
                res.write(data);
                res.end();
            }
        })
    }else if(req.url === '/login'){
        fs.readFile('./templates/login.html', 'utf-8', function(err, data){
            if(!err){
                res.write(data);
                res.end();
            }
        })
    }else if(req.url === '/register'){
        res.write("欢迎来到注册页面");
        res.end();
    }else if(req.url === '/admin'){
        res.write("欢迎来到后台管理页面");
        res.end();
    }else{
        res.write("404 你找的页面飞了");
        res.end();
    }
});

app.listen(3000, function(){
    console.log('app is listening at port 3000');
})
