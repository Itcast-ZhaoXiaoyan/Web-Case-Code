/*
直角三角
line表示行数  row表示当前行 
*/
for(var row=1;row<=line;row++){
    for(var i=0,arr=[];i<line;i++){
        arr[arr.length]=  i<(line-row) ? " ":"*" ;
    }
}
console.log(arr.join(""));
