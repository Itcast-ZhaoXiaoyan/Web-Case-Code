var a=100;
function fun(){
    console.log(a);
    a=90;
    console.log(a);
}
fun();			//100  90
console.log(a);         //90

/*解析：
  由于与“案例3-1”相比，“var a=90”取消了“var”，此时“无var，有赋值”，“a”为全局变量二次赋值，此时“a=90”。
	但是，起始的“a=100”由于重新赋值，所以“a=90”
*/
