/*采用三元运算符判断等级*/

var score = prompt("请输入一个成绩");

alert(
  isNaN(score) ? "错误！" :
  score>100 || score<0 ? "超范围！" :
  score> =90  ? "A":
  score> =80  ? "B":
  score> =60  ? "C":
  score< 60   ? "D"
);
