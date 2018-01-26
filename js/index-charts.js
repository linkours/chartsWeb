$(function(){
	var proposals = [];
    $.ajax({
		url:'../js/test.json',
		type:'get',
		success:function(datas){
			datas=eval(datas);
			var lilen=datas.Names.length;
			var liTxt=datas.Names;
			for(var i=0;i<lilen;i++){
				var liVal=liTxt[i].name;
				proposals.push(liVal);
				id=liTxt[i].id;
			}
		}
	})
	$("#search-form,#addKeyOne,#addKeyTwo").autocomplete({
		hints: proposals
	});
	$("#addKeyOne .inputBox,#addKeyTwo .inputBox").removeClass("indexIpt");
	$("#addKeyOne .inputBox,#addKeyTwo .inputBox").find("span").remove();
	//鼠标悬停子菜单
    $(".kolLi").hover(function(){
    	$(".kolLi ul").show("fast");
    },function(){
    	$(".kolLi ul").hide("fast");
    });
    //临时点击效果
    $(".pubTab").each(function(){
    	$(this).click(function(){
    		$(".pubTab").removeClass("actTab");
    		$(this).addClass("actTab");
    	});
    });
    //选择时间
    var newDate = new Date();
	 var t= newDate.toJSON();
	 $(".time_start,.time_end").datetimepicker({
        format: 'yyyy-mm-dd',
        minView:'month',
        language: 'zh-CN',
        autoclose:true,
        todayBtn: true,
        endDate:new Date(t),
   });
   //结束时间不能小于开始时间
    $(".time_start,.time_end").change(function(){
    	var strval=parseInt($(".time_start").val().replace(/-/g,''));
		var endval=parseInt($(".time_end").val().replace(/-/g,''));
		if(endval<strval){
			alert("结束时间不能小于开始时间");
			$(".time_start,.time_end").val("");
			return;
		}
    });
   //
   $(".chartHead span").hover(function(){
   		$(".hideTips").show();
   },function(){
   		setTimeout(function(){
   			$(".hideTips").hide();
   		},500);
   });
   //
   	var tooltipData={trigger: 'axis'};
    var gridData={
    		left: '2%',
	        right: '2%',
	        top: '8%',
	        bottom: '5%',
	        containLabel: true
   	};
   	var yAxisData={
   			type: 'value',
	        axisTick:{
		        show:false//隐藏Y轴刻度
		    },
		    axisLine: {
				show: false
			}
	};
	var itemStyleData={
		normal: {
            color: "#1f74f2",
            lineStyle: {
                color: "#1f74f2"
            }
        }
	};
	var addItemData={
		normal: {
            color: "#2f4554",
            lineStyle: {
                color: "#2f4554"
            }
       }
	};
	var addItemData01={
		normal: {
            color: "#61a0a8",
            lineStyle: {
                color: "#61a0a8"
            }
       }
	};
    var chartsBox = echarts.init(document.getElementById('chartsBox'));
	var	option = {
	    tooltip: tooltipData,
	    xAxis: {
	        type: 'category',
	        data: []
	    },
	    grid: gridData,
	    yAxis: yAxisData,
	    series: [{
	            name: '欢乐',
	            type: 'line',
	            symbolSize: 6,
	      		symbol: 'circle',
	      		smooth: true,
	      		//areaStyle: {normal: {}},
	            itemStyle: itemStyleData,
	            data: []
	        },{
	            name: '新词',
	            type: 'line',
	            symbolSize: 6,
	      		symbol: 'circle',
	      		smooth: true,
	      		//areaStyle: {normal: {}},
	            itemStyle: itemStyleData,
	            data: []
	        },{
	            name: '新词',
	            type: 'line',
	            symbolSize: 6,
	      		symbol: 'circle',
	      		smooth: true,
	      		//areaStyle: {normal: {}},
	            itemStyle: itemStyleData,
	            data: []
	        }]
	};
	chartsBox.setOption(option);
	var timsData=[];
	var wxKeyData=[];
	var wbKeyData=[];
	var movKeyData=[];
	var whKeyData=[];
	$.ajax({
		type:"get",
		url:"index.json",
		success:function(data){
			data=eval(data);
			var allLen=data.indexAll.length;
			var allTxt=data.indexAll;
			for(var i=0;i<allLen;i++){
				var timesTxt=allTxt[i].times;
				var wxTxt=allTxt[i].wxIndex;
				timsData.push(timesTxt);
				wxKeyData.push(wxTxt);
			}
			chartsBox.setOption({
				xAxis:[{data:timsData}],
				series:[{data:wxKeyData}]
			});
		}
	});
	$(".indexKey li").each(function(){
   		$(this).click(function(){
   			chartsBox.showLoading();
   			$(".indexKey li").removeClass("active");
   			$(this).addClass("active");
   			var dataTitle=$(this).attr("data-title");
   				$.ajax({
					type:"get",
					url:"index.json",
					success:function(data){
					data=eval(data);
					var allLen=data.indexAll.length;
					var allTxt=data.indexAll;
					for(var i=0;i<allLen;i++){
						var wbTxt=allTxt[i].wbIndex;
						var whTxt=allTxt[i].whIndex;
						var movTxt=allTxt[i].movIndex;
						wbKeyData.push(wbTxt);
						movKeyData.push(movTxt);
						whKeyData.push(whTxt);
					}
					if(dataTitle=="wxIndex"){
						chartsBox.hideLoading();
						chartsBox.setOption({
							series:[{data:wxKeyData}]
						});
					}else if(dataTitle=="wbIndex"){
						chartsBox.hideLoading();
						chartsBox.setOption({
							series:[{data:wbKeyData,name:"欢乐"}]
						});
					}else if(dataTitle=="movIndex"){
						chartsBox.hideLoading();
						chartsBox.setOption({
							series:[{data:movKeyData,name:"欢乐"}]
						});
					}else if(dataTitle=="whIndex"){
						chartsBox.hideLoading();
						chartsBox.setOption({
							series:[{data:whKeyData,name:"欢乐"}]
						});
					}
				}
			});
   		})
   });
   //对比词
	var parserDate = function (date) {  
	    var t = Date.parse(date);  
	    if (!isNaN(t)) {  
	        return new Date(Date.parse(date.replace(/-/g, "/")));  
	    } else {  
	        return new Date();  
	    }  
	}; 
   $(".vsBtnLi").click(function(){
	    var oneWord=$("#addKeyOne .inputBox").find("input").val();
	    var twoWord=$("#addKeyTwo .inputBox").find("input").val();
	    var startTime=$(".time_start").val();
	    var endTime=$(".time_end").val();
	    var bng=startTime.replace(/-/g,'');
		var end=endTime.replace(/-/g,'');
		var strDate = new Date(bng.substr(0,4),bng.substr(4,2)-1,bng.substr(6,2));
    	var endDate = new Date(end.substr(0,4),end.substr(4,2)-1,end.substr(6,2));
    	var days = (endDate.getTime()-strDate.getTime())/24/60/60/1000;//时间差
    	var bzStart=parserDate(startTime);//转换为标准时间
    	var bzEnd=parserDate(endTime);
		var dateTime = []; 
		var flag = 1; 
		bzEnd.setDate(bzEnd.getDate() - days);
		for (var i = 0; i < days+1; i++) {
		    var dateTemp = bzEnd.getFullYear()+"-"+(bzEnd.getMonth()+1)+"-"+bzEnd.getDate();
		    dateTime.push(dateTemp);
		    bzEnd.setDate(bzEnd.getDate() + flag);
		}
		//console.info(days,dateTime);
		var addWxData=[];
		var addWbData=[];
		var addWhData=[];
		var addMovData=[];
		var addWxData01=[];
		var addWbData01=[];
		var addWhData01=[];
		var addMovData01=[];
		if(oneWord==""&&twoWord==""){return false;}else{
   		$(".indexKey li").removeClass("active");
   		$(".indexKey .firstLi").addClass("active");}
		$.ajax({
			type:"get",
			url:"index.json",
			success:function(data){
				data=eval(data);
				var addLen=data.addKey.length;
				var addTxt=data.addKey;
				var addLen01=data.addKeyTwo.length;
				var addTxt01=data.addKeyTwo;
				for(var i=0;i<addLen;i++){
					var addWxTxt=addTxt[i].wxIndex;
					var addWbTxt=addTxt[i].wbIndex;
					var addWhTxt=addTxt[i].whIndex;
					var addMovTxt=addTxt[i].movIndex;
					addWxData.push(addWxTxt);
					addWbData.push(addWbTxt);
					addWhData.push(addWhTxt);
					addMovData.push(addMovTxt);
				}
				for(var i=0;i<addLen01;i++){
					var addWxTxt01=addTxt01[i].wxIndex;
					var addWbTxt01=addTxt01[i].wbIndex;
					var addWhTxt01=addTxt01[i].whIndex;
					var addMovTxt01=addTxt01[i].movIndex;
					addWxData01.push(addWxTxt01);
					addWbData01.push(addWbTxt01);
					addWhData01.push(addWhTxt01);
					addMovData01.push(addMovTxt01);
				}
				if(oneWord!="" && twoWord==""){
					chartsBox.setOption({
						series:[{data:wxKeyData,name:"欢乐"},{data:addWxData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
					});
					$(".indexKey li").each(function(){
				   		$(this).click(function(){
				   			chartsBox.showLoading();
				   			$(".indexKey li").removeClass("active");
				   			$(this).addClass("active");
				   			var dataTitle=$(this).attr("data-title");
				   			if(dataTitle=="wxIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:wxKeyData,name:"欢乐"},{data:addWxData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}else if(dataTitle=="wbIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:wbKeyData,name:"欢乐"},{data:addWbData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}else if(dataTitle=="movIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:movKeyData,name:"欢乐"},{data:addMovData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}else if(dataTitle=="whIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:whKeyData,name:"欢乐"},{data:addWhData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}
				   		})
				  	});
				}else if(oneWord=="" && twoWord!=""){
					chartsBox.setOption({
						series:[{data:wxKeyData,name:"欢乐"},{data:addWxData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
					});
					$(".indexKey li").each(function(){
				   		$(this).click(function(){
				   			chartsBox.showLoading();
				   			$(".indexKey li").removeClass("active");
				   			$(this).addClass("active");
				   			var dataTitle=$(this).attr("data-title");
				   			if(dataTitle=="wxIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:wxKeyData,name:"欢乐"},{data:addWxData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}else if(dataTitle=="wbIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:wbKeyData,name:"欢乐"},{data:addWbData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}else if(dataTitle=="movIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:movKeyData,name:"欢乐"},{data:addMovData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}else if(dataTitle=="whIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:whKeyData,name:"欢乐"},{data:addWhData,name:"欢乐颂",itemStyle:addItemData},{data:[]}]
								});
							}
				   		})
				  	});
				}else if(oneWord!="" && twoWord!=""){
					chartsBox.setOption({
						series:[{data:wxKeyData,name:"欢乐"},{data:addWxData,name:"欢乐颂",itemStyle:addItemData},{data:addWxData01,name:"欢乐颂2",itemStyle:addItemData01}]
					});
					$(".indexKey li").each(function(){
				   		$(this).click(function(){
				   			chartsBox.showLoading();
				   			$(".indexKey li").removeClass("active");
				   			$(this).addClass("active");
				   			var dataTitle=$(this).attr("data-title");
				   			if(dataTitle=="wxIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:wxKeyData,name:"欢乐"},{data:addWxData,name:"欢乐颂",itemStyle:addItemData},{data:addWxData01,name:"欢乐颂2",itemStyle:addItemData01}]
								});
							}else if(dataTitle=="wbIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:wbKeyData,name:"欢乐"},{data:addWbData,name:"欢乐颂",itemStyle:addItemData},{data:addWbData01,name:"欢乐颂2",itemStyle:addItemData01}]
								});
							}else if(dataTitle=="movIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:movKeyData,name:"欢乐"},{data:addMovData,name:"欢乐颂",itemStyle:addItemData},{data:addMovData01,name:"欢乐颂2",itemStyle:addItemData01}]
								});
							}else if(dataTitle=="whIndex"){
								chartsBox.hideLoading();
								chartsBox.setOption({
									series:[{data:whKeyData,name:"欢乐"},{data:addWhData,name:"欢乐颂",itemStyle:addItemData},{data:addWhData01,name:"欢乐颂2",itemStyle:addItemData01}]
								});
							}
				   		})
				  	});
				}
			}
		});
   });
});
