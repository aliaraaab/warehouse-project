function stickySearch() {
	var lastScroll		= 300;
		$searchLocation	= $(".table-location"),
		$window			= $(window),
		offset     		= $searchLocation.offset(),
		_height			= $(window).outerHeight(),
		topPadding		= 0;

	$window.scroll(function() {
		if ($window.scrollTop() > offset.top) {
			$searchLocation.addClass("floating").parents('body').addClass("has-search-location");
		} else {
			$searchLocation.removeClass("floating").parents('body').removeClass("has-search-location");
		}
	});
}

(function($){


	$(window).scroll(function(event){
		if ($('.table-location').length > 0) {
			stickySearch();
		}
	});

    $(document).ready(function () {
		if ($('.table-location').length > 0) {
			stickySearch();
		}
    });


})(jQuery);