/*模式匹配*/
var kword = /no/ig;  //no,区分大小写，全部替换
var reply =prompt("输入回复");

//step1：查找所有匹配的关键字
var arr = reply.match(kword);  //替换内容时，用match

//step2：将所有no，替换为**
reply = reply.replace(kword,"**");   //kword为模式


//step3：输出替换后结果，输出“共替换?处”
alert(reply);
/*第一种
if(arr){    //若arr!=null，直接写成arr
    alert("共替换"+arr.length+"处");
}
else{
    alert("共替换0处");
}
*/

/*第二种：简便算法*/
alert("共替换"+(arr!=null ? arr.length : 0) + "处");


