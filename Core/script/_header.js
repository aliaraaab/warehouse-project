(function($){
	
	$('header .search-area .search-icon').click(function(){
        $(this).toggleClass('click').parents('header').toggleClass('search-open').find('.search-area').toggleClass('type-search').find('.search-form .search').toggleClass('showing');

        setTimeout(function(){
        	$('.search-area .search input').focus();
		}, 500);
    });

})(jQuery);