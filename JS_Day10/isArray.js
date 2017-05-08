console.log(typeof({a:1}));    ————Object
console.log(typeof([]));       ————Object

怎么判断“[]”和“{}”是否为数组类型？
    采用isArray()方法
    Array.isArray([]);    //true
    Array.isArray({});    //false
    
如果当前浏览器的Array构造函数对象中不包含isArray方法
if(!Array.isArray){
    //为Array构造函数添加isArray方法
    Array.isArray=function(obj){     //4种
          //判断obj是不是数组类型
          //方法1.如果Array.prototypeOf在obj的原型链中
          return Array.prototype.isPrototypeOf(obj);
          
          //方法2：instanceof
          //语法：obj instanceof 构造函数
          //判断obj对象是否被构造函数创建
          return obj instanceof Array;
          //实例：一个构造函数创建出的每个具体对象
          
          
          //方法3：原型对象的constructor属性
          return obj.constructor == Array;
          
          //方法4：利用Object原型的toString方法
          /*call,apply
              call,在调用方法的一瞬间更换调用方法的对象
          */
          
          
    }  
}
    

