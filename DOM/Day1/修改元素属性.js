window.onload=function(){
	//获得ul下li的个数
	var lis=document.querySelector("ul li");
	var num=[];
	//反复生成随机数，nums.length<lis.length
	while(nums.length<lis.length){
		//在1到lis.length之间取1到随机整数n
		var n=parseInt(Math.random()*lis.length);
		
		//	利用nums的indexOf方法，查找是否包含n
		if(nums.indexOf(n)==-1){
			nums.push(n);		//	如果不包含，在将n压入nums
		}	
	}
	console.log(nums);
	
	//将nums中的数字，保存到每个li的data-i自定义中
	//遍历nums
	for(var i=0;i<nums.length;i++){
		//	将nums中当前位置的数字
		//	设置到相同位置的li中data-i特性上
		lis[i].setAttribute("data-i",nums[i]);
	}
	
	//将所有li，按data-i特性值，升序排列
	//问题：lis是类数组对象，没有sort()方法
	//解决：将类数组对象转换为标准数组
	lis=Array.prototype.slice.call(lis);
	lis.sort(function(a,b){return a-b;});
	console.log(lis);
}
