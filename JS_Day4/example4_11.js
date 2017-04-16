/*计算从一个指定年份开始，5个闰年，并输出*/
/*首先定义一个变量n，存储已经输出的闰年个数
  从year开始，依次判断今后每一年
  只要碰到闰年，就输出
*/


function getLeapYears(year){
    for(var n=0;n<5;year++)
    {
        if(year%4 == 0 && year%100 !=0 || year%400 ==0)
        {
            console.log(year);
            n++;
        }
    }
}
