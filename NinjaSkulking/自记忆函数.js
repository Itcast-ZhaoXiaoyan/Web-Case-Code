2、自记忆函数
又为缓存函数，这种函数会记住之前函数的结果，避免不必要的计算，可以显著提高性能。
2-1：案例——记忆之前的计算结果(判断一个数字是否为素数)

<script type=”text/javascript”>
  Function isPrime(value){
    If(!isPrime.answers) isPrime.answers={};
    If(isPrime.answers[value] !=null){
      Return isPrime.answers[value];
    }

    Var prime=value!=1;
    //1永远都不是一个素数；
    For(var i=2;i<value;i++){
      If(value%i == 0){
       Prime = false;
        Break;
      }
    }
    //保存缓存的值；
    Return isPime.answers[value] = prime;
   }

    Assert(isPrime(5),”5 is prime!”);
    Assert(isPrime.answers[5],”The answer was cache!”)
</script>
