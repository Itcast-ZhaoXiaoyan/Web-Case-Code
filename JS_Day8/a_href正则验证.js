/*获得一段html文本中所有超链接的href属性的值*/

var html='<h1 class="h1"></h1><a  class="curr" href="http://tmooc.cn"></a><a name="top"></a><A href="http://baidu.cn"></A><h1></h1>';

var reg=/<a\s+(.*?)href\s*=\s*['"][^'"]*['"]/g;
var arr=null;

//“\s”有一个空格 "\s*"表示空格可有可无  ['"]表示单引号、双引号都可有   [^'"]表示除了单引号、双引号都行
while((arr=reg.exec(html))!=null)
{
    console.log(arr[0]);
}
