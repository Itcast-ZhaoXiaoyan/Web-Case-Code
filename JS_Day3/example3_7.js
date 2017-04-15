var a=100;
function fun(){
    console.log(a);
    var a=90;
    console.log(a);
}
fun();     //undefined  90
console.log(a);   //100

/*
解析：
由于在局部变量中，并未定义变量“a”，所以此时a为“未定义undefined”状态；
后来又重新赋值“90”，此时函数输出“90”，“a=90”作为“局部变量”，执行完毕即被销毁。
	但是，外部全局变量并不会改变，还是“a=100”。
*/
