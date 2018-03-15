

$(document).ready(function(){
    $("#topbar-cart").hover(function(){
        $("#load").slideToggle("fast");
    });
    var xx = $.get();
    console.log(xx);
    if(xx!=null){
        $("#login").text("admin");
       $("#register").text("个人中心");
        $("#login").attr("href","/index.html");
        $("#register").attr("href","/views/mobilephone.html");
    }
});
var id=getUrlParam('id');
function  navallOver() {
    document.getElementById("navbar").style.display="block";
}
function navallOut(){
    document.getElementById("navbar").style.display="none";
}


