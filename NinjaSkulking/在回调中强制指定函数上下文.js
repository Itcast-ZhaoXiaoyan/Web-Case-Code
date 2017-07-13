<script type=”text/javascript”>
  function foreach(list,callback){
      for(var n=0;n<arguments.length;n++){
         //调用callback回调
          callback.call(list[n],n); //call()方法参数列表传递
      }
  }
  
  //创建测试对象
  var weapons = [‘aa’,’bb’,’cc’];
  forEach(     
  //对foreach函数进行测试
  weapons,
  function(index){
    assert(this==weapons[index],”Got the expected value of”+weapons[index]);
  }
</script>
