/*
案例：编写一个收银柜台收款程序，
  根据商品单价、购买数量以及收款金额计算并输出应收金额和找零

分析：
    定义输入——单价price、数量count、金额money
    定义输出——应收金额total、找零change
    设计数据结构——多组表示单价和购买数量的变量
    total=price*count
    if(total>500) {total=total*0.8}
    change=money-total
*/

var price = prompt("输入单价");
var count = prompt("输入数量");
var money = prompt("输入金额");

var total = price*count;

(total >= 500) && (total *= 0.8)

var change = money - total;

alert("应收："+total+";找零："+change);
