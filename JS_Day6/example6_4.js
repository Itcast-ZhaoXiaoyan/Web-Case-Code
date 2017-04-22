function bubble(arr){   //比较器函数
      for(var n=1;n<arr.length;n++){
          for(var i=0;i<arr.length-n;i++){
              if(arr[i]-arr[i+1]>0){
                  var temp=arr[i];
                  arr[i]=arr[i+1];
                  arr[i+1]=temp;
              }
          }
      }
}

var nums=[1,4,2,0,5,12];
bubble(nums);
