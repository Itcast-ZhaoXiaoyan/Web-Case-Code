/*请用户输入一个字符，程序判断字符的种类
  如果"0" <=字符 <= "9",输出是数字
  如果"\u4e00" <=字符 <= "\u9fa5"，输出是汉字
  如果"a"<= 字符 <= "z"或者 "A" <= 字符 <= "Z"
*/

var input = prompt("输入一个字符");
console.log(
  input>="0" && input <="9"?"数字":
  input>="\u4e00" && input <="\u9fa5"?"是汉字" :
  input>="a" && input<="z"  ||  input>="A" &&input <="Z" ? "是字母":
                          "其他字符"
);


