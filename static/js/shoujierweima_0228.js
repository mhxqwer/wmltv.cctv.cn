(function() {

    $(".iphonesee_box").hover(function(){
        $(this).find(".iphone_icon").addClass("cur");
    },function(){
        $(this).find(".iphone_icon").removeClass("cur");
    });

    var shareWxBtn = $(".iphonesee_box");
    shareWxBtn.live("mouseenter",
        function() {
            createCode("//r.img.cntv.cn/photoAlbum/templet/js/jquery.qrcode.min.js", "code-btn");
        });
    shareWxBtn.live("mouseleave",function(){
        $("#erweima_con").hide();
    });

    function createCode(url, data) {
        if ($("#codeqra").length > 0) {
            $("#erweima_con").show();
        } else {
            if ($("#shareqrjs").length > 0) {
                huizhi(data);
            } else {
                var d = document.createElement("script");
                d.setAttribute("charset", "utf-8");
                d.type = "text/javascript";
                d.language = "javascript";
                d.id = "shareqrjs";
                d.src = url;
                document.getElementsByTagName("body")[0].appendChild(d);
                if (d.readyState) {
                    d.onreadystatechange = function() {
                        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                            huizhi(data);
                        }
                    }
                } else {
                    d.onload = function() {
                        huizhi(data);
                    }
                }
            }
        }
        function huizhi(data) {
            var stre = '<div id="img" class="img">';
            stre += '<div id="codeqra" class="codeqra">';
            stre += "</div>";
            stre += "</div><p>扫一扫 手机继续看</p> ";
            $("#erweima_con").append(stre);
            $("#erweima_con").show();
            var ua = "canvas";
            if (navigator.userAgent.indexOf("MSIE") > -1) {
                ua = "table"
            }
            jQuery("#codeqra").qrcode({
                render: ua,
                foreground: "#000",
                background: "#FFF",
                width: 103,
                height: 102,
                text:window.location.href
            });

        }
    }
})();

