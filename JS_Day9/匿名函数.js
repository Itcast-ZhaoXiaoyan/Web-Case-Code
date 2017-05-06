(function(){
    alert("页面开始加载");
})();



var a=100;
(function(a){
    a++;
    console.log(a);  //101
})(a);

console.log(a);      //100
