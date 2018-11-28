/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */

/**
 * @constant  {object}
 */
const RE_UNAME = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;//匹配用户名
const RE_PWD = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\+\*~!@&%$^\(\)#_,\.]{6,16}$/;//匹配密码
const RE_EMAIL = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$///匹配邮箱
const BASEPATH = "http://localhost:3000"//请求地址

/* 
 * layerOpen layer弹出函数
 * @param {string} contents - 弹出内容.
 */
function layerOpen(contents) {
  let str = `<div style="padding:50px;">${contents}</div>`
  
  layer.open({
    type: 1,
    //page层
    area: ['500px', '300px'],
    btn:['确定'],
    yes: function(index, layero){
      layer.close(index);
    },
    time:3000,
    title: '提示',
    shade: 0.6,
    //遮罩透明度
    moveType: 1,
    //拖拽风格，0是默认，1是传统拖动
    shift: 1,
    //0-6的动画形式，-1不开启
    content: str
  });
}

/* 
 * XMLHttpRequest fetch请求函数
 * @param {object} data - 请求数据.
 * @param {string} url -  请求地址.
 * @param {function} callback -  回掉函数.
 */
function XMLHttpRequest(data, url , callback) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
   
  var myInit = { 
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data)
  };
                 
  fetch(url, myInit)
  .then(res => res.text())
  .then(res => callback(res))
}


module.exports = {
  layerOpen:layerOpen,
  XMLHttpRequest:XMLHttpRequest,
  RE_UNAME:RE_UNAME,
  RE_PWD:RE_PWD,
  RE_EMAIL:RE_EMAIL,
  BASEPATH:BASEPATH,
}
