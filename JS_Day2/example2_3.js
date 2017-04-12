var my=10;
var lp=my++;
console.log(lp);
console.log(my);  //11

/*笔试题*/
var n=2;
var r=n++ + ++n + n++;
  //?  __2
  //n=?  __3
          //?__  4
          //n=?__  4
                              //r=6
                 //?__ 4 
                 //n=?  5
                              //r=10
console.log(r);   //10
console.log(n);   //5

var q=++n + n++ + ++n;
     //?__  3
     //n=?__  3
             //?__  3
             //n=?__  4
                                //q=6
                       //?__  5
                       //n=?__  5
                                //q=11
console.log(q);     //11
console.log(n);     //5

/*总结:
   前++(++n)：将n中的值+1，然后返回新值；
   后++(n++)：将n中的值+1，然后返回旧值。
*/
