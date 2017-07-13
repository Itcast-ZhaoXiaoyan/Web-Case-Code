//外部函数名
Function outer(){
  Var a=1;
  //内部函数名；
  Function inner(){
    //三个数字变量a、b、c
    Var b=2;
    If(a==1){
      Var c=3;
    }
  }
}
//调用外部函数
Outer();

Assert(true,”some descriptive text”);
Assert(typeof outer ==‘function’,”outer() is in scope”);
Assert(typeof inner == ‘function’, “inner() is in scope”);
Assert(typeof a === ‘number’,”a is in scope”);
Assert(typeof b === ‘number’,”b is in scope”);
Assert(typeof c === ‘number’,”c is in scope”);
