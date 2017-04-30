/*去掉str前的空字符*/
function ltrim(str)
{
    var reg=/^\s+/;
    return str.replace(reg,"");
}

/*去掉str后的空字符*/
function rtrim(str)
{
    var reg=/\s+$/;
    return str.replace(reg,"");
}

/*去掉str所有空字符*/
function trim(str)
{
    var reg=/^\s+|\s+$/g;
    return str.replace(reg,"");
}

var str="  \tHello World  \t";

<button onclick="ltrim()">去除左边空格</button>
<button onclick="rtrim()">去除右边空格</button>
<button onclick="trim()">去除所有空格</button>
