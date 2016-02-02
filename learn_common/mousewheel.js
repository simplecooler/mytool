//需要引入jquery mousewheel插件

//鼠标滚动收缩导航栏
  $(document).on('mousewheel', function(event) {
    //console.log(event.deltaX, event.deltaY, event.deltaFactor);
    if(event.deltaY > 0) {
      $('.navgation').slideDown('slow');
    }else {
      $('.navgation').slideUp('slow');
    }

    $(window).scroll(function () {
      if ($(window).scrollTop() == 0) {
        $('.navgation').slideDown('slow');
      }
    });
  });
