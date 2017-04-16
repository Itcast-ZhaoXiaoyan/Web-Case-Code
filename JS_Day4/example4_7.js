/*计算1-100的和*/

/*for循环*/
var sum=0;
var i=1;
for(i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);


/*while循环*/
while(i<=100)
{
    sum+=i;
    i++;
}


/*do-while循环*/
do{
    sum+=i;
    i++;
}while(i<=100);
