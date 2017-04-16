/*最大值*/

function getMax(a,b,c){
    var max=parseFloat(a)> parseFloat(b) ? a:b;
    
    //如果c>max，才将c放入max
    parseFloat(c)>parseFloat(max) && (max=c);
    
    return max;
}

<body>
<button onclick="alert(getMax(prompt('第一个数'),prompt('第二个数'),prompt('第三个数')))">找最大值</button>
</body>
