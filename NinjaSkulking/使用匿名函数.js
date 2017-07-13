<script type=”text/javascript”>
    //创建一个匿名函数作为事件处理程序
    window.onload=
      function(){assert(true,’power!’)}

    //创建一个函数，将其作为ninja的一个方法
    var ninja={
    //使用shout属性去调用该方法
      shout:function(){
        assert(true,”ninja”);
      }
    };
    
    ninja.shout();

    //将函数作为callback回调函数传递给setTimeout()函数，以便在定时器到期时进行调用。
    setTimeout(
      function(){assert(true,’Forever’);}
    ,500);
</script>
