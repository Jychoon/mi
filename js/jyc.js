
$(document).ready(function(){
    $("#topbar-cart").hover(function(){
        $("#load").slideToggle("fast");
    });
    var xx = $.getUrlParam('id');
    console.log(xx);
    if(xx!=null){
        flag=1;
        $("#login").text("admin");
       $("#register").text("消息通知");
       $("#dd").text("我的订单");
        $("#login").attr("href","../mi/views/Personal_central.html");
        $("#register").attr("href","../mi/views/xiaoxi.html");
    }
});
function  navallOver() {
    document.getElementById("navbar").style.display="block";
}
function navallOut(){
    document.getElementById("navbar").style.display="none";
}
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

