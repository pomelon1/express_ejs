var mysql      = require('mysql');
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
    var pp=JSON.parse(ha);
    console.log(pp);
    console.log(pp[0].name);
});

connection.end();