$(document).ready(function(){
	
	$("#phone1").click(function(){
		$("#phoneInfo").hide();
		$("#phoneParam").hide();
		$("#phoneConclusion").show();
	})
	$("#phone2").click(function(){
		$("#phoneConclusion").hide();
		$("#phoneInfo").hide();
		$("#phoneParam").show();
	})
	$("#phone3").click(function(){
		$("#phoneParam").hide();
		$("#phoneConclusion").hide();
		$("#phoneInfo").show();
	})
	
})
