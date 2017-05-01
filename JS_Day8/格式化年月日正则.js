var pid="1234561199602223456";

var birth=pid.slice(6,-4);
//"19960222"

var reg=/(\d{4}) (\d{2}) (\d{2})/;
birth=birth.replace(reg,"$1年$2月$3日");
console.log(birth);

var time="20170501102709";
//xxxx年xx月xx日  xx:xx:xx
var reg=/(\d){4}(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;

time=time.replace(reg,"$1年$2月$3日 $4:$5:$6");
console.log(time);
