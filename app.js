var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var session = require('express-session');
//var MongoStore = require('connect-mongostore')(session);
var logger = require('morgan');
var querystring = require('querystring');
var mongoose = require("mongoose");
mongoose.connect('mongodb://root:123456@localhost:27017/gomall?authSource=admin', { useNewUrlParser: true });

//页面路由
var indexRouter = require('./routes/index');
var forgetRouter = require('./routes/forget');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
//请求路由
var login_registerRouter = require('./routes/http_login_register');

var app = express();
//将webpack-dev-server结合到nodejs
if (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development'){
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack.config');
  const webpack = require('webpack');
  var complier = webpack(webpackConfig);
  app.use(webpackDevMiddleware(complier,{}));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// public engine setup
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser('helloworld'));
/*app.use(session({
  secret:'my app secret',// 用来对session id相关的cookie进行签名
  saveUninitialized:false,// 是否自动保存未初始化的会话，建议false
  resave:false,// 是否每次都重新保存会话，建议false
  store: new MongoStore({   //创建新的mongodb数据库存储session
    host: 'localhost',    //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
    port: 27017,          //数据库的端口号
    db: 'test-app'        //数据库的名称。
  }),
  name:'cookie',//cookie的name，默认值是：connect.sid
  cookie:{
    maxAge:10*1000
  }
}));*/

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/forget', forgetRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/login_register', login_registerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
