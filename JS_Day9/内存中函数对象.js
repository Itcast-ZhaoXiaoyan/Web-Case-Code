var a;   //由于a只声明未赋值，所以为“undefined”

function fun(a){
   a++;
   console.log(a);
}
//这里的a为局部变量，作为一个“活动对象”


a=100;   //虽说没有var关键字，但是毕竟之前有a的定义，仍然为赋值

fun(a);    //a++——>"101"  101
console.log(a)；   //100
