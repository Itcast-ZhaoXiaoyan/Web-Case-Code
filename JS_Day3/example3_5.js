var n=101;
function foo(){
    m=100;
    console.log(m);
}
foo();              //100
console.log(m);     //100

/*
解析：
   虽说在函数外部并未“var m”，但是由于在foo()中并未传递参数，所以此时的系统会自定义的创建全局变量“m”，类似于“window.m”；
   所以，此时foo()为“m=100”
*/
