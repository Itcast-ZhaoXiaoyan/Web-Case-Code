/*string类型提供了trim方法，但IE8没有
  判断当前浏览器的string类型是否含有trim方法
  如果不包含，自定义公共trim方法
*/

//step1：如果string类型的原型中不包含trim方法
//if(!String.prototype.trim){
//if(!String.prototype.hasOwnProperty("trim")){
if(!("trim" in String.prototype)){
    String.prototype.trim= function(){
        return this.replace(/^\s+|\s+$/g,"");
    }
} 


var str="   Hello  World  ";
document.write(str.replace(/ /g,"_"));
