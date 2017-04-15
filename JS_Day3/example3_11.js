/*请用户输入搜索关键字
  程序将关键字编码为单字节
  拼接一个url，输出
*/

var url ="http://www.baidu.com/s?word=";
var input = prompt("百度一下");
input=encodeURIComponent(input);
alert("向服务器发送请求:"+url+input);

/*模拟服务器解码*/
alert("服务器端解码后："+decodeURIComponent(input));
