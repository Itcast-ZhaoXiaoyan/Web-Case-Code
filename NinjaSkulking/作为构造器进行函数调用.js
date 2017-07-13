//这种方法进行调用时，要在函数调用前使用new关键字。
Function creep(){return this;}
New creep();


实例：利用构造器设置通用对象
<script type=”text/javascript”>
  //声明一个构造器，该构造器在函数上下文对象上创建一个skulk属性，该属性又返回了上下文自身，从而便于外部测试
  Function Ninja(){
    This.skulk =function(){
      return this;
    };
  }
  //通过new关键字调用构造器分别创建2个对象
  Var ninja1=new Ninja();
  Var ninja2=new Ninja();
  
  //对所构造出的方法进行测试，每个方法返回值是构造对象本身
  Assert(ninja1.skulk() === ninja1,”the 1st ninja is skulking”);
  Assert(ninja2.skulk() === ninja1,”the 2nd ninja is skulking”);
</script>
