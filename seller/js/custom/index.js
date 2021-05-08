jQuery(document).ready(function(){
								
	///// LOGIN FORM SUBMIT /////
	jQuery('#login').click(function(){
	
		if(jQuery('#username').val() == '' && jQuery('#password').val() == '') {
			jQuery('.nousername').fadeIn();
			jQuery('.nopassword').hide();
			return false;	
		}
		if(jQuery('#username').val() != '' && jQuery('#password').val() == '') {
			jQuery('.nousername').fadeIn();
			jQuery('.nopassword').hide();
			return false;	
		}
		else{
			window.location.href = "managerTemp.html";
		}
	});
	
	///// ADD PLACEHOLDER /////
	jQuery('#username').attr('placeholder','Username');
	jQuery('#password').attr('placeholder','Password');
});
