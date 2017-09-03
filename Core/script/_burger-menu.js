(function($){
	
	$(".toggle-down").click(function(){
        $(this).toggleClass("toggleDrawer").parents('header').toggleClass('show-menu').find('.menu-toggle').toggleClass('showing');
    });

	$(document).on('click', function(ev){
		if(!$(ev.target.offsetParent).hasClass('show-menu')) {
			$(".toggle-down").removeClass("toggleDrawer").parents('header').removeClass('show-menu').find('.menu-toggle').removeClass('showing');
		}
	});

})(jQuery);