function img_resize( _this , width ){

	var w = width || $( window ).width();
	
	$(_this).each(function(index, element) {
    	
		var h = $( element ).parent().height();
		
		if( $( element ).data( "width") && $( element ).data( "width" ) != 0 )
		{
			var width = w;
			width =  width + 10;
			$( element ).css( "width" , width + "px" );
			$( element ).css( "height" , $( element ).data( "height")  
			* width / $(element).data( "width" ) + "px" );
			
		}
		
		if( $( element ).data( "height") && $( element ).data( "height" ) != 0 )
		{
			var height = $( element ).height();
			
			if( height < h ) height = h;
			
			height = height + 10;
			
			$( element ).css( "height" , height + "px" );
			$( element ).css( "width" , $( element ).data( "width" )  
			* height / $( element ).data( "height")  + "px" );
			
		}
		
		$( element ).css( "left" , ( w /2 ) - ( $(element).width() / 2 ) + "px" );
		$( element ).css( "top" , ( h /2 ) - ( $(element).height() / 2 ) + "px" );
	
	
    });

}