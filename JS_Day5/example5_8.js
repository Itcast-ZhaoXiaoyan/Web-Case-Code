var week = ['日','一','二','三','四','五','六'];
week[100] = 100;

//['日','一','二','三','四','五','六',100]
//  0    1   2     3    4   5    6   100

console.log("共"+week.length+"个元素");
//101个

week.length=7;
console.log(week);
