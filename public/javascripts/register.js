/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */

/**
 * @constant  {object}
 */
const Base64 = require('js-base64').Base64;//base64加密
const npm = require('./jsSrc/npm.js');
(function($) {
  var Base64 = require('js-base64').Base64;//base64加密
  var npm = require('./jsSrc/npm.js');
  let registerObj = {
    //清空函数
    emptyFunction:function() {
      $('.username').val("")
      $('.password').val("")
      $('.password2').val("")
      $('.email').val("")
      $('.verify').val("")
    },
    //点击事件
    clickEvent:function() {
      let _this = this;
      //获取验证码
      $('.getCode').on('click', function() {
        let email = $('.email').val();
        if(email.trim() === "") {
          npm.layerOpen("邮箱为空！")
        }
        else if(!npm.RE_EMAIL.test(email)) {
          npm.layerOpen("邮箱格式错误！")
        }
        else {
          let time = 60;
          $('.getCode').attr('disabled','disabled')
          let timer = setInterval(function() {
            time --;
            if(time <= 0) {
              clearInterval(timer);
              $('.getCode').attr('disabled',false).html('验证码')
              return;
            }
            $('.getCode').html(time + '秒')
          },1000)
          npm.XMLHttpRequest({email:email},npm.BASEPATH + "/login_register/getVerifyCode", (data)=> {
            let newdata = JSON.parse(data)
            //console.log(newdata)
            if(newdata.code === 200) {
              npm.layerOpen(newdata.msg)
            }else if(newdata.code === 201) {
              npm.layerOpen(newdata.msg)
            }else{
              npm.layerOpen(newdata.msg);
            }
          })
        }
      })
      //点击注册
      $('.submit').on('click', function(){
        let username = $('.username').val().trim();
        let password = $('.password').val().trim();
        let password2 = $('.password2').val().trim();
        let email = $('.email').val().trim();
        let verify = $('.verify').val().trim();
        if(username === '' || npm.RE_UNAME.test(username)){
          npm.layerOpen('用户名为空或含有特殊字符！')
          return;
        }
        if(password === '' || !npm.RE_PWD.test(password)){
          npm.layerOpen('密码不能为空或长度不符(6-18位，不能为纯字母或数字)！')
          return;
        }
        if(password2 !== password){
          npm.layerOpen('两次密码不一致！')
          return;
        }
        if(email === '' || !npm.RE_EMAIL.test(email)) {
          npm.layerOpen("邮箱为空或格式错误！");
          return;
        }
        if(verify === '' || verify.length !== 4) {
          npm.layerOpen("验证码为空或长度错误！");
          return;
        }
        let data = {
          username:username,
          password:Base64.encode(password),
          email:email,
          verify:verify,
        }
        npm.XMLHttpRequest(data,npm.BASEPATH + "/login_register/register", (data)=> {
          let newdata = JSON.parse(data)
          console.log(newdata)
          if(newdata.code === 200) {
            _this.emptyFunction()
            alert("注册成功！")
            let href = npm.BASEPATH + "/index"
          }else if(newdata.code === 201) {
            npm.layerOpen(newdata.msg);
          }else {
            npm.layerOpen(newdata.msg);
          }
        })
      })
    },
    start:function() {
      this.clickEvent()
    }
  }
  registerObj.start();
  
})(jQuery)
