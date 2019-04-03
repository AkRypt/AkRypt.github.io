$(document).ready(function(){
    $("#btn").click(function(){
        $("#rules").css({display:"none"});
        $("#btn").css({display:"none"});
        $("h1").text("Question #1:");
        $("#q1").css({display:"block"});
    });
});