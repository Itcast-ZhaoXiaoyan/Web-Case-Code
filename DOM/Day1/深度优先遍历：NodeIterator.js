//使用遍历API，打印所有节点——节点树
function getChildren(parent){
	//Step1:创建NodeIterator对象
	var iterator=document.createNodeIterator(
		parent,
		NodeFilter.SHOW_ALL,
		null,
		false
	);
	
	//Step2：使用while循环，调用iterator.nextNode()
	//		每次调用，都会返回下一个节点
	//		直到返回null为止
	var currNode=null;
	while((currNode.iterator.nextNode())!=null){
		console.log(
			currNode.nodeType!=3 ?  currNode.nodeName :
								    currNode.nodeValue;
		);
	}
}

window.onload=function(){
	getChildren(document);
	var iterator=document.createTreeWalker(
		parent,NodeFilter.SHOW_ELEMENT,null,false
	);
	console.log(walker.firstChild());
}
