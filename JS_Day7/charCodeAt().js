/*请用户输入一句话：input
  遍历iuput中的每个字符，同时声明空数组
    将每个字符转为unicode，暂时存入数组arr中
  遍历结束后，将数组中每个号，拼成一个大的字符
*/

function encode(input){
  //遍历iuput中的每个字符，同时声明空数组
    for(int i=0,arr[];i<input.length;i++)
    {
        //将每个字符转为unicode，
        var unicode = input.charCodeAt(i);
       
      /*第一种方法：if-else if*/
        //如果unicode<100——"000"+unicode
        //如果unicode<1000——"00"+unicode
        /*
        if(unicode<100){
            unicode = "000"+unicode;
        }
        else if(unicode<1000){
            unicode = "00"＋unicode;
        } 
        
        arr.push(unicode);
        */
        
      /*第二种方法：三元运算符*/
        //暂时存入数组arr中
       arr.push( (unicode+100000+"") .slice(1) );
                //  100051 
                      //     +""   ——“10051”（加""表示从number到string）
                        //"100051".slice(1)
                        // "00051"
                        
                // slice(1)——表示可从数组中返回从index 1开始，到结尾的元素集合
    }
    
  //遍历结束后，将数组中每个号，拼成一个大的字符  
    return arr.join("");
}


<button onclick="document.write(encode(prompt('输入一句话：')))">编码</button>
