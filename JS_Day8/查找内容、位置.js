var str="明明喜欢你，却不喜欢我；我理我，我想静静";

var reg=/明明|静静/g;

/*先找一次，判断结果是否为null
  若不为null，就输出数组的第一个元素
      以及数组的index属性
*/

var arr=null;
while((arr=reg.exec(str))!=null)
{
    console.log("在位置"+arr.index+"发现关键字："+arr[0]);
    console.log("下次从"+reg.lastIndex+"开始找");
}
