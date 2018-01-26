//计算当前周的前五个周
Date.prototype.format =function(format){
    var o = {
        "M+" : this.getMonth()+1,
        "d+" : this.getDate(),
    }
    if(/(y+)/.test(format)){ 
        format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(format)){
            format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] :("00"+ o[k]).substr((""+o[k]).length));
        }
    }
    return format;
}
var addNDays=function(date,n){
    var d = new Date(Date.parse(date.replace(/-/g,"/")));  
    var time=d.getTime();
    var newTime=time-n*24*60*60*1000;
    return new Date(newTime);
};
var mydate = new Date();
var year=mydate.getFullYear();
var month=mydate.getMonth()+1;
var dates=mydate.getDate()-1;
function p(s) {
    return s < 10 ? '0' + s: s;	
}
var now=year+"-"+p(month)+"-"+p(dates);
var option1 = addNDays(now,7).format('yyyy-MM-dd');
var option2=addNDays(option1,7).format('yyyy-MM-dd');
var option3=addNDays(option2,7).format('yyyy-MM-dd');
var option4=addNDays(option3,7).format('yyyy-MM-dd');
var option5=addNDays(option4,7).format('yyyy-MM-dd');
//计算当前月的前五个月
var fill = function (d) {
    return d < 10 ? '0' + d : d.toString();
};
var current = new Date();
var year = current.getFullYear();
var month = current.getMonth() + 1;
var calendar = [];
while ((year > current.getFullYear() - 1) || (month > current.getMonth() + 1)) {
    calendar.push(year + '-' + fill(month));
    month -= 1;
    if (month <= 0) {
        year -= 1;
        month = 6;
    }
}
var month0=calendar[0];
var month1=calendar[1];
var month2=calendar[2];
var month3=calendar[3];
var month4=calendar[4];
var month5=calendar[5];
$(function(){
	//
	$(".timeshow").text(now);
	$(".form_datetime").val(now);
	//临时搜索跳转界面
	$(".searchBtn").click(function(){
			window.location.href="searchInfo.html";
	});
	//
	$(document).click(function(){
		$("#select-typs").hide("fast");
	  	event.stopImmediatePropagation();//阻止冒泡
	});
    //右侧定位
    $(window).scroll(function(){
        var $this = $(this);
        var $scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        $("#rightbtns li").each(function(index){
            var top = $(".oness").eq(index).offset().top;
            var _scroll = $(window).scrollTop();
            if(_scroll>=top-60){
                $("#rightbtns li").removeClass("jj");
                $("#rightbtns li").eq(index).addClass("jj");
            }
        })
    });
    $("#rightbtns li").click(function(){
        var index = $(this).index();
        var _scrollTop = $(".oness").eq(index).offset().top - 60;
        $("html,body").animate({scrollTop:_scrollTop},1000)
    });
    //导航
    $(window).on("scroll",function(){
        var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(_scrollTop>=200){
            $(".navbar,.kolLi ul").css({backgroundColor:"rgba(238, 238, 238, 0.9)"});
        }else{
            $(".navbar,.kolLi ul").css({backgroundColor:"rgba(238, 238, 238, 1)"});
        }
    });
    //搜索结果选项卡
    $(".tabMenu li").each(function(){
    	$(this).click(function(){
    		$(".tabMenu li").removeClass("actLi");
    		$(this).addClass("actLi");
    		$(".pubBox").hide();
    		if($(".actLi").hasClass("movLi")){
    			$("#movAll").show();
    		}else if($(".actLi").hasClass("tvLi")){
    			$("#tvAll").show();
    		}else if($(".actLi").hasClass("varLi")){
    			$("#varAll").show();
    		}
    	});
    });
    //鼠标悬停子菜单
    $(".kolLi").hover(function(){
    	$(".kolLi ul").show("fast");
    },function(){
    	$(".kolLi ul").hide("fast");
    });
    //
    $(".btnSorts").click(function(){
    	$("#select-typs").show("fast");
	  	event.stopImmediatePropagation();//阻止冒泡
    });
    $(".more li").each(function(){
    	$(this).click(function(){
    		var thisTxt=$(this).text();
    		$("#types").text(thisTxt);
    		$("#select-typs").hide("fast");
    	});
    });
    //
    $(".terms a").each(function(){
    	$(this).click(function(){
    		$(".terms a").removeClass("acta");
    		$(this).addClass("acta");
    		var thisval=$(this).attr("data-name");
    		if(thisval=="day"){
    			$(".form_datetime,.glyphicon-calendar").show();
    			$(".widthweek,.widthmonth").hide();
    		}else if(thisval=="week"){
    			$(".form_datetime,.glyphicon-calendar,.widthmonth").hide();
    			$(".widthweek").show();
    			var options="<option value='"+option1+"_"+now+"'>"+option1+" ~ "+now+"</option>";
    				options+="<option value='"+option2+"_"+option1+"'>"+option2+" ~ "+option1+"</option>";
    				options+="<option value='"+option3+"_"+option2+"'>"+option3+" ~ "+option2+"</option>";
    				options+="<option value='"+option4+"_"+option3+"'>"+option4+" ~ "+option3+"</option>";
    				options+="<option value='"+option5+"_"+option4+"'>"+option5+" ~ "+option4+"</option>";
    			$(".widthweek").html(options);
    		}else if(thisval=="month"){
    			$(".form_datetime,.glyphicon-calendar,.widthweek").hide();
    			$(".widthmonth").show();
    			var optionMonth="<option value='"+month1+"_"+month0+"'>"+month1+" ~ "+month0+"</option>";
    				optionMonth+="<option value='"+month2+"_"+month1+"'>"+month2+" ~ "+month1+"</option>";
    				optionMonth+="<option value='"+month3+"_"+month2+"'>"+month3+" ~ "+month2+"</option>";
    				optionMonth+="<option value='"+month4+"_"+month3+"'>"+month4+" ~ "+month3+"</option>";
    				optionMonth+="<option value='"+month5+"_"+month4+"'>"+month5+" ~ "+month4+"</option>";
    			$(".widthmonth").html(optionMonth);
    		}
    	});
    });
    //
    $(".rgtBtn button").each(function(){
    	$(this).click(function(){
    		$(".rgtBtn button").removeClass("actBtn");
    		$(this).addClass("actBtn");
    	});
    });
    //
    $(".glyphicon-qrcode").hover(function(){
    	$(".wxcode").show();
    },function(){
    	$(".wxcode").hide();
    });
    //
   
});
//返回顶部
function goTop(){
    var S = $('#back-top .qr-code');
    var Q = $('#back-top .back-top');
    S.css('display','none');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400){S.fadeIn(200)}else{S.fadeOut(100)}
    })
    S.on("click",function(){
        $("body,html").animate({scrollTop:0},400,function(){S.fadeOut(100)})
    })
    Q.on("mouseenter",function(){$('#ScanMicro').fadeIn(200)})
    .on("mouseleave",function(){$('#ScanMicro').fadeOut(100)})
}
goTop();
