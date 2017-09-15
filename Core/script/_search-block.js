function searchFocus() {
	$('.search-block .input-search').bind('focus', function(){
		$(this).parent().addClass('focus');
    });

	$('.search-block .input-search').bind('blur', function(){
		$(this).parent().removeClass('focus');
    });

    var inputs = document.getElementsByTagName('input');

	$.each($('.search-block .input-search'), function(){
		var _this = $(this);
		var isValid = function() {
			if(_this.val().length > 0){
				_this.parent().addClass('input-press');
			} else {
				_this.parent().removeClass('input-press');
			}
		};
		isValid();
		$(this).on('input', isValid);
	});
}


(function($){

	$(document).ready(function () {
		if ($('.search-block').length > 0) {
			searchFocus();
		}
	});


})(jQuery);