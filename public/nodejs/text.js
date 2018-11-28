var url = require("url");
var http = require('http');
var jwt = require("jsonwebtoken");
http.createServer(function (req, res) {

  /*var MongoClient = require('mongodb').MongoClient;
  var DB_CONN_STR = 'mongodb://localhost:27017/gomall';// 数据库为 detanx
	let dbName = 'gomall';*/
	
  if(req.url !== "/favicon.ico"){
    router();  
  }

  //路由
  function router(){
  // 解析 url 参数
    var params = url.parse(req.url, true).query;
    console.log(params);
	  var pathname = url.parse(req.url).pathname;
	  //console.log(pathname);
	  if(pathname === "/") {
	    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8'});
	    var arr = "";
	    req.on("data",function(data){
	      arr += data;
	    });
	    req.on("end",function(){
	      console.log(arr);
	    })
	    res.end('callback(\'{\"msg\": \"我要一个女朋友\"}\')');
	  }
	  else if(pathname === '/dynamic') {
	    var mongoose = require("mongoose")
			mongoose.connect('mongodb://root:123456@localhost:27017/gomall?authSource=admin', { useNewUrlParser: true });
			mongoose.connection.once("open",function(){
		    console.log('数据库连接成功');
			});
			var usersSchema = mongoose.Schema({
			  username: String,
			  password: String,
			  email: String,
			});
			var User = mongoose.model('User', usersSchema);
			var user = new User({ username: 'detanx',password:'a120412',email:'1286335864@qq.com'});
			//console.log(felyne.name); // 'Felyne'
			
			user.save(function (err, user) {
	    	if (err) return console.error(err);
		    console.log('插入成功！')
		  });
		  
		  User.find({username: "detanx"}, {username: 1, password: 1}, function(err, docs){
		    if(err) console.log(err);
		    console.log('查询结果：' + docs);
			})
	  }
  }

}).listen(3000,'127.0.0.1');
console.log('Server running on port http://127.0.0.1:3000/');