var hiredate = new Date("2012/6/30");
var enddate=new Date(hiredate.getTime());

enddate.setFullYear(enddate.getFullYear()+3);
console.log(enddate.toLocaleDateString());

//计算续签时间：renewal

//复制enddate到renewal
var renewal = new Date(endDate.getTime());

//将renewal的月份-1
renewal.setMonth(renewal.getMonth()-1);


//如果当前日期是星期6，则renewal-1
if(renewal.getDay() ==6 ){
    renewal.setDate(renewal.getDate()-1);
}
//如果当前日期是星期日，则renewal-2
else if(renewal.setDay()==0){
    renewal.setDate(renewal.getDate()-2);
}
console.log(renewal.toLocalDateString());


//计算提醒时间
//复制renewal到remind
var remind = new Date(renewal.getTime());
 
//将remind-7
remind.setDate(remind.getDate()-7);
console.log(remind.toLocalDateString());
