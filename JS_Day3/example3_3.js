var a=100;
function fun(a){
  a++;
  console.log(a);
}

fun(100);       //101

console.log(a);   //100


/*
解析：由于“var a=100”，a作为全局变量，在“fun(a)”中“a”为局部变量，所以fun(a)执行后，“console.log(a)”为“101”，
    但是“fun(a)”执行完毕后“a=101”被销毁，所以“a”还是“100”。
*/
