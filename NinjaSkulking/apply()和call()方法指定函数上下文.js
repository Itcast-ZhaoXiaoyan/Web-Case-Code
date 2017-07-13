<script type=”text/javascript”>
  //定义一个函数
  function juggle(){
    //初始化结果
    var result=0;
    //收集参数
    for(var n=0;n<arguments.length;n++){
      result += arguments[i];
    }
    
    //在上下文保存结果
    this.result=result;
}
//创建测试对象
var ninja1={};
var ninja2={};

//使用apply()、call()执行函数
juggle.apply(ninja1,[1,2,3,4]);
juggle.call(ninja2,5,6,7,8);


//对结果进行验证
assert(ninja1.result === 10,”juggled via apply”);
assert(ninja2.result === 26,”juggled via call”);
</script>
