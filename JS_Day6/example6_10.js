/*抓取出出生年月日的字符串*/

var pid="110102198312262111";

/*获取生日*/
var birth=pid.slice(6,-5+1);
console.log(birth);

/*获得倒数第二位字符，判断性别*/
var gender=pid[pid.length-2] % 2==0 ? "女":"男";
console.log(gender);
