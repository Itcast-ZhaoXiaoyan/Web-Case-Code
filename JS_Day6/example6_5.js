/*专门比较任意两数字的大小*/
function compareNum(a,b){
    return a-b;
}

/*专门比较任意字符串的大小*/
function compareStr(a,b){
    if(a>b){
        return 1;
    }
    else if(a==b){
        return 0;
    }
    else{
        return -1;
    }
}
