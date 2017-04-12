/*请用户输入总价total
  如果total>=500，就打八折
  输出应收金额
*/

/*
利用短路逻辑：2种
1.利用&&短路逻辑（只有两个关系运算满足时）
2.利用||短路逻辑（如果前一个条件不满足才执行）
*/


var total = parseFloat(prompt("输入总价"));
//如果total>500,就打八折
total>=500 && (total=total*0.8);
console.log("应收金额："+total);

//prompt() 方法用于显示可提示用户进行输入的对话框。
