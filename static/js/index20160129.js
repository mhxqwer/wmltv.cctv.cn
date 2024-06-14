                
//登录相关开始
var Url_domainname = location.href;
var Url_domainname1 = '';
var $ = jQuery;
//2020.3.18注释
//$("#SI_Top_Login_title").click(function(){
//	$("#SI_Top_LoginLayer").show();
//	$("#SI_Top_Login_title").addClass("cur");
//});

$('#register_1').attr('href', 'javascript:;');
$('#register_1').live('click', function (e) {
    e.preventDefault();
    clearInterval(load)
    imgVerification('codemobilei')
    	setTimeout(function(){
		thisid = 'codemobilei'
	},500)
    load = setInterval(function () {
        loadNewCodeMobile(thisid);
    }, 180000)
    $(".loginMain .Maincont").hide();
    $(".loginMain .registerBox").show();
    $(".registerPhone").addClass("cur")
    $(".registerEmail").removeClass("cur")
    $(".loginMain .login_title span").eq(2).addClass("cur").siblings().removeClass("cur");
    $('#loginFloat').css('z-index', 99999); // 导航和顶通层级较高，样式有所
    $('.loginFloat').show();
});

$("#ccc").live("click", function () {
    // $("#SI_Top_LoginLayer").show();
    // $("#SI_Top_Login_title").addClass("cur");
    $('#loginFloat').css('z-index', 99999); // 导航和顶通层级较高，样式有所
    $('.loginFloat').show();
});

// $(".cur_move .layerbox_close").click(function () {
//     $("#SI_Top_LoginLayer").hide()
//     $("#SI_Top_Login_title").removeClass("cur");
// });

var shorturl = (Url_domainname.substr(0, Url_domainname.indexOf("/", 7)));
var zhuceurl = "//reg.cctv.cn/regist.html?from=" + shorturl + "&backurl=" + encodeURI(Url_domainname);
$("#SI_Top_LoginLayer .log_option .register_lnk").attr("href", zhuceurl);

if (Url_domainname.indexOf("?") == -1) {
    Url_domainname1 = Url_domainname;
} else {
    Url_domainname1 = Url_domainname.substr(0, Url_domainname.indexOf("?"));
}

// var qq_url = "//reg.cctv.cn/openapi/v2/user/oauth/qq?timestamp=" + timestamp + "&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl=" + encodeURIComponent(encodeURIComponent(Url_domainname));
// var weixin_url = "//reg.cctv.cn/openapi/v2/user/oauth/weChat?timestamp=" + timestamp + "&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl=" + encodeURIComponent(encodeURIComponent(Url_domainname));

// var xl_url = " //reg.cctv.cn/openapi/v2/user/oauth/sina?timestamp=" + timestamp + "&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl=" + encodeURIComponent(encodeURIComponent(Url_domainname));
// var zfb_url = "//reg.cctv.cn/openapi/v2/user/oauth/alipay?timestamp=" + timestamp + "&appid=dgtGyfXwN9Gcr7ow&methodl=login&backurl=" + encodeURIComponent(encodeURIComponent(Url_domainname));

// $("#qq_url").attr("href", qq_url);
// $("#weixin_url").attr("href", weixin_url);
// $("#xl_url").attr("href", xl_url);
// $("#zfb_url").attr("href", zfb_url);

var sns_userid = "";
var userSeqId = "";
var sns_userid = getCookie1('userSeqId');
function getCookie_main() {
    var userSeqId = getCookie1('userSeqId');
    var flag = passport.isLoginedStatus();
    if (flag) {
        var verifycode = getCookie1("verifycode")
        var muurl = '//reg.cctv.cn/openapi/v2/user/getNickNameAndFace';
        $.ajax({
            url: muurl,
            type: 'GET',
            dataType: 'json',
            data: {
                "timestamp": timestamp,
                "appid": "dgtGyfXwN9Gcr7ow",
                "verifycode": verifycode,
                "type": "ALL"
            },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            cache: true,
            success: function (data) {
                if (data.code == 0) {
                    islogin = true;
                    var namecookie = data.data.nickname;
                    if (namecookie.length > 5) {
                        namecookie = namecookie.substr(0, 2) + "...";
                    } else {
                        namecookie = namecookie;
                    }
                    document.getElementById('SI_Top_Login_title').innerHTML = '欢迎您，<a id="cookie_user_name2" class="tn-tab" href="//user.cctv.com" target="_blank" title="' + data.data.nickname + '">' + namecookie + '</a>';
                    document.getElementById('logout').innerHTML = '<a href="javascript:void(0);" onclick="logout()">退出</a>';
                    $("#SI_Top_Login").unbind();
                    document.getElementById("nicknm").value = data.data.nickname;
                } else { }
            }
        });
    } else {
        //展示 “登录” 按钮
        $('#SI_Top_LoginLayer .loginformlist table').eq(0).find('tr').eq(0).find('td').html('<input type="text" name="username" onfocus="if(this.value==this.defaultValue){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=this.defaultValue}" value="帐号" id="username" class="styles" autocomplete="off" onkeypress="getOnkeyDown_login(event)"><input type="hidden" value="client_transaction" id="service" name="service"><input type="hidden" value="//www.cntv.cn" id="from" name="from">');

        document.getElementById('SI_Top_Login_title').innerHTML = '<a id="ccc" class="tn-tab">登录</a>';
        document.getElementById('logout').innerHTML = '<a id="register_1" href="' + zhuceurl + '" target="_blank">注册</a>';
        /*$("#SI_Top_Login").mouseenter(function(){
            $("#SI_Top_LoginLayer").show();
            $("#ccc").css({"background":"#e8e8e8","color":"#1E63B0"});
        });
        $("#SI_Top_Login").mouseleave(function(){
            $("#SI_Top_LoginLayer").hide();
            $("#ccc").css({"background":"none","color":"#303030"});
        });*/
    }
}
getCookie_main();
document.getElementById("from").value = shorturl;
function handleResult(result) {
    var msg = result.msg;//提示信息
    var errorCode = result.errorCode;//错误码，i18n展示用
    if (passport.usernameError == result.type) {//如果是用户名有问题
        //在用户名的位置展示错误提示信息
        if (errorCode == "-1") {
            alert("格式不正确，请使用邮箱，手机号码或名字");
        } else if (errorCode == "-2") {
            alert("请输入密码!");
        } else if (errorCode == "-4") {
            alert("账户不存在!");
        } else if (errorCode == "-11") {
            alert("不能用昵称登录，请使用邮箱、手机号或用户名");
        } else if (errorCode == "-36") {
            alert("帐户信息进行审查中...");
        } else if (errorCode == "-40") {
            alert("该帐号已被封，请联系客服!");
        } else if (errorCode == "104") {
            alert("账号或密码错误，请重新输入!");
        } else if (errorCode == "106") {
            alert("您尚未激活，请去reg.cctv.com激活!");
        } else if (errorCode == "109") {
            alert("操作频繁，请24小时后重试。");
        } else if (errorCode == "-21014") {
            alert("格式不正确，请使用邮箱，手机号码或名字");
        } else if (errorCode == "-21003") {
            alert("请输入密码!");
        } else if (errorCode == "-21023") {
            alert("账号未激活");
        } else if (errorCode == "-21025") {
            alert("账号已被注销");
        } else if (errorCode == "-21024") {
            alert("该帐号已被封，请联系客服!");
        } else if (errorCode == "-21018") {
            alert("账号或密码错误，请重新输入!");
        }
    } else if (passport.passwordError == result.type) {//如果是密码有问题
        //在密码的位置展示错误提示信息
        if (errorCode == "-1") {
            alert("格式不正确，请使用邮箱，手机号码或名字");
        } else if (errorCode == "-2") {
            alert("请输入密码!");
        } else if (errorCode == "-4") {
            alert("账户不存在!");
        } else if (errorCode == "-11") {
            alert("不能用昵称登录，请使用邮箱、手机号或用户名");
        } else if (errorCode == "-36") {
            alert("帐户信息进行审查中...");
        } else if (errorCode == "-40") {
            alert("该帐号已被封，请联系客服!");
        } else if (errorCode == "104") {
            alert("账号或密码错误，请重新输入!");
        } else if (errorCode == "106") {
            alert("您尚未激活，请去reg.cctv.com激活!");
        } else if (errorCode == "109") {
            alert("操作频繁，请24小时后重试。");
        } else if (errorCode == "-21014") {
            alert("格式不正确，请使用邮箱，手机号码或名字");
        } else if (errorCode == "-21003") {
            alert("请输入密码!");
        } else if (errorCode == "-21023") {
            alert("账号未激活");
        } else if (errorCode == "-21025") {
            alert("账号已被注销");
        } else if (errorCode == "-21024") {
            alert("该帐号已被封，请联系客服!");
        } else if (errorCode == "-21018") {
            alert("账号或密码错误，请重新输入!");
        }
    } else if (passport.success == result.type) {//登录成功
        //处理用户id：result.usrid 或者 result.user_seq_id
        if ($("#check_user").attr('checked') == 'checked') {
            setCookie('cntv_main_usr', $("#username").attr("value"));
        } else {
        }
        setTimeout(function () {
            var verifycode = getCookie1("verifycode")
            muurl = 'https://reg.cctv.cn/openapi/v2/user/getNickNameAndFace';
            $.ajax({
                url: muurl,
                type: 'GET',
                dataType: 'json',
                data: {
                    "timestamp": timestamp,
                    "appid": "dgtGyfXwN9Gcr7ow",
                    "verifycode": verifycode,
                    "type": "ALL"
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                cache: true,
                success: function (data) {
                    callbackfun(data)
                }
            })
        }, 100)
    }
}

function callbackfun(data) {
    if (data.code == 0) {
        var nickname = data.data.nickname;
        if (nickname.length >= 7) {
            nickname = nickname.substr(0, 6) + "...";
        } else {
            nickname = nickname;
        }
        var html_name = '<a id="welcome">欢迎您，</a><a id="cookie_user_name2" class="tn-tab" href="//user.cctv.com" target="_blank" title="' + data.data.nickname + '">' + nickname + '</a>';
        $("#SI_Top_Login_title").html(html_name);
        document.getElementById('logout').innerHTML = '<a href="javascript:void(0);" onclick="logout()">退出</a>';
        $(".retrieve .search .optionBox .tn-title").css("cursor", "default");
        $("#SI_Top_Login_title").unbind();
        $("#SI_Top_LoginLayer").remove();
        if ($("#comment_iframe1").length > 0) {
            document.getElementById('comment_iframe1').contentWindow.location.reload();
        }
        try {
            jianchaStatus();
        } catch (e) {

        }
    } else {
        alert(data.error);
    }
}
function loginDemo() {
    document.getElementById("username").value = document.getElementById("username").value;
    document.getElementById("password").value = document.getElementById("password").value;
    var re = /[^\u4e00-\u9fa5]/;
    var flg = re.test(document.getElementById("username").value);
    if (document.getElementById("username").value == "" || document.getElementById("username").value == "帐号") {
        document.getElementById("username").focus();
        return false
    } else if (document.getElementById("password").value == "") {
        document.getElementById("password").style.display = "block";
        document.getElementById("password").focus();
        return false
    } else if (flg == false) {
        alert("帐号或密码错误");
        document.getElementById("username").value = "";
        document.getElementById("username").focus();
        return false;
    }
    var form = document.getElementById("loginForm");
    if ($("#check_user").attr('checked') == 'checked') {
        $("#check_user").attr("value", "checktrue");
    } else {
        $("#check_user").attr("value", "");
    }
    passport.checkJsonpForm(form, handleResult);
    $("#SI_Top_LoginLayer").hide();
}
function logout() {
    var from = shorturl;
    passport.logout(from);
    if (getCookie1('cntv_main_usr') == "" || getCookie1('cntv_main_usr') == null) {
        $('#SI_Top_LoginLayer .loginformlist table').eq(0).find('tr').eq(0).find('td').html('<input type="text" name="username" onfocus="if(this.value==this.defaultValue){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=this.defaultValue}" value="帐号" id="username" class="styles" autocomplete="off" onkeypress="getOnkeyDown_login(event)"><input type="hidden" value="client_transaction" id="service" name="service"><input type="hidden" value="//www.cctv.cn" id="from" name="from">');
    } else {
        $("#username").attr("value", getCookie1('cntv_main_usr'));
        $("#username").attr("onblur", "").attr("onfocus", "");
        $("#check_user").attr('checked', true);
    }

    document.getElementById('SI_Top_Login_title').innerHTML = '<a id="ccc" class="tn-tab">登录</a>';
     document.getElementById('logout').innerHTML = '<a id="register_1" href="' + zhuceurl + '" target="_blank">注册</a>';
}
function getOnkeyDown_login(e) {
    var ev = e;
    ev = ev || event;
    if (ev.keyCode == 13) {
        loginDemo();
    }
}
function show_pwd() {
    document.getElementById("passwd_view").style.display = "none";
    document.getElementById("password").style.display = "block";
    setTimeout(function () {
        $("#SI_Top_LoginLayer").css("display", "block")
        document.getElementById("password").focus()
    }, 1)
}
function getCookie1(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null
}
function setCookie(name, value) {
    var Days = 14;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie1(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
}
function get_main_usr() {
    if (getCookie1('cntv_main_usr') == "" || getCookie1('cntv_main_usr') == null) { } else {
        $("#username").attr("value", getCookie1('cntv_main_usr'));
        $("#username").attr("onblur", "").attr("onfocus", "");
        $("#check_user").attr('checked', true);
    }
}
$(function () {
    get_main_usr()
});
//登录相关结束

var buttonVal = $("#search").find(".buttonVal");
buttonVal.hover(function () {
    $(this).addClass("buttonVal_hover")
},
    function () {
        $(this).removeClass("buttonVal_hover")
    });


//搜索联想功能 BEGIN


function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");

}


//点击选中搜索
function queryByInput(qtext) {
    document.getElementById("sContent").style.display = "none";
    if (trim(qtext) != "") {
        window.open("https://search.cctv.cn/search.php?qtext=" + encodeURIComponent(qtext) + "&type=video", "_blank");
    } else {
        window.location.href = window.location.href;
    }
}

/*
用于搜索下拉框输出
*/
var selectSuggestNum = -1;
var checkFlag = true;
var _ajax2;
var _oldtext = "";

//点击其它地方收起下拉
if (document.all) {
    document.body.attachEvent("onclick", hideSuggest);
} else {
    document.body.addEventListener("click", hideSuggest);
}
function hideSuggest() {
    document.getElementById("sContent").style.display = "none";
}

document.getElementById("mytxtdafdfasdf").onkeydown = function () {
    var event = window.event || arguments[0];
    if (event.keyCode == 13) {//???

        try {
            event.cancelBubble = true;
            event.returnValue = false;
            event.stopPropagation();
            event.preventDefault();
        }
        catch (e) {
        }

        queryByInput(document.getElementById("mytxtdafdfasdf").value);
    }
    if (event.keyCode == 40 || event.keyCode == 38) {
        var keycode = event.keyCode;
        if (keycode == 40 || keycode == 38) {
            //向下向上
            changeSuggest(keycode);
        }
    }
    if (event.keyCode >= 16 && event.keyCode <= 47 || event.keyCode == 13) {
        checkFlag = false;
    } else {
        checkFlag = true;
    }


}
//点击下拉
function clickSuggest(_csuggest) {
    try {
        event.cancelBubble = true;
        event.returnValue = false;
        event.stopPropagation();
        event.preventDefault();
    }
    catch (e) {
    }
    if (_csuggest != "" && _csuggest != undefined) {
        document.getElementById("mytxtdafdfasdf").value = _csuggest;
        queryByInput(document.getElementById("mytxtdafdfasdf").value);
        resetSelect();
    }
}

function changeSuggest(keycode) {
    var rownum = document.getElementById("sContent").getElementsByTagName("li").length;
    if (selectSuggestNum == -1 || selectSuggestNum == undefined) {
        if (keycode == 40) rowON = 0;
        if (keycode == 38) rowON = rownum + selectSuggestNum;
    } else {
        if (keycode == 40) rowON = selectSuggestNum + 1;
        if (keycode == 38) rowON = selectSuggestNum - 1;

    }
    if (rowON < 0 || rowON >= rownum) {
        resetSelect();
        return false;
    } else {
        document.getElementById("mytxtdafdfasdf").value = suggestJSON[rowON]['name'];
        onSuggest(rowON);
    }
    if (rownum > 0 && document.getElementById("sContent").style.display != "block") {
        document.getElementById("sContent").style.display = "block";
        return false;
    }
}
function resetSelect() {
    var sel_suggest = "suggest_" + selectSuggestNum;
    if (document.getElementById(sel_suggest) != undefined)
        document.getElementById(sel_suggest).className = "";
    selectSuggestNum = -1;
    document.getElementById("mytxtdafdfasdf").value = _oldtext;
    document.getElementById("sContent").style.display = "block";
    checkFlag = false;
}

function checkSuggest(qtext) {
    if (checkFlag) {
        if (qtext != "" && qtext != undefined && qtext != _oldtext) {
            var sug_url = "https://search.cctv.cn/webtvsuggest.php?q=" + encodeURIComponent(qtext);
            _oldtext = qtext;
            //alert(qtext);
            loadData_sug(sug_url, createSuggest);
        } else {
            if (qtext == "")
                document.getElementById("sContent").style.display = "none";
            else if (qtext == _oldtext)
                document.getElementById("sContent").style.display = "block";
        }
    }
}
function loadData_sug(url, func) {

    var ds2 = document.createElement("script");
    ds2.src = url;
    ds2.setAttribute("charset", "utf-8");
    ds2.type = "text/javascript";
    ds2.language = "javascript";
    ds2.onload = ds2.onreadystatechange = function () {
        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
            if (_ajax2) {
                try {
                    _ajax2.parentNode.removeChild(_ajax2);
                }
                catch (e) {
                    _ajax2.parentElement.removeChild(_ajax2);
                }
            }
            _ajax2 = ds2;
            func();
        }
    }
    document.getElementById("ajaxdata2").appendChild(ds2);
}
function createSuggest() {
    if (document.getElementById("search_div_head") != undefined) {
        var _top = getTop(document.getElementById("search_div_head")) + 40;
        var _left = getLeft(document.getElementById("search_div_head")) + 1;
        document.getElementById("sContent").style.left = _left + "px";
        document.getElementById("sContent").style.top = _top + "px";
    }

    if (suggestJSON.length > 0) {
        resetSelect();
        var sug_str = '<ul>';
        for (var fv in suggestJSON) {
            sug_str += '<li id="suggest_' + fv + '" onmouseover="onSuggest(' + fv + ')" onclick="clickSuggest(\'' + suggestJSON[fv]['name'] + '\')" ><a>' + suggestJSON[fv]['name'] + '</a></li>';
        }
        sug_str += '</ul>';
        document.getElementById("sContent").innerHTML = sug_str;
        document.getElementById("sContent").style.display = "block";
    } else {
        document.getElementById("sContent").style.display = "none";
    }
}
function onSuggest(rowON) {
    var rownum = document.getElementById("sContent").getElementsByTagName("li").length;
    var _suggest = "suggest_" + rowON;
    if (selectSuggestNum != -1 && selectSuggestNum != undefined) {
        var sel_suggest = "suggest_" + selectSuggestNum;
        document.getElementById(sel_suggest).className = "";
    }
    if (rowON < 0 || rowON >= rownum) {
        resetSelect();
        return false;
    } else {
        document.getElementById(_suggest).className = "lx_dq";
        selectSuggestNum = rowON;
    }

}
//搜索联想功能 END


$(function () {
    //导航自动高亮
    var url = window.location.href;
    var navchannel = url.split('/')[3];
    if (navchannel == "" || url == "//tv.cctv.com" || url == "//tv.cctv.cn/" || url == "//tv.cctv.cn/index.shtml" || url.indexOf("//tv.cctv.cn/?") > -1 || url.indexOf("//tv.cctv.cn/index.shtml?") > -1) {
        $(".gwA151201_ind01 .kj .nav:first-child").find("a:first-child").addClass("cur");
    } else if (url.split('/')[2] === "xiaobang.tv.cctv.com") {
    } else if (navchannel == "lm") {
        $(".gwA151201_ind01 .kj .nav").find("a").removeClass("cur");
        $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff");
        $(".gwA151201_ind01 .nav2 .xl2 a").css("font-weight", "bold");
        $(".gwA151201_ind01 .nav2 .xl3").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 124px 21px")
        $(".gwA151201_ind01 .nav2 .xl3 a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px #e42626")
        $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff")
    } else if (navchannel == "yxg") {
        $(".gwA151201_ind01 .kj .nav").find("a").removeClass("cur");
        $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl3").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 124px 21px")
        $(".gwA151201_ind01 .nav2 .xl3 a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl3").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18_hover2.png) no-repeat 124px 21px #e42626");
        $(".gwA151201_ind01 .nav2 .xl3 a").css("font-weight", "bold");
        $(".gwA151201_ind01 .nav2 .xl3 a").css("color", "#fff");
    } else if (navchannel != "" && navchannel != undefined) {
        $(".gwA151201_ind01 .kj .nav").find("a").each(function (i) {
            var _href = $(this).attr("href");
            $(".gwA151201_ind01 .kj .nav").find("a").removeClass("cur");
            $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
            $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")
            $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
            $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff")
            $(".gwA151201_ind01 .nav2 .xl3").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 124px 21px")
            $(".gwA151201_ind01 .nav2 .xl3 a").css("color", "#fff")
            if (_href.indexOf(navchannel) > 0) {
                $(this).addClass("cur");
                return false;
            }
        });
    }

    //频道大全 栏目大全
    $("#pddq").mouseenter(function () {
        $(".pddq_tp1").hide();
        $(".lmdq_tp1").hide();
        $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff")
        $(".pddq_tp1").slideDown();
        $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18_hover2.png) no-repeat 98px 21px #e42626")
        $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")

    })
    $(".xl").mouseleave(function () {
        $(".pddq_tp1").slideUp();
        $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")
    });

    $("#lmdq").mouseenter(function () {
        $(".pddq_tp1").hide();
        $(".lmdq_tp1").hide();
        $(".lmdq_tp1").css({ "height": "116px", "border-bottom": "1px solid #ebebeb" });

        $(".gwA151201_ind01 .nav2 .xl").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
        $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#464c58")

        $(".lmdq_tp1").slideDown();
        $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18_hover2.png) no-repeat 98px 21px #e42626")
        $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff")
        $(".gwA151201_ind01 .nav2 .xl2 ul li a").css("color", "#464c58")
    })
    $(".xl2").mouseleave(function () {
        $(".lmdq_tp1").slideUp();
        $(".lmdq_tp1").css({ "height": "0px", "border-bottom": "none" });
        if (navchannel == "lm") {
            $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px #e42626")
        } else if (navchannel != "lm") {
            $(".gwA151201_ind01 .nav2 .xl2").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 98px 21px")
            $(".gwA151201_ind01 .nav2 .xl2 a").css("color", "#fff")
        }
        $(".gwA151201_ind01 .nav2 .xl2 .lmdq_tp1 .kjc ul li a").css("color", "#333")
    })

    $("#yxg").mouseenter(function () {
        $(".gwA151201_ind01 .nav2 .xl3").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18_hover2.png) no-repeat 124px 21px #e42626")
        $(".gwA151201_ind01 .nav2 .xl3 a").css("color", "#fff")
    })
    $(".xl3").mouseleave(function () {
        if (navchannel != "yxg") {
            $(".gwA151201_ind01 .nav2 .xl3").css("background", "url(//p3.img.cntv.cn/photoAlbum/templet/common/DEPA1367457523502574/jdi18.png) no-repeat 124px 21px")
            $(".gwA151201_ind01 .nav2 .xl3 a").css("color", "#fff")
        }
    })

    $("#jmdq li").each(function (i) {
        $(this).mouseenter(function () {
            $(this).siblings("li").removeClass("cur").end().addClass("cur");
            $("#up_" + i).siblings(".up_top").css({ "display": "none" }).end().css({ "display": "block" });
            if ($("#up_" + i).find("iframe").attr("src") == "") {
                var text_iframe_src = $("#up_" + i).find("iframe").attr("data");
                $("#up_" + i).find("iframe").attr("src", text_iframe_src);
            }
        });
    });
})  