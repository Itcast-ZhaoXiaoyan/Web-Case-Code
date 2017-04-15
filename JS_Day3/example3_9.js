function foo(){
   return 1;
}
console.log(foo());       //1

function foo(){
   trturn 2;
}
console.log(foo());      //2

var foo=100;
console.log(foo());      //“出错”

/*
解析：
由于上述案例中，前两个均为“声明提前”，但是第三个中，声明“var  foo=100”，此时的foo为一个变量，而不是一个函数类型，所以当“console.log(foo())”时，会出错。
*/
