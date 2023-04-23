(function() {

  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
          scale:true,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"

          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "粮食总产量",
        type: "bar",
        barWidth: "35%",
        data: [61222.62,63048.2,63964.83,66060.27,66043.51,66160.73,65789.22,66384.34,66949.15,68284.75,
],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };


  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });


  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 施肥量和灌溉面积
(function() {

  var myChart = echarts.init(document.querySelector(".line .chart"));


  var data = {
    year: [
      [162071.25, 163702.25,165183.32,166829.28,166939.04,166331.91,165902.38,165930.66,167487.14,168695.13],
      [62490.52, 63473.3,64539.53,65872.64,67140.62,67815.57,68271.64,68678.61,69160.52,69625.35]
    ]
  };

  var option = {
    color: ["#00f2f1", "#ed3f35"],

    tooltip: {
      trigger: "axis"
    },

    legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd"
      }
    },

    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021"
      ],

      axisTick: {
        show: false
      },

      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },

      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
        scale:true,
      axisTick: {
        show: false
      },

      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },

      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "农作物总播种面积",
        type: "line",
        stack: "总量",

        smooth: true,
        data: data.year[0]
      },
      {
        name: "有效灌溉面积",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


(function() {

  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var seriesData = [{
                name: '稻谷',
                value: 31,
            },
            {
                name: '小麦',
                value: 20,
            },
            {
                name: '玉米',
                value: 39,
            },
            {
                name: '其他',
                value: 10,
            },];
var legendData = ["稻谷", "小麦", "玉米", "其他"]
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A'];
option = {

    title: {
        text: '品种',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: 'left',
        align: 'auto',
        top: 'middle',
        textStyle: {
            color: '#fff'
        },
        data: legendData
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['25%', '45%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: seriesData
    }, {
        name:'第一层环',
        type: 'pie',
        z: 2,
        tooltip:{
            show:false
        },
        center: ['50%', '50%'],
        radius: ['45%', '58%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {

                color: 'rgba(1,15,80,.4)',
            },
            emphasis:{
                color: 'rgba(1,15,80,.4)',
            }
        },
        label: {
            show: false
        },
        data: [100]
    }, {
        name:'第二层环',
        type: 'pie',
        z: 1,
        tooltip:{
            show:false
        },
        center: ['50%', '50%'],
        radius: ['58%', '76%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {

                color: 'rgba(0,15,69,.2)',
            },
            emphasis:{
                color: 'rgba(0,15,69,.2)',
            }
        },
        label: {
            show: false
        },
        data: [100]
    }]
};
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

(function() {
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));

    var seriesData = [{
                name: '稻谷',
                value: 31,
            },
            {
                name: '小麦',
                value: 20,
            },
            {
                name: '玉米',
                value: 39,
            },
            {
                name: '其他',
                value: 10,
            },];
    var legendData = ["稻谷", "小麦", "玉米", "其他"]
    var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
    option = {


    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: 'left',
        align: 'auto',
        top: 'middle',
        textStyle: {
            color: '#fff'
        },
        data: legendData
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['25%', '45%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: seriesData
    }, ]
};


    myChart.setOption(option);

    window.addEventListener("resize", function() {

    myChart.resize();
  });
})();

(function (){
     var myChart = echarts.init(document.querySelector(" .panel1 "));
      var years = ['2017','2018','2019','2020','2021'];
        var fiveData =[
           ['黑龙江省','河南省','山东省','吉林省','安徽省','河北省','江苏省','四川省','内蒙古自治区','湖南省','湖北省','辽宁省','江西省','云南省','新疆维吾尔自治区'],
           ['黑龙江省','河南省','山东省','安徽省','吉林省','内蒙古自治区','河北省','江苏省','四川省','湖南省','湖北省','辽宁省','江西省','云南省','新疆维吾尔自治区'],
           ['黑龙江省','河南省','山东省','安徽省','吉林省','内蒙古自治区','河北省','江苏省','四川省','湖南省','湖北省','辽宁省','江西省','云南省','新疆维吾尔自治区'],
           ['黑龙江省','河南省','山东省','安徽省','吉林省','内蒙古自治区','河北省','江苏省','四川省','湖南省','湖北省','辽宁省','江西省','云南省','新疆维吾尔自治区'],
           ['黑龙江省','河南省','山东省','安徽省','吉林省','内蒙古自治区','河北省','江苏省','四川省','湖南省','湖北省','辽宁省','江西省','云南省','新疆维吾尔自治区'],]
        var data =[
            [7410.34,6524.25,5374.31,4154,4019.71,3829.25,3610.8,3488.9,3254.54,3073.6,2846.13,2330.74,2221.73,1843.42,1484.73],
            [7506.8,6648.91,5319.51,4007.25,3660.28,3700.86,3493.7,3632.74,3553.28,3022.9,2839.47,2192.45,2190.7,1860.54,1504.23],
            [7503.01,6695.36,5357,4054,3877.93,3652.54,3739.24,3706.2,3498.5,2974.84,2724.98,2429.95,2157.45,1870.03,1527.07],
            [7540.78 ,6825.8 ,5446.81,4019.22,3803.17,3664.1,3795.89,3729.06,3527.43,3015.12,2727.43,2338.83,2163.88,1895.86,1583.4],
            [7867.72,6544.17,5500.75,4087.56,4039.24,3840.3,3825.09,3746.1,3582.14,3074.36,2764.33,2538.74,2192.33,1930.3,1735.78],
        ];
        option = {
            baseOption: {
        timeline: {
            show:true,
      axisType: 'category',
      orient: 'horizontal',
      autoPlay: true,
      inverse: false,
     playInterval: 3000,
    left: '10%',
        right: '10%',
        bottom: '0%',
              width: '80%',
      label: {
        normal: {
          textStyle: {
            color: 'rgb(179, 239, 255)',
          },
        },
        emphasis: {
          textStyle: {
            color: '#ffffff',
          },
        },
      },
    lineStyle: {
                color: '#8df4f4'
            },
            checkpointStyle: {
                borderColor: '#8df4f4',
                color: '#53D9FF',
                borderWidth: 2,
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#53D9FF',
                    borderColor: '#53D9FF'
                },
                emphasis: {
                    color: 'rgb(58,115,192)',
                    borderColor: 'rgb(58,115,192)'
                }
            },
      data: years,
    },

                tooltip: {
                    'trigger': 'axis'
                },
                calculable: true,
                grid: {
                    left: '8%',
                    right: '2%',
                    bottom: '12%',
                    top:'0%',
                    containLabel: true
                },
                label:{
                    normal:{
                        textStyle:{
                            color:'#fff'
                        }
                    }
                },
                yAxis: [{
                      offset: '37',
                    'type': 'category',
                    data: '',
                    nameTextStyle:{
                        color:'#fff'
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,
                            color:'white',
                        },
                        interval: 0
                    },
                    axisLine:{

                        lineStyle:{
                            color:'#333'
                        },
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#333'
                        }
                    },

                }],
                xAxis: [{
                    'type': 'value',
                    'name': '',

                    splitNumber:8,
                    nameTextStyle:{
                        color:'#333'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#333'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ',
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                        fontSize: "12"
          }

                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#ccc'
                        }
                    },
                }],
                series: [{
                    'name': '',
                    'type': 'bar',
                    markLine : {
                        label:{
                            normal:{
                                show:false
                            }
                        },
                        lineStyle:{
                            normal:{
                                color:'red',
                                width:3
                            }
                        },
                    },
                    barWidth:'50%',
                    label: {
                        normal: {
                            show: false,
                            position: 'inside',
                            formatter: '{c}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                                    '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                                    '#bda29a', '#376956', '#c3bed4', '#495a80',
                                    '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                                    '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc',
                                ];
                                return colorList[params.dataIndex]
                            },

                        }
                    },
                }],
                animationDurationUpdate: 2000,
                animationEasingUpdate: 'quinticInOut'
            },
            options: []
        };
        for (var n = 0; n < years.length; n++) {

                   var res = [];
       //alert(jdData.length);
           for(j=0;j<data[n].length;j++){
                res.push({
                name: fiveData[n][j],
                value: data[n][j]
            });

}

    res.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6);

    res.sort(function(a, b) {
    return a.value - b.value;
    });
    var res1=[];
    var res2=[];
      //console.log(res);
      for(t=0;t<res.length;t++){
          res1[t]=res[t].name;
            res2[t]=res[t].value;
      }
            option.options.push({
                yAxis:{
                    data:res1,
                },
                series: [{
                    data: res2
                }]
            });
        }
    myChart.setOption(option);
})();
(function() {
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));

    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];


    var option = {
        grid: {
        top: "10%",
        left: "22%",
        bottom: "10%"
      // containLabel: true
    },
    tooltip:{
        show:false
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["2021","2020", "2019", "2018", "2017", ],

        axisLine: {
          show: false
        },

        axisTick: {
          show: false
        },

        axisLabel: {
          color: "#fff"
        }
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [10.78, 10.56, 10.28,10.04,  9.88],
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,

          color: function(params) {

            return myColor[params.dataIndex];
          }
        },

        barCategoryGap: 50,

        barWidth: 15,

        label: {
          show: true,
          position: "inside",

          formatter: "{c}"
        }
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
