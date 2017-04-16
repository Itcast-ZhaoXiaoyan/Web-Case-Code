/*请输入一个按键
1——正在查询
2——取款进行中
3——转账进行中
0——退出，欢迎下次光临
   输入有误
*/

switch(prompt("请按键")){
  case "1":
      alert("正在查询...");
      break;
  case "2":
      alert("取款进行中");
      break;
  case "3":
      alert("转账进行中");
      break;
  case "0":
      alert("退出，欢迎下次光临");
      break；
  default:
      alert("输入有误");
}
