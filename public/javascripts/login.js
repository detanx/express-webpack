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
    clickEvent:function() {
      //点击登录
      $('.submit').on('click', function(){
        let username = $('.username').val().trim();
        let password = $('.password').val().trim();
        if(username === '' || npm.RE_UNAME.test(username)){
          npm.layerOpen('用户名为空或含有特殊字符！')
          return;
        }
        if(password === '' || !npm.RE_PWD.test(password)){
          npm.layerOpen('密码不能为空或长度不符！')
          return;
        }
        let data = {
          username:username,
          password:Base64.encode(password)
        }
        npm.XMLHttpRequest(data,npm.BASEPATH +  "/login_register/login",(data)=> {
          let newdata = JSON.parse(data)
          console.log(newdata)
          if(newdata.code === 200) {
            localStorage.setItem("username",username)
            $('.username').val("")
            $('.password').val("")
            alert("登陆成功！")
            window.location.href = npm.BASEPATH + "/index"
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

