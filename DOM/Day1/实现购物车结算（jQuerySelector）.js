function calc(btn){
	/*1、修改数量*/
	var td=btn.parentNode;   //向上
	//找当前td下的span元素
	var span=td.querySelector("span");
	//取出span中的数量，存入n
	var n=parseInt(span.innerHTML);
	//如果btn是+，n++，否则n--
	btn.innerHTML=="+" ? n++ : n--;
	//如果n==0，则n重置为1
	n==0 && n=1;
	//将n放回span中
	span.innerHTML=n;
	
	
	/*2、计算小计*/
	//n已知，获得price
	var tr=td.parentNode();
		/*:nth-child(n)——获得tr下的第n个子元素td*/
	var tdPrice=tr.querySelector("td:nth-child(2)");
	
	//针对IE8
	if(!tdPrice){
		tdPrice=.querySelector("td:first-child+td");
	}
	
	var price=parseFloat(tdPrice.innerHTML.slice(1));
	//计算小计并放入最后一个td中
	tr.querySelector("td:last-child").innerHTML=
			"&yen;"+(price*n).toFixed(2);
	
	/*3.计算总计：*/
	//获得table中的tbody下，作为tr最后一个子元素的td，保存在subs中
	var subs=$("#data tbody tr td:last-child");
	
	//遍历subs中每个td，total变量保存累加值，初始化为0
	for(var i=0,total=0;i<subs.length;i++){
		//	取出当前td中的小计，累加到total中
		total+=parseFloat(subs[i].innerHTML.slice(1));	
	}
	//获得table中tfoot下最后一个td，将total放入其中 
	$("#data tfoot td:last-child")[0].innerHTML=
		"&yen;"+total.toFixed(2);
}

window.$=function(selector){
	return document.querySelectorAll(selector);
}
