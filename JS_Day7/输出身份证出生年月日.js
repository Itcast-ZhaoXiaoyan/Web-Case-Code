function year(birth)
{
  //工具：2个410183198702230823
  //indexOf查找字符的位置
  //slice从某个位置开始，截取到某位结束
    var year = birth.slice(6,9)
    alert(year　＋　"年");
}

function month(birth)
{
  //工具：2个410183198702230823
  //indexOf查找字符的位置
  //slice从某个位置开始，截取到某位结束
    var month = birth.slice(10,11)
    alert(month　＋　"月");
}

function year(birth)
{
  //工具：2个410183198702230823
  //indexOf查找字符的位置
  //slice从某个位置开始，截取到某位结束
    var day = birth.slice(-6,-5)
    alert(day　＋　"日");
}


<button onclick="prompt("输入身份证:")"></button>
