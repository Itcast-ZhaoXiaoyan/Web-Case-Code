方法重载：通常是在同名方法（但参数不同）里声明不同的实现来达到目的。
在javascript中的函数重载，只用一个实现，只不过这个实现内部是通过传入参数的特性和个数进行相应修改来达到目的。
案例：便利可变长度的参数列表
<script type=”text/javascript”>
  Function merge(){
    For(var i=1;i<arguments.length;i++){
      For(var key in arguments[i]){
        Root[key] = arguments[i][key];
      }
    }
    Return root;
  }

  Var merges=merge(
    {name:”baton”},
    {city:”nihji”}
  );
  //进行函数测试
  Assert(merged.name == “baton”,”the original name is intact”);
  Assert(merged.city == “niihame”,”and the city has been copied over.”);
</script>
