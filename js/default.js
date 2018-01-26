$(function(){
	//云略电影指数
	var ylChart = echarts.init(document.getElementById('ylIndex'));
	var option= {
	    tooltip: {},
	    color:['#fce630'],
	    radar: [{
	            indicator: [{
	                text: '知名度',
	                max: 100
	            }, {
	                text: '期望度',
	                max: 100
	            }, {
	                text: '荣誉度',
	                max: 100
	            }, {
	                text: '关注度',
	                max: 100
	            }],
	            name:{
	            	textStyle:{
		        		color:'#fff'
		        	}
	            },
	            splitArea: {
		            show: false
		        },
	            center: ['50%', '60%'],
	        }],
	    series: [{
	            name:'云略电影指数',
	            type: 'radar',
	            radarIndex: 0,
	            symbol: 'arrow',
	            label: {
	                normal: {
	                    show: true
	                }
	            },
	            data: [
	                [45, 56, 66, 78]
	            ]
	       }]
	};
	ylChart.setOption(option);
	//电影声量图表
	var allChart = echarts.init(document.getElementById('allVolume'));
	var option = {
		title: {
	        text: '总声量'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {
	            type : 'shadow'
	        }
	    },
	    grid: {
	        left: '0',
	        right: '0',
	        bottom: '3%',
	        top:'10%',
	        containLabel: true
	    },
	    xAxis : [{
	            type : 'category',
	            data : ['加勒比海盗五：死无对证'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }],
	    yAxis : [{
	            type : 'value'
	       }],
	    series : [{
	            name:'电影总声量',
	            type:'bar',
	            barWidth: '40',
	            data:[110]
	       }]
	};
	allChart.setOption(option);
	var defaultVolume = echarts.init(document.getElementById('defaultVolume'));
	var option = {
		"title": {
			text: '加勒比海盗五：死无对证'
		},
	    "tooltip": {
	        "trigger": "axis",
	        "axisPointer": {
	            "type": "shadow",
	        },
	    },
	    "grid": {
	        "top": '10%',
	        "bottom": 100
	    },
	    "xAxis": [{
	        "type": "category",
	        "data":['2017/5/21','2017/5/22','2017/5/23','2017/5/24','2017/5/25','2017/5/26','2017/5/27','2017/5/28','2017/5/29','2017/5/30'],
	    }],
	    "yAxis": [{
	        "type": "value"
	    }],
	    "dataZoom": [{
	        "show": true,
	        "height": 30,
	        "bottom": 30,
	        "start": 10,
	        "end": 80,
	        textStyle:{
	            color:"#000"
	        }
	    }],
	    "series": [{
	            "name": "加勒比海盗五：死无对证",
	            "type": "bar",
	            "barMaxWidth": 35,
	            "itemStyle": {
	                "normal": {
	                    "label": {
	                        "show": true,
	                        "position": "top"
	                    }
	                }
	            },
	            "data": [6,9,10,11,12,9,8,7,15,13],
	        }
	    ]
	}
	defaultVolume.setOption(option);
	//情感分析
	var allBuzz = echarts.init(document.getElementById('allBuzz'));
	var option = {
		title: {
	        text: '加勒比海盗五：死无对证分享占比'
	    },
	    tooltip : {
	        trigger: 'axis',
	        formatter: "{a} <br/>{b} : {c}%",
	        axisPointer : {
	            type : 'shadow'
	        }
	    },
	    grid: {
	        left: '0',
	        right: '0',
	        bottom: '3%',
	        top:'10%',
	        containLabel: true
	    },
	    xAxis : [{
	            type : 'category',
	            data : ['positive','neutral','negative'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }],
	    yAxis: [{
	        type: 'value',
	        min: 0,
	        max: 100,
	        interval: 10,
	        axisLabel: {
	            formatter: '{value} %'
	        }
	    }],
	    series : [{
	            name:'情感分享占比',
	            type:'bar',
	            barWidth: '50',
	            itemStyle:{
	            	normal:{
	            		color: function(params) {
                            var colorList = [
                              "#61a0a8", "#2f4554","#c23531"
                            ];
                            return colorList[params.dataIndex]
	                        }
		            	}
		        },
	            data:[30,15,57]
	       }]
	};
	allBuzz.setOption(option);
	var childBuzz = echarts.init(document.getElementById('childBuzz'));
	var option = {
		title: {
	        text: '加勒比海盗五：死无对证分享量'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {
	            type : 'shadow'
	        }
	    },
	    grid: {
	        left: '0',
	        right: '0',
	        bottom: '3%',
	        top:'10%',
	        containLabel: true
	    },
	    xAxis : [{
	            type : 'category',
	            data : ['positive','neutral','negative'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }],
	    yAxis: [{
	        type: 'value',
	    }],
	    series : [{
	            name:'情感分享量',
	            type:'bar',
	            barWidth: '50',
	            itemStyle:{
	            	normal:{
	            		color: function(params) {
                            var colorList = [
                              "#61a0a8", "#2f4554","#c23531"
                            ];
                            return colorList[params.dataIndex]
	                        }
		            	}
		        },
	            data:[23344,5161,1250]
	       }]
	};
	childBuzz.setOption(option);
	//来源分析
	var allSource = echarts.init(document.getElementById('allSource'));
	var option = {
		title: {
	        text: '电影来源分析'
	    },
	    grid: {
	        left: '0',
	        right: '0',
	        bottom: '3%',
	        top:'10%',
	        containLabel: true
	    },
	    xAxis : [{
	            data : ['News','Social','Tickets','Vertical','Video']
	       }],
	    yAxis : [{
	            type : 'value',
	            min: 0,
		        max: 100,
		        interval: 10,
		        axisLabel: {
		            formatter: '{value} %'
		        }
	       }],
   		 series : [{
            name:'来源分析',
            type:'bar',
            barWidth:60,
            itemStyle:{
            	normal:{
            		color: function(p) {
                        var colorList = ["#00BFFF", "#bc00b7", "#00bc05", "#555", '#EE7942'];
                        return colorList[p.dataIndex];
                    }
            	}
	        },
            label:{
                normal:{
                    show:true,
                    position:'top',
                    formatter:function(p){
                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
                    }
                }
            },
            trueData:[3274, 1580, 275,267,653],
            data:[50, 25, 5,5,15]
       }]
	};
	allSource.setOption(option);
	//词云
	var allCloud = echarts.init(document.getElementById('allCloud'));
	var legaokey=[
    {
        "name":"加勒比海",
        "value":6623
    },
    {
        "name":"船长",
        "value":6508
    },
    {
        "name":"电影",
        "value":5427
    },
    {
        "name":"上映",
        "value":5051
    },
    {
        "name":"迪士尼",
        "value":4534
    },
    {
        "name":"杰克",
        "value":4455
    },
    {
        "name":"德普",
        "value":3463
    },
    {
        "name":"期待",
        "value":3346
    },
    {
        "name":"上海",
        "value":3323
    },
    {
        "name":"主演",
        "value":3276
    },
    {
        "name":"中国",
        "value":3121
    },
    {
        "name":"导演",
        "value":2865
    },
    {
        "name":"爸爸",
        "value":2447
    },
    {
        "name":"回复",
        "value":2362
    },
    {
        "name":"卧槽",
        "value":2271
    },
    {
        "name":"死无对证",
        "value":2241
    },
    {
        "name":"系列",
        "value":2231
    },
    {
        "name":"全球",
        "value":2007
    },
    {
        "name":"影片",
        "value":1867
    },
    {
        "name":"同步",
        "value":1839
    },
    {
        "name":"内地",
        "value":1825
    },
    {
        "name":"护卫队",
        "value":1759
    },
    {
        "name":"故事",
        "value":1714
    },
    {
        "name":"日期",
        "value":1714
    },
    {
        "name":"自己",
        "value":1699
    },
    {
        "name":"银河",
        "value":1671
    },
    {
        "name":"他们",
        "value":1647
    },
    {
        "name":"北美",
        "value":1617
    },
    {
        "name":"冒险",
        "value":1602
    },
    {
        "name":"时间",
        "value":1589
    },
    {
        "name":"动作",
        "value":1526
    },
    {
        "name":"约翰尼",
        "value":1487
    },
    {
        "name":"萨拉查",
        "value":1415
    },
    {
        "name":"一起",
        "value":1415
    },
    {
        "name":"可以",
        "value":1408
    },
    {
        "name":"这个",
        "value":1403
    },
    {
        "name":"终于",
        "value":1387
    },
    {
        "name":".",
        "value":1356
    },
    {
        "name":"定档",
        "value":1307
    },
    {
        "name":"类型",
        "value":1232
    },
    {
        "name":"世界",
        "value":1224
    },
    {
        "name":"就是",
        "value":1224
    },
    {
        "name":"巴登",
        "value":1208
    },
    {
        "name":"首映礼",
        "value":1200
    },
    {
        "name":"哈维尔",
        "value":1188
    },
    {
        "name":"亡灵",
        "value":1178
    },
    {
        "name":"我们",
        "value":1164
    },
    {
        "name":"回归",
        "value":1110
    },
    {
        "name":"布鲁姆",
        "value":1086
    },
    {
        "name":"角色",
        "value":1063
    },
    {
        "name":"亚瑟王",
        "value":1060
    },
    {
        "name":"剧情",
        "value":1032
    },
    {
        "name":"国家",
        "value":1029
    },
    {
        "name":"奥兰多",
        "value":1022
    },
    {
        "name":"海盗",
        "value":1021
    },
    {
        "name":"放假",
        "value":1011
    },
    {
        "name":"票房",
        "value":1002
    },
    {
        "name":"传说",
        "value":996
    },
    {
        "name":"继续",
        "value":982
    }
];
	var alldata = [];
	for (var i=0;i<legaokey.length;i++) {
		alldata.push({
			name:legaokey[i].name,
			value:legaokey[i].value,
		})
       //$("#legaokeywords").append("<label class='keylabel'><span>"+name+"：</span><span>"+legaokey[name]+"</span></label>");
   }
    var option = {
        tooltip: {},
        series: [{
            type: 'wordCloud',
            gridSize: 1,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            shape: 'circle',
            //width: 400,
            //height: 400,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 2,
                    shadowColor: '#333'
                }
            },
            data: alldata
        } ]
     };
     allCloud.setOption(option);
     //话题
     var allTopic = echarts.init(document.getElementById('allTopic'));
	 var option = {
	    grid: {
	        left: '0',
	        right: '2%',
	        bottom: '3%',
	        containLabel: true
	    },
	    legend: {
	        itemHeight: 14,
	        itemWidth: 14,
	        selectedMode:false,
	        top:'3%',
	        data: ['Ticket/Audience promotion activities', 'Schedule info','Special effects','Plot','Cast']
	    },
	    xAxis:  [{
	        show:false,
	        type: 'value'
	    },{
	        type : 'value',
	         axisLabel: {
	            formatter: '{value} %'
	        },
	        min: 0,
	        interval: 10,
	        max: 100,
	    }],
	    yAxis: {
	        type: 'category',
	        axisTick:{
		        show:false//隐藏Y轴刻度
		    },
	        data: ['加勒比海盗五：死无对证']
	    },
	    series: [{
	            name: 'Cast',
	            type: 'bar',
	            barWidth:45,
	            stack: '1',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside',
	                    formatter:function(p){
	                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
	                    }
	                }
	            },
	            trueData: [304],
	            data:[15]
	        },
	        {
	            name: 'Plot',
	            type: 'bar',
	            barWidth:45,
	            stack: '1',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside',
	                    formatter:function(p){
	                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
	                    }
	                }
	            },
	            trueData: [1336],
	            data:[25]
	        },
	        {
	            name: 'Special effects',
	            type: 'bar',
	            barWidth:45,
	            stack: '1',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside',
	                    formatter:function(p){
	                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
	                    }
	                }
	            },
	            trueData: [457],
	            data:[20]
	        },
	        {
	            name: 'Schedule info',
	            type: 'bar',
	            barWidth:45,
	            stack: '1',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside',
	                    formatter:function(p){
	                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
	                    }
	                }
	            },
	            trueData: [556],
	            data:[15]
	        },
	        {
	            name: 'Ticket/Audience promotion activities',
	            type: 'bar',
	            barWidth:45,
	            stack: '1',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside',
	                    formatter:function(p){
	                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
	                    }
	                }
	            },
	            trueData: [441],
	            data:[25]
	        }
	    ]
	};
	allTopic.setOption(option);
	//评分
	var allDeuce = echarts.init(document.getElementById('allDeuce'));
	var	option = {
		title:{
			text: '各电影平台评分',
	        x: 'center',
	        top:'1%',
	        textStyle: {
				fontSize: 15,
			},
		},
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	    	top:'8%',
	        data:['加勒比海盗五：死无对证']
	    },
	    grid: {
	        left: '0',
	        right: '1%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['豆瓣','格瓦拉','时光网','爱奇艺','腾讯视频']
		        
	        }
	    ],
	    yAxis: [{
	            type: 'category',
	            name: '电影',
		        data: ['加勒比海盗五：死无对证']
	      	},{
	            type: 'value',
	            name: '评分',
	            min: 0,
	            max: 10,
	            interval: 1,
	        }
	    ],
	    series: [{
	            name:'加勒比海盗五：死无对证',
	            smooth: true,
		        type: 'line',
		        symbolSize: 8,
		      	symbol: 'circle',
	            yAxisIndex: 1,
	            data:[8.4, 8.6, 8.0, 7.5, 6.5]
	       }]
	};
	allDeuce.setOption(option);
	/*百度指数折线图*/
	var baiduIndex = echarts.init(document.getElementById('baiduIndex'));
	var option = {
		title:{
			text: '百度指数',
	        x: 'center',
	        top:'1%',
	        textStyle: {
				fontSize: 15,
			},
		},
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	    	top:'8%',
	        data: ['加勒比海盗五：死无对证']
	    },
	    grid: {
	        left: '0',
	        right: '1%',
	        bottom: '1%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        data: [ 'Mar.6st', 'Mar.7st', 'Mar.8st', 'Mar.9st', 'Mar.10st', 'Mar.11st', 'Mar.12st','Search Total']
	
	    }],
	    yAxis: [{
	        type: 'category',
	        name: '电影',
	        data: ['加勒比海盗五：死无对证']
	    }, {
	        type: 'value',
	        name: '百度指数',
	        min: 0,
	        max: 1000000,
	        interval: 100000,
	        axisLabel: {
	            formatter: '{value}'
	        }
	    }],
	    series: [{
	        name: '加勒比海盗五：死无对证',
	        smooth: true,
	        type: 'line',
	        symbolSize: 8,
	      	symbol: 'circle',
	        yAxisIndex: 1,
	        data: [178684, 131663, 118827, 88004, 100889, 146408, 132861, 897336]
	    }]
	};
	baiduIndex.setOption(option);
});
