function checkFluency(){
    var checkbox=document.getElementById('hmt');
    if(checkbox.checked)
    {
        document.body.classList.add('fixed');
    }
    else{
        document.body.classList.remove('fixed'); 
    }
   
}


jQuery(function($){



    $('#my_form_email input').bind("keyup", function(event) {


			 var pattern = /^[-\w.]+@[-\w.]+\.[a-z]{2,20}$/i;
			 var mail = $('#my_form_email .email');
	

				 // if(mail.val().search(pattern) == 0){
		   //      	$('#submit_modal_err').css('display', "none");
		   //    		$('#submit_modal').css('display', "block");				 	
				 // }else{
		   //      	$('#submit_modal_err').css('display', "block");
		   //    		$('#submit_modal').css('display', "none");				 	
				 // }



        if (
        	($('#my_form_email .name').val()!='') &&
        	($('#my_form_email .lastname').val()!='') &&
        	($('#my_form_email .company').val()!='') &&
        	($('#my_form_email .email').val()!='') &&
        	($('#my_form_email .message').val()!='') &&
        	(mail.val().search(pattern) == 0)
        ) {
        	$('#submit_modal_err').css('display', "none");
      		$('#submit_modal').css('display', "block");
      		$('#form_err').css('display', "none");
        }


    	if ($('#my_form_email .name').val()!='') {$('#my_form_email .name').css('border','none').css('border-bottom','3px solid #A2A6B9').css('background-color','#2D303E');}
    	if ($('#my_form_email .lastname').val()!='') {$('#my_form_email .lastname').css('border','none').css('border-bottom','3px solid #A2A6B9').css('background-color','#2D303E');}
    	if ($('#my_form_email .company').val()!='') {$('#my_form_email .company').css('border','none').css('border-bottom','3px solid #A2A6B9').css('background-color','#2D303E');}
    	if ($('#my_form_email .email').val()!='') {$('#my_form_email .email').css('border','none').css('border-bottom','3px solid #A2A6B9').css('background-color','#2D303E');}
    	if ($('#my_form_email .message').val()!='') {$('#my_form_email .message').css('border','none').css('border-bottom','3px solid #A2A6B9').css('background-color','#2D303E');}







    });



    $('#submit_modal_err').bind("click", function(event) {
    	$('#form_err').css('display', "block");
    	if ($('#my_form_email .name').val()=='') {$('#my_form_email .name').css('border','solid thin #f00');}
    	if ($('#my_form_email .lastname').val()=='') {$('#my_form_email .lastname').css('border','solid thin #f00');}
    	if ($('#my_form_email .company').val()=='') {$('#my_form_email .company').css('border','solid thin #f00');}
    	if ($('#my_form_email .email').val()=='') {$('#my_form_email .email').css('border','solid thin #f00');}
    	if ($('#my_form_email .message').val()=='') {$('#my_form_email .message').css('border','solid thin #f00');}


			 var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
			 var mail = $('#my_form_email .email');

			 if(mail.val().search(pattern) == 0){
			 	$('#form_err').css('display', "block");
			 }


    });


    $('#submit_modal').bind("click", function(event) {
        $('.contact_main').css("display","none");
    	$('.thanks').css('display', "block");
    });






});



// name
// company
// email
// phoneNumber
// message
// $('#form_err').css('display', "block");

