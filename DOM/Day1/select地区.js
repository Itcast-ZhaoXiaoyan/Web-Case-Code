//分别定义两个数组：
//	unsel:存所有未选中的国家(左边)
//	sel:存所有选中的国家(右边)
var unsel=null;
var sel=null;
window.$=function(selector){
	return document.querySelectorAll(selector);
}

//当页面加载后
window.onload=function(){
	//将左侧select元素中所有option元素的文本提取并保存到unsel中
	unsel=$("#unsel")[0].innerHTML		//获取第一个option内容
						.trim()    		//清除左右两边的空格
						.slice(8,-9)	//字符串的分割从位8开始，到-9结束
						.split(/<\/option>\s*<option>/);
						//将一个字符串分割成字符串数组
	//初始化sel数组
	sel=[];
}

function move(btn){
	//如果btn的内容是>>
	if(btn.innerHTML="&gt;&gt;"){
		//将unsel中的所有元素拼入sel，对新数组排序，存入sel中
		sel=sel.concat(unsel).sort();
		//清空unsel中的元素
		unsel.length=0;
	}
	//否则，如果btn的内容是<<
	else if(btn.innerHTML=="&lt;&lt;"){
		//将sel中的所有元素，拼入unsel，对新数组排序
		unsel=unsel.concat(sel).sort();
		//清空sel中的元素
		sel.length=0;
	}
	else if(btn.innerHTML=="&gt;"){
			//将选中的，移动到右边
			//option对象的selected属性==true、false
		//获得unsel下的所有option对象
		var opts=$("#unsel option");
		//遍历左边的select中所有option
		for(var i=0;i<opts.length;i++){
			//	只要发现当前selected有效，
			if(opts[i].selected){
				//先删除unsel中相同位置的元素，获得被删除元素
					//将被删除元素压入sel中
				sel.push(unsel.splice(i,1)[0]);  //从i位置开始，删除1个元素
			}
		}
		//（遍历结束后）再对sel排序，存入sel
		sel.sort();	
	}
	else{
		var opts=$("#unsel option");
		//遍历左边的select中所有option
		for(var i=opts.length-1;i>=0;i--){
			//	只要发现当前selected有效，
			if(opts[i].selected){
				//先删除sel中相同位置的元素，获得被删除元素
					//将被删除元素压入unsel中
				unsel.push(sel.splice(i,1)[0]);  //从i位置开始，删除1个元素
			}
		}
		//（遍历结束后）再对unsel排序，存入sel
		unsel.sort();	
	}
	updateSel();
}

function updateSel(){		//专门更新两select元素的内容
	//step1：将unsel中的所有元素
	//拼接为select元素的innerHTML，再放回unsel元素中
	$("#unsel")[0].innerHTML=
		"<option>"+
		unsel.join("</option><option>")+
		"</option>";
	//step2:将sel数组中的元素更新到id为sel的select中
	$("#sel")[0].innerHTML=	
		"<option>"+
		sel.join("</option><option")+
		"</option>";
}
