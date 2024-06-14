var myararrys0=[],myUrlArarrys0=[],myararrys1=[],myUrlArarrys1=[];
var innum0,innum1;
function video_box_wqhg(type){
	if(type=="0"){ //粗切
		var itemLenth=setItem0.data.length;		
		if(itemLenth!=0){
			var str = '<div id="sc0" style="height:406px; background:none;">';
			for(var i=0;i<itemLenth;i++){
				var VideoGuid=setItem0.data[i].guid;
				var VideoUrl=setItem0.data[i].video_url;
				var VideoImage=setItem0.data[i].video_key_frame_url;
				var VideoTitle=setItem0.data[i].video_title;
				var VideoFtime=setItem0.data[i].video_focus_date;
				var _title=VideoTitle.length>44?VideoTitle.substring(0,43)+'...':VideoTitle;
				myararrys0[i]=VideoGuid;
				myUrlArarrys0[i]=VideoUrl;
				if(VideoGuid == guid){
					firstClass = setItem0.data[i].fc;
					str += '<div class="text_box_141010 text_box_141011">';					
					innum0 = i;
					curPlayer();
				}else{
					str += '<div class="text_box_141010">';
				}
				str += '<div class="di"><a href="'+VideoUrl+'"></a></div>';
				str += '<a href="'+VideoUrl+'" class="l"><img src="'+VideoImage+'" width="120" height="90" /></a>';
				str += '<p><a href="'+VideoUrl+'" title="'+VideoTitle+'">'+_title+'</a></p>';
				str += '<i><a href="'+VideoUrl+'">'+VideoFtime+'</a></i>';
				str += '<div class="clear"></div></div>';
			}
			str += '</div>';
			$("#video_box0").html(str);			
			if(innum0!=undefined){
				$(".video .video_right .ul_1").find("li").eq(0).addClass("li_cur").siblings("li").removeClass("li_cur");
				$("#video_box0").show();
				$("#video_box1").hide();
				textScroll('0');
				var jscrollH=$("#sc0 .jscroll-h").height();
				var jscrollboxH=$("#sc0 .jscroll-c").outerHeight();
				var len = innum0+1;
				if(len>=5){
					var top=0,num=0,scrollTop=0;//左侧当前位置的
					var lastnum=itemLenth-len;
					if(lastnum<3){
						top = jscrollboxH-406;
						scrollTop = 406-jscrollH;
					}else{
						num = len-3;
						top = num*110;
						scrollTop=top*406/jscrollboxH; //左侧当前高亮H*右侧高度/左侧内容总高度=右侧当前位置高度
					}
					$("#sc0 .jscroll-c").css({"top":"-"+top+"px"});
					$("#sc0 .jscroll-h").css({"top":scrollTop+"px"});
				}
			}else{
				if(itemLenth>=4){
					textScroll('0');
				}				
			}
		}else{
			$(".ul_1").find("li").eq(type).hide();
		}
	}else if(type=="1"){ //精切
		var itemLenth=setItem1.data.length;
		if(itemLenth!=0){
			var str = '<div id="sc1" style="height:406px; background:none;">';
			for(var i=0;i<itemLenth;i++){				
				var VideoGuid=setItem1.data[i].guid;
				var VideoUrl=setItem1.data[i].video_url;
				var VideoImage=setItem1.data[i].video_key_frame_url;
				var VideoTitle=setItem1.data[i].video_title;
				var VideoFtime=setItem1.data[i].video_focus_date;
				var _title=VideoTitle.length>44?VideoTitle.substring(0,43)+'...':VideoTitle;
				myararrys1[i]=VideoGuid;
				myUrlArarrys1[i]=VideoUrl;
				if(VideoGuid==guid){
					firstClass = setItem1.data[i].fc;
					str += '<div class="text_box_141010 text_box_141011">';					
					innum1 = i;
					curPlayer()
				}else{
					str += '<div class="text_box_141010">';
				}
				str += '<div class="di"><a href="'+VideoUrl+'"></a></div>';
				str += '<a href="'+VideoUrl+'" class="l"><img src="'+VideoImage+'" width="120" height="90" /></a>';
				str += '<p><a href="'+VideoUrl+'" title="'+VideoTitle+'">'+_title+'</a></p>';
				str += '<i><a href="'+VideoUrl+'">'+VideoFtime+'</a></i>';
				str += '<div class="clear"></div></div>';
			}
			str += '</div>';
			$("#video_box1").html(str);
			if(innum1!=undefined){
				$(".video .video_right .ul_1").find("li").eq(1).addClass("li_cur").siblings("li").removeClass("li_cur");
				$("#video_box0").hide();
				$("#video_box1").show();
				textScroll('1');
				var jscrollH=$("#sc1 .jscroll-h").height();
				var jscrollboxH=$("#sc1 .jscroll-c").outerHeight();
				var len = innum1+1;
				if(len>=5){
					var top=0,num=0,scrollTop=0;//左侧当前位置的
					var lastnum=itemLenth-len;
					if(lastnum<3){
						top = jscrollboxH-406;
						scrollTop = 406-jscrollH;
					}else{
						num = len-3;
						top = num*110;
						scrollTop=top*406/jscrollboxH; //左侧当前高亮H*右侧高度/左侧内容总高度=右侧当前位置高度
					}
					$("#sc1 .jscroll-c").css({"top":"-"+top+"px"});
					$("#sc1 .jscroll-h").css({"top":scrollTop+"px"});
				}				
			}else{
				if(itemLenth>=4){
					textScroll('1');
				}
			}
		}else{
			$(".ul_1").find("li").eq(type).hide();
		}
	}
}

/*创建js文件*/
function loadJs(src, id){
	var jsload = document.createElement("script");
	jsload.src = src;
	document.getElementsByTagName("body")[0].appendChild(jsload);
	var isLoaded = false;
	jsload.onload = jsload.onreadystatechange = function(){
		if (isLoaded) {
			return;
		}else {
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
				isLoaded = true;
				jsload.onload = jsload.onreadystatechange = null; //防止IE内存泄漏
				video_box_wqhg(id);
			}
		}
	}
}
/*按频道ID和返回函数添加jsonp*/	
function addDescJS(){
	var sc = document.createElement("script");
	sc.type="text/javascript";
	sc.src='//zy.api.cntv.cn/lanmu/columnInfoByColumnId?id='+column_id+'&serviceId=tvcctv&t=jsonp&cb=setDesc1';
	document.getElementsByTagName("body")[0].appendChild(sc);
}
function setDesc1(data){
	var videoColumnImg=data.data.column_photo;
	var videoColumnUrl=data.data.column_playchannel;
	var videoColumnName=data.data.column_name;
	var videoChannelName=data.data.channel_name;
	var videoColumnData=data.data.column_playdate;
	var videoColumnBrief=data.data.column_brief;
	var str = "";
	str += '<div class="left"><img src="'+videoColumnImg+'" width="183" height="113"></div>';
	str += '<div class="right"><div class="text_box_02">';
	str += '<p><em>栏目名称：</em><span><a>'+videoColumnName+'</a></span></p>';
	str += '<p><em>首播频道：</em><span><a href="'+videoColumnUrl+'">'+videoChannelName+'</a></span></p>';
	str += '<p><em>首播时间：</em><span><i>'+videoColumnData+'</i></span></p>';
	str += '<p style="padding-top:10px;"><em>栏目介绍：</em><span>'+videoColumnBrief+'</span></p>';
	str += '</div>';
	str += '</div>';
	str += '<div class="clear"></div>';
	$("#cbox2").html(str);
}

function textScroll(id){
	$("#sc"+id).jscroll({		
		W:"12px"
		,BgUrl:"url(//p1.img.cntv.cn/photoAlbum/templet/common/DEPA1452928146750159/gd.jpg)"
		,Bg:"-12px 0 repeat-y"
		,Bar:{  Pos:"up"
				,Bd:{Out:"#000",Hover:"none"}
				,Bg:{Out:"#000",Hover:"#fff",Focus:"orange"}}
		,Btn:{  btn:false
				,uBg:{Out:"black",Hover:"#fff",Focus:"orange"}
				,dBg:{Out:"black",Hover:"#fff",Focus:"orange"}}
		,Fn:function(){}
	});
	$("#sc"+id).find(".jscroll-e").css({"height":"406","display":"block"});
}

$(document).ready(function(){
	//115.182.34.94
	//var url0 = '//zy.api.cntv.cn/lanmu/videolistByColumnId?id='+column_id+'&serviceId=tvcctv&type=0&n=20&t=jsonp&cb=setItem0=';
	//var url1 = '//zy.api.cntv.cn/lanmu/videolistByColumnId?id='+column_id+'&serviceId=tvcctv&type=1&n=50&t=jsonp&cb=setItem1=';
	var url0='//zy.api.cntv.cn/video/getVideoListByTopicIdInfo?videoid='+itemid1+'&topicid='+column_id+'&serviceId=tvcctv&type=0&t=jsonp&cb=setItem0=';
	var url1='//zy.api.cntv.cn/video/getVideoListByTopicIdInfo?videoid='+itemid1+'&topicid='+column_id+'&serviceId=tvcctv&type=1&t=jsonp&cb=setItem1=';

	loadJs(url1,"1");
	loadJs(url0,"0");
	addDescJS();	
	//切换标签
	var vio_ul_1_li=".video .video_right .ul_1";
	$(vio_ul_1_li).find('li').click(function(e){
		e.preventDefault();
		var that=this;
		var index=$(that).index();
		$(that).addClass('li_cur').siblings('li').removeClass('li_cur');
		if(index==0){
			$('#video_box0').show();
			if(innum0==undefined){
				textScroll(0);
			}
			$('#video_box1').hide();
		}else{
			$('#video_box1').show();
			if(innum1==undefined){
				textScroll(1);
			}
			$('#video_box0').hide();
		}
	});
//	//假设两个标签里都没有高亮，粗切高亮
//	if(innum0 == undefined && innum1 == undefined){
//		$('#video_box0').show();
//		$('#video_box1').hide();
//		$(vio_ul_1_li).find('li').eq(0).show().addClass('li_cur').siblings('li').removeClass('li_cur');
//	}
});

//video_play_over 关联播放下一条
var next0=0,next1=0;
function video_play_over(){
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

//获取cookie
function getCookieColle(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null
}
var authoridColle = getCookieColle("userSeqId");
var verifycode=getCookieColle("verifycode")
var pinglunTitle = encodeURI(commentTitle);
var timestamp = Date.parse(new Date())/1000;
//初始化
var getcollect_id;
if(verifycode!=null&&verifycode!=''&&verifycode!='null'&&verifycode!=undefined){
    $.ajax({
        url:'//reg.cctv.cn/openapi/v2/collect/status',
        type:"GET",
        dataType:"json",
        data:{
		  "timestamp":timestamp,
          "appid":"5C3nsVIZOzk3o0kc",
          "source_id":itemid1,
          "source_type":"1"

        },
        	headers: {
			"verifycode": verifycode
			},
      crossDomain: true,
        success:function(data){
        	var datacollect_id=data.collect_id;
            if(data.data.status=="1"){	            	
                $("#weishouchang").hide();
                $("#yishouchang").show();
                getcollect_id=data.data.id;
            }
        }
    });
}         
//点击收藏
function getcollection(){
	if(verifycode!=null&&verifycode!=''&&verifycode!='null'&&verifycode!=undefined){
		goldlog.record("/web.1.2","","id="+itemid1+"","");
		$.ajax({
            url:'//reg.cctv.cn/openapi/v2/collect/record',
            type:"put",
            dataType:"json",
            data:{
	          "timestamp":timestamp,
	          "appid":"5C3nsVIZOzk3o0kc",
	          "source_id":itemid1,
	          "source_type":"1",
	          "source_title":commentTitle,
	          "source_logo":commentimg,
	          "source_url":commentUrl ,
	        },
	         	headers: {
			"verifycode": verifycode
			},
            success:function(data){
                if(data.code=="0"){
                    alert("收藏成功!");
                    $("#weishouchang").hide();
                    $("#yishouchang").show();
                    getcollect_id=data.data.id;
                }
            }
        });
   	}else{
   		alert("请先登录");
	}
}
//删除收藏
//function delCollect(){
$("#yishouchang").click(function(){
	goldlog.record("/web.1.2","","id="+itemid1+"","");
	$.ajax({
        url:'//reg.cctv.cn/openapi/v2/collect/record',
        type:"DELETE",
        dataType:"json",
        data:{
	        "timestamp":timestamp,
	        "appid":"5C3nsVIZOzk3o0kc",
	        "id":getcollect_id
	    },
	    headers: {
		    "verifycode":verifycode
		},
        success:function(data){
            if(data.code=="0"){
                alert("取消收藏成功!");
                $("#weishouchang").show();
                $("#yishouchang").hide();				                
            }
        }
    });
})

function clickZang(){
	goldlog.record("/web.1.1","","id="+itemid1+"","");
	$.ajax({
		url:'//api.itv.cntv.cn/praise/add?type=other&id='+itemid1+'&num=1',
		jsonp: "jsonp_callback",
		jsonpCallback:itemid1,
		cache:true,
		dataType:"jsonp",
		success:function(data){
			if(data.msg=="OK"){
				alert("感谢支持!");
			}
		}
	});
}

