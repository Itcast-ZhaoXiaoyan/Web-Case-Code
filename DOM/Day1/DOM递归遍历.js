//输出指定元素直接子元素
function getChildren(parent){
  //如果parent是元素节点，就返回nodeName，否则，返回nodeValue
    console.log(
      parent.nodeType==1? parent.nodeName:parent.nodeValue;
    );

  
  //先判断parent有木有子节点（childNodes.length>0）
  if(parent.childNodes.length>0){
    //遍历所有parent的直接子节点
      for(var i=0,len=parent.childNodes.length; i<len ;i++){
        //采用递归getChildren()方法
        //深度优先遍历，一根树根向下遍历延伸，到最后没有子节点的节点结束
         getChildren(parent.childNodes[i]);
      }
  }
}


//当页面加载后
window.onload=function(){
    getChildren(document.body.childNodes[3]);
}

<html>
  <body>
  <ul>
    <li></li>
    <li></li>
    <li>
        <ul>
            <li></li>
            <li></li>>
        </ul>
    </li>
  </ul>>
  </body>
</html>
