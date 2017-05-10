/*定义一个构造函数包含所有飞行物的属性*/
function Flyer(fname,speed){
    this.fname=fname;
    this.speed=speed;
    this.fly=function(){
        console.log(this.fname+"以时速："+this.speed+"飞行");
    }
}

/*定义一个构造函数，除了属性外，还有扩展新的属性*/
function Plane(fname,speed,capacity){
   //先调用Flyer构造函数
   Flyer.call(this,fname,speed);
   Flyer.apply(this,[fname,speed]);
   Math.max.apply(Math,[1,2,3]);
   this.capacity=capacity;
   delete this.flay;
   if(!Plane.prototype.fly){
      Plane.prototype.fly=function(){
          conosle.log(this.fname+"搭载"+this.capacity+"人 以时速："+this.speed+"飞行");
      }
   }
}

var A380=new Plane("A380",1800,555);
A380.fly();
