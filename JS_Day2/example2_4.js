var n=10;
var m=10;
var r=n++>10 && ++m>10;
   // n++>10 || ++m>10
console.log(r);     //false
console.log(n);     //10
console.log(m);     //11

//如果var r=n++>10 || ++m>10
console.log(r);     //true
