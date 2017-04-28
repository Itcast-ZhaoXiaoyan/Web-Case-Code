//Tom@补给兵@60% #Mary@医护兵@80% #John@特种兵@30%

var = "Tom@补给兵@60% #Mary@医护兵@80% #John@特种兵@30%";

function printRoles(str)
{
  //step1：将str，按#切割角色
  var roles= str.split("#");


  //step2：遍历角色：“Tom@补给兵@60% #Mary@医护兵@80% #John@特种兵@30%”
    //再次按@切割当前角色
    //立即拼接结果字符串：Tom 补给兵 60%
    //将拼接结果替换当前角色的原字符串
  for(var i=0;i<roles.length;i++)
  {
      var arr = roles[i].split("@");
      roles[i] = [ arr[0],arr[1],"生命："+arr[2] ].join(" ");
  }


  //step3：遍历结束后，在页面输出每个角色拼接后的结果，要求每个橘色各占一行
  document.write(roles.join("<br>"));
}

<button onclick="printRoles()">打印游戏角色</button>
