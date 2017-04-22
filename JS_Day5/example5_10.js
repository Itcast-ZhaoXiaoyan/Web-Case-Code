/*定义一个函数，查找指定值在数组中的位置下标
  遍历整个数组，如果当前元素 == ename
      返回i

*/

var emps=['Emai','Pank','Nom','Cos','Sin','Din','Amy'];
function indexOf(arr,ename){
    for(var i=0;i<arr.length;i++){
      if(arr[i] == ename){
        return i;
      }
      return -1;   
    }
}
console.log(indexOf(emps,"Pank"));   //1
