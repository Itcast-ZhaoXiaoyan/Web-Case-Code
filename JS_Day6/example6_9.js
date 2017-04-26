var data=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

/*如何判断所有都满了，遍历data数组中的每一行的每一个元素，
  若只要发现一个元素==0，返回false；若遍历正常结束，返回true*/
  
 /*遍历二维数组，是固定套路——外层循环遍历行，内层循环遍历列*/
 
 /*for(var r=0;r<data.length;r++){
      for(var c=0;c<arr[r].length;c++){
          
      }
 }
 */
 
 function isFull(){
    for(var r=0;r<4;r++){
      for(var c=0;c<4;c++){
          if(data[r][c]==0){
              return false;
          }
      }
  }
  return true;
 }
 
 console.log(isFull());   //true
 
 /*判断游戏是否结束
    如果不满，直接返回false
    遍历每个元素：
        如果c!=?，才检查右侧元素
            若当前元素==右侧元素，返回false
        如果r!=?，才检查下方元素
            若当前元素==下方元素，返回fasle
     如果遍历结束，返回true
 */
 function isGameOver(){
    if(!isFull()){return false;}
     for(var r=0;r<4;r++){
        for(var c=0;c<4;c++){
              if(c!=3){
                    if(data[r][c]==data[r][c+1]){
                           return false;
                    }
              }
              if(r!=3){
                    if(data[r][c]==data[r+1][c]){
                           return false;
                    }
              }
        }
     }
     return true;
 }
