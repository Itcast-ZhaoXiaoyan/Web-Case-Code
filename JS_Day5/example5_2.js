/*定义函数输出正三角
    *
    **
    ***
*/

function printTringle(len){
    for(var rol=1;rol<len;rol++){
        /*打印任意一行的公式*/
        for(var i=0,str="";i<rol;str+="*",i++);
        
        console.log(str);
    }

}


<button onclick="printTringle(prompt('输入行数'))">输出正三角</button>
