$(function(){
	$(".tybq span").click(function(){
		$(this).addClass("curren").siblings().removeClass("curren")
	})
});
$(function(){
	$(".msgBody li").click(function(){
		$(this).addClass("tabnow").siblings().removeClass("tabnow")
	})
})