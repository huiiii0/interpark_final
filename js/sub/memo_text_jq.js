//메모장으로 텍스트 가져오기
$(function(){
    //책소개
    $.get("./sub_txt/txt1.txt", function(data) {
        $("#introBook").html(data);
    })     
    //출판사 서평
    $.get("./sub_txt/txt2.txt", function(data) {
        $("#seop").html(data);
    })  
    //목차
    $.get("./sub_txt/txt3.txt", function(data) {
        $("#list").html(data);
    })  
    //본문중에서
    $.get("./sub_txt/txt4.txt", function(data) {
        $("#article").html(data);
    })
    //리뷰내용
    $.get("./sub_txt/reviewTxt.txt", function(data) {
        $("#review .reviewBody .middle li .content").html(data);
    })
});