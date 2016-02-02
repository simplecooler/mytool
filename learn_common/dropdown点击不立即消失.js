<div class="container pageTitle">
     <div>
         <h1 style="display: inline-block;">控制台_</h1>
         <span id="domain_span" style="cursor: pointer;display: inline-block;">
             <div class="dropdown">
                 <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="background-color: transparent;color: #ffffff;font-size: 34px;padding-bottom: 16px;">
                     <?php echo $domain;?>
                     <span class="caret"></span>
                 </button>
                 <div class="dropdown-menu" aria-labelledby="dropdownMenu1" style="top: 45px;padding-bottom: 0;padding-top: 0" id="drop_down_list">
                     <div class="content" style="overflow-x: hidden;overflow-y: auto;height: 300px;">
                         <input value="<?php echo isset($searchword)?$searchword:'';?>" type="text" class="form-control" id="" placeholder="输入搜索关键字" name="searchword" data-class="domainlist-search-value" data-search-input="yes">
                         <table id="domain_list" class="table table-hover table-condensed" style="margin: 0;"><tr style="font-size: 14px;text-align: center;"><td>正在读取中...</td></tr></table>
                     </div>
                 </div>
             </div>
         </span>
         <a style="display: inline-block;" href="/plans" target="_blank"><span class="label label-success" style="font-size:12px;margin-left:7px;vertical-align:3px;"><?php if(!empty($domain_info['domain']['level_title'])){echo $domain_info['domain']['level_title'];}else{echo '免费版';}?></span></a>
     </div>

     <script>
         $("#dropdownMenu1").click(function(event){
             $.getJSON('/domainList?domain_type=all&p=1&pagesize=20&searchword=&group_id=&status=&act=getdomains', {act:'getdomains'}, function(data) {
                 $('#domain_list').html("");
                 for(var count = 0;count<20;count++){
                     var id = data.domains[count].control_id;
                     $('#domain_list').append('<tr class="single-domain" data-id="'+id+'" style="cursor:pointer;font-size:14px;"><td>'+ data.domains[count].domain+'</td></tr>');
                 }
             });
         });

         $("#domain_list").on('click','.single-domain',function(e){
             console.log($(e.currentTarget).data('id'));
             window.location.href = '/dashboard/'+ $(e.currentTarget).data('id');
         });

         $('#drop_down_list').css('width',$('#dropdownMenu1').width() + 24 + 'px');

         $(".dropdown-menu .content").on('click', function (e) {
             e.stopPropagation();
         });
     </script>
</div>