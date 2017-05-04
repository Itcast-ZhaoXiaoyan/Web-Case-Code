
function getDueDate(days){
    //step1:获得当前时间：now
    var now=new Date();

    //循环：反复为当前时间+1天，到i<days结束
    for(var i=0;i<days;i++){
        //如果当前时间是周五
        //就先加2天
        if(now.getDay()==5){
            now.setDate(now.getDate()+2);
        }
        
        //否则如果当前时间是周六，
        //就先加2天
        else if(now.getDay()==6 ){
            now.setDate(now.getDate()+2 );
        }
        
        
        //默认情况下，加1天
        now.setDate(now.getDate()+1);
    }
  
    return now;
}


<button onclick="alert(getDueDate(prompt('输入天数')).toLocalDateString()">n个工作日后的日期</button>
