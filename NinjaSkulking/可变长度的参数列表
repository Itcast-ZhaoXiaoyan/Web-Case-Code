可变长度的参数列表
由于javascript中不存在“函数重载”，所以只能通过改变参数列表的灵活性，从而实现类似于“重载”的功能。
在之前类数组学习中，了解到函数存在的内置函数方法包括call()、apply()，在call()方法中，传递的是一个数组对象；在apply()中，传递的参数是一个参数列表。
案例：数组上的通用min()和max()函数
<script type=”text/javascript”>
  //实现一个方法查找最小值
  Function smallest(array){
    Return Math.min.apply(Math,array);
  }

  Function largest(array){
    Return Math.max.apply(Math,array);
  }

  Assert(smalleast([0,1,2,3])==0,”Located the smallest value”);
  Assert(largest([0,1,2,3]) ==3,”Locates the largest value”);
</script>
