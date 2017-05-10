var lilei=new Student("Li Lei",19);
var hmm=new Student("hmm",18);

/*重写*/
hmm.intrSelf=function(){
    alert("我是"+this.sname+",今年"+this.age);
}

hmm.toString=function(){
    return "{sname:}+this.sname+",age:"+this.age"}";
}

console.log(lilei.toString());
console.log(hmm.toString());

/*扩展*/
hmm.sing=function(){
   console.log("xaa");
}
