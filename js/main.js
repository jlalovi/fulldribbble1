$(document).ready(function(){
	$("#newPost .left div").mouseenter(function(){
		$(this).css("background-color","#ffffff");
		$(this).css("color", "#2e3641");
	});
	$("#newPost .left div").mouseleave(function(){
		$(this).css("background-color","#2e3641");
		$(this).css("color", "#ffffff");
	});
});