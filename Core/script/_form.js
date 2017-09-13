(function($){
	
	$('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        startDate: '1d',
        todayHighlight: true,
        autoclose: true,
        disableTouchKeyboard: 'true',
        templates: {
                        leftArrow: '<i class="fa fa-caret-left"></i>',
                        rightArrow: '<i class="fa fa-caret-right"></i>'
                    }
    });

    $('.date-range .datepicker').each(function() {
        $(this).datepicker('clearDates');
    });

    $('.input-daterange input').each(function() {
        $(this).datepicker('clearDates');
	});

	$(".form-signup").validate({
		rules: {
	        name: {
	            required: true
	        },
	        email: {
	            required: true
	        },
	        password: {
	            required: true
	        },
	        confirmPass: {
	            required: true
	        },
		},

		highlight: function(element) {
		    $(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
		    $(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'strong',
		errorClass: 'help-block fa fa-exclamation-triangle',
		errorPlacement: function(error, element) {
		    if(element.parent('.form-group').length) {
		        error.insertBefore(element);
		    }
		    else {
		        error.insertBefore(element);
		    }
		},
	});

	

})(jQuery);