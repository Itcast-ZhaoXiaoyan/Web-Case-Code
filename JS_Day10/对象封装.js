var lilei={
    "sname":"Li Lei",
    "age":12,
    "interSelf":function(){
        alert("I'm Li Lei,I'm 12");
    }
};


var hmm={
    "sname":"Han Meimei",
    "age":11,
    "interSelf":function(){
        alert("I'm Han Meimei,I'm 11");
    }
};

/*遍历对象的所有成员
  其实类似于遍历hash数组中每个元素
*/

for(var key in hmm){
    console.log(key+" : "+hmm[key]);
}
