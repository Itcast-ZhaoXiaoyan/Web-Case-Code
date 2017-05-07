/*笔试题*/
//this——>window
var a=2;

//this—->window
function fun(){
    console.log(this.a);
}


//this——>window
var o={a:3,fun:fun};    //创建对象同时，this——>o
var p={a:4};            //赋值同时，this——>p
o.fun();                //this.o   3 
  //console.log(o.a);   //3
  /*结论——this与它定义在哪无关，this都指向的是当前的对象，上述o.fun(),指向的是“o”，其对应的是3，所以输出3*/
  
  
  (p.fun=o.fun)();      //2，匿名函数的自调，还是作为全局变量，所以返回2
  //p.fun=0x1011
  //p={a:4,fun:0x1011}
  //返回o.fun中的值！ 0x1011（地址）
  //(0x1011)(); ——>匿名函数自调 ——>this_window
  
 /*结论——赋值表达式的结果相当于等号右侧表达式的值*/
 
 p.fun();              //4
 /*结论——this与它定义在哪无关，this指向当前的对象，即为p*/
 
 
