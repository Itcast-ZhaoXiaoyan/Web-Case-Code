/**无论用户传入几个数字，都可以求和**/

function add(){
    //arguments:[]
    //遍历arguments中每个元素，并累加

    for(int i=0,sum=0;i<arguments.length;sum+=arguments[i++]);
    
    return sum;  //返回和
}

alert(add(1,2,3));         //6
alert(add(1,2,3,4,5,6));   //21
