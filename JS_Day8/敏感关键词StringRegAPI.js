var str="纪委负责对全国党员干部的纪检监察工作";
//纪委 纪检 纪检监察

var reg=/纪[检委](监察)?/;
var count=0;

/*先找一次，如果找到
    先判断当前关键字的字符个数，再根据个数替换*

*/

var arr=null;
//while( (arr=str.match(reg))!=null){
while((arr=str.exec(reg)) !=null)
    str=str.replace(reg,arr[0].length==2 ? "**" : "****");
    count++;
}

console.log(str);
console.log("共替换"+count);
