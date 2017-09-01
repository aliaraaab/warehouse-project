(function($){

 	if($('[placeholder]').length > 0){
        $('input, textarea').placeholder();
    }

    jcf.setOptions('Select', {
		wrapNative: false
	});

    jcf.replaceAll();

})(jQuery);