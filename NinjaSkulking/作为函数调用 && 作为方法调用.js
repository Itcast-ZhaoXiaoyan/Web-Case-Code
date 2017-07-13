<script type=”text/javascript”>
  //定义一个函数并返回函数上下文。在函数调用之后，可在函数外部测试该函数上下文；
  Function creep(){return this;}
  Assert(creep() === window,”creeping in the window”);
  //将函数引用赋值给sneak，使用sneak变量调用该函数，即便是使用变量进行调用，该函数也是作为函数进行调用的，且该函数上下文还是window
  Var sneak = creep;
  Assert(sneak() === window,”Sneaking in the window”);
  //创建一个ninja1对象，然后为该对象创建一个speak属性，并将其引用到原来的creep()
  Var ninja1={
    Speak:creep;
  };
  //通过speak属性调用该函数，因此该调用是作为ninja1的一个方法进行调用的
  Assert(ninja1.speak() === ninja1,”the 1st ninja is speak”);
  Var ninja2={
    Speak:creep;
  };
  //作为ninja2的一个方法进行调用，此时的函数上下文变为了ninja2
  Assert(ninja2.speak() === ninja2,”the 2nd ninja is speak”);
</script>
