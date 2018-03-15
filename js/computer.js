$(document).ready(function(){
    $("table tr th").hover(
        function(){
            $(this).children("div").fadeIn(1000);//让相应二级内容显示
        },
        function(){
            var ch=$(this).children("div");//让相应二级内容隐藏

            ch.mouseover(function () {


                //$(this).show();
            });
            ch.mouseleave(function () {
                ch.slideUp(300);
            });
            var flag = ch.is(":hidden");
            if(flag){

            }else{
                ch.slideUp(300);
            }
        }

    );

});
/* $(document).ready(function () {
    $(".shoping").click(function () {
        $(".shopcar").show();

    })
    $("#shopclose").click(function () {
        $(".shopcar").hide();
    })
})

function changeImg(){
    var $imgs=$("#ad_img li");
    var $nums=$("#ad_num li");

    var isStop=false;
    var index=0;

    $nums.eq(index).addClass("numsover");
    $nums.eq(index).siblings().removeClass("numsover");
    $imgs.eq(index).show();
    $nums.mouseover(function(){
        isStop=true;*/
        /*先把数字的背景改了*/
        /*
        $(this).addClass("numsover").siblings().removeClass("numsover");

        /*图片的索引和数字的索引是对应的，所以获取当前的数字的索引就可以获得图片，从而对图片进行操作*/
        /*index=$nums.index(this);
        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");
    }).mouseout(function(){isStop=false});
    /*设置循环*/
   /* $imgs.mouseover(function(){
        isStop=true;
    }).mouseout(function(){isStop=false});
    setInterval(function(){
        if(isStop) return;
        if(index>=5) index=-1;
        index++;

        $nums.eq(index).addClass("numsover").siblings().removeClass("numsover");

        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");

    },4000);
}
$(document).ready(function(e) {
    changeImg();
});
$(function(){
    $('.bot-img ul li').click(function(){
        var _this=$(this);
        _this.addClass('active').siblings('li').removeClass('active');
        var int=_this.index();
        $('.activeimg').animate({left:int*-1800},"slow");
    });
    var list=$('.bot-img ul li').length;
    $('.activeimg').css({
        width:list*1800,
    });
    $('.right').click(function(){
        next(list)

    })
    $('.left').click(function(){
        prev(list)
    });

    //自动播放 2秒播放一次 无限循环
    var timer='';
    var num=0;
    timer=setInterval(function(){ //打开定时器
        num++;
        if(num>parseFloat(list)-1){
            num=0;
            $('.activeimg').animate({left:num*-1800},"slow");
        }else{
            $('.activeimg').animate({left:num*-1800},"slow");
        }
    },4000);
})
var index=0;
//下一张
function next(list){
    if(index<list-1){
        index++;
        $('.activeimg').animate({left:index*-1800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        index=0;
        $('.activeimg').animate({left:index*-1822},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}
//        上一张
function prev(list){
    index--;
    if(index<0){
        index=list-1;
        $('.activeimg').animate({left:index*-1800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        $('.activeimg').animate({left:index*-1800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}
   */