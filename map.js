$("#visitChinaMapChart").hide();
$("#visitWorldMapChart").fadeIn(function () {
    for(world_count = 1;world_count < 8;world_count++) {
        visitwordMapOption.series[world_count].markLine.data = [];
        visitwordMapOption.series[world_count].markPoint.data = [];
    }
    worldMapchart.setOption(visitwordMapOption,true);
});