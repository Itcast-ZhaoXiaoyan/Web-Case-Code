/*
  在程序中保存一个固定的4位验证码
    请用户反复输入，
    只要输入不正确，就提示用户“验证码错误”，反复输入
    如果输入正确，提示“验证通过”
*/

var code = "4eAt";
//step1：定义input变量，接收用户输入的验证码
var input = "";  
  
  
//step2：while(input != code)
      //提示用户“验证码错误”
while( (input=prompt("输入验证码："+code)).toUpperCase() !=code.toUpperCase() ){
    alert("验证码错误！");
}      
      
      
  //step3：如果退出循环，提示“验证通过”
document.write'<h1 style="color:green">验证通过</h1>');


