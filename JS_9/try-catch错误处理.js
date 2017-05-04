var kword=/no/ig;
var input=prompt("输入一句话");
var arr=input.match(kword);

/*
try{
    alert("共找到"+arr.length+"处");
}
catch(err){
    alert("没找到");
    console.log(err.toString());
}finally{
    alert("释放资源");
    arr=null;
}

*/

if(arr){
    alert("共找到"+arr.length+"处");
}
else{
    alert("没找到");
}
arr=null;
