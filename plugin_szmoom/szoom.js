$('.zoom-left-right').css('left', -1 * $('.zoom-content').width() + 'px');
$('.zoom-right-left').css('right', -1 * $('.zoom-content').width() + 'px');
$('.zoom-down').css('bottom', -1 * $('.zoom-content-down').height() + 'px');
$('.zoom-up').css('top', -1 * $('.zoom-content-up').height() + 'px');

$('.zoom-left-right').css('left', -1 * $('.zoom-content').width() + 'px');
$('.zoom-right-left').css('right', -1 * $('.zoom-content').width() + 'px');
$('.zoom-down-up').css('bottom', -1 * $('.zoom-content-down').height() + 'px');

function zoom(dom_id,dir) {
    var selector = $('#' + dom_id);
    if (dir === 'left') {
        var status = false;
        selector.children('.zoom-button').click(function () {
                if (status === false) {
                    selector.animate({left: 0}, 1000);
                    status = true;
                } else {
                    selector.animate({left: -1 * selector.children('.zoom-content').width() + 'px'}, 1000);
                    status = false;
                }
            }
        );
    }else if (dir === 'right') {
        var status = false;
        selector.children('.zoom-button').click(function () {
                if (status === false) {
                    selector.animate({right: 0}, 1000);
                    status = true;
                } else {
                    selector.animate({right: -1 * selector.children('.zoom-content').width() + 'px'}, 1000);
                    status = false;
                }
            }
        );
    }else if (dir === 'down') {
        var status = false;
        selector.children('.zoom-button-down').click(function () {
                if (status === false) {
                    selector.animate({bottom: 0}, 1000);
                    status = true;
                } else {
                    selector.animate({bottom: -1 * selector.children('.zoom-content-down').height() + 'px'}, 1000);
                    status = false;
                }
            }
        );
    }else if (dir === 'up') {
        var status = false;
        selector.children('.zoom-button-up').click(function () {
                if (status === false) {
                    selector.animate({top: 0}, 1000);
                    status = true;
                } else {
                    selector.animate({top: -1 * selector.children('.zoom-content-up').height() + 'px'}, 1000);
                    status = false;
                }
            }
        );
}
zoom('top_attack_country','left');
zoom('top_attack_city','left');
zoom('top_attack_ip','right');
zoom('top_protect_ip','right');
zoom('top_protect_times','right');
zoom('attack_info','down');
zoom('top_bar','up');