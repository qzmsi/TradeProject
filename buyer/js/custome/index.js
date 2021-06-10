$(document).ready(function(){
	
	$("#firstPage").click(function(){
		$("iframe").attr("src","default.html");
	})
	
	$("#phone").on("mouseover",function(){
		$(".dropdown_phone").show();
		$(".dropdown_bed").hide();
	})
	$(".dropdown_phone").on("mouseover",function(){
		$(this).show();
	})
	$(".dropdown_phone").on("mouseout",function(){
		$(this).hide();
	})

	$("#bed").on("mouseover",function(){
		$(".dropdown_bed").show();
		$(".dropdown_phone").hide();
	})
	$(".dropdown_bed").on("mouseover",function(){
		$(this).show();
	})
	$(".dropdown_bed").on("mouseout",function(){
		$(this).hide();
	})
	
	$("#firstPage,#service,#community").on("mouseover",function(){
		$(".dropdown_bed").hide();
		$(".dropdown_phone").hide();
	})
	

	$(".dropdown_phone").find("li").each(function(){
		$(this).click(function(){
			$(".dropdown_phone").hide();
			window.phoneNum = $(this).find(".chooseText").html();
			$("iframe").attr("src","phone.html");
		})
	})
})
