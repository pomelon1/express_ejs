var http=require("http");
var express=require("express");
var app=express();
var fs = require("fs");
var path = require('path');
var url=require('url');
// 1.在app.js的头上定义ejs:
var ejs = require('ejs');//定义变量
var bodyParser=require('body-parser');
var router = express.Router();
app.use(express.static('wwwroot'));
// web.use(bodyParser.urlencoded({extended:false}));
// import  express from 'express';
// import  bodyParser from 'body-parser';
// const app = express();

var imp;
var postimp;


app.use(express.static(__dirname+"/public"));
//设置模板视图的目录
app.set("views","./public/views");
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 36000}));
app.set("views","./public/views");
//设置是否启用视图编译缓存，启用将加快服务器执行效
app.set("view cache",true);
// 2.注册html模板引擎：
app.engine('html',ejs.__express);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine","html");//设置路由
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

fs.readFile('public/javascripts/right', function (err, data) {
    console.log(data);
    console.log(err);
    var ha=JSON.parse(data);
    console.log(ha);
    imp=ha.p;
    console.log(imp.length);
    console.log(imp);
    console.log(imp[0].name);
    // console.log(ha.p[1].name);



})
http.createServer(app).listen(8101,function(req,res) {

    console.log("服务器地址为:http://localhost:8101");
    app.get("/", function (req, res) {
        res.render("ssss.html")
        ;
    })

// get方法
//     app.get("/login.html", (req, res) => {
//         console.log(111);
//         for (var i = 0; i < imp.length; i++) {
//             if (imp[i].name === req.query.username && imp[i].password === req.query.password) {   //呈递页面渲染
//                 // console.log(sname[i].username+sname[i].password);
//                 if (req.query.username === imp[1].name) {
//                     res.render("pomelon.html", {
//                         "title": req.query.username,
//                         "tv": "《跑男》",
//                         "sex": "女"
//                     });
//                 } else if (req.query.username === imp[0].name) {
//                     res.render("nicole.html", {
//                         "title": req.query.username,
//                     });
//                 }
//             }
//         }
//     })
    // //post方router法
    app.post('/login.html', function(req, res, next) {
        // 获取参数
        var query = req.body;
        console.log("post请求：参数", query);
        console.log("post请求：参数", query.username);
        console.log("post请求：参数", query.password);
        for (var i = 0; i < imp.length; i++) {
            if (imp[i].name === query.username&& imp[i].password === query.password ){   //呈递页面渲染
                // console.log(sname[i].username+sname[i].password);
                // if (req.query.username === imp[1].name) {
                    res.render("pomelon.html", {
                        "title": query.username,
                        "tv": "《跑男》",
                        "sex": "女"
                    });}}
                // } else if (req.query.username === imp[0].name) {
                //     res.render("nicole.html", {
                //         "title": req.query.username,
                //     });
                // }
            // }
        // }
    // })
        // res.render('o.html');
    });


    // app.post("/login.html", function (req, res) {
    //     console.log(req.body.name);
    //     console.log(req.body.password);
    //     res.render('o.html')
    //      console.log(req.body);})
    //     // res.render('login.html', {
        //     name: '111'
        // });
    // })

})