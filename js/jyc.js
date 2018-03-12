

$(document).ready(function(){
    $("#topbar-cart").hover(function(){
        $("#load").slideToggle("fast");
    });
    $("#nav-all").hover(function(){
       $("#navbar").slideToggle("fast");
    });
    $("#navbar").hover(function(){
        this.css("display","block");
    })
    $("#phone").hover(function(){
        $("#navbar1").slideToggle("fast");
    });
    $("#hongmi").hover(function(){
        $("#navbar2").slideToggle("fast");
    });
    $("#tv").hover(function(){
        $("#navbar3").slideToggle("fast");
    });
    $("#computer").hover(function(){
        $("#navbar4").slideToggle("fast");
    });
    $("#hezi").hover(function(){
        $("#navbar5").slideToggle("fast");
    });
    $("#news").hover(function(){
        $("#navbar6").slideToggle("fast");
    });
    $("#router").hover(function(){
        $("#navbar7").slideToggle("fast");
    });
    $("#hard").hover(function(){
        $("#navbar8").slideToggle("fast");
    });

});