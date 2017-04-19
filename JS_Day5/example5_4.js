/*输出一个等边三角形
   *
  ***
 ******
********

解析————
   设置总行数 l line
      当前行  r  row
   正在拼接字符位置 i  

r=3时，先需要几个空格？  l-r个，剩下的都是*
共需要几个字符？  l+r-1
i<0开始，到l+r-1结束
i<l-r拼接空格，其余都拼*

*/

function printTringle3_1(l){
    l=parseInt(l);
    for(r=1;r<l;r++){
        for(var i=0,str="";i<l+r-1;i++){
            str+=i<l-r ? " " : "*";
        }
        console.log(str);
    }
}

<button onclick="printTringle3(prompt("输入总行数："))"></button>


