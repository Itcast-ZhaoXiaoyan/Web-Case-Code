var emps=[];
var input="";
while((input=prompt("输入员工姓名"))!="exit"){
    //结果：用户输入输入的内容
    /*赋值表达式的结果是等号右边的值*/
    emps[emps.length] = input;
}
console.log(emps);
