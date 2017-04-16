/*请用户输入一个成绩
  如果成绩>=90 输出A
  如果成绩>=80 输出B
  如果成绩>=60 输出C
         否则  输出D
*/

var score = prompt("请输入一个成绩：");
if(score<100 && score <0){
   alert("超范围！");
}
else if(isNaN(score)){
   alert("错误！");
}
else if(score>=90 && score<=100){
   alert("A");
}
else if(score>=80 && score<90){
    alert("B");
}
else if(score>=60 && score<80){
    alert("C");
}
else{
   alert("D");
}
