(function($){
	
	$("header .search-area .search-icon").click(function(){
        $(this).toggleClass("toggleDrawer").parents('header').toggleClass('search-open').find('.search-form .search').toggleClass('showing');
    });

})(jQuery);