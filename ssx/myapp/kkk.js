var http=require("http");
var mysql= require('mysql');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
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

// var imp;
var pp={};
// req.session.username="lhj";

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
app.use(cookieParser('sessiontest'));
app.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 60,
    activeDuration: 5 * 60 * 1000,
}));

// router.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: {maxAge: 60000}}));
// fs.readFile('public/javascripts/right', function (err, data) {
//     console.log(data);
//     console.log(err);
//     var ha=JSON.parse(data);
//     console.log(ha);
//     imp=ha.p;
//     console.log(imp.length);
//     console.log(imp);
//     console.log(imp[0].name);
//     // console.log(ha.p[1].name);
//
//
//
// })
http.createServer(app).listen(8101,function(req,res) {

    console.log("服务器地址为:http://localhost:8101");
    app.get("/", function (req, res) {
        if(req.session.user){
            var user=req.session.user;
            var name=user.name;
            res.render("pomelon.html", {
                "title": name,
                "tv": "《跑男》",
                "sex": "女"
            });

        }else{
            res.render('ssss.html');
        }
        // res.render("ssss.html")
        ;
    })
    // //post方router法
    // function po(){
    app.post('/login.html', function(req, res, next) {
        // 获取参数

        var query = req.body;
        var user={
            name:query.username,
            password:query.password,
        }
        req.session.user=user;
        getUserInfor(query.username,query.password);
        console.log(pp);
        console.log("post请求：参数", query);
        console.log("post请求：参数", query.username);
        console.log("post请求：参数", query.password);
        req.session.username =query.username;
        console.log("我是"+req.session);
        // console.log("我是搜搜素、"+req.session.myname);
        // res.render("eee");
        for (var i = 0; i < pp.length; i++) {
            if (pp[i].name === query.username&& pp[i].password === query.password ){   //呈递页面渲染
                // console.log(sname[i].username+sname[i].password);
                // if (req.query.username === imp[1].name) {
                res.render("pomelon.html", {
                    "title": query.username,
                    "tv": "《跑男》",
                    "sex": "女"
                });}}

    });
})



/**

 * [获取表中所有位置信息]

 * @return {[type]} [description]

 */

function getUserInfor(name, pass, callback) {

    var connection = mysql.createConnection({
        host     : '118.24.126.217',
        user     : 'root',
        password : 'qwer!@#$',
        port: '3306',
        database : 'ssx0'
    });

    connection.connect();

    var  sql = 'SELECT * FROM  user';
//查
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.dir(result);
        console.log('------------------------------------------------------------\n\n');
        var ha=JSON.stringify(result);
        console.dir(ha);
        // console.dir(ha.name);
         pp=JSON.parse(ha);
        console.log(pp);
        console.log(pp[0].name);
    });

    connection.end();
}
