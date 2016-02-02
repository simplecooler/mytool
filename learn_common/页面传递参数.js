function GetQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
var r = window.location.search.substr(1).match(reg); 
if (r!=null) return (r[2]); return null; 
} 
 
var sname = GetQueryString("name"); 
if(sname!=null) 
{ 
var sname_ = decodeURIComponent(sname); 
alert(sname_); 
}
