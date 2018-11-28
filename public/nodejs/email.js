/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */
var nodemailer = require('nodemailer');//邮箱验证码发送
var verifyCode = require("./verifyCode");//引用生成验证码模块
var smtpTransport = require('nodemailer-smtp-transport');//使用激活需引入的模块

// 开启一个 SMTP 连接池
var transport = nodemailer.createTransport(smtpTransport({
  host: "smtp.qq.com", // 主机
  secure: true, // 使用 SSL
  secureConnection: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "2586240930@qq.com", // 账号
    pass: "umfiqwmhxkygecdd" // 密码
  }
}));

// 设置邮件内容
/*var mailOptions = {
  from: "2586240930@qq.com", // 发件地址
  to: "1286335864@qq.com", // 收件列表
  subject: "验证码", // 标题
  text:"",
  html: "你的验证码是：<b>" + code +"</b>" // html 内容
}*/
 
/**
 * sendMail 发送邮件函数
 * @param {String} recept - 接受邮件的邮箱.
 * @returns {String} 返回对应生成的验证码
 */
var sendMail = function (recept) {
  var code = verifyCode(4);
  transport.sendMail({
    from: "2586240930@qq.com", // 发件地址
    to: recept, // 收件列表
    subject: "验证码", // 标题
    text:"",
    html: "你的验证码是：<b>" + code +"</b>,<br>有效时间30分钟。" // html 内容
  }, function(error, response) {
    if (error) {
      console.error(error);
    } else {
      console.log("发送成功 :" + code);
    }
    transport.close(); // 如果没用，关闭连接池
  });
  return code;
}
/*
 * @exports <sendMail>
 */
module.exports = sendMail;