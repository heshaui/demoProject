/**
 * 解决移动端1px问题
 */
function reduction_1px(){
    var viewport = document.querySelector("meta[name=viewport]");
    var dpr = window.devicePixelRatio || 1;
    var scale = 1 / dpr;
    //下面是根据设备dpr设置viewport
    viewport.setAttribute(
        "content", +
        "width=device-width," +
        "initial-scale=" +
        scale +
        ", maximum-scale=" +
        scale +
        ", minimum-scale=" +
        scale +
        ", user-scalable=no"
    );
}

/**
 * 动态设置全局fontSize
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//判断页面是否是在微信浏览器打开
//对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
    window.location.href = "wxError.html";//若不是微信浏览器，跳转到温馨error页面
}

//页面加载前调用
reduction_1px();

