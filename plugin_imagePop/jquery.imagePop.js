(function ($) {
  $.fn.imagePop = function () {
    // 定义pop层的样式和属性
    const popLayer = $('<div>').attr('data-pop-layer', 1).css({
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      zIndex: 9999999,
      background: '#ffffff',
      opacity: '0.8',
      display: 'none'
    });

    // 克隆原始图片
    function cloneImage($node) {
      const [left, top, nodeWidth, nodeHeight] = [$node.offset().left, $node.offset().top, $node.width(), $node.height()];
      return $node.clone().css({
        position: 'fixed',
        width: nodeWidth,
        height: nodeHeight,
        left: left,
        top: top,
        zIndex: 10000000
      });
    }

    // 裁剪克隆出来的图片
    function cropImage($clone) {
      const [windowWidth, windowHeight] = [$(window).width(), $(window).height()];
      $clone.css('cursor', 'zoom-out').attr('data-pop-img', 1);
      const img = new Image();
      img.onload = function () {
        $clone.stop().animate({
          width: this.width,
          height: this.height,
          left: (windowWidth - this.width) / 2,
          top: (windowHeight - this.height) / 2
        }, 300);
      };
      img.src = $clone.attr('src');
    }

    // pop层和图片缩回并remove
    function imgFadeOut() {
      popLayer.fadeOut(300);
      $('img[data-pop-img]').fadeOut(300);
      setTimeout(() => {
        $('div[data-pop-layer]').remove();
        $('img[data-pop-img]').remove();
      },300);
    }

    // 点击弹出图片
    this.each(function () {
      $(this).css('cursor', 'zoom-in').on('click', function () {
        const $cloneImage = cloneImage($(this));
        popLayer.appendTo($('body'));
        popLayer.fadeIn(300);
        $cloneImage.appendTo($('body'));
        cropImage($cloneImage);
      });
    });

    // esc键和点击缩回pop图片
    $(window).on('click keydown', function (e) {
      if (e.type === 'keydown' && e.keyCode === 27) {
        imgFadeOut();
      }
      const $this = $(e.target);
      if ($this.attr('data-pop-layer') == 1 || $this.attr('data-pop-img') == 1) {
        imgFadeOut();
      }
    });

    // 窗口resize，pop图片响应变化
    $(window).on('resize', function () {
      $('img[data-pop-img]').each(function () {
        cropImage($(this));
      });
    });
  };
})(jQuery);
