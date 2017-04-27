var n=100;  //原始类型的值，本来没有任何方法
console.log(new Number(n).toString(2));
/**临时的Number对象被释放**/
 
var str="张";
console.log(new String(str).charCodeAt(0));
/**临时的String对象被释放**/
