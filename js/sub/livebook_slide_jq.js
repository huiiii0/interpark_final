//라이브북 슬라이드
$(function(){
    function livenext() {
        $(".liveslide").stop().animate({ marginLeft: -400 }, function () {
            $(".liveslide li:first").appendTo(".liveslide");
            $(".liveslide").css({ marginLeft: 0 });
        });
    }

    function liveprev() {            
        $(".liveslide li:last").prependTo(".liveslide");
        $(".liveslide").css({ marginLeft: -400 });
        $(".liveslide").stop().animate({ marginLeft: 0 });            
    }

    $(".liveprev").click(function(){
        liveprev();
    });

    $(".livenext").click(function(){
        livenext();
    });
});