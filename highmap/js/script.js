$(function () {

    Highcharts.setOptions({
        lang:{
            drillUpText:"返回 > {series.name}",
        }
    });

    /*var data = Highcharts.geojson(Highcharts.maps['countries/cn/custom/cn-all-china']);
    var small = $('#container').width() < 400;
    var mapData = [];
    // 给城市设置随机数据
    $.each(data, function (i) {
        this.drilldown = this.properties['drill-key'];
        this.value = i;
        mapData.push({name:this.properties['drill-key'],z:i,value:i})
    });*/
	function getPoint(e){
		console.log(e.point.name);
	}
	function getShow(e){
		alert(1);
	}
    function jumpDown(id){
        startMap(id)
    }
    // Show loading
    if ($("#container").highcharts()) {
        $("#container").highcharts().showLoading('<i class="fa fa-spinner fa-spin fa-2x"></i>');
    }
    startMap();
    function startMap(name){
        if(name){
            var data=[];
            var small = $('#container').width() < 400;
            var mapData=[];
            $.ajax({
                type: "GET",
                // url: "http://data.hcharts.cn/jsonp.php?filename=GeoMap/json/"+ e.point.drilldown+".geo.json",
                url: "bdjson/"+ name+".json",
                contentType: "application/json; charset=utf-8",
                dataType:'json',
                crossDomain: true,
                success: function(json) {  
                    json = decode(json);   
                    data = Highcharts.geojson(json);
                    $.each(data, function (i) {
                        this.value = i;
                        this.drilldown = this.name;
                        mapData.push({name:this.name,z:i,value:i})
                    });
                    startDrawMap();
                }
            });
        }else{
            var data = Highcharts.geojson(Highcharts.maps['countries/cn/custom/cn-all-china']);
            var small = $('#container').width() < 400;
            var mapData = [];
            // 给城市设置随机数据
            $.each(data, function (i) {
                this.drilldown = this.properties['drill-key'];
                this.value = i;
                mapData.push({name:this.properties['drill-key'],z:i,value:i})
            });
            startDrawMap();
        }
             
         function startDrawMap() {
            //初始化地图
            $('#container').highcharts('Map', {
                chart : {
                    /*events: {
                        drilldown: function (e) {
                            console.log(e)
                            if (!e.seriesOptions) {
                                var chart = this;
                                      //    mapKey = 'countries/china/' + e.point.drilldown + '-all',
                                      // fail = setTimeout(function () {
                                      //       if (!Highcharts.maps[mapKey]) {
                                      //           chart.showLoading('<i class="icon-frown"></i> 加载失败 ' + e.point.name);

                                      //           fail = setTimeout(function () {
                                      //               chart.hideLoading();
                                      //           }, 1000);
                                      //       }
                                      //   }, 10000);
                                var cname=e.point.properties["cn-name"];
                                chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>');
                                // 加载城市数据
                                $.ajax({
                                    type: "GET",
                                    // url: "http://data.hcharts.cn/jsonp.php?filename=GeoMap/json/"+ e.point.drilldown+".geo.json",
                                    url: "bdjson/"+ e.point.drilldown+".json",
                                    contentType: "application/json; charset=utf-8",
                                    dataType:'json',
                                    crossDomain: true,
                                    success: function(json) {  
                                        json = decode(json);   
                                        data = Highcharts.geojson(json);
                                        var cityData = [];
                                        $.each(data, function (i) {                                  
                                            this.value = i;
                                            this.events={};
                                            this.events.click=getPoint;
                                            cityData.push({name:this.name,z:i,value:i})                 
                                        });
                                        chart.hideLoading();

                                        chart.addSeriesAsDrilldown(e.point, {
                                            name: e.point.name,
                                            data: data,
                                            events:{
                                                show:function(){
                                                    alert(1);
                                                }
                                            },
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'+'<br />{point.value}',
                                                color: '#fff'
                                            }
                                        });
                                    },
                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                    }
                                });
                            }


                            this.setTitle(null, { text: cname });
                        },
                        drillup: function () {
                            this.setTitle(null, { text: '中国' });
                        }
                    }*/
                },
                tooltip: { 
                    enabled: true,
                    formatter:function(){
                         return this.point.name+":"+this.point.value;
                         
                    }
                    // valuePrefix: '考勤数为',
                    // valueSuffix: '次'
                },
                credits:{
                    enabled:false
                },
                title : {
                    text : 'highmap中国地图'
                },

                subtitle: {
                    text: '中国',
                    floating: true,
                    align: 'right',
                    y: 50,
                    style: {
                        fontSize: '16px'
                    }
                },

                legend: small ? {} : {
                    enabled: false,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                //tooltip:{
                //pointFormat:"{point.properties.cn-name}:{point.value}"
                //},
                colorAxis: {
                    min: 0,
                    minColor: '#D9E8F3',
                    maxColor: '#289bf0'
                },

                mapNavigation: {
                    enabled: true,
                    enableDoubleClickZoomTo: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                plotOptions: {
                    map: {
                        states: {
                            hover: {
                                color: '#EEDD66'
                            }
                        }
                    },
                    series:{
                        events:{
                            click:function(e) {
                                // console.log(e.point)
                                jumpDown(e.point['drilldown']);
                            }
                        }
                    }
                        
                },

                series : [{
                    data : data,
                    name: '全国地图',
                    // enableMouseTracking: false,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'+'<br />{point.value}'
                    }
                },
                {
                    type: 'mapbubble',
                    mapData: data,
                    name: '全国地图',
                    joinBy: ['name','name'],
                    data: mapData,
                    minSize: 4,
                    maxSize: '8%',
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<b>{point.value}</b>',
                        footerFormat: ''
                    },
                    color: 'rgba(40, 155, 240,.8)'
                }
                ],

                drilldown: {
                            
                    activeDataLabelStyle: {
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        textShadow: '0 0 3px #000000'
                    },
                    drillUpButton: {
                        relativeTo: 'spacingBox',
                        position: {
                            x: 0,
                            y: 60
                        }
                    }
                }
            });
         }
        /*var data = Highcharts.geojson(Highcharts.maps['countries/cn/custom/cn-all-china']);
        var small = $('#container').width() < 400;
        var mapData = [];
        // 给城市设置随机数据
        $.each(data, function (i) {
            this.drilldown = this.properties['drill-key'];
            this.value = i;
            mapData.push({name:this.properties['drill-key'],z:i,value:i})
        });*/
            
    }
        
});

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";  
var base64DecodeChars = new Array(  
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,  
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,  
    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,  
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,  
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,  
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);  


function base64decode(str) {  
    var c1, c2, c3, c4;  
    var i, len, out;  
  
    len = str.length;  
    i = 0;  
    out = "";  
    while(i < len) {  
    /* c1 */  
    do {  
        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];  
    } while(i < len && c1 == -1);  
    if(c1 == -1)  
        break;  
  
    /* c2 */  
    do {  
        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];  
    } while(i < len && c2 == -1);  
    if(c2 == -1)  
        break;  
  
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));  
  
    /* c3 */  
    do {  
        c3 = str.charCodeAt(i++) & 0xff;  
        if(c3 == 61)  
        return out;  
        c3 = base64DecodeChars[c3];  
    } while(i < len && c3 == -1);  
    if(c3 == -1)  
        break;  
  
    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));  
  
    /* c4 */  
    do {  
        c4 = str.charCodeAt(i++) & 0xff;  
        if(c4 == 61)  
        return out;  
        c4 = base64DecodeChars[c4];  
    } while(i < len && c4 == -1);  
    if(c4 == -1)  
        break;  
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);  
    }  
    return out;  
}
function getGithub(){
	$.getJSON("https://api.github.com/repos/peng8/GeoMap/contents/json/bei_jing.geo.json", function(data){
	  console.log(base64decode(data.content));
    });
}
// $.getJSON("https://rawgit.com/ecomfe/echarts/master/map/json/province/chongqing.json", function(data){
//       console.log(decode(data));
// });
// 转百度下载的geojson地图数据
function decode(json) {
    if (!json.UTF8Encoding) {
        return json;
    }
    var features = json.features;

    for (var f = 0; f < features.length; f++) {
        var feature = features[f];
        var geometry = feature.geometry;
        var coordinates = geometry.coordinates;
        var encodeOffsets = geometry.encodeOffsets;

        for (var c = 0; c < coordinates.length; c++) {
            var coordinate = coordinates[c];

            if (geometry.type === 'Polygon') {
                coordinates[c] = decodePolygon(
                    coordinate,
                    encodeOffsets[c]
                );
            }
            else if (geometry.type === 'MultiPolygon') {
                for (var c2 = 0; c2 < coordinate.length; c2++) {
                    var polygon = coordinate[c2];
                    coordinate[c2] = decodePolygon(
                        polygon,
                        encodeOffsets[c][c2]
                    );
                }
            }
        }
    }
    // Has been decoded
    json.UTF8Encoding = false;
    return json;
}

function decodePolygon(coordinate, encodeOffsets) {
    var result = [];
    var prevX = encodeOffsets[0];
    var prevY = encodeOffsets[1];

    for (var i = 0; i < coordinate.length; i += 2) {
        var x = coordinate.charCodeAt(i) - 64;
        var y = coordinate.charCodeAt(i + 1) - 64;
        // ZigZag decoding
        x = (x >> 1) ^ (-(x & 1));
        y = (y >> 1) ^ (-(y & 1));
        // Delta deocding
        x += prevX;
        y += prevY;

        prevX = x;
        prevY = y;
        // Dequantize
        result.push([x / 1024, y / 1024]);
    }

    return result;
}






















