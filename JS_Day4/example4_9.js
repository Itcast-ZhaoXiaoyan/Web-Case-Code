/*计算从1+1/3+1/5+1/7+..+1/999 的和*/

/*解析
循环体——分母<=999
循环变量每加一次，分母加2
循环体，1/999累加到sum
*/


var sum=0;
for(var i=1;i<=999;i+=2){
    sum+=1/i;
}
console.log(sum);

/*循环体、循环条件缩减版*/
/*
for(var i=1,sum=0;i<=999;sum+=1/i,m+=2);
console.log(sum);
*/
