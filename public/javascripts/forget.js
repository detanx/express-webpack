/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */

/**
 * @constant  {object}
 */

(function($) {
  var Base64 = require('js-base64').Base64;//base64加密
  var npm = require('./jsSrc/npm.js');
  let loginObj = {
    clickEvent:function() {let _this = this;
      //获取验证码
      $('.getCode').on('click', function() {
        let email = $('.email').val().trim();
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
          npm.XMLHttpRequest({email:email},npm.BASEPATH + "/login_register/getForgetCode", (data)=> {
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
      //点击找回密码
      $('.submit').on('click', function(){
        let email = $('.email').val().trim();
        let password = $('.password').val().trim();
        let password2 = $('.password2').val().trim();
        let verify = $('.verify').val().trim();
        if(email === '' || !npm.RE_EMAIL.test(email)){
          npm.layerOpen('邮箱为空或邮箱格式错误！')
          return;
        }
        if(password === '' || !npm.RE_PWD.test(password) && password2 === '' || !npm.RE_PWD.test(password2)){
          npm.layerOpen('密码不能为空或长度不符！')
          return;
        }
        if(password !== password2){
          npm.layerOpen('两次密码不一致！')
          return;
        }
        if(verify === '' || verify.length !== 4) {
          npm.layerOpen("验证码为空或长度错误！");
          return;
        }
        let data = {
          email:email,
          password:Base64.encode(password),
          verify:verify,
        }
        npm.XMLHttpRequest(data,npm.BASEPATH +  "/login_register/forget",(data)=> {
          let newdata = JSON.parse(data)
          console.log(newdata)
          if(newdata.code === 200) {
            $('.email').val("")
            $('.password').val("")
            $('.password2').val("")
            $('.verify').val("")
            alert("找回密码成功，去登录！")
            window.location.href = npm.BASEPATH + "/login"
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
  loginObj.start();
  
})(jQuery)

