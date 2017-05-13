function calc(btn){
	//先找到旁边的span
	//step1：向上找td
	var td=btn.parentNode;
	
	//step2：在td下找span
	var span=td.getElementsByTagName("span")[0];
	
	//step3：取出span中得数n
	var n=span.innerHTML;
	
	//step4：如果btn是+，则n++
	//		否则，n--
	btn.innerHTML == "+" ? n++ : n--;
	
	//step5：如果n=0，将n置1
	n==0 && (n=1);
	
	//step6：将n放回span中
	span.innerHTML=n;
}
