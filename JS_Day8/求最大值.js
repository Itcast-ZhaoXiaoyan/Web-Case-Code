/*正常情况下，求最大值为max()函数*/
var arr=[5,9,3];
Math.max(arr);      //NaN
//如果不使用遍历数组元素，是无法获取数组中每个元素的值的，进而就无法遍历


var arr=[5,9,3];
Math.max.apply(Math,arr);   //9
