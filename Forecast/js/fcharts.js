(function (){
    var myChart = echarts.init(document.querySelector(".map .chart"));

var charts = {
    unit: '产量',
    names: ['粮食总产量'],

    lineX: [
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
        ],
    value: [
        [70249.46,71132.26,71031.48,72292.19, 73627.79,]

    ]

}
var color = ['rgba(23, 255, 243', 'rgba(119,61,190']
var lineY = []

for (var i = 0; i < charts.names.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[x] + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i]
    }
    lineY.push(data)
}


var option = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
	        text: '单位:万吨',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '80%',
	    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
        },
        right: '4%'
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            },
            lineStyle: {
                color: 'rgb(0,253,255,0.6)'
            },
            formatter: function(params) {
                return params.split(' ')[0]
            }
        },

    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        scale:true,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        }
    },
    series: lineY
}

    myChart.setOption(option);
    window.addEventListener("resize", function() {
    myChart.resize();
      });
})();