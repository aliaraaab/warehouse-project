(function($){

	//TOOLTIP
 	$('[data-toggle="tooltip"]').tooltip()

 	//SAME HEIGHT
    $('.panel-entire-product, .panel-dedicated-product, .panel-share-product, .panel-tank-product').each(function(){  
		var highestBox = 0;
			$('.col-same-height', this).each(function(){
				if($(this).height() > highestBox) {
					highestBox = $(this).height(); 
        		}
      		});  
      	$('.col-same-height',this).height(highestBox);
    });

    //TABS MAP
	if ($('.detail-warehouse .detail-tabs').length > 0) {
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			google.maps.event.trigger(map, 'resize');
		});
	}

})(jQuery);