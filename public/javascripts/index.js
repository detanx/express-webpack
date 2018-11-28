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
    inistall:function() {
      let username = localStorage.getItem("username")
      if(typeof username !== "undefined" && username !== "") {
        $(".header_user").css({
          "display": "none"
        })
        $(".header_logined").css({
          "display": "block"
        })
        $(".logined_p").html(username)
      }else {
        $(".header_user").css({
          "display": "block"
        })
        $(".header_logined").css({
          "display": "none"
        })
      }
    },
    clickEvent:function() {
      //点击退出
      $('.logined_out').on('click', () => {
        $(".header_user").css({
          "display": "block"
        })
        $(".header_logined").css({
          "display": "none"
        })
        localStorage.setItem("username","")
      })
    },
    start:function() {
      this.inistall()
      this.clickEvent()
    }
  }
  loginObj.start();
  
})(jQuery)
