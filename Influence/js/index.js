(function () {
    var myChart = echarts.init(document.querySelector(".mainbox .column .chart"));

var size = 100;
var size1 = 100;
var yy = 200;
var yy1 = 350;

var listdata = [];
var links = [];

var med = "灾害";
var ope = "影响因素";
var che = "稳产增产";


var Grain = "粮食产量";

var meds = ["水灾", "旱灾", "风雹", "冷冻"];

var opes = ["受灾", "有效灌溉面积","总播种面积", "自然气候","农业机械总动力"];

var ches = ["加强气候监测", "推进农业科技", "加强灾害预警","增大农业投入"];

function setData(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        listdata.push({
            x: i * 50,
            y: size + i * 10,
            "name": arr[i],
            "symbolSize": size,
            "category": n,
            "draggable": "true"
        })
    }
}

function setLinkData(arr, title) {
    for (var i = 0; i < arr.length; i++) {
        links.push({
            "source": arr[i],
            "target": title,
            lineStyle: {
                normal: {
                    color: 'source',
                }
            }
        })
    }
}

var legendes = ["灾害", "影响因素", "稳产增产", "粮食产量"];
var texts = [];
for (var i = 0; i < legendes.length; i++) {
    texts.push({
        "name": legendes[i],
    })
}

var cat1 = ["灾害"];
for (var i = 0; i < meds.length; i++) {
    cat1.push(meds[i]);
}
var cat2 = ["影响因素"];
for (var i = 0; i < opes.length; i++) {
    cat2.push(opes[i]);
}
var cat3 = ["稳产增产"];
for (var i = 0; i < ches.length; i++) {
    cat3.push(ches[i]);
}
var cat4 = [];
cat4.push(Grain);

setData(cat1, 0);
setData(cat2, 1);
setData(cat3, 2);
setData(cat4, 3);

setLinkData(cat1, cat1[0]);
setLinkData(cat2, cat2[0]);
setLinkData(cat3, cat3[0]);
setLinkData(legendes, cat4[0]);

option = {
    title: {
        top: "top",
        left: "left",
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
        }
    },
    legend: {
        data: legendes,
        textStyle: {
            color: '#fff'
        },
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 30,
        itemHeight: 30
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 60,
            gravity: 0.15,
            edgeLength: 20,
            layoutAnimation: true,
        },
        data: listdata,
        links: links,
        categories: texts,
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}',
                fontSize: 15,
                fontStyle: '600',
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1.5,
                curveness: 0
            }
        }
    }]
};

    myChart.setOption(option);
    window.addEventListener("resize", function() {
    myChart.resize();
      });
})();