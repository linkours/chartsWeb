$(function(){
	var tooltipData={
		"trigger": "axis",
        "axisPointer": {
            "type": "shadow",
        },
	};
	var yAxisDatas=[{
		type : 'value'
	}];
	var axisLabelData={
		interval: 0,
        margin: 10,
        rotate: 30,
	};
	$(".vsBtn").click(function(){
		$("#defaultVolume,#allSource,#allCloud").nextAll().remove();
		var allChart = echarts.init(document.getElementById('allVolume'));
		var option = {
			title: {
		        text: '总声量'
		    },
		    tooltip : tooltipData,
		    grid: {
		        left: '0',
		        right: '0',
		        bottom: '3%',
		        top:'10%',
		        containLabel: true
		    },
		    xAxis : [{
		            type : 'category',
		            data : [],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }],
		    yAxis :yAxisDatas,
		    series : [{
		            name:'电影总声量',
		            type:'bar',
		            barWidth: '40',
		            itemStyle:{
	            	normal:{
	            		color: function(params) {
                            var colorList = [
                              "#00BFFF", "#bc00b7", "#00bc05", "#555", '#EE7942',"#c23531"
                            ];
                            return colorList[params.dataIndex]
	                        }
		            	}
		            },
		            data:[]
		       }]
		};
		allChart.showLoading();
		allChart.setOption(option);
		$.ajax({
			type:"get",
			url:"test.json",
			success:function(data){
				data=eval(data);
				var xDatas=[];//电影名称
				var sDatas=[];//series的Data
				var xmovData1=[];//x轴的值
				var xmovData2=[];
				var xmovData3=[];
				var xmovData4=[];
				var xmovData5=[];
				var smovData1=[];//查询出的单个series的Data
				var smovData2=[];
				var smovData3=[];
				var smovData4=[];
				var smovData5=[];
				var perposData=[];//情感分析各类所占百分比
				var perneuData=[];
				var pernegData=[];
				var valposData=[];//情感分析各类所占值
				var valneuData=[];
				var valnegData=[];
				var valnewsData=[];//来源分析各类所占值
				var valsocData=[];
				var valticData=[];
				var valverData=[];
				var valvidData=[];
				var onepieData=[];//饼图
				var twopieData=[];
				var threepieData=[];
				var fourpieData=[];
				var fivepieData=[];
				var pielegData=[];//图例
				var onecloudData=[];//词云
				var twocloudData=[];
				var threecloudData=[];
				var fourcloudData=[];
				var fivecloudData=[];
				var valcasData=[];//话题
				var valploData=[];
				var valeffData=[];
				var valschData=[];
				var valactData=[];
				var valData001=[];//评分
				var valData002=[];
				var valData003=[];
				var valData004=[];
				var valData005=[];
				var valData006=[];
				var alllen=data.all.length;
				var allTxt=data.all;
				var movlen1=data.king.length;
				var movTxt1=data.king;
				var movlen2=data.wall.length;
				var movTxt2=data.wall;
				var movlen3=data.god.length;
				var movTxt3=data.god;
				var movlen4=data.steel.length;
				var movTxt4=data.steel;
				var movlen5=data.kungfu.length;
				var movTxt5=data.kungfu;
				//饼图
				var pielen1=data.onepie.length;
				var pieTxt1=data.onepie;
				var pielen2=data.twopie.length;
				var pieTxt2=data.twopie;
				var pielen3=data.threepie.length;
				var pieTxt3=data.threepie;
				var pielen4=data.fourpie.length;
				var pieTxt4=data.fourpie;
				var pielen5=data.fivepie.length;
				var pieTxt5=data.fivepie;
				//评分
				var declen1=data.overallKing.length;
				var decTxt1=data.overallKing;
				var declen2=data.overallWall.length;
				var decTxt2=data.overallWall;
				var declen3=data.overallGod.length;
				var decTxt3=data.overallGod;
				var declen4=data.overallSteel.length;
				var decTxt4=data.overallSteel;
				var declen5=data.overallKungfu.length;
				var decTxt5=data.overallKungfu;
				var declen6=data.overallJlb.length;
				var decTxt6=data.overallJlb;
				//词云
				var cloudlen1=data.onecloud.length;
				var cloudTxt1=data.onecloud;
				for(var i=0;i<alllen;i++){
					var allVal=allTxt[i].name;
					var allscore=allTxt[i].value;
					//情感
					var perpos=allTxt[i].perPositive;
					var perneu=allTxt[i].perNeutral;
					var perneg=allTxt[i].perNegative;
					var valpos=allTxt[i].valPositive;
					var valneu=allTxt[i].valNeutral;
					var valneg=allTxt[i].valNegative;
					//来源
					var valnews=allTxt[i].news;
					var valsoc=allTxt[i].social;
					var valtic=allTxt[i].tickets;
					var valver=allTxt[i].vertical;
					var valvid=allTxt[i].video;
					//话题
					var valcas=allTxt[i].cast;
					var valplo=allTxt[i].plot;
					var valeff=allTxt[i].effect;
					var valsch=allTxt[i].schedule;
					var valact=allTxt[i].activities;
					xDatas.push(allVal);
					sDatas.push(allscore);
					//情感
					perposData.push(perpos);
					perneuData.push(perneu);
					pernegData.push(perneg);
					valposData.push(valpos);
					valneuData.push(valneu);
					valnegData.push(valneg);
					//来源
					valnewsData.push(valnews);
					valsocData.push(valsoc);
					valticData.push(valtic);
					valverData.push(valver);
					valvidData.push(valvid);
					//话题
					valcasData.push(valcas);
					valploData.push(valplo);
					valeffData.push(valeff);
					valschData.push(valsch);
					valactData.push(valact);
				}
				allChart.hideLoading();
				allChart.setOption({
					xAxis:[{data:xDatas,axisLabel:{interval: 0,rotate: 30}}],
					series:[{data:sDatas}],
					grid:[{bottom:'70'}]
				});
				for(var i=0;i<movlen1;i++){
					var xmov=movTxt1[i].time;
					var smov=movTxt1[i].value;
					xmovData1.push(xmov);
					smovData1.push(smov);
				}
				var oneCharts="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='oneCharts'></div>";
				$("#defaultVolume").after(oneCharts);
				var girdData={
					"top": '10%',
			        "bottom": 100
				};
				var dataZoomData=[{
					"show": true,
			        "height": 30,
			        "bottom": 30,
			        "start": 10,
			        "end": 80,
			        textStyle:{
			            color:"#000"
			        }
				}];
				var itemlabelData={
					"show": true,
                    "position": "top"
				};
				var oneChart = echarts.init(document.getElementById('oneCharts'));
				var option = {
						title: {
					        text: '金刚狼'
					    },
					    "tooltip": tooltipData,
					    "grid": girdData,
					    "xAxis": [{
					        "type": "category",
					        "data":xmovData1
					    }],
					    "yAxis": yAxisDatas,
					    "dataZoom": dataZoomData,
					    "series": [{
					            "name": "金刚狼",
					            "type": "bar",
					            "barMaxWidth": 35,
					            "itemStyle": {
					                "normal": {
					                    "color": "#00bfff",
					                    "label":itemlabelData
					                }
					            },
					            "data": smovData1
					        }
					    ]
					}
				oneChart.setOption(option);
				for(var i=0;i<movlen2;i++){
					var xmov=movTxt2[i].time;
					var smov=movTxt2[i].value;
					xmovData2.push(xmov);
					smovData2.push(smov);
				}
				var twoCharts="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='twoCharts'></div>";
				$("#oneCharts").after(twoCharts);
				var twoChart = echarts.init(document.getElementById('twoCharts'));
				var option = {
						title: {
					        text: '长城'
					    },
					    "tooltip": tooltipData,
					    "grid": girdData,
					    "xAxis": [{
					        "type": "category",
					        "data":xmovData2
					    }],
					    "yAxis": yAxisDatas,
					    "dataZoom": dataZoomData,
					    "series": [{
					            "name": "长城",
					            "type": "bar",
					            "barMaxWidth": 35,
					            "itemStyle": {
					                "normal": {
					                    "color": "#bc00b7",
					                    "label": itemlabelData
					                }
					            },
					            "data": smovData2
					        }
					    ]
					}
				twoChart.setOption(option);
				for(var i=0;i<movlen3;i++){
					var xmov=movTxt3[i].time;
					var smov=movTxt3[i].value;
					xmovData3.push(xmov);
					smovData3.push(smov);
				}
				var threeCharts="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='threeCharts'></div>";
				$("#twoCharts").after(threeCharts);
				var threeChart = echarts.init(document.getElementById('threeCharts'));
				var option = {
						title: {
					        text: '雷神3'
					    },
					    "tooltip": tooltipData,
					    "grid": girdData,
					    "xAxis": [{
					        "type": "category",
					        "data":xmovData3
					    }],
					    "yAxis": yAxisDatas,
					    "dataZoom": dataZoomData,
					    "series": [{
					            "name": "雷神3",
					            "type": "bar",
					            "barMaxWidth": 35,
					            "itemStyle": {
					                "normal": {
					                    "color": "#00bc05",
					                    "label": itemlabelData
					                }
					            },
					            "data": smovData3
					        }
					    ]
					}
				threeChart.setOption(option);
				for(var i=0;i<movlen4;i++){
					var xmov=movTxt4[i].time;
					var smov=movTxt4[i].value;
					xmovData4.push(xmov);
					smovData4.push(smov);
				}
				var fourCharts="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='fourCharts'></div>";
				$("#threeCharts").after(fourCharts);
				var fourChart = echarts.init(document.getElementById('fourCharts'));
				var option = {
						title: {
					        text: '钢铁侠'
					    },
					    "tooltip": tooltipData,
					    "grid": girdData,
					    "xAxis": [{
					        "type": "category",
					        "data":xmovData4
					    }],
					    "yAxis": yAxisDatas,
					    "dataZoom": dataZoomData,
					    "series": [{
					            "name": "钢铁侠",
					            "type": "bar",
					            "barMaxWidth": 35,
					            "itemStyle": {
					                "normal": {
					                    "color": "#6e6e6e",
					                    "label": itemlabelData
					                }
					            },
					            "data": smovData4
					        }
					    ]
					}
				fourChart.setOption(option);
				for(var i=0;i<movlen5;i++){
					var xmov=movTxt5[i].time;
					var smov=movTxt5[i].value;
					xmovData5.push(xmov);
					smovData5.push(smov);
				}
				var fiveCharts="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='fiveCharts'></div>";
				$("#fourCharts").after(fiveCharts);
				var fiveChart = echarts.init(document.getElementById('fiveCharts'));
				var option = {
						title: {
					        text: '钢铁侠'
					    },
					    "tooltip": tooltipData,
					    "grid": girdData,
					    "xAxis": [{
					        "type": "category",
					        "data":xmovData5
					    }],
					    "yAxis": yAxisDatas,
					    "dataZoom": dataZoomData,
					    "series": [{
					            "name": "功夫2",
					            "type": "bar",
					            "barMaxWidth": 35,
					            "itemStyle": {
					                "normal": {
					                    "color": "#ee7942",
					                    "label": itemlabelData
					                }
					            },
					            "data": smovData5
					        }
					    ]
					}
				fiveChart.setOption(option);
				//情感分析
				var changeBuzz = echarts.init(document.getElementById('allBuzz'));
				var gridsDatas={
					left: '0',
			        right: '0',
			        bottom: '85px',
			        containLabel: true
				};
				var option = {
					title: {
				        text: '情感分析分享占比'
				    },
				    tooltip:tooltipData,
				    grid: gridsDatas,
				    xAxis: [{
				        type: 'category',
				        data: xDatas,
				        axisLabel:axisLabelData
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
				    series: [{
				        name: 'Negative',
				        type: 'bar',
				        barWidth: 60,
				        stack: '1',
				        data: pernegData,
				        label: {
				            normal: {
				                show: true,
				                formatter: '{c} %'
				            }
				        },
				    }, {
				        name: 'Neutral',
				        type: 'bar',
				        stack: '1',
				        data: perneuData,
				        label: {
				            normal: {
				                show: true,
				                formatter: '{c} %'
				            }
				        },
				    }, {
				        name: 'Positive',
				        type: 'bar',
				        stack: '1',
				        data: perposData,
				        label: {
				            normal: {
				                show: true,
				                formatter: '{c} %'
				            }
				        },
				    }]
				};
				changeBuzz.setOption(option);
				//
				var changeChild = echarts.init(document.getElementById('childBuzz'));
				var option = {
					title: {
				        text: '情感分析分享量'
				    },
				    tooltip:tooltipData,
				    grid:gridsDatas,
				    xAxis: [{
				        type: 'category',
				        data: xDatas,
				        axisLabel:axisLabelData
				    }],
				    yAxis: yAxisDatas,
				    series: [{
				        name: 'Positive',
				        type: 'bar',
				        stack: '1',
				        data: valposData,
				    }, {
				        name: 'Neutral',
				        type: 'bar',
				        stack: '1',
				        data: valneuData,
				    },{
				        name: 'Negative',
				        type: 'bar',
				        barWidth: 60,
				        stack: '1',
				        data: valnegData,
				    }]
				};
				changeChild.setOption(option);
				//来源分析
				$("#allSource").empty();
				var allSource = echarts.init(document.getElementById('allSource'));
				var option = {
				    grid: gridsDatas,
				    tooltip:tooltipData,
				    xAxis : [{
				            type : 'category',
				            axisLabel:axisLabelData,
				            data : xDatas
				       }],
				    yAxis : yAxisDatas,
			   		 series : [{
			            name:'News',
			            type:'bar',
			            barWidth:60,
			            stack: '1',
			            data:valnewsData
			       },{
			            name:'Social',
			            type:'bar',
			            barWidth:60,
			            stack: '1',
			            data:valsocData
			        },{
			            name:'Tickets',
			            type:'bar',
			            barWidth:60,
			            stack: '1',
			            data:valticData
			        },{
			            name:'Vertical',
			            type:'bar',
			            barWidth:60,
			            stack: '1',
			            data:valverData
			        },{
			            name:'Video',
			            type:'bar',
			            barWidth:60,
			            stack: '1',
			            data:valvidData
			        }]
				};
				allSource.setOption(option);
				//饼图开始
				//第一个
				var onepie="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='onepie'></div>"
				$("#allSource").after(onepie);
				for(var i=0;i<pielen1;i++){
					var piename=pieTxt1[i].name;
					var pieval=pieTxt1[i].value;
					pielegData.push(piename);
					onepieData.push({
						"name":piename,
						"value":pieval
					});
				}
				var titData=[{
					text: 'Untitled Wolverine Sequel - SOURCE OF BUZZ(%)',
			        x: 'center',
			        top:'3%',
			        textStyle: {
						fontSize: 12,
					},
				}];
				var toolData=[{
					trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
				}];
				var legendData=[{
					orient: 'horizontal',
			        top: '10%',
			        itemHeight: 14,
			        itemWidth: 14,
			        data: pielegData
				}];
				var labelData={
					normal: {
		                show: true,
		                formatter: '{b} {d} %'
		            }
				};
				var itemData={
					emphasis: {
		                shadowBlur: 10,
		                shadowOffsetX: 0,
		                shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
				}
				var onepie = echarts.init(document.getElementById('onepie'));
				var	option = {
					    title:titData,
					    tooltip: toolData,
					    legend:legendData,
					    series: [{
					        name: '来源占比',
					        type: 'pie',
					        radius: '55%',
					        center: ['50%', '60%'],
				            label: labelData,
					        data: onepieData,
					        itemStyle:itemData
					    }]
					};
				onepie.setOption(option);
				//第二个
				var twopie="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='twopie'></div>"
				$("#onepie").after(twopie);
				for(var i=0;i<pielen2;i++){
					var piename=pieTxt2[i].name;
					var pieval=pieTxt2[i].value;
					twopieData.push({
						"name":piename,
						"value":pieval
					});
				}
				var twopie = echarts.init(document.getElementById('twopie'));
				var	option = {
					    title:titData,
					    tooltip: toolData,
					    legend:legendData,
					    series: [{
					        name: '来源占比',
					        type: 'pie',
					        radius: '55%',
					        center: ['50%', '60%'],
				            label: labelData,
					        data: twopieData,
					        itemStyle: itemData
					    }]
					};
				twopie.setOption(option);
				//第三个
				var threepie="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='threepie'></div>"
				$("#twopie").after(threepie);
				for(var i=0;i<pielen3;i++){
					var piename=pieTxt3[i].name;
					var pieval=pieTxt3[i].value;
					threepieData.push({
						"name":piename,
						"value":pieval
					});
				}
				var threepie = echarts.init(document.getElementById('threepie'));
				var	option = {
					    title:titData,
					    tooltip: toolData,
					    legend:legendData,
					    series: [{
					        name: '来源占比',
					        type: 'pie',
					        radius: '55%',
					        center: ['50%', '60%'],
				            label: labelData,
					        data: threepieData,
					        itemStyle: itemData
					    }]
					};
				threepie.setOption(option);
				//第四个
				var fourpie="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='fourpie'></div>"
				$("#threepie").after(fourpie);
				for(var i=0;i<pielen4;i++){
					var piename=pieTxt4[i].name;
					var pieval=pieTxt4[i].value;
					fourpieData.push({
						"name":piename,
						"value":pieval
					});
				}
				var fourpie = echarts.init(document.getElementById('fourpie'));
				var	option = {
					    title:titData,
					    tooltip: toolData,
					    legend:legendData,
					    series: [{
					        name: '来源占比',
					        type: 'pie',
					        radius: '55%',
					        center: ['50%', '60%'],
				            label: labelData,
					        data: fourpieData,
					        itemStyle: itemData
					    }]
					};
				fourpie.setOption(option);
				//第五个
				var fivepie="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='fivepie'></div>"
				$("#fourpie").after(fivepie);
				for(var i=0;i<pielen5;i++){
					var piename=pieTxt5[i].name;
					var pieval=pieTxt5[i].value;
					fivepieData.push({
						"name":piename,
						"value":pieval
					});
				}
				var fivepie = echarts.init(document.getElementById('fivepie'));
				var	option = {
					    title:titData,
					    tooltip: toolData,
					    legend:legendData,
					    series: [{
					        name: '来源占比',
					        type: 'pie',
					        radius: '55%',
					        center: ['50%', '60%'],
				            label: labelData,
					        data: fivepieData,
					        itemStyle: itemData
					    }]
					};
				fivepie.setOption(option);
				/*饼图结束*/
				//词云开始
				var cloudTxtstyleData={
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
				};
				var imgURL = "img/cir.png";
				var maskImage = new Image();
		        maskImage.src = imgURL;
		        var onecloud="<div class='col-md-6 col-sm-6 col-xs-6 pubChartBox' id='onecloud'></div>";
		        $("#allCloud").after(onecloud);
				var onecloud = echarts.init(document.getElementById('onecloud'));
				var onecloudData = [];
				for (var i=0;i<cloudlen1;i++) {
					onecloudData.push({
						name:cloudTxt1[i].name,
						value:cloudTxt1[i].value,
					})
			    }
				var option1 = {
			        tooltip: {},
			        series: [{
			            type: 'wordCloud',
			            gridSize: 0,
			            sizeRange: [15, 60],
			            rotationRange: [-90, 90],
			            shape: 'circle',
			            maskImage: maskImage,
			            width: 400,
			    		height: 400,
			            textStyle: cloudTxtstyleData,
			            data: onecloudData
			        } ]
			     };
				 maskImage.onload = function () {
				   option1.series[0].maskImage;
				   onecloud.setOption(option1);
				}
				/*词云结束*/
				//话题分析开始
				var allTopic = echarts.init(document.getElementById('allTopic'));
				var topicLabelData={
					normal: {
	                    show: true,
	                    position: 'inside',
	                    formatter:function(p){
	                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
	                    }
	                }
				};
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
				        data: xDatas
				    },
				    series: [{
				            name: 'Cast',
				            type: 'bar',
				            barWidth:45,
				            stack: '1',
				            label: topicLabelData,
				            trueData: valcasData,
				            data:[21,8,22,10,33,15]
				        },
				        {
				            name: 'Plot',
				            type: 'bar',
				            barWidth:45,
				            stack: '1',
				            label: topicLabelData,
				            trueData: valploData,
				            data:[51,60,40,42,30,25]
				        },
				        {
				            name: 'Special effects',
				            type: 'bar',
				            barWidth:45,
				            stack: '1',
				            label: topicLabelData,
				            trueData: valeffData,
				            data:[10,10,12,12,10,20]
				        },
				        {
				            name: 'Schedule info',
				            type: 'bar',
				            barWidth:45,
				            stack: '1',
				            label: topicLabelData,
				            trueData: valschData,
				            data:[12,15,20,15,10,15]
				        },
				        {
				            name: 'Ticket/Audience promotion activities',
				            type: 'bar',
				            barWidth:45,
				            stack: '1',
				            label: topicLabelData,
				            trueData: valactData,
				            data:[6,7,6,21,17,25]
				        }
				    ]
				};
				allTopic.setOption(option);
				//评分分析开始
				var decxData=[];
				for(var i=0;i<declen1;i++){
					var decval=decTxt1[i].value;
					var decname=decTxt1[i].name;
					decxData.push(decname);
					valData001.push(decval);
				}
				for(var i=0;i<declen2;i++){
					var decval=decTxt2[i].value;
					valData002.push(decval);
				}
				for(var i=0;i<declen3;i++){
					var decval=decTxt3[i].value;
					valData003.push(decval);
				}
				for(var i=0;i<declen4;i++){
					var decval=decTxt4[i].value;
					valData004.push(decval);
				}
				for(var i=0;i<declen5;i++){
					var decval=decTxt5[i].value;
					valData005.push(decval);
				}
				for(var i=0;i<declen6;i++){
					var decval=decTxt6[i].value;
					valData006.push(decval);
				}
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
				        data:xDatas
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
				            data: decxData
				        }
				    ],
				    yAxis: [{
				            type: 'category',
				            name: '电影',
					        data: xDatas
				      	},{
				            type: 'value',
				            name: '评分',
				            min: 0,
				            max: 10,
				            interval: 1,
				        }
				    ],
				    series: [{
			            name:'金刚狼',
			            smooth: true,
				        type: 'line',
				        symbolSize: 8,
				      	symbol: 'circle',
			            yAxisIndex: 1,
			            data:valData001
			        },{
			            name:'长城',
			            smooth: true,
				        type: 'line',
				        symbolSize: 8,
				      	symbol: 'circle',
			            yAxisIndex: 1,
			            data:valData002
			        },{
			            name:'雷神3',
			            smooth: true,
				        type: 'line',
				        symbolSize: 8,
				      	symbol: 'circle',
			            yAxisIndex: 1,
			            data:valData003
			        },{
			            name:'钢铁侠',
			            smooth: true,
				        type: 'line',
				        symbolSize: 8,
				      	symbol: 'circle',
			            yAxisIndex: 1,
			            data:valData004
			        },{
			            name:'功夫2',
			            smooth: true,
				        type: 'line',
				        symbolSize: 8,
				      	symbol: 'circle',
			            yAxisIndex: 1,
			            data:valData005
			        },{
			            name:'加勒比海盗五：死无对证',
			            smooth: true,
				        type: 'line',
				        symbolSize: 8,
				      	symbol: 'circle',
			            yAxisIndex: 1,
			            data:valData006
			        },]
				};
				allDeuce.setOption(option);
			}
		});
	});
});
