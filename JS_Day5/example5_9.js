/*
定义一个函数，找出任意数组中的最大值
  先定义一个max变量，初始化为数组
  遍历数组，依次取出每个元素和max比较
    如果i位置的元素>max，则替换max中的值
  遍历结束后，返回max最大值
*/

function getMax(arr)
{
    for(var i=1,max=arr[0];i<arr.length;arr[i]>max && (max=arr[i]),i++){
         return max;
    }
   
}

console.log(getMax([3,2,5,2,7,0,10]));
