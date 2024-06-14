var version = '0.171.5.8.9.6.3.5.2';
var adversion =     'ad0.172.5.8.4.5.4';
var isFlashPlayer = true;
var cntvFlashPlayerId = "";
var html5PlayerWidth ;
var html5PlayerHeight ;
var widgetsConfigPath = "http://js.player.cntv.cn/xml/widgetsConfig/common.xml";
var languageConfigPath ="";
//var widgetsSwfPath = "http://player.cntv.cn/widgets/wg/WidgetButton2.swf";
var widgetsSwfPath = "http://player.cntv.cn/widgets/wg/WidgetButton20150514.swf";
var widgetsXmlPath = "http://js.player.cntv.cn/xml/widgetsPlugXml/chinese.xml";

var AliMonitorJs = "http://js.data.cctv.com/__aplus_plugin_cctv.js,aplus_plugin_aplus_u.js";

var isMiniMode = false;
var canPlayM3u8 = true;
var floatLogoURL="";

var videoCenterId = "";


//var sns_userid;
var sns_islogin;
var sns_fo;
var sns_divid;
var isWritetedPlayer = false;
var currentMessage = "";

var myPosterImg = "";
var myIsAutoPlay = false;
var isShowH5VideoLoading = true;

var Fingerprint = "";//定义设备指纹信息的key值
var isFingerprintJsLoading = false;
var isH5HttpsVod = true;

function Print33(s)
{

}
function isIPad() {
    return /(iphone|ipad)/i.test(navigator.userAgent)|| /(Android)/i.test(navigator.userAgent);
}
var clientInfo={os:null,browser:null,broserVersion:null,osVersion:null};
(function() {

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++)	{
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { 	string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.userAgent,
                subString: "iPad",
                identity: "iPad"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]
    };
    BrowserDetect.init();
    clientInfo.os = BrowserDetect.OS;
    clientInfo.browser = BrowserDetect.browser;
    clientInfo.broserVersion  = BrowserDetect.version;
})();
function IsMaxthon()
{
    try{
        window.external.max_invoke("GetHotKey");
        return true;
    }catch(ex){
        return false;
    }
}
function createPlayer(playerId,w,h)
{
    alert("common.js不用此方法，请使用createCommonPlayer并传入台名称");
}
function createMiniPlayer(playerId,w,h,t)
{
    isMiniMode = true;
    return createCommonPlayer(playerId,w,h,t);
}



function createCommonPlayer(playerId,w,h,t,isAutoPlay,posterImg,isShowLoading)
{
    cntvFlashPlayerId = playerId;
    dealTai(t);
    isWritetedPlayer = false;
    if(tai=="")
    {
        alert("创建的台名称不对或还没有开通，请与视频技术部点播组联系");
        return;
    }


    //var playerUrl = "http://player.cntv.cn/standard/cntvplayer20180416.swf";
    //var playerUrl = "http://player.cntv.cn/standard/cntvplayer20180517.swf";
    //var playerUrl = "http://player.cntv.cn/standard/cntvplayer20180611.swf";
    //var playerUrl = "http://player.cntv.cn/standard/cntvplayer20180614.swf";

    //if(Math.random() < 0.5) {
    playerUrl = "http://player.cntv.cn/standard/cntvplayerQC20181126.swf";
    //}


    //是否是4k
    if(typeof(isVod4k)!="undefined" && isVod4k) {
        playerUrl = "http://player.cntv.cn/standard/cntvplayer4kQC20190620.swf";
    }




    if(window.location.href.indexOf("linye.cntv.cn")>0||tai=="zmxcys")
    {
        playerUrl = "http://player.cntv.cn/standard/cntvplayer2013110501.swf";
    }

    /*
    if(window.location.href.indexOf("ncpa-classic.cntv.cn")!=-1 || window.location.href.indexOf("ncpa-classic.com")!=-1)
    {
        //playerUrl = "http://player.cntv.cn/standard/dajuyuanplayer20141210.swf";
        playerUrl = "http://player.cntv.cn/standard/dajuyuanplayer20170103.swf";
    }
    */




    if(window.location.href.indexOf("ipanda.com")!==-1 && window.location.href.indexOf("livechina.ipanda.com")==-1 && window.location.href.indexOf("uav.ipanda.com")==-1)
    {
        playerUrl = "http://player.cntv.cn/standard/ipandaplayerVOD171121.swf";
    }

    /*2019年网络春晚播放器*/
    if(typeof(vodPlayerType)!="undefined" && vodPlayerType=="wlcw") {
        playerUrl = "http://player.cntv.cn/standard/nsfePlayerVOD190115.swf";
    }

    /*wdjlm播放器*/
    if(typeof(vodPlayerType)!="undefined" && vodPlayerType=="wdjlm") {
        playerUrl = "http://player.cntv.cn/standard/cntvplayerwd20190426.swf";
    }

    if(isMiniMode)
    {
        playerUrl = "http://player.cntv.cn/standard/cntvminiplayer20131212.swf";
    }
    html5PlayerWidth  = w;
    html5PlayerHeight = h;
    var fo ;
    if(IsMaxthon())
    {
        fo = new SWFObject(playerUrl+"?v="+version+"&a="+Math.random(), "vplayer", w, h, "10.0.0.0", "#000000");
    }else
    {
        fo = new SWFObject(playerUrl+"?v="+version, "vplayer", w, h, "10.0.0.0", "#000000");
    }
    fo.addVariable("NoDataSwfPath", "http://player.cntv.cn/widgets/NoDataVideoPanel.swf");
    //fo.addVariable("RelativeSwfPath", "http://player.cntv.cn/widgets/RelativeVideoPanel.swf");
    fo.addVariable("RelativeSwfPath", "http://player.cntv.cn/widgets/RelativeVideoPanel20150514.swf");

    ///fo.addVariable("isShowSmallWindow", "true");
    if(typeof(ad_Wenzi)!="undefined")
    {
        fo.addVariable("adText", ad_Wenzi);
    }
    if(typeof(ad_Banner)!="undefined")
    {
        fo.addVariable("adBanner", ad_Banner);
    }
    if(typeof(ad_Calls)!="undefined")
    {
        fo.addVariable("adCalls",ad_Calls);
    }

    if(window.location.href.indexOf("chunwan.cctv.com/2019/quanjing")!==-1) {

        fo.addVariable("quanjing2019", "true");
    }

    if(window.location.href.indexOf("v.mos.gov.cn")!=-1 || window.location.href.indexOf("v.ccdi.gov.cn")!=-1)
    {
        fo.addVariable("environment","ZJW");
    }

    //获取cookie并传递指纹信息
    if(!getCookie_vdn("Fingerprint")){
        //获取设备指纹信息
        getfingerprint2();
    } else{
        Fingerprint = getCookie_vdn("Fingerprint");
    }

    //把指纹信息传给播放器
    fo.addVariable("fingerprint",Fingerprint);
    fo.addVariable("usrOs", clientInfo.os);
    fo.addVariable("usrBroswer", clientInfo.browser+":"+clientInfo.broserVersion);
    fo.addVariable("screenInfo",window.screen.width+"*"+window.screen.height);
    fo.addVariable("platform",navigator.platform);
    fo.addVariable("isTianRun","true");
    //20160207 true 改成false
    fo.addVariable("isShowSmallWindow","false");
    fo.addVariable("widgetsConfig",widgetsConfigPath);
    fo.addVariable("languageConfig", languageConfigPath);
    fo.addVariable("logoImageURL", "");
    fo.addVariable("logoURL", "http://www.cntv.cn/");
    fo.addVariable("qmServerPath", "http://log.player.cntv.cn/stat.html");
    fo.addVariable("qmFrequency", "1");
    fo.addVariable("adplayerPath", "http://player.cntv.cn/adplayer/cntvAdPlayer.swf?v="+adversion);
    fo.addVariable("pauseAdplayerPath", "http://player.cntv.cn/adplayer/cntvPauseAdPlayer.swf?v="+adversion);
    fo.addVariable("cornerAdplayerPath", "http://player.cntv.cn/adplayer/cntvCornerADPlayer.swf?v="+adversion);
    fo.addVariable("hotmapPath", "http://player.cntv.cn/standard/cntvHotmap.swf?v="+adversion);
    fo.addVariable("tai", tai);
    fo.addVariable("referrer", document.referrer);
    //fo.addVariable("dynamicDataPath", "http://vdn.apps.cntv.cn/api/getHttpVideoInfo.do");
    fo.addVariable("dynamicDataPath", "http://vdn.apps.cntv.cn/api/getHttpVideoInfo.do");

    fo.addVariable("isUseDynamicData", "true");
    fo.addVariable("dynamicFrequency", "1.0");
    ///fo.addVariable("floatLogoTrigger", "false");
    fo.addVariable("isProtected", "true");
    fo.addVariable("isP2pInstall","false");
    fo.addVariable("floatLogoTrigger", "false");
    fo.addVariable("floatLogoURL", "http://player.cntv.cn/flashplayer/logo/fhMaskLogo.png");

    //是否是4k
    if(typeof(isVod4k)!="undefined" && isVod4k) {
        fo.addVariable("isVod4k", "true");
    }



    if(tai!="smallWindow"&&!(/(Android)/i.test(navigator.userAgent)))
    {
        fo.addVariable("widgetsSwfPath",widgetsSwfPath);
        fo.addVariable("widgetsXmlPath",widgetsXmlPath);
    }
    if(tai=="mini")//百度应用
        fo.addParam("wmode", "transparent");
    else
        fo.addParam("wmode", "window");

    if(tai!="dajuyuan"&&tai!="ipanda"&&tai!="zhuao"&&tai!="game"&&tai!="xmtv")
    {
        fo.addVariable("googleAd","true");
    }


    if(typeof(isAutoPlay)!="undefined")
    {
        fo.addVariable("isAutoPlay", isAutoPlay);
        myIsAutoPlay = isAutoPlay;
    }

    if(typeof(posterImg)!="undefined" && posterImg.length>0)
    {
        myPosterImg = posterImg;
        fo.addVariable("preImage", posterImg);
    } else{
        myPosterImg = "";
    }

    if(typeof(isShowLoading)!=="undefined" && isShowLoading===false) {
        isShowH5VideoLoading = false;
    }

    fo.addParam("menu","false");
    fo.addParam("allowFullScreen", "true");//fo.addVariable("gulouPath", "http://115.182.34.19/log/getSmallWindowLog.php");
    fo.addParam("allowScriptAccess","always");
    fo.addVariable("isConviva","true");fo.addVariable("isAkamaiAnility","true");

    if(window.location.href.indexOf("cntv.cn")!=-1 || window.location.href.indexOf("cctv.com")!=-1)
    {
        fo.addVariable("useP2pMode","true");
    }
    else
    {
        fo.addVariable("useP2pMode","false");
    }
    //dealRelative(fo,tai);
    return fo;
}

function dealecm(fo,tai)
{

}

function getChromeVersion(){
    var ver = "";
    var start = navigator.userAgent.indexOf("Chrome/");
    var cutStr = navigator.userAgent.substr(start + 7);
    ver = parseInt(cutStr);
    return ver;
}

function dealRelative(fo,tai)
{
    var file="Default.xml";
    switch(tai)
    {
        case "arts":file = "Art.xml";break;
        case "auto":file = "Auto.xml";break;
        case "dajuyuan":file = "";break;
        case "weiyu":file = "";break;//uyghur.xml
        case "ayu":file = "";break;//arabic.xml
        case "hayu":file = "";break;//kazakh.xml
        case "kr":file = "";break;//kr.xml
        case "english":file = "";break;//english.xml
        case "russain":file = "";break;//russian.xml
        case "french":file = "";break;//french.xml

        case "donghua":file = "Cartoon.xml";break;
        case "culture":file = "Culture.xml";break;
        case "teleplay":file = "Dianshiju.xml";break;
        case "finance":file = "Economics.xml";break;
        case "fangtan":file = "Fangtan.xml";break;
        case "food":file = "Food.xml";break;
        case "game":file = "Games.xml";break;
        case "high":file = "HD.xml";break;
        case "igongyi":file = "Igongyi.xml";break;
        case "it":file = "IT.xml";break;
        case "jiankang":file = "Jiankang.xml";break;
        case "discovery":file = "Jishi.xml";break;
        case "kejiao":file = "Kejiao.xml";break;
        case "fucai":file = "Lottery.xml";break;
        case "mall":file = "Mall.xml";break;
        case "film":file = "Movies.xml";break;
        case "yue":file = "Music.xml";break;
        case "wangzhan":file = "Network.xml";break;
        case "news":file = "News.xml";break;
        case "nongjiale":file = "Nongjiale.xml";break;
        case "hsjy":file = "RedHome.xml";break;
        case "shaoer":file = "Shaower.xml";break;
        case "aoyun":
        case "sport":file = "Sports.xml";break;
        case "style":file = "Style.xml";break;
        case "taihai":file = "Taihai.xml";break;
        case "travel":file = "Travel.xml";break;
        case "tv":file = "TV.xml";fo.addVariable("isShowSmallWindow","false");break;
        case "xiqu":file = "Xiqu.xml";break;
        case "yueyu":file = "Yueyu.xml";break;
        case "ent":file = "Zongyi.xml";break;
        case "xmtv":canPlayM3u8=true;fo.addVariable("useP2pMode","false");break;
        case "mtv":break
        case "0731":break;
        case "gxtv":break;
        case "zhuao":break;
        case "ipanda":file = "";break;
        case "hudong":file="";break;
    }

    /*
     if(file!=""&&!isMiniMode)
     {
     fo.addVariable("showRelative","true");
     fo.addVariable("relativeListUrl","http://js.player.cntv.cn/xml/relative/"+file);
     }
     */


}
function Print33(s)
{
    // alert(s);
}
function dealTai(t)
{
    switch(t)
    {
        case "arts":tai="arts";break;//艺术台
        case "auto":tai="auto";break;//汽车台


        case "book":tai="book";break;
        case "baby":tai="baby";break;
        case "bugu":tai="bugu";break;

        case "chuangfu":tai="chuangfu";break;
        case "chunwan":tai="chunwan";break;
        case "digi":tai="digi";break;//

        case "documentary":tai="documentary";break;//纪录片

        case "jishi":
        case "discovery":tai="discovery";break;//科教 探索 发现
        case "donghua":tai="donghua";break;//动画

        case "expo":tai="expo";break;//
        case "ent":tai="ent";break;//综艺

        case "dianying":
        case "film":tai="film";break;//电影

        case "fangtan":tai="fangtan";break;//电影
        case  "jingji":
        case "finance":tai="finance";break;//电影

        case "yinshi":
        case "food":tai = "food";break;

        case "game":tai = "game";break;
        case "games":tai = "game";break;

        case "hsjy":tai = "hsjy";break;
        case "igongyi":tai = "igongyi";break;
        case "industry":tai = "industry";break;
        case "it":tai = "it";break;
        case "jiadian":tai = "jiadian";break;
        case "jiankang":tai = "outside_jiankang";break;
        case "jxhsly":tai = "jxhsly";break;
        case "menggu":tai = "menggu";break;
        case "military":tai = "military";break;
        case "mindiao":tai = "mindiao";break;
        case "museum":tai = "museum";break;


        case "news":tai = "news";break;
        case "pinglun":tai = "pinglun";break;
        case "sannong":tai = "sannong";break;
        case "shaanxi":tai = "shaanxi";break;
        case "sports":
        case "sport":tai= "sport";break;
        case "style":tai= "style";break;
        case "shaoer":tai= "shaoer";break;

        case "taihai":tai= "taihai";widgetsConfigPath = "http://js.player.cntv.cn/xml/widgetsConfig/taihai.xml";break;
        case "xmtv":tai = "xmtv";break;

        case "dianshiju":
        case "teleplay":tai="teleplay";break;//电视剧
        case "tibet":tai="tibet";break;//电视剧
        case "travel":tai="travel";break;//电视剧
        case "wlchunwan":tai="wlchunwan";break;//电视剧
        case "worldcup":tai="worldcup";break;//电视剧
        case "yayun":tai="yayun";break;//电视剧
        case "ydcm":tai="ydcm";break;//电视剧
        case "yinshi":tai="yinshi";break;//电视剧
        case "yueyu":tai="yueyu";break;//电视剧
        case "yzcy":tai="yzcy";break;//电视剧
        case "xiqu":tai = "xiqu";break;//http://xiqu.cntv.cn

        case "yue":
        case "music":tai = "yue";break;//http://yue.cntv.cn

        case "nongye":tai="nongye";break;
        case "baobei":tai="baobei";break;
        case "smallWindow":tai="smallWindow";break;
        case "mini":tai="mini";break;
        case "kr":tai="kr";
            languageConfigPath  ="http://js.player.cntv.cn/xml/korean/korean.xml";
            widgetsSwfPath = "http://player.cntv.cn/widgets/MultiWidgetButton.swf";
            widgetsXmlPath = "http://js.player.cntv.cn/xml/widgetsPlugXml/korea.xml";
            break;
        case "hsly":tai="hsly";break;
        case "hsjy":tai="hsjy";break;
        case "culture":tai="culture";break;
        case "dajuyuan":tai="dajuyuan";
            widgetsConfigPath = "http://js.player.cntv.cn/xml/widgetsConfig/dajuyuan.xml";
            widgetsXmlPath = "";//
            break;//站内用这个
        case "chanjing":tai="chanjing";break;

        case "mtv":tai="mtv";break;
        case "chengdu":tai="chengdu";break;
        case "tv":tai="tv";break;
        case "nongjiale":tai="nongjiale";break;
        //case "weiyu":tai="weiyu";break;
        case "fucai":tai="fucai";break;
        case "kejiao":tai="kejiao";break;
        case "mall":tai="mall";break;

        case "baidu":tai="baidu";break;
        case "weiyu":tai="weiyu";canPlayM3u8=true;
            widgetsConfigPath = "http://js.player.cntv.cn/xml/widgetsConfig/english.xml";
            widgetsSwfPath = "http://player.cntv.cn/widgets/MultiWidgetButton.swf";
            //widgetsSwfPath = "http://player.cntv.cn/widgets/MultiWidgetButtonWeiyu.swf";
            widgetsXmlPath = "http://js.player.cntv.cn/xml/widgetsPlugXml/english.xml";
            break;
        case "fucai":tai="fucai";break;
        case "kejiao":tai="kejiao";break;
        case "mall":tai="mall";break;
        case "ipr":tai="ipr";break;
        case "baidu":tai="baidu";break;
        case "iptv":tai="iptv";break;
        case "russain":tai="russain";break;
        case "english":tai="english";
            widgetsConfigPath = "http://js.player.cntv.cn/xml/widgetsConfig/english.xml";
            widgetsSwfPath = "http://player.cntv.cn/widgets/MultiWidgetButton.swf";
            widgetsXmlPath = "http://js.player.cntv.cn/xml/widgetsPlugXml/english.xml";
            break;
        case "arabic":tai ="arabic";
        case "spanish":tai="spanish";break;
        case "cy":tai="cy";break;
        case "wangzhan":tai="wangzhan";break;

        case "nengyuan":tai="nengyuan";break;
        case "busmusic":tai="busmusic";break;
        case "wdy":tai="wdy";break;
        case "eurocup":tai="eurocup";break;
        case "dangyuan":tai="dangyuan";break;
        case "xietianxiedi":tai="xietianxiedi";break;//谢天谢地
        case "yanchanghui":tai="yanchanghui";break;
        case "aoyun":tai="aoyun";break;
        case "hayu":tai="hayu";canPlayM3u8=true;
            widgetsSwfPath = "http://player.cntv.cn/widgets/MultiWidgetButtonHayu.swf";
            break;
        case "gxtv":tai="gxtv";break;//广西宽频台
        case "zmxcys":tai="zmxcys";break;
        case "politics":tai="politics";break;//时政频道
        case "docuchina":tai="docuchina";break;//产业网
        case "0731":tai="0731";break;//长株谭
        case "zhuao":tai="zhuao";break;
        case "search":tai="search";break;
        case "ipanda":tai="ipanda";
            widgetsXmlPath="http://js.player.cntv.cn/xml/widgetsPlugXml/ipanda.xml";
            break;


        case "mcctvcom":tai="mcctvcom";break;
        case "chinalive":tai="chinalive";break;
        case "zhongjiwei":tai="zhongjiwei";break;
        case "hudong":tai="hudong";break;
        case "zgylc":tai="zgylc";break;
        case "cctv4k":tai="cctv4k";break;

        default:tai = "";//陆续增加中
    }
}

function getAndroidVersion()
{
    var version = 0;
    var clientInfo = navigator.userAgent.toLowerCase();
    var pos = clientInfo.indexOf("android");
    if(pos > 0)
    {
        version = clientInfo.substr(pos+7);
        version = parseInt(version);

        if(!version)
        {
            version = clientInfo.substr(pos+8);
            version = parseInt(version);
        }
    }
    return version;

}

function writePlayer(fo,divId)
{

    if(/(iphone|ipad)/i.test(navigator.userAgent) || getAndroidVersion()-4>=0)
    {
        var jsDataUrl = "";
        if(typeof isPlayerHttpsMode !=="undefined" && !isPlayerHttpsMode) {
            isH5HttpsVod = false;
        }

        videoCenterId = fo.getVariable("videoCenterId");

        if(isH5HttpsVod) {
            jsDataUrl = "https://vdn.apps.cntv.cn/api/getIpadVideoInfo.do?pid=" + videoCenterId + "&tai=ipad&from=html5";
            includeHtml5PlayerJs('https://js.player.cntv.cn/creator/html5player_standard.js',divId,jsDataUrl);

        } else{
            jsDataUrl = "http://vdn.apps.cntv.cn/api/getIpadVideoInfo.do?pid=" + videoCenterId + "&tai=ipad&from=html5";
            includeHtml5PlayerJs('http://js.player.cntv.cn/creator/html5player_standard.js',divId,jsDataUrl);
        }

    }else
    {

        getFlashVer();

        if(isFlashPlayer === 0 && navigator.userAgent.indexOf("rv:11")===-1&&navigator.userAgent.indexOf("MSIE")===-1&&navigator.userAgent.toLowerCase().indexOf("firefox")===-1) {
            var htmls = '  <object type="application/x-shockwave-flash" class="player" data="//s1.hdslb.com/bfs/static/player/main/flash/play_v3.swf?lastCompiled=2021-01-11T08:04:31.922Z" width="' + html5PlayerWidth + 'px" height="' + html5PlayerHeight + 'px" id="player_placeholder" style="visibility: visible;"><param name="bgcolor" value="#ffffff"><param name="allowfullscreeninteractive" value="true"><param name="allowfullscreen" value="true"><param name="quality" value="high"><param name="allowscriptaccess" value="always"><param name="wmode" value="direct"><param name="flashvars" value="spm_id_from=333.851.b_62696c695f7265706f72745f646f756761.9&amp;cid=81586615&amp;aid=46572888&amp;bvid=BV14b411n7My&amp;attribute=0&amp;show_bv=1&amp;dashSymbol=true"></object>\n';
            if(document.getElementById(divId)) {
                document.getElementById(divId).innerHTML = htmls;
            }


        } else {
            if(!isFlashPlayer || (getChromeVersion()>=55&&flashChecker().v<33))
            {
                showInstallFlashPlayerMsg(divId, html5PlayerWidth, html5PlayerHeight);
                return;
            }
        }



        if(typeof goldlog === "undefined") {
            doLoadAliAnalyticsJs();
        }

        //fo.write(divId);
        if(fo.getVariable("tai")=="tv")
            fo.addVariable("relativeListUrl","http://tv.cntv.cn/api/video/lastVideos?guid="+fo.getVariable("videoCenterId"));
////fo.addVariable("relativeListUrl",escape("http://data.t.cntv.cn:82/video/player?uid=10007&vid=afc76d888e7f4e9ab08cbf84a5f4a409"));

        sns_fo=fo;
        sns_divid=divId;
        getSnsCookie();
        setTimeout(writePlayer2,2000);
        var baseDiv = document.getElementById(divId);
        baseDiv.style.backgroundColor = "#000";
    }
}

function getSnsCookie()
{
    try{
        if(typeof(sns_userid)=="undefined")
        {
            sns_userid = window.parent.sns_userid;
            sns_islogin = window.parent.passport.isLoginedStatus().toString();
        }
        else
        {
            sns_islogin = passport.isLoginedStatus().toString();
        }

        if(sns_userid == null)
        {
            sns_userid = "";
        }

    }
    catch(e){
        sns_userid = "";
        sns_islogin = "false";
    }


    if(sns_islogin=="true" && clientInfo.browser=="Firefox" && sns_islogin=="true")
    {

        if(window.name!=""&&typeof(window.name)!="undefined"&&window.name.length>0)
        {
            setTimeout(function(){
                document.getElementById("myForm").target ="myFrame";
                document.getElementById("data").value = window.name;
                document.getElementById("myForm").submit();

            },300);

        }
    }

    writePlayer2();

}

function writePlayer2()
{
    if(isWritetedPlayer)return;
    isWritetedPlayer=true;
    var myBody =  document.getElementsByTagName('body')[0];
    var _bdiv = document.createElement("div");
    _bdiv.style.display = "none";

    var s = '<form id="myForm"  method="post" action="http://history.apps.cntv.cn/interface/service.php">';
    s = s+'<input id="method" name="method" value="video.setVideoPosition">';
    s= s+'<input id="client" name="client" value=1>';
    s =s+'<input id="data" name="data" value="" >';
    s =s+'<iframe id="myFrame" name="myFrame"></iframe></form>';
    _bdiv.innerHTML =s;
    myBody.appendChild(_bdiv);
    if(sns_islogin=="true")
    {
        sns_fo.addVariable("isLogin", sns_islogin);
        sns_fo.addVariable("userId", sns_userid);
    }
    sns_fo.write(sns_divid);
}
function setCurrentMes(s)
{
    currentMessage =s;
    window.name = s;
}
function thisMovie(movieName)
{
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}

function vodPlayOrPause(v) {
    try{
        if(isIPad()) {
            if(v == "pause") {
                document.getElementById("html5Player").pause();
            } else{
                document.getElementById("html5Player").play();
            }
        } else{
            if(v == "pause") {
                thisMovie("vplayer").pause();
            } else{
                thisMovie("vplayer").play();
            }
        }
    } catch (e) {

    }
}

window.onbeforeunload =function()
{
    if(typeof(_vjVideoTrack)!="undefined")
    {
        _vjVideoTrack("");
    }

    if(!currentMessage) {
        currentMessage = window.name;
    } else{
        window.name = currentMessage;
    }

    if(sns_islogin=="true" && currentMessage.length>1)
    {
        if(document.getElementById("myForm")){
            document.getElementById("myForm").target ="myFrame";
            document.getElementById("data").value = currentMessage;
            document.getElementById("myForm").submit();
        }
    }
};

if(window.addEventListener) {
    window.addEventListener("beforeunload", function (e) {
        try{
            thisMovie("vplayer").ConvivaCleanUp();
        } catch(e) {

        }
    });
}



function includeHtml5PlayerJs(file,divId,jsDataUrl)
{
    var _doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    _doc.appendChild(js);
    js.onload = function ()
    {
        //alert('Firefox2、Firefox3、Safari3.1+、Opera9.6+ support js.onload');
        createHtml5Player(divId,html5PlayerWidth,html5PlayerHeight,jsDataUrl);
    }
    js.onreadystatechange = function ()
    {
        if (js.readyState == 'loaded' || js.readyState == 'complete')
        {
            createHtml5Player(divId,html5PlayerWidth,html5PlayerHeight,jsDataUrl);
        }
    }
    js.setAttribute('src', file);
    return false;
}


function givePageUrlToFlash() {
    return window.location.href;
}


function doLoadAliAnalyticsJs() {

    var jsLoader = createElementByType("script","convivaJs237","absolute","0px","0px","0px","0px");
    jsLoader.src = AliMonitorJs;

    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);
}

function flashSendDataToAli(v1, v2, v3, v4) {
    if(typeof goldlog!="undefined" && typeof goldlog.record!="undefined") {
        v3 += "&referURL=" +  encodeURIComponent(location.href.substr(0, 127));

        if(document.referrer) {
            v3 += "&referer=" + encodeURIComponent(document.referrer.substr(0, 127));
        }

        goldlog.record(v1, v2, v3, v4);
    }
}


function getFlashVer(){//获得flashplayer的版本 google
    var fls=flashChecker();

    if(fls && !fls.v) {
        isFlashPlayer = 0;
        return;
    }

    var s="";
    if(fls.f&&(fls.v>=33)) isFlashPlayer = true;
    else isFlashPlayer = false;
}

function flashChecker()
{
    var hasFlash=0;         //是否安装了flash
    var flashVersion=0; //flash版本
    var isIE=/*@cc_on!@*/0;      //是否IE浏览器

    if(isIE)
    {
        try{
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if(swf) {
                hasFlash=1;
                VSwf=swf.GetVariable("$version");
                flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]);
            }
        }catch(e)
        {
            //alert(e);
        }
    }else{
        if (navigator.plugins && navigator.plugins.length > 0)
        {
            try{
                var swf=navigator.plugins["Shockwave Flash"];

                if (swf)
                {
                    hasFlash=1;
                    var words = swf.description.split(" ");
                    for (var i = 0; i < words.length; ++i)
                    {
                        if (isNaN(parseInt(words[i]))) continue;
                        flashVersion = parseInt(words[i]);
                        if(!isIPad() && getChromeVersion()>=55 && flashVersion>=23 && swf.filename==="internal-not-yet-present"){
                            flashVersion = 22;
                        }
                    }
                }
            }catch(e){
                //alert(e);
            }
        }
    }
    return {
        f:hasFlash,
        v:flashVersion
    };
}


function  showInstallFlashPlayerMsg(playerId, w, h){

    var msg = "请点此安装最新Flash";
    var str = "<div class=\"flash_install\"><a target='_blank' style='color:#cccccc;font-size:16px;text-decoration:underline;' href=\"https://www.flash.cn\" onfocus=\"this.blur()\"><img style=\"display:inline-block\" src=\"http://player.cntv.cn/flashplayer/logo/get_adobe_flash_player.png\"/><p style='margin-top:8px;color:#cccccc'>" + msg + "</p></a>安装完毕后请关闭浏览器后，再重新打开播放页面</div>";

    if(playerId=== "vplayer" && document.getElementById("myFlash") && !document.getElementById("vplayer"))
    {
        playerId = "myFlash";
    }
    var result_box = document.getElementById(playerId);

    var bg =  document.createElement("img");
    bg.position = "absolute";
    bg.src = "http://t.live.cntv.cn/cntvwebplay/cntvplayer/images/plug-in_bg.gif";
    var bgWidth = w;
    var bgHeight = h;
    bg.width = bgWidth;
    bg.height = bgHeight;
    result_box.style.lineHeight = "20px";
    result_box.appendChild(bg);

    var errorPanel = document.createElement("div");
    errorPanel.style.position = "relative";
    errorPanel.style.margin = "0 auto";
    errorPanel.style.left = "0";
    errorPanel.style.width = w + "px";
    errorPanel.style.textAlign = "center";
    errorPanel.style.top = -parseInt(2*bg.height/5) + "px";
    errorPanel.style.color = "#dddddd";
    errorPanel.style.fontSize = "16px";
    errorPanel.style.fontWeight = "bold";
    errorPanel.innerHTML = str;
    errorPanel.align = "center";
    result_box.appendChild(errorPanel);

    return;
}
function createElementByType(type,_id,position,_w,_h,_l,_t)
{
    var el = document.createElement(type);
    el.setAttribute("id",_id);
    el.style.position = position;
    el.style.width = _w;
    el.style.height = _h;
    el.style.left = _l;
    el.style.top = _t;
    return el;
}

//动态加载指纹js文件fingerprint2.js
function getfingerprint2(){
    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script","jsFingerLoader","absolute","0px","0px","0px","0px");

    isFingerprintJsLoading = true;

    if(isIPad()) {
        setTimeout(function () {
            if(isH5HttpsVod) {
                jsLoader.src = "https://js.player.cntv.cn/creator/fingerprint2.js";
            }

            _doc.appendChild(jsLoader);
            if(typeof jsLoader.onload != "undefined"){
                jsLoader.onload = function() {
                    getFingerprint();
                };
            }

            if(typeof jsLoader.onreadystatechange != "undefined"){
                jsLoader.onreadystatechange = function(){
                    if (jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete'){
                        getFingerprint();
                    }
                };
            }
        }, 50);
    } else{
        jsLoader.src = "http://js.player.cntv.cn/creator/fingerprint2.js";

        _doc.appendChild(jsLoader);
        if(typeof jsLoader.onload != "undefined"){
            jsLoader.onload = function() {
                getFingerprint();
            };
        }

        if(typeof jsLoader.onreadystatechange != "undefined"){
            jsLoader.onreadystatechange = function(){
                if (jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete'){
                    getFingerprint();
                }
            };
        }
    }


}
//设置cookie    2017年7月28日16:11:42
function setCookie_vdn(key,value,day){
    if(day){
        var d = new Date();
        d.setTime(d.getTime() + day*24*60*60*1000);
        document.cookie=key + "=" + value + ";expires=" + d.toGMTString();
    }else{
        document.cookie=key + "=" + value;
    }

    try{
        if(window.localStorage) {
            localStorage.setItem(key, value);
        }
    } catch (e) {

    }

}
//删除cookie方法
function removeCookie_vdn(key){
    setCookie_vdn(key,"",-1);
}
//获取cookie方法
function getCookie_vdn( key ){

    var v = "";
    //判断是否含有cookie ，有cookie 就获取出来
    if( document.cookie ){
        var str = document.cookie;//获取cookie信息   键1=值1; 键2=值1; 键3=值3;
        var arr = str.split("; ");//将cookie文件按照 ;   拆成数组
        for(var i = 0 ; i <arr.length ; i++){
            var  item = arr[i].split("=");// 将数组中的每一个字符串通过=拆成一个小数组 [键1,值1]
            //判断小数组中 根据已知的键  下标为 [0] 为已知键，找到对应的值
            if(item[0] == key){
                v = item[1].toString();//将key对应的值返回此处返回的为字符串 将return JSON.parse(item[1])
                break;
            }
        }

    }
    v += "";

    try{
        if((!v ||v.length<20) && window.localStorage) {
            v = localStorage[key] ? localStorage[key] : "";
        }
    } catch (e) {
        v = "";
    }

    //如果没有cookie ，返回一个空数组
    return v;
}
//定义指纹信息在cookie中的key值
function getFingerprint(){
    var fp = new Fingerprint2();
    fp.get(function(result) {
        setCookie_vdn("Fingerprint",result.toUpperCase(),7);
    });
}
