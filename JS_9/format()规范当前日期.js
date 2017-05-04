//xxxx年xx月xx日 星期几 上午/下午  xx:xx:xx

function format(date){
    //"20151017星期六上午1014"
    var arr=[];
    
    //获得date中年份追加到arr中
    //获得date中月份M，先+1修正
    var M=date.getMonth()+1;
    
    //如果M<10,则M修改为“0”+M
    //将M追加到arr中
    arr.push(M<10?"0"+M:M);

    //获得date中的日期d
    var d=date.getDate(); 
    //如果d<10，则d修改为“0”+d
    arr.push(d<10?"0"+d:d);
    
    
    //获得date中的星期w，（0 1 2 ...6）
    var week=["日","一","二","三","四","五","六"];
    //获得week中w位置的字，追加到arr中
    arr.push(week[date.getDay()]);
     
    //获得date中的小时h
    var h= date.getHours();
    
 
    //如果h<12，则arr中追加"上午"
    //         否则追加   "下午"
    arr.push(h<12 ? "上午":"下午");
    
    //如果h>12，则h修改为h-12
    h>12 && (h-=12);
    
    //如果h<10，则h修改为“0”+h
    //将h加入arr
    arr.push(h<10 ? "0"+h :h);
    
    //获得date中的分钟m，如果m<10,m改为“0”+m
    var m=date.getMinutes();
    arr.push(m<10 ? "0"+m :m);
    
    var reg=/(\d{4})(\d{2})(\d{2})(星期[日一-六])([上下]午)(\d{2})(\d{2})(\d{2})/;
    
    return str.replace(reg,"$1年$2月$3日 $4 $5 $6:$7:$8");
}


<button onclick="alert(format(new Date()))">格式化输出日期</button>
