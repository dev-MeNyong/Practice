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
});