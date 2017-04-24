function dec2bin(dec){
    //定义一个数组bin，保存每次的余数 
    var bin = [];
    
 //循环条件：dec>0
    while(dec>0){
    
 //用dec反复%2，将余数从头部压入数组保存 ——push()、unshift()
      bin.unshift();
      
 //将dec替换为(dec/2)取整的结果
      dec = parseInt(dec/2);
    }
    return bin.reverse().join("");
}

var n=105;
console.log(dec2bin(n));
console.log(n.toString(2));
