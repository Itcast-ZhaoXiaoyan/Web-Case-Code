/*请用户反复输入员工姓名
    每输入一个，就存入数组emps中，
 解析——
    （1）首先定义一个空数组emps
         再定义一个变量i，保存现在存入的位置（i从0开始）
    （2）循环三要素
        a、循环条件——输入!="exit"
        b、循环变量——输入i
        c、循环体——请用户输入员工姓名，
        判断员工输入不等于“exit”
        再将姓名存入i位置，i++
     （3）退出循环后，输出emps内容
*/

var emps = [];
var i=0;
var input="";
while((input=prompt("请输入员工姓名");)!="exit"){
    emps[i++]=input;
}
console.log(emps);
