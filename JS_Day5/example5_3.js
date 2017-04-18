/*定义一个函数输出反三角
      *
     **
    ***  
   ****
  *****
*/

function printTriangle2(len)
{
  for(var rol=0;rol<len;i++){
  /*输出三角的任意一行*/
  
  //每行输出len-rol个空格，之后都是*
  /*三要素
    1.循环条件：字符个数<1
    2.循环变量：字符个数，从0开始，每次+1，str=""，每次向其中拼接一个字符
    3.循环体：如果字符个数<(len-rol)，拼空格，否则拼*
  */
  
  for(var i=0,str="";i<len;i++){
      str+=i<(len-row) ? " " : "*";
  }
  
 }
  console.log(str);
}
