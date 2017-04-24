var nums=[1,4,2,0,5,12];
var emps=["Amy","Join","Kosn","Mand","Ksnk"];

function bubble(arr,compare){   //比较器函数
      for(var n=1;n<arr.length;n++){
          for(var i=0;i<arr.length-n;i++){
              if(compare(arr[i],arr[i+1])>0){
                  var temp=arr[i];
                  arr[i]=arr[i+1];
                  arr[i+1]=temp;
              }
          }
      }
}

/*专门比较任意两个数字的大小*/
function compareNum(a,b){return a-b;}

/*比较任意两个字符串的大小*/
function compareStr(a,b){
     return a>b ?1 : a<b ?-1 :0;
}


bubble(nums,compareNum);  console.log(nums);
bubble(emps,compareStr);  console.log(emps);
