//이벤트 기획전 슬라이드
    $(function(){
        function eventnext() {
            $(".eventslide").stop().animate({ marginLeft: -250 }, function () {
                $(".eventslide li:first").appendTo(".eventslide");
                $(".eventslide").css({ marginLeft: 0 });
            });
        }

        function eventprev() {            
            $(".eventslide li:last").prependTo(".eventslide");
            $(".eventslide").css({ marginLeft: -250 });
            $(".eventslide").stop().animate({ marginLeft: 0 });            
        }
    
    
        $(".eventnext").click(function(){
            eventnext();
        });

        $(".eventprev").click(function(){
            eventprev();
        });
    });