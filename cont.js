$(document).ready(function(){
    $("#btn1").mouseover(function(){
        $("#btn1").addClass("animated flip")
    });
    $("#btn1").mouseout(function(){
        $("#btn1").removeClass("animated flip")
    });
});