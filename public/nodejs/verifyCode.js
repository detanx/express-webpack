/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */

/**
 * verifyCode 生成随机长度n的字符串函数
 * @param {number} n - 字符串长度.
 * @returns {String} 返回长度n的字符串
 */
function verifyCode(n){
	var code = "";
	var codeLength = n; //验证码的长度
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
	    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	for(var i = 0; i < codeLength; i++) 
	{
	    var charNum = Math.floor(Math.random() * 52);
	    code += codeChars[charNum];
	}
	return code;
}
/*
 * @exports <verifyCode>
 */
module.exports = verifyCode;