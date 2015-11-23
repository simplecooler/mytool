$('#example').click(function(){
	clearTimeout(id);
	var id = setTimeout(function(){
		...
	},500);  /*500毫秒为允许点击间隔，小于500毫秒的高频点击将不被响应*/
});