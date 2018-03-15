

$(document).ready(function(){
    $("#topbar-cart").hover(function(){
        $("#load").slideToggle("fast");
    });
});

function  navallOver() {
    document.getElementById("navbar").style.display="block";
}
function navallOut(){
    document.getElementById("navbar").style.display="none";
}

