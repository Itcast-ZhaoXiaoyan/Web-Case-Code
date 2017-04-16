/*定义一个函数，输出乘法口诀任意一行*/

/*分析
  定义一个变量str，保存所有子算式拼成的一个字符
  
  三要素：
  1.循环条件：乘数<=col
  2.循环变量：乘数，从1开始，每次++
  3.循环体：拼子算式：乘数+"x"+col+"=" + 乘数*col
    将子算式拼接到str中
*/

function(col)
{
  var str="";
  for(var i=1;i<=col;i++)
  {
      str+=i+"x"+col + "=" + i*col;
  }
  console.log(str);
}
