//CD,DVD,특별판 밑 배너
$.ajax({

    url: "./js/etcbanner.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;                

                $("#etc .etcbox .box_banner").eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].url+'"></a>');
            }

        }

    }

});