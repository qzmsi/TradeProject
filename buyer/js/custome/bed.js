$(document).ready(function(){
	
	$("#bed1").click(function(){
		$("#bedInfo").hide();
		$("#bedParam").hide();
		$("#bedConclusion").show();
	})
	$("#bed2").click(function(){
		$("#bedConclusion").hide();
		$("#bedParam").hide();
		$("#bedInfo").show();
	})
	$("#bed3").click(function(){
		$("#bedInfo").hide();
		$("#bedConclusion").hide();
		$("#bedParam").show();
	})
	
})
