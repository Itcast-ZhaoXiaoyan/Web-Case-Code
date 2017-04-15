function foo(m){
    m=100;
    console.log(m);
}
foo();              //100
console.log(m);     //会报错！

/*
解析：
   由于此时的foo(m)传递了参数“m”，所以此时“m”为局部变量，只在“foo()”函数调用时“m”有效，一经执行完毕即被销毁，所以此时的“m”并不存在，会报错。
*/
