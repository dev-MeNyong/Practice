$(document).ready(function() {
    $("#container").addClass("start");
    $("nav li").click(function(){
        $("#container").css("max-width","100%");
        var id =$(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        $(".content").removeClass("prev this next");
        //클릭 시 가지고 있던 클래스를 모두 지운다.
        $("#"+ id).addClass("this").prevAll().addClass("prev");
        //클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 section태그는 .prev 클래스 지정
        $("#"+ id).nextAll().addClass("next");
    });
    $(".logo_box").click(function(){
        $("nav li").removeClass("on");
        $(".content").removeClass("Prev this next");
        $("#container").css("max-width","1200px");
    });

    $(".roll_left").click(function(){
        $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    });

    $(".roll_right").click(function(){
        $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    });

    $(".book_roll li").click(function(){
        var _this =$(this);
        var liurl =_this.data("url");
        $(".notebook").html();
        $.ajax({
            type :'post',
            url : liurl,
            dataType :'html',
            success: function(data){
                $(".notebook").html(data);
            }
        });
    });
    $(".accordio_box ol li").click(function(){
       $(".accordio_box ol li").removeClass("on");
        $(this).addClass("on");
    });

    $(".close").click(function(){
        $(".thankyou_message").css("display","none");
    });
});