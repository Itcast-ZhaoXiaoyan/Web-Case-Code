int arr=[];
if(!arr.indexOf){
    //false
    arr.indexOf=function(kword)}{
        for(var i=0;i<this.length;i++){
            if(arr[i]=kword){
                return i;
            }
        }
        return -1;
    }
}
//IE8 IE9都能有indexOf方法
document.write(arr.indexOf());
