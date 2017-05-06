//外层函数被调用了几次，就有几个受保护的局部变量副本
function outer(){
     var i=0;
      return i++;
}

var getNum1=outer();
//外层函数被调用1次，只有1个受保护对象副本i
console.log(getNum1());  //0
console.log(getNum1());  //1


var getNum2=outer();
//外层函数被调用2次，就有2个受保护的i，互不干扰
console.log(getNum2());  //0
