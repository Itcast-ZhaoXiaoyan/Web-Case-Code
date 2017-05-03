function doubleBall()
{
    var reds=[];   //保存生成的红球
    /*循环生成6个红球，reds.length<6
      随机生成一个1-33之间的整数
      如果reds中不包含该数字的（indexOf()），才将输入追加到reds中
      （循环结束后）
      在1-16之间随机生成一个蓝球blue
     
      while(reds.length<6){
          var n=parseInt(Math.random()*(33-1+1)+1);
          if(reds.indeOf(n)==-1){
              reds.push(n);
          }
      }  
      
      var blue=parseInt(Math.random()*(16-1+1)+1);
      
      alert(reds+" | "+blue);
    */
}



<button onclick="doubleBall()">机选</button>
