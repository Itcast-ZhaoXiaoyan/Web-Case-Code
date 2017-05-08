var fun=function(){};

//最原始的toString方法：输出对象的类型
fun.toString();
    //输出"function(){}"
    

//Function类型重写了原始的toString方法
//fun对象无法直接调用原始的toString方法
//只能在调用toString的一瞬间，更换对象为fun
Object.prototype.toString.call(fun)
    //输出"[object Function]"
    
    
