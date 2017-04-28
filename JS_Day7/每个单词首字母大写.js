/*笔试题：
将英文句子中每个单词首字母变大写
[you can you up]
*/

function parseFirst(stmt)
{  
    
    
    //step1：先按空格，切割字符串
    var arr = smat.split(" ");
    
    
     //step2：遍历切割后的数组
        //取第一个字符转大写，再拼接剩余的字符
        //拼接后的新单词放入数组当前位置
    for(var i=0;i<arr.length;i++)
    {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
                   //y                    //Y             //拼接剩余字符
    }
    
    
    //step3：遍历结束后，返回数组拼接后的句子
    return arr.join(" ");
}


<button onclick="alert(parseFirst(prompt('输入一句英文')))"></button>
