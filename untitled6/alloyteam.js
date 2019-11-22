var https= require("https");
var fs=require("fs");
var url="https://www.baidu.com/";
var mysql  = require('mysql');
var TEST_DATABASE = 'my_news_test';
var TEST_TABLE = 'node_user';
var option= {
    hostname:'m.baidu.com',
    path:'/tcx?appui=alaxs&page=api/chapterList&gid=4315647048&pageNum=1&chapter_order=asc&site=&saveContent=1',
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'utf-8',  //这里设置返回的编码方式 设置其他的会是乱码
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Cookie': 'BAIDUID=A78C39414751FF9349AAFB0FDA505058:FG=1; true; __bsi=12248088537049104479_00_7_N_R_33_0303_cca8_Y',
        'Host': 'm.baidu.com',
        'Referer': 'https://mbd.baidu.com /newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9397136410554994398%22%7D&n_type=0&p_from=1'

    }};
var connection = mysql.createConnection({
    host     : '118.24.126.217',
    user     : 'root',
    password : 'qwer!@#$',
    port: '3306',
    database: 'ssx0',
});

connection.connect();
var data = "";
var str="";

// 创建一个请求
var req = https.request(url,function(res){
    // 设置显示编码
    res.setEncoding("utf8");
    // 数据是 chunked 发送，意思就是一段一段发送过来的
    // 我们使用 data 给他们串接起来
    res.on('data', function(chunk){
        data += chunk;
    });
    // 响应完毕时间出发，输出 data
    res.on('end', function(){
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g;
        // var img = /<img[^>]*\/?>/gi;
        // var img1=/src=[\'\"]?([^\'\"]*)[\'\"]?/g;
        var res = [];
        // var ress = [];
        while(match = reg.exec(data)) {
            res.push({
                "url": match[1],
                "title": match[2],
                "excerpt": match[3]
            });
        }
        // dealData(data);
        // var excerpt = excerpt.replace(/(<.*?>)((.*?)(<.*?>))?/g, res);
        // excerpt = excerpt.slice(0, 120);
        console.log(res);
        // console.log(req.Headers);
        // console.log(excerpt+"***")
        // var str = "";
        for(var i = 1, len = res.length; i < len; i++){
            // str = JSON.stringify(res);
            console.log(res.length+"************");
            console.log(i);
            console.log(res[i].url);
            str+=res[i].url+res[i].title+res[i].excerpt+"/n";
            console.log(str);
            var  userAddSql = 'INSERT INTO urll2(url,title,expert) VALUES("1","2","3")';
            // var  userAddSql_Params = ['7','8','9'];
            connection.query(userAddSql,userAddSql_Params,function (err, result) {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                }
                else{
                    console.log('-------INSERT----------');
                    //console.log('INSERT ID:',result.insertId);
                    console.log('INSERT ID:',result);
                    console.log('#######################');}
            });


            //     str += "[" + str[i].title + "](" + str[i].url + ")\n" + "\n\n";
        }
        // fs.writeFile('index.md', str, function (err) {
        //     if (err) throw err;
        //     console.log('数据已保存～');
        // });
    });

});


connection.end();
// 发送请求
req.end();