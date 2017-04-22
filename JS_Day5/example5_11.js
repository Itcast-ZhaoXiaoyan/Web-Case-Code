/*笔试题
  去除数组中重复的值
  [1,2,3,3,5,4,5]
*/


var arr=['1','2','3','3','5','4','5'];
var hash=[];
//依次遍历arr中的每个元素
//将元素值作为key，value默认取1，放入hash中
//遍历结束后，输出hash内容
for(var i=0; i < length; i++)  {  
        if (typeof(arr[i]) == 'undefined'){
            arr[i] = 1;
        }
 }  
 data.length=0; 
 for (var i in arr){
      hash[hash.length] = i;
 }  
console.log(hash);
