(function($){
	
	$('header .search-area .search-icon').click(function(){
        $(this).toggleClass('click').parents('header').toggleClass('search-open').find('.search-area').toggleClass('type-search').find('.search-form .search').toggleClass('showing');

        setTimeout(function(){
        	$('.search-area .search input').focus();
		}, 500);
    });


	// $(document).on('click', function(ev){
	// 	if(!$(ev.target.offsetParent).hasClass('type-search')) {
	// 		$('header .search-area .search-icon').removeClass('click').parents('header').removeClass('search-open').find('.search-area').removeClass('type-search').find('.search-form .search').removeClass('showing');

	// 		console.log(ev.target.offsetParent);
	// 	}
	// });

})(jQuery);