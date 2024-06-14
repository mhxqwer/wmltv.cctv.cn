function wrapText() {
    $(".image_lib_ul .text").each(function (i) {
		 var divH = $(this).height();
        var $a = $(this).find("a").eq(0);
        while ($a.outerHeight() > divH) {
            $a.text($a.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
    });
}