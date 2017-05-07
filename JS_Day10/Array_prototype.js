var arr=[1,2,3,4,5];

//>IE8——function()
//=IE8——undefined

/*若arr中不包含indexOf方法，就自己为arr添加一个*/
//if(!arr.hasOwnProperty("indexOf")){}
//if(!("indexOf" in arr)){}
//if(!arr.indexOf!==undefined){}



//if(!Array.prototype.hasOwnProperty("indexOf")){
//if(!("indexOf" in Array.prototype)){
//if(!Array.prototype.indexOf!==undefiend){
    
    if(!Array.prototype.indexOf){
        Array.prototype.indexOf=function(kword){
            for(var i=0;i<this.length;i++){
                if(arr[i]==kword){
                      return i;
                }
            }
            return -1;
        }
    }

}

var arr=[1,2,3,4,6];
document.write(arr.indexOf("3"));  //2
