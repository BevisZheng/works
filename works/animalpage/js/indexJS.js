$(function(){
	$("input[name=check-condition]").attr("checked",false);
	$(".search-keyword").focus(function(){
		var text_value = $(this).val();
		if(text_value == this.defaultValue){
			$(this).val("");
		}
	});
	$(".search-keyword").blur(function(){
		var text_value = $(this).val();
		if(text_value == ""){
			$(this).val(this.defaultValue);
		}
	});
	$(".newsBox-nav-item").mouseover(function(){
		$(".newsBox-nav-item").removeClass("newsBox-nav-item_current");
		$(this).addClass("newsBox-nav-item_current");
		var index = $(".newsBox-nav-item").index(this);
		$(".newsBox-content").hide();
		$(".newsBox-content").eq(index).show();
	});
	$("#searchBar-keyword").bigAutocomplete({
		width:453,
		data:[
			{title:"中国好声音"},
			{title:"中国移动网上营业厅"},
			{title:"中国银行"},
			{title:"中国移动"},
			{title:"中国好声音第三期"},
			{title:"中国好声音 第一期"},
			{title:"中国工商银行"},
			{title:"中心湖"},
			{title:"中国好声音第二期"},
			{title:"中国地图"}
		]
	});
	$("input[name=check-condition]").click(function(){
		var conditionId = '.condition-' + $(this).val();
		$(conditionId).toggleClass("disable");
	});
})