/*以下函数正确的是*/
var arr=[1,12,23,45,24];

A.function compare(a,b){return a-b;}

B.var compare = function(a,b){return a-b;}

C.var compare = new Function(a,b,return a-b);

arr.sort(compare);
conosle.log(arr);


在上述题目中，C错误，A、B正确。
	由于new关键字创建函数对象时，new关键字里边参数类型必须为“字符串”
	所以，C选项为——“var compare  = new Function("a","b","return a-b")”
