function stickyLiveChat() {
	var lastScroll		= 300;
		$liveChat		= $(".live-chat"),
		$footer    		= $("footer .wrapper"),
		$window			= $(window),
		offset     		= $liveChat.offset(),
		offsetBottom	= $footer.offset(),
		_height			= $(window).outerHeight(),
		topPadding		= 10;

	$window.scroll(function() {
		if ($window.scrollTop() > (offsetBottom.top - _height)) {
			$liveChat.removeClass("floating");
		} else {
			$liveChat.addClass("floating");
		}
	});
}

(function($){


	$(window).scroll(function(event){
		if ($('.live-chat').length > 0) {
			stickyLiveChat();
		}
	});

    $(document).ready(function () {
		if ($('.live-chat').length > 0) {
			stickyLiveChat();
		}
    });


})(jQuery);