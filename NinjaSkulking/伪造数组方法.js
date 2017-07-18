3、伪造数组方法
若想创建一个包含一组数据的对象，若只是集合，则只需要创建一个数组即可。在某种情况下，除了集合本身，还需要更多的状态需要保存——比如与集合有关的元数据。
每次创建新版本的时候，都需要创建一个新数组，然后将元数据作为属性和方法添加到新数组上，可为任何对象添加属性和方法，包括数组。
案例：模拟类似数组的方法

<input id=”first”>
<input id=”second”>
<script type=”text/javascript”>
Var elems={
  Length:0;
  Add:function(elem){
    //实现将数组添加到集合的方法。Array的原型，call作为函数调用,利用函数上下文this操作自身数组
    Array.prototype.push.call(this,elem);
  },
  //实现一个gather()方法，根据id值查找元素，并将其添加到集合中
  Gather:function(id){
    This.add(document.getElementById(id));
  },

};

//测试
Elems.gather(“first”);
Assert(elems.length ==1 && elems[0].nodeType,”Verity that we have an element in our stash”);
Elems.gather(“second”);
Assert(elems.length ==2 && elems[1].nodeType,”Verity the other insetion”);

</script>
