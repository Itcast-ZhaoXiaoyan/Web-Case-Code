function  buy(card,what){
   card-=5;
   console.log("余额"+card);
   return "香喷喷的"+what;
}

var card=10;
var eric=buy("鱼香肉丝",card);

console.log(card);

/*解析：
  该案例主要解析按值传递的问题，由于调用了函数“buy()”。
*/
