//추천도서 슬라이드
$(function(){
        //추천도서1
        function rbnext1() {
            $(".bBslide1").stop().animate({ marginLeft: -159,}, function () {
                $(".bBslide1 li:first").appendTo(".bBslide1");
                $(".bBslide1").css({ marginLeft: 0 });
            });
        }

        function rbprev1() {            
            $(".bBslide1 li:last").prependTo(".bBslide1");
            $(".bBslide1").css({ marginLeft: -159 });
            $(".bBslide1").stop().animate({ marginLeft: 0 });            
        }

        $(".rbnext1").click(function(){
            rbnext1();
        });

        $(".rbprev1").click(function(){
            rbprev1();
        });

        //추천도서2
        function rbnext2() {
            $(".bBslide2").stop().animate({ marginLeft: -159,}, function () {
                $(".bBslide2 li:first").appendTo(".bBslide2");
                $(".bBslide2").css({ marginLeft: 0 });
            });
        }

        function rbprev2() {            
            $(".bBslide2 li:last").prependTo(".bBslide2");
            $(".bBslide2").css({ marginLeft: -159 });
            $(".bBslide2").stop().animate({ marginLeft: 0 });            
        }

        $(".rbnext2").click(function(){
            rbnext2();
        });

        $(".rbprev2").click(function(){
            rbprev2();
        });

        //추천도서3
        function rbnext3() {
            $(".bBslide3").stop().animate({ marginLeft: -159,}, function () {
                $(".bBslide3 li:first").appendTo(".bBslide3");
                $(".bBslide3").css({ marginLeft: 0 });
            });
        }

        function rbprev3() {            
            $(".bBslide3 li:last").prependTo(".bBslide3");
            $(".bBslide3").css({ marginLeft: -159 });
            $(".bBslide3").stop().animate({ marginLeft: 0 });            
        }

        $(".rbnext3").click(function(){
            rbnext3();
        });

        $(".rbprev3").click(function(){
            rbprev3();
        });
    });  