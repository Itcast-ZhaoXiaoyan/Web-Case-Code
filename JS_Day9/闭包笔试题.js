function outer(){
    var arr=[];
    for(var i=0;i<3;i++){
        arr.push(function(){return i})
    }
    return arr;
}

var getFuns=outer();    //闭包中有几个受保护的i

/*
  getFuns——>[function(){return i},
             function(){return i}
             function(){return i}]
*/

console.log(getFuns[0]());   //3
console.log(getFuns[1]());   //3
console.log(getFuns[2]());   //3


/*解析
    由于在for(var i=0;i<3;i++)中“i”作为局部变量，是一个活动变量，只有1个受保护的i（var i=0仅一个）
    又因为i执行了0,1,2三次，但是i=2时，会继续push()一次，所以最后i=3才结束，即i=3
    
    
*/
