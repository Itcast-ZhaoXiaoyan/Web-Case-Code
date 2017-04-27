/*将encode函数编码后的数字字符串
    解码回原文
*/
function decode(code)
{
    /*每5位取一次子字符串*/
    /*从0开始，每隔5个字符遍历
      同时创建空数组arr，从i开始，取5个字符——unicode
      var char = String.fromCharCode(unicode)
      将char追加到数组结尾
      循环退出后，返回数组拼接后的结果
    */
    
    for(var i=0,arr[];i<code.length;i+=5)
    {
        arr.push(String.fromCharCode(code.substr(i,5)));
    }
    return arr.join("");
}
