//접어보기,펼쳐보기
$(function(){
    //책소개
    $(".toggleBtn1 .down").click(function(){
        $("#introBookWrap").css({"height":"400px"});
        $("#introBook").css({"height":"400px"});
        $(".toggleBtn1 .down").css({"display":"none"});
        $(".toggleBtn1 .up").css({"display":"block"});
    });

    $(".toggleBtn1 .up").click(function(){
        $("#introBookWrap").css({"height":"150px"});
        $("#introBook").css({"height":"110px"});
        $(".toggleBtn1 .up").css({"display":"none"});
        $(".toggleBtn1 .down").css({"display":"block"});
    });

    //출판사 서평
    $(".toggleBtn2 .down").click(function(){
        $("#seopWrap").css({"height":"2500px"});
        $("#seop").css({"height":"2500px"});
        $(".toggleBtn2 .down").css({"display":"none"});
        $(".toggleBtn2 .up").css({"display":"block"});
    });

    $(".toggleBtn2 .up").click(function(){
        $("#seopWrap").css({"height":"150px"});
        $("#seop").css({"height":"110px"});
        $(".toggleBtn2 .up").css({"display":"none"});
        $(".toggleBtn2 .down").css({"display":"block"});
    });

    //목차
    $(".toggleBtn3 .down").click(function(){
        $("#listWrap").css({"height":"200px"});
        $("#list").css({"height":"200px"});
        $(".toggleBtn3 .down").css({"display":"none"});
        $(".toggleBtn3 .up").css({"display":"block"});
    });

    $(".toggleBtn3 .up").click(function(){
        $("#listWrap").css({"height":"150px"});
        $("#list").css({"height":"110px"});
        $(".toggleBtn3 .up").css({"display":"none"});
        $(".toggleBtn3 .down").css({"display":"block"});
    });

    //본문중에서
    $(".toggleBtn4 .down").click(function(){
        $("#articleWrap").css({"height":"1650px"});
        $("#article").css({"height":"1650px"});
        $(".toggleBtn4 .down").css({"display":"none"});
        $(".toggleBtn4 .up").css({"display":"block"});
    });

    $(".toggleBtn4 .up").click(function(){
        $("#articleWrap").css({"height":"150px"});
        $("#article").css({"height":"110px"});
        $(".toggleBtn4 .up").css({"display":"none"});
        $(".toggleBtn4 .down").css({"display":"block"});
    });        
});