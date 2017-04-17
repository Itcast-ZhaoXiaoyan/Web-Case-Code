/*打印出9*9乘法表第一行*/

/*三要素
1.循环条件：行号<=9
2.循环变量：行号，从1开始，每次增1
3.循环体：公式：打印第一行
*/

for(var rol = 1; rol<=9;rol++){
    /*打印第一行*/
    for(var i=1,str="";i<=rol;i++){
        str+=i+"x" +rol+ "=" + i*rol + " ";
        i* rol<10 && (str+=" ");
    }
    console.log(str);
}
