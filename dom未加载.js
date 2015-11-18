$(document).on('click', '#port_add',function(){
        $.post();
        //var port_manage_form_render = Mustache.to_html($('#port_manage_form_template').html(), {data: port_management});
        //$("#port_manage_form").empty().html(port_manage_form_render);
        port_manage_block("add",{});
    });