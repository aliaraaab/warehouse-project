(function($){

	$('.hero-banner').slick({
		dots: true,
		arrows: false,
		autoplay: false,
		// autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// DETAIL WAREHOUSE
	 $('.detail-warehouse-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.detail-warehouse-slider-thumb'
	});
	$('.detail-warehouse-slider-thumb').slick({
		slidesToShow: 10,
		variableWidth: true,
		asNavFor: '.detail-warehouse-slider',
		focusOnSelect: true,
		arrows: false,
	});

})(jQuery);