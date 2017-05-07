//创建一个构造函数
function Student(){
    this.sname=sname;
    this.age=age;
}


//在构造函数原型对象中定义公共方法
Student.prototype.inteSelf=function(){
    alert("I'm"+this.sname+"I'm"+age);
}


//用new关键字创建新对象
var lilei=new Student("Li Lei",12);
var hmm=new Student("Han Meimei",11);

//在构造函数原型中定义公共属性
Student.prototype.money=100;
console.log(lilei.money);

//先在当前对象本地去找，找不到再去原型
  //原型也没有，才undefined
console.log(hmm.money);  

Student.prototype.money-=20;
console.log(lilei.money);

  
