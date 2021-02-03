function seach(){
	var seach=document.getElementById('seach');
	var src="https://www.baidu.com/s?ie=UTF-8&wd="+seach.value;
	window.location.href =src;
}
document.onkeydown =cdk; 
function cdk(){ 
    if(event.keyCode ==13){
        var seach=document.getElementById('seach');
		var src="https://www.baidu.com/s?ie=UTF-8&wd="+seach.value;
		window.location.href =src;
    }
}