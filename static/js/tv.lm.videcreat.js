function curPlayer(){
	var isHttps = location.href.substr(0, 5) == "https" ? "true": "false";
	/*点播开始*/
	videoid="myFlash";
	wvideo=width;
	hvideo=height;
	_ui_rate=true;//倍速H5新增
	t="tv";
	var imgload = new Image();	
	imgload.src = commentimg;
	var bof =true
	if(typeof fdate !="undefined"&&new Date(fdate).getTime()<1598284800000&&commentimg!=""){
		if(imgload.complete){
			if(!( /(iphone|ipad)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent))&&imgload.width<=504){
				postimg="//p5.img.cntv.cn/uploadimg/2021/01/05/1609815177995478.jpg"
				newplayer();
			}else{
				newplayer();
			}
		}else{
			imgload.onload = function(){
				if(!( /(iphone|ipad)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent))&&imgload.width<=504){
					postimg="//p5.img.cntv.cn/uploadimg/2021/01/05/1609815177995478.jpg"
					if(bof){
							bof=false
						newplayer();
					}
					
				}else{
					if(bof){
							bof=false
						newplayer();
					}
				}
			}
			setTimeout(function(){
				if(imgload.width==0&&$("#myFlash").html()==""&&bof){
					bof=false
					newplayer();
				}
			},1000)
		}
	}else{
		newplayer();
	}

}


