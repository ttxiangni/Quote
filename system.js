//统计
document.writeln("<script>");
document.writeln("var _hmt = _hmt || [];");
document.writeln("(function() {");
document.writeln("  var hm = document.createElement(\'script\');");
document.writeln("  hm.src = \'https://hm.baidu.com/hm.js?94c6d2783d4c9299676ea164f11e2440\';");
document.writeln("  var s = document.getElementsByTagName(\'script\')[0]; ");
document.writeln("  s.parentNode.insertBefore(hm, s);");
document.writeln("})();");
document.writeln("</script>");
//地区
document.writeln("<script src=\'https://pv.sohu.com/cityjson?ie=utf-8\'></script>");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("		if(returnCitySN[\'cname\'].indexOf(\'香港\') != -1){");
document.writeln("			window.location.href=\'https://www.zhuijukan.com\'");
document.writeln("		}");
document.writeln("</script>");
//主题自定义JS库
$(document).ready(function(){
	//悬浮广告
	$(".ff-fixed").each(function(i){
		feifei.scroll.fixed($(this).attr('id'));
	});
	//feifei.language.s2t();
});
//JS特效
!function(e, t, a) {
function r() {
for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
requestAnimationFrame(r)
}
function n() {
var t = "function" == typeof e.onclick && e.onclick;
e.onclick = function(e) {
t && t(),
o(e)
}
}
function o(e) {
var a = t.createElement("div");
a.className = "heart",
s.push({
el: a,
x: e.clientX - 5,
y: e.clientY - 5,
scale: 1,
alpha: 1,
color: c()
}),
t.body.appendChild(a)
}
function i(e) {
var a = t.createElement("style");
a.type = "text/css";
try {
a.appendChild(t.createTextNode(e))
} catch(t) {
a.styleSheet.cssText = e
}
t.getElementsByTagName("head")[0].appendChild(a)
}
function c() {
return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
}
var s = [];
e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
function(e) {
setTimeout(e, 1e3 / 60)
},
i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
n(),
r() } (window, document);
