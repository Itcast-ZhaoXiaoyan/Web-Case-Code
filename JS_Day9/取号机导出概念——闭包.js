//定义一个取号机函数
//     每调用一次，顺序生成一个永不重复的序号


var n=1;
function  getNum(){
    return n++;
}

console.log(getNum());  //1
console.log(getNum());  //2

var n=100;  //产生全局污染
console.log(getNum());  //100
console.log(getNum());  //101



/*解决上述问题*/
function getCounter(){
    var n=1;  //作为局部变量，它是活动对象
    var counter=function(){return n++};
    return counter;
}

//ICBC
var getNum=getCounter();
//getNum——>fucntion(){return n++;}

console.log(getNum());
