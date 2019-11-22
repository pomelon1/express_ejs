var http=require("http");
var express=require("express");
var app=express();
http.createServer(app).listen(8101,function(req,res) {
    app.get("/", function (req, res) {
        res.render("index.html");

    })
})