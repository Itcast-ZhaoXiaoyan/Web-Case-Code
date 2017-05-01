var lis="<li>eric</li>\n\t<li>amy</li>\n\t<li>jack</li>\n\t<li>smith</li>";

//将菜单项中的内容放入数组
//step1:将lis从4位置到-5位置截取子字符串
lis=lis.slice(4,-5);

//step2:按</li>\s*<li>
var reg=/<\/li>\s*<li>/;
var arr=lis.split(reg);
console.log(arr);

//[eric,amy,jack,amitch]

var html=arr.sort().join("</li><li>");

document.write("<ul><li>"+html+"</li></ul>");
