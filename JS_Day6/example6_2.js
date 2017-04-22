/*打印出9*9乘法表*/

for(var row=1;row<=9;row++){
    for(var i=0,arr=[];i<row;i++){
        arr[arr.length] =
        [i,"x",row,"=",i*row,(i*row<10 ? "  ":" ")].join("");
    }
    console.log(arr.join(""));
}
