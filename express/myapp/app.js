var http=require("http");
var express=require("express");
var app=express();
var fs = require('fs');
var path = require('path');
// 1.在app.js的头上定义ejs:
var ejs = require('ejs');//定义变量
var querystring = require('querystring');
var nameq=[];
var pwa=[];
var info = "";
var na;
var pw;

// res.writeHead(200, {'Content-Type': 'text/json'});
fs.readFile('public/javascripts/right', function (err, data) {
    // console.log(data);
    var ha=JSON.parse(data);
    console.log(ha);
    console.log(ha.p.length);
    console.log(ha.p[1].name);
    for(var i=0;i<ha.p.length;i++)
    {
        nameq[i]=ha.p[i].name;
        console.log(nameq[i]);
        pwa[i]=ha.p[i].password;
        console.log(pwa[i]);
    }
    console.log(nameq)
})
// var tem={  message:"我是中间部分"};
// 创建服务器//在控制台输入node app.js启动服务器
http.createServer(app).listen(8080,function(){
    console.log("服务器地址为:http://localhost:8080");});
//挂载静态资源处理中间件,设置css或者js引用文件的静态路径
// app.use(express.static(__dirname,'css'));
app.use(express.static(__dirname+"/public"));
// 或者以下这个也可以//
// app.use(express.static(path.join(__dirname, 'public'), {maxAge: 36000}));
//设置模板视图的目录
app.set("views","./public/views");
//设置是否启用视图编译缓存，启用将加快服务器执行效
 app.set("view cache",true);
 // 2.注册html模板引擎：
 app.engine('html',ejs.__express);
 //设置模板引擎的格式即运用何种模板引擎
app.set("view engine","html");//设置路由
app.get("/",function(req,res){
    res.render("ssss.html")
    // console.log(req.body.username)
    ;})

app.post("/login.html",function(req,res) {
    res.render('login.html', {
        name: '111'
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('ssss.html', function (err, data) {
        req.addListener("data", function (chunk) {
            info += chunk;
        })
        req.addListener("end", function () {
            // console.log("first" + info);
            // // info=JSON.parse(info);
            info = querystring.parse(info);
            na = info.username;
            pw = info.password;
            console.log(info);
            // console.log("gcgyugyuhguug"+info.username);
            // for (var i = 0; i < nameq.length; i++) {
            //     if (na === nameq[i] && pw === pwa[i]) {
            //         res.render('login.index', {
            //             name: na
            //         });
            //     }
            // }
        })
        // res.render('/login.html', {
        //     name: na        });
        // res.render('login.html', {
        //     name: '111'
        // });

    })
})


    // if(na==='pomelon'){
    //         if(pw==='456'){
    //         res.render('login.html',{
    //                             name:na
    //                         }) ;
    //         }
    // else
    //         {
    //             res.render('login.html',{
    //                 name:na
    //             }) ;
    //         }
    //         {
    //             if(na==='nicole'){
    //                 if (pw==='123')
    //                     res.render('login.html',{
    //                         name:na
    //                     }) ;
    //             }
    //         }

    // }

//
//     })
//
// })





    // res.writeHead(200, {'Content-Type': 'text/html'});
    // fs.readFile('login.html', function (err, data) {
    //     var info="";
    //     req.addListener("data",function(chunk){
    //         info += chunk;
    //     })
    //     req.addListener("end",function(){
    //         info = querystring.parse(info);
    //         res.writeHead(200, {'Content-Type': 'text/html'});

            // fs.readFile('javascript/right', function (err, data) {
            //  if(info.name==p[1].username&&info.password==p[1].password){}
            // })

    //    })
    // })


    // res.render("login",{title:"11111"})
