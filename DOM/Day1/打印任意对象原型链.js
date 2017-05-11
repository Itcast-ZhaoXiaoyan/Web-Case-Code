<a href="http://baidu.cn">我的链接</a>
<h1>我的标题</h1>

<script>
//打印任意对象的原型链；
  function getProto(obj){
      while((obj=Object.getPrototype(obj))!=null){
          console.log(console.log(obj));
      }
  }
  
  getProto(doocument);
  getProto(document.body);
  geyProto(document.body.childNodes[1]);   //a
  getProto(document.body.childNodes[1].getAttributeNode("href"));
  
</script>
