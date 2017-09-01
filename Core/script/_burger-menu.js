(function($){
	
	$(".toggle-down").click(function(){
        $(this).toggleClass("toggleDrawer").parents('header').toggleClass('show-menu').find('.menu-toggle').toggleClass('showing');
    });

})(jQuery);