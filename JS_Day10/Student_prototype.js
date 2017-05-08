function Student(sname,age){
    this.sname=sname;
    this.age=age;
    if(!Student.prototype.intrSelf){
        Student.prototype.intrSelf = function(){
            alert("I'm" + this.sname +";I'm"+this.age);
        }
    }
}

var lilei=new Student("Li Lei",19);
