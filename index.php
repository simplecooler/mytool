<?php
include_once "../server/functions.php";
$link = connectDB();
$lang = "cn";
$type = 6;
include_once( "../server/load_data.php" );
?>
<!doctype html>
<html>

<head>
<meta charset="UTF-8">
<title>今天传承 当代再造</title>
<meta content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, 
user-scalable=no" name=viewport >
<link type="text/css" href="css/style.css" rel="stylesheet" />
<script src="js/jquery.min.js"></script>
<script src="js/jquery.eraser.js"></script>
<script src="js/jquery.promptu-menu.js"></script>
<script src="js/our.js"></script>
</head>

<body>
<div class="page">
<!-- 首页 -->
  <div class="section">
    <div class="bg_img"><img class="bgi" src="img/bg_1.jpg" onload="img_on_load( this )"  /></div>
    <div class="head_word">今天传承</br>
      当代再造</div>
    <div class="shadow"> <img class="logo" onload=" resize();" src="img/logo.png"/><img onload=" resize();" class="logo" src="img/log_noaf_w.png"/></br>
      <img class="down" src="img/down.png"/> </div>
  </div>
<!-- 首页 -->  
  
<?php 
	foreach(  $p_titles as $key => $title )
	{
?>
<!-- 内容 -->  
  <div class="section">
    
    <div class="top_img" id="top_img<?php print( $key ) ?>" >
    <table cellpadding="0" cellspacing="0" border="0" class="top_img_slider"  >
    <tr>
       <?php
	   
       foreach(  $imgs[ $key ] as $imgkey => $img )
	   {
		   if( $imgkey > 0 )
		   {
				print( '<td><div class="origin_img"><img class="origin" 
					style=" z-index: '.( count( $imgs[ $key ] ) - $imgkey ).';" 
					src="../img/photos/'. $img .'" onload="img_sec_on_load( this )" /></div></td>
				' ); 
		   }
	   }
	   
	   ?> 
    </tr>
    </table>    
    </div>
    
    <div class="shadow_black">
      <div class="padding">
        <div class="title"><?php print( $title ) ?></div>
        <div class="head"><?php print( $p_sdes[ $key ] ) ?></div>
        <div class="show_word">
        <?php print( $p_des[ $key ] ) ?>
        </div>
      </div>
    </div>
    <img class="down_single" src="img/down_single.png"/> 
    <img class="cover bg_img" id="cover<?php print($key); ?>" src="../img/photos/<?php  if( isset( $imgs[ $key ][0]  ) ) print(  $imgs[ $key ][0]  ); ?>" onload="img_on_load( this )"/>
    <div id="progress" class="progress">0%</div>
  </div>
<script> /*---------涂抹效果----------*/
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



  



</script>
<!-- 内容 -->  
<?php 
	}
?>  

<!-- 尾页 -->   
  <div class="section section_footer" style="text-align:center;">
    <div class="bg_img"><img class="bgi" src="img/bg_2.jpg" onload="img_on_load( this )"  /></div>
    <div class="share">
      <div class="share_word">分享到朋友圈</div>
      <img src="img/share.png"/> </div>
    <div class="foot_word">更多关于《今天传承·当代再造》</br>
      幕后故事</div>
    <div class="button">进入活动官方网站</div>
    <div class="shadow_footer"> <img class="logo" src="img/logo.png"/> </div>
  </div>
  
<!-- 尾页 -->  
</div>

</body>
</html>
<?php
	if( isset( $link ) ) mysql_close( $link );
?>