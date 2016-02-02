$(function(){

	$('#cover<?php print($key); ?>').eraser({
		size: 100 ,
		progressFunction: function(p) {
			//$('#progress').html(Math.round(p*100)+'%');
			var oSize = Math.round( p * 100 )
			
			if( console ) console.log( 
				oSize
			);	
			
			if(parseInt( oSize ) > 50){
				
				//
				$( "#cover<?php print($key); ?>" ).stop().animate( { opacity: 0 }, 1000, function(){
				
					$( "#cover<?php print($key); ?>" ).eraser('clear');
					$( "#cover<?php print($key); ?>" ).remove();	
				
				});
				
				//end
				
			}
		}
	});
	

var touchStartX = 0;


	$( "#top_img<?php print( $key ) ?>" ).on( "touchstart" , function(e) {
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		//touchStartX = touch.pageY;
		
		$(this).data( "touchStartX" , touch.pageX  )
	
	});


	$( "#top_img<?php print( $key ) ?>" ).on( "touchmove" , function(e){
		/*
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		//CODE GOES HERE
		touchDir = touchStartX - touch.pageY;
		
		if( touchDir > 0 )
		{
			if( isLocked == false )
			{
				$(".button_down").click();
			}
		}
		else if( touchDir < 0  )
		{
			if( isLocked == false )
			{
				index --;
				moveto( index  );
			}
		}	
	
	
		if( $( ".bg_div" ).css(  "display" ) == "block" )
		{
			//
		}
		else
		{
			e.preventDefault();
			e.stopPropagation();
		}
		
		*/
	} );

	$( "#top_img<?php print( $key ) ?>" ).on( "touchend" , function(e) {
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		touchDir = $(this).data( "touchStartX" ) - touch.pageX;
		
		
		var index = $(this).data( "index" ); 
		if( isNaN( index ) ) index = 0;
		
		if( touchDir > 20 )
		{
			//to the left
			
			index ++;
			if( index > $( this ).find( ".origin_img" ).length - 1 ) 
				index =  $( this ).find( ".origin_img" ).length - 1
			
		}
		else if( touchDir < -20 )
		{
			index --;
			if( index < 0 ) 
				index = 0;			
		}	
		
		$( this ).find( ".top_img_slider" ).stop().animate( {left: - ( index * $(window).width() ) + "px" } );
		$( this ).data( "index"  , index );  
	});
	
	
});
