function mail(email)
{
  //工具：2个
  //indexOf查找字符的位置
  //slice从某个位置开始，截取到某位结束
    var i = email.indexOf("@");
    var userName = email.slice(0,i);
    var domain = email.slice(i+1);   //从i+1开始到数组结束
  
    alert("用户名"+username);
    alert("域名"+domain);
}


<body>
<button onclick="mail(prompt('输入邮箱'))">输入邮箱</button>
</body>
