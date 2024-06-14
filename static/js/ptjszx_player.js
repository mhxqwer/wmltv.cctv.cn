   if(typeof fdate !="undefined"){
		if(fdate.substr(10,1)=="/"){
			fdate=fdate.substr(0,10)+fdate.substr(11,fdate.length)
		}
	}
	function newplayer(){
   	if(typeof isHttps=="undefined"||isHttps==""||isHttps==undefined){
   		isHttps= location.href.substr(0, 5) == "https" ? "true": "false";
   	}
   	if(typeof playerType=="undefined"||playerType==""){
   		playerType="vod_h5";
   	}
   	if(typeof drm=="undefined"||drm==""){
		//if(window.location.host=="v.ccdi.gov.cn"){		
		//	drm="false";
		//}else{
			drm="true";
		//}
 		
   	}
   	if(typeof wvideo=="undefined"||wvideo==""){
   		wvideo=1000;
   	}
   	if(typeof hvideo=="undefined"||hvideo==""){
   		hvideo==562;
   	}
   	if(typeof guidtitle=="undefined"||guidtitle==""||typeof guidimage=="undefined"||guidimage==""){
   		guidtitle="";
   		guidimage="";
   		listMode="false";
   	}else{
   		listMode="true";
   	}
   	if(typeof t == "undefined" || t == "") {
   		t="news";
   	}
   	if(typeof isDefaultPreImage =="undefined"||isDefaultPreImage==""){
   		isDefaultPreImage="true";
   	}
   	if(typeof isAutoPlay =="undefined"||isAutoPlay==""){
   		isAutoPlay="true";
   	}
   	if(typeof postimg =="undefined"||postimg==""){
   		postimg="";
   	}
   	if(typeof isVod4k =="undefined"||isVod4k==""){
   		isVod4k="false";
   	}
   	if(typeof isAudio =="undefined"||isAudio==""){
   		isAudio="false";
   	}
	if(typeof firstClass =="undefined"||firstClass==""){
   		firstClass="";
   	}
	if(typeof _ui_rate =="undefined"){
		_ui_rate=false;
	}
	if(typeof hasBarrage =="undefined"){
		hasBarrage="false";
	}
	if(typeof barrageApp =="undefined"){
		barrageApp="false";
	}
	if(typeof barrageType =="undefined"){
		barrageType="video";
	}
	if(typeof barrageitemID =="undefined"){
		barrageitemID=guid;
	}
	
	if(typeof setupOn =="undefined"){
		setupOn="false";
	}
	if(typeof webFullScreenOn =="undefined"){
		webFullScreenOn="false";
	}
	if(typeof playToken =="undefined"){
		playToken="";
	}
	if(typeof enableVip =="undefined"){
		enableVip=false;
	}
	if(typeof skipAdTip =="undefined"){
		skipAdTip=false;
	}
	if(typeof configType =="undefined"){
		configType="";
	}
	if(typeof userLevel =="undefined"){
		userLevel="";
	}
	if(typeof h5p2p =="undefined"){
		h5p2p=true;
	}
	
	if(enableVip==true){

		if(h5p2p==true){
			var  H5config={
	   			ui_rate: _ui_rate, /*H5新增倍速参数*/
				enableVip:enableVip, /*是否显示免广告和会员码率*/
		        skipAdTip :skipAdTip,  /*是否显示免广告提示*/
		 		configType :configType ,/* 字符串 默认值 'cctv2'。 自定义配置类型。*/
				userLevel :userLevel
			}	
		}else{
			var  H5config={
	   			ui_rate: _ui_rate, /*H5新增倍速参数*/
				enableVip:enableVip, /*是否显示免广告和会员码率*/
		        skipAdTip :skipAdTip,  /*是否显示免广告提示*/
		 		configType :configType ,/* 字符串 默认值 'cctv2'。 自定义配置类型。*/
				userLevel :userLevel,
				p2p:false
			}
		}
		
	}else{
	
		if(h5p2p==true){
			var  H5config={
	   			ui_rate: _ui_rate, /*H5新增倍速参数*/
				enableVip:enableVip, /*是否显示免广告和会员码率*/
			}	
		}else{
			var  H5config={
	   			ui_rate: _ui_rate, /*H5新增倍速参数*/
				enableVip:enableVip, /*是否显示免广告和会员码率*/
				p2p:false
			}
		}
		
	}
	
   	playerParas = {
	    divId: videoid,   /*播放器容器id，必填项*/
	    w: wvideo,   /*播放器宽度，必填项*/
	    h: hvideo,   /*播放器高度，必填项*/
	    t: t,   /*台名称，比如news,sports,tv等，必填项*/
	    videoCenterId: guid,   /*视频生产中心guid，必填项*/
	    id: "null",   /*可填null,必填项*/
	    videoId: "oordzpFdvXdwz8Y1gGR200729",   /*视频集id*/
	    url: "",   /*视频页面url，如http://tv.cntv.cn/video/C18472/a28126e5e0424a44af6a9bc4c5a47742*/
	    articleId: "",   /*文章id*/
	    filePath: "",   /*文件路径*/
	    sysSource: "",   /*视频来源*/
	    channelId: "",   /*可为空*/
	    scheduleId: "C18472000001",   /*关键字*/
	    isLogin: "",   /*用户中心相关，是否登录*/
	    userId: "C18472000001",   /*用户中心相关，用户登录id*/
	    isDefaultPreImage: isDefaultPreImage,   /*是否默认从vdn取图，非自动播放情况下才有效*/
	    isAutoPlay: isAutoPlay,   /*是否自动播放，只有false为不自动播放，其它值为自动播放*/
	    posterImg: postimg,   /*播放器前贴图片*/
	    isLeftBottom: "true",  /*播放按钮是否在播放器左下角,为true表示是，false表示播放按钮在播放器中间*/ 
	    isAudio: "false",  /*是否是音频播放器,为true表示是音频，false表示是视频*/
	    isVod4k: isVod4k,  /*是否为4k播放器，true是4k,false不是*/
	    isHttps: isHttps,  /*是否https视频，true是,false不是*/
	    wmode: "opaque",   /*flash播放器的窗口模式，默认为opaque*/
	    wideMode: "normal",   /*flash播放器的窗口模式，默认为opaque*/
	    listMode: listMode, /*点播播放器初始化参数：是否列表模式，默认false，false时不显示下一集按钮，不发送新增的下一集事件，设置中没有“自动播放下一集”选项；*/
	    nextTitle:guidtitle,   /*下一集标题，与listMode 配对使用*/
	    nextThumbnail: guidimage, /*下一集预览图URL，与listMode 配对使用*/
	    setupOn: setupOn, /*是否显示设置按钮，默认为false*/
	    hasBarrage: hasBarrage,  /*是否有弹幕功能，默认false，false时不显示弹幕、不显示弹幕设置按钮、不显示弹幕开关、不访问弹幕接口和表情包配置接口e*/
	    playerType : playerType,   /*播放器类型，vod表示普通播放器*/
	    webFullScreenOn: webFullScreenOn, /*是否显示全屏按钮，默认true表示显示*/
	    barrageType:barrageType,      /*弹幕场景：live代表单场直播和多视角，video代表点播*/
    	barrageitemID:barrageitemID, 
	    barrageApp:barrageApp,/*弹幕的appid*/
	   	language: "",  /*语言，默认中文，en表示英语*/
	   	vdn:{
			vtoken:playToken
		},
	   	h5:H5config,
		drm:drm,
		cms:{
			fc:firstClass /*底层页一级分类，用于转换播放器*/
		}
	};
	createVodPlayer(playerParas);
   }