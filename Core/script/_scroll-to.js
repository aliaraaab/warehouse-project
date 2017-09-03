(function($){

	$(document).ready(function() {
		var offset = 250;
		var duration = 100;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) { 
				$('.scroll-to-top').fadeIn(duration);
			} else {
				$('.scroll-to-top').fadeOut(duration);
			}
		});
		 
		$('.scroll-to-top').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});

		var $root = $('html, body');
	 	$(".hero-banner .scroll-down").on('click', function(e) {
			e.preventDefault();
			$root.animate({ 
				scrollTop: $($(this).attr('href')).offset().top - 60
			}, 500, 'linear');
		});
	});

})(jQuery);