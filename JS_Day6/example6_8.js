var provs=["北京市","河南省","河北省"];
var cities=[
    ["朝阳区","海淀区"],
    ["廊坊市","石家庄市"],
    ["洛阳市","郑州市"]
];

function getCities(prov){
//arr.indexof(值)：在arr中找值的位置，若找到，返回下标i，否则返回-1
    var i=provs.indexof(prov);
    if(i!=-1){
        alert(cities[i]);
    }
    else{
        alert("没找到");
    }
}

<button onclick="getCities(prompt('输入省份'))">查找城市</button>
