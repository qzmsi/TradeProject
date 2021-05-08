$(document).ready(function(){
	
	$("#phone1").click(function(){
		$("#phoneInfo").hide();
		$("#phoneParam").hide();
		$("#phoneConclusion").show();
	})
	$("#phone2").click(function(){
		$("#phoneConclusion").hide();
		$("#phoneParam").hide();
		$("#phoneInfo").show();
	})
	$("#phone3").click(function(){
		$("#phoneInfo").hide();
		$("#phoneConclusion").hide();
		$("#phoneParam").show();
	})
	
})
