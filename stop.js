
//屏蔽
    var system = {
        win: false,
        mac: false,
        xll: false
    };
    var p = navigator.platform;
    var us = navigator.userAgent.toLowerCase();
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {
    var iframe_url=cms.root+'stop.html';
    $("head").html('<meta charset="UTF-8"><meta name="referrer" content="no-referrer"><title>抱歉，站点已暂停</title><style>body{position:static !important;}body *{ visibility:hidden; }</style> ');
    $("body").empty();
    $(document).ready(function () {
    $("body").html('<iframe style="width:100%; height:460px;position:absolute;margin-left:0px;margin-top:0px;left:0%;" id="mainFrame" src="'+iframe_url+'" frameborder="0" scrolling="no"></iframe>').show();
    $("body *").css("visibility", "visible");
  });
}
