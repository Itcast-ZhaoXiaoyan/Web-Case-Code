function round(num,d)
{
    //step1:num*10的d次方
    num*Math.pow(10,d);
    
    //step2:将结果四舍五入
    num=Math.round();
    
    //step3：return四舍五入的结果/10的d次方
    returnum/Math.pow(10,d); 
}

console.log(round(345.456,2));
console.log(round(345.456,-1));
console.log(round(555.555,3));
