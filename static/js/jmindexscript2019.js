

//切换播放器右侧展示
$(".left_but").click(function(){
	
	$(".nr_1 .video_left").find("#flashplayer_myFlash").css("width","985px");
	$(".nr_1 .video_left").find("#myFlash>img").animate({"width":"985px"},1000);
	$(".nr_1 .video_left").find("#flashplayer_myFlash").css("height","500px");
	if(document.getElementById('html5Player')) {
		$(".nr_1 .video_left").find("#html5ControlDiv").css("width","985px");
		$(".nr_1 .video_left").find("#html5ControlDiv").css("height","500px");

		$(".nr_1 .video_left").find("#html5VideoBack").css("width","985px");
		$(".nr_1 .video_left").find("#html5VideoBack").css("height","500px");
		
		$(".nr_1 .video_left").find("#html5Player").css("width","985px");
		$(".nr_1 .video_left").find("#html5Player").css("height","500px");
	}
	
	$(".video_left").animate({"width":"1000px"},1000);
	$(".nr_1 .video_left").find("#myFlash").animate({"width":"985px"},1000);
	$(".video_right:not(:animated)").animate({"left":1000+"px"},1000,function(){
		$(".left_but").hide();
		$(".video_right").hide();
		$(".right_but").show();
	});
	return false;
});

$(".right_but").click(function(){
	$(".video_right").show();
	$(".right_but").hide();
		$(".left_but").show();	
	
	$(".nr_1 .video_left").find("#myFlash>img").animate({"width":"670px"},1000);
	$(".nr_1 .video_left").find("#myFlash").animate({"width":"670px"},1000);
	$(".video_left").animate({"width":"685px"},1000);
	$(".video_right:not(:animated)").animate({"left":685+"px"},1000,function(){
		$(".nr_1 .video_left").find("#flashplayer_myFlash").css("width","670px");
		$(".nr_1 .video_left").find("#flashplayer_myFlash").css("height","500px");
		if(document.getElementById('html5Player')) {
			$(".nr_1 .video_left").find("#html5ControlDiv").css("width","670px");
			$(".nr_1 .video_left").find("#html5ControlDiv").css("height","500px");

			$(".nr_1 .video_left").find("#html5VideoBack").css("width","670px");
			$(".nr_1 .video_left").find("#html5VideoBack").css("height","500px");
			
			$(".nr_1 .video_left").find("#html5Player").css("width","670px");
			$(".nr_1 .video_left").find("#html5Player").css("height","500px");
		}
		
	});
	
	return false;
});


$(".left_but").mouseenter(function(){
    $(".left_but").find("img").attr("src","//p1.img.cntv.cn/photoAlbum/templet/common/DEPA1452928146750159/left_hover_but_03.jpg");
});
$(".left_but").mouseleave(function(){
    $(".left_but").find("img").attr("src","//p1.img.cntv.cn/photoAlbum/templet/common/DEPA1452928146750159/left_butpng_03.png");
});

$(".right_but").mouseenter(function(){
    $(".right_but").find("img").attr("src","//p1.img.cntv.cn/photoAlbum/templet/common/DEPA1452928146750159/right_hover_but_03.jpg");
});
$(".right_but").mouseleave(function(){
    $(".right_but").find("img").attr("src","//p1.img.cntv.cn/photoAlbum/templet/common/DEPA1452928146750159/right_butpng_03.png");
});

function about_txt(){
    if($("#about_txt").find(".cnt_bd").text()==""){
        $("#about_txt").css("display","none");
    }
}
about_txt();
cnt_nav();

//切换[图表]
function chboxTab(obj) {
    var chboxId = $("#" + obj);
    var chboxTag = chboxId.find(".change li");
    var chboxBlock = chboxId.find(".chblock");
    var num = 0;
    chboxTag.click(function() {
        num = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        chboxBlock.eq(num).show(0).siblings(".chblock").hide(0);
    });
}
chboxTab("chbox01");

//下面分享下拉菜单 
$(".slideDown_sub").hover(function(){
        $(this).addClass("slideCur_sub");
        $(this).stop().animate({height:"440px"},"slow");
        $(this).find(".selectBox_sub").show();
    },function(){
        $(this).stop().css({height:"43px"});
        $(this).find(".selectBox_sub").hide();
        $(this).removeClass("slideCur_sub")
    
});
$(".slideDown_sub .selectBox_sub a.ico01").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -1px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -1px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico01").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -1px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico02").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -39px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -39px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico02").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -39px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico03").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -79px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -79px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico03").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -79px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico04").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -119px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -119px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico04").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -119px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico05").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -159px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -159px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico05").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -159px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico06").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px 6px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px 6px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico06").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px 6px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico07").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -34px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -34px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico07").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -34px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico08").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -74px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -74px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico08").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -74px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico09").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -114px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -114px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico09").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -114px",paddingLeft:"45px"});
});
$(".slideDown_sub .selectBox_sub a.ico10").mouseenter(function(){
        $(this).css({backgroundPosition:"-37px -155px",paddingLeft:"120px"});
        $(this).animate({backgroundPosition:"12px -155px",paddingLeft:"45px"},"fast");
    });
$(".slideDown_sub .selectBox_sub a.ico10").mouseleave(function(){
        $(this).stop().css({backgroundPosition:"12px -155px",paddingLeft:"45px"});
});


/*分享到图标*/
$(".cnt_share .icon a").each(function(i){
    $(this).mouseenter(function(){
        $(this).stop().animate({top:"-10px"},"normal",function(){$(this).animate({top:"0px"},"normal")});
    });
    $(this).mouseleave(function(){
        $(this).stop().animate({top:"0px"},"normal");
    });
})


/*下载*/
$(".cnt_share .download").hover(function(){
        $(this).addClass("download_hover");
    },function(){
        $(this).removeClass("download_hover");
});

$(".cnt_nav p em").hover(function(){
    	$(this).addClass("active")
    },function(){
    	$(this).removeClass("active")
});

$(".image_list_box li").hover(function(){
        $(this).find(".image").addClass("imgCur");
        $(this).find(".text").addClass("txtCur");
    },function(){
        $(this).find(".image").removeClass("imgCur");
        $(this).find(".text").removeClass("txtCur");
});

/*返回顶部*/
$(function () {  
    $(window).scroll(function(){  
        if ($(window).scrollTop()>100){  
            $(".ycc2").fadeIn(1);  
        }else{  
            $(".ycc2").fadeOut(1);  
        }  
    });  
    $(".ycc2").click(function(){  
        $('body,html').animate({scrollTop:0},1);  
        return false;  
    });
});

//续播
//PlayComplete 关联播放下一条
var next0=0,next1=0;
function PlayComplete(){
	var myid_0L = myararrys0.length;
	var myid_1L = myararrys1.length;
	for (var k=0;k<myid_0L;k++){
		if(guid==myararrys0[k]){
			next0=k+1;
		}
	}
	for (var k=0;k<myid_1L;k++){
		if(guid==myararrys1[k]){
			next1=k+1;
		}
	}
	if(next0){
		if(next0 < myid_0L) {
	      window.location.href=myUrlArarrys0[next0];
		}
	}
	if(next1){
		if (next1 <myid_1L) {
           window.location.href=myUrlArarrys1[next1];
		}
	}
}





