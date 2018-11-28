/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */
var express = require('express');
var router = express.Router();
var Base64 = require('js-base64').Base64;//base64加密
//console.log(Base64.encode('dankogai'))
//console.log(Base64.decode('ZGFua29nYWk='))
const jwt = require('jsonwebtoken');//jwt加密
/*let token = jwt.sign({foo: 'bar'},'shhh');加密
let decoded = jwt.verify(token, 'shhh');解密*/
var verifyCode = require('../public/nodejs/verifyCode.js')
var mongoose = require("mongoose")//mongoose连接数据库
mongoose.connect('mongodb://root:123456@localhost:27017/gomall?authSource=admin', { useNewUrlParser: true });//mongoose连接数据库
var sendMail = require('../public/nodejs/email')//邮件发送模块
var RE_FLAG = false,
		RE_CODE = null,
		FORGET_FLAG = false,
		FORGET_CODE = null;
//mongoose连接数据库构建用户Schema
var usersSchema = mongoose.Schema({
  username: String,
  password: String,
	email: String,
});
//mongoose连接数据库构建用户model
var User = mongoose.model('User', usersSchema);

//登录
router.post('/login',(req, res, next) => {
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
    console.log("chunk:",body);
  });
  req.on('end', function () {
  	body = JSON.parse(body)
		User.find({username: body.username,password: body.password}, {username: 1, password: 1}, function(err, docs){
	    if(err) {
	      res.json({code:500,msg:err})
	    }
	    else if(docs.length === 1) {
	    	if (req.cookies.isFirst) {
	    	  console.log("cookies:" + req.cookies)
		      res.json({code:200,msg:"登录成功，再次欢迎访问"});
		    } else {
		      let token = jwt.sign(verifyCode(20),'hello world');//加密cookie
		      res.cookie('cookie', token, { signed: true, maxAge: 24 * 60 * 60 * 1000});
		      res.json({code:200,msg:"登录成功，欢迎第一次访问"});
		    }
	    }else {
	    	res.json({code:401,msg:"登录失败，用户名或密码错误!"});
	    }
	    console.log('查询结果：' + docs);
		})
  	
  })
})
//获取注册验证码
router.post('/getVerifyCode',(req, res, next) => {
  //console.log(req.cookies)
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
		console.log("chunk:",body);
  });
  req.on('end', function () {
  	body = JSON.parse(body)
  	//console.log("chunk:",body);
		User.find({email: body.email}, {email: 1}, function(err, docs){
	    if(err)  {
        res.json({code:500,msg:err})
      }
	    else if(docs.length === 1) {
		    res.json({code:201,msg:"邮箱已被注册!"});
	    }else {
	      let timer = null;
	      clearInterval(timer);
	    	RE_CODE = sendMail(body.email)
	    	let time = 30 * 60;//30分钟
        RE_FLAG = true;
        timer = setInterval(function() {
          time --;
          if(time <= 0) {
            clearInterval(timer);
            RE_FLAG = false;
          }
        },1000)
	    	res.json({code:200,msg:"验证码已发送!"});
	    }
		})
  })
})
//注册
router.post('/register',(req, res, next) => {
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
    console.log("chunk:",body);
  });
  req.on('end', function () {
  	body = JSON.parse(body)
  	//console.log("chunk:",body);
		if(RE_FLAG && body.verify.toLocaleLowerCase() === RE_CODE.toLocaleLowerCase() ) {
			User.find({username: body.username},{username:1} , function(err, docs){
				if(err)  {
					res.json({code:500,msg:err})
				}
				else if(docs.length === 1) {
					res.json({code:201,msg:"用户名已被注册!"});
				}else {
					var user = new User({ username: body.username,password:body.password,email:body.email});
					user.save(function (err) {
						if (err) {
							return res.json({code:500,msg:err})
						}
						console.log('插入成功！');
						res.json({code:200,msg:"注册成功!"});
					});
				}
			})
		}else {
			res.json({code:200,msg:"验证码错误或已过期！"});
		}
  })
})

//获取重置密码验证码
router.post('/getForgetCode',(req, res, next) => {
  //console.log(req.cookies)
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
		console.log("chunk:",body);
  });
  req.on('end', function () {
  	body = JSON.parse(body)
  	//console.log("chunk:",body);
		User.find({email: body.email}, {email: 1}, function(err, docs){
	    if(err)  {
        res.json({code:500,msg:err})
      }
	    else if(docs.length === 1) {
				let timer1 = null;
	      clearInterval(timer1);
	    	FORGET_CODE = sendMail(body.email)
	    	let time1 = 30 * 60;//30分钟
        FORGET_FLAG = true;
        timer1 = setInterval(function() {
          time1 --;
          if(time1 <= 0) {
            clearInterval(timer1);
            FORGET_FLAG = false;
          }
        },1000)
	    	res.json({code:200,msg:"验证码已发送!"});
	    }else {
				res.json({code:201,msg:"邮箱未注册!"});
	    }
		})
  })
})

//重置密码
router.post('/forget',(req, res, next) => {
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
    console.log("chunk:",body);
  });
  req.on('end', function () {
  	body = JSON.parse(body)
  	//console.log("chunk:",body);
		if(FORGET_FLAG && body.verify.toLocaleLowerCase() === FORGET_CODE.toLocaleLowerCase() ) {
			User.find({email: body.email},{email:1} , function(err, docs){
				if(err)  {
					res.json({code:500,msg:err})
				}
				else if(docs.n === 1) {
					User.updateOne({email: body.email}, {$set:{password:body.password}},function (err, docs) {
						if (err) {
							return res.json({code:500,msg:err})
						}
						else if(docs.length === 1) {
							console.log('密码修改成功！');
							res.json({code:200,msg:"找回密码成功!"});
						}else {
							res.json({code:201,msg:"找回密码失败!"});
						}
					});
				}else {
					res.json({code:201,msg:"邮箱未注册!"});
				}
			})
			
		}else {
			res.json({code:200,msg:"验证码错误或已过期！"});
		}
  })
})

module.exports = router;