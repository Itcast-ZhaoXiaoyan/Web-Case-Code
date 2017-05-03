/*随机生成验证码*/

/*如何将所有字符保存为连续的序列结构
  如何将每个字符放入数组
*/


var chars=[];
//将"0"-"9"存入数组
 // 48   57
for(var c=48;c<=57;chars.push(String.fromCharCode(c++)));

/*将'A'-'Z'存入chars*/
for(var c=65;c<=90;chars.push(String.fromCharCode(c++)));

//将'a'-'z'存入chars
for(var c=97;c<=122;char.push(String.fromCharCode(c++)));

console.log(chars.length);   //62——10+26+26

//专门生成一个4位随机验证码
function getCode(){
    for(var i=0,arr=[];i<4;i++){
        //从0-61随机生成一个整数n
        var n=parseInt(Math.random()*(61-0+1)+0);
        
        //将chars中n位置的字符，放入arr中
        arr.push(chars[n]);
    }
    return arr.join("");
}

//验证输入验证码是否正确
function validateCode(){
    //先调用getCode()生成验证码code
    var code=getCode();
    
    //再反复输入字符串input，同时判断是否等于code
    
    //先输入，再判断——判断输入字符是否等于验证码
   while(var input=prompt('输入验证码：'+code).toLowerCase()  != code.toLowerCase() ){
        // 只有**不等于**     才提示"验证码错误"
        alert("验证码错误！");
        
           
        // 重新调用getCode()生成新验证码存入code中
        code = getCode();
   }    
   
   
    document.write("<h1 style="color:green">验证通过</h1>");
}

<button onclick="alert(validateCode())">验证码</button>
