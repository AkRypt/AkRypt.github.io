$(document).ready(function(){
    var total=0;
    $("#btn").click(function(){
        $("#rules").css({display:"none"});
        $("#btn").css({display:"none"});
        $("#que").text("Question #1:").addClass("animated slideInDown");
        $("#q1").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#a1").click(function(){
        total+=1;
        $("#que").text("Question #2:");
        $("#q1").css({display:"none"});
        $("#q2").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#b1").click(function(){
        $("#que").text("Question #2:");
        $("#q1").css({display:"none"});
        $("#q2").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#a2").click(function(){
        total+=1;
        $("#que").text("Question #3:");
        $("#q2").css({display:"none"});
        $("#q3").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#b2").click(function(){
        $("#que").text("Question #3:");
        $("#q2").css({display:"none"});
        $("#q3").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#a3").click(function(){
        total+=1;
        $("#que").text("Question #4:");
        $("#q3").css({display:"none"});
        $("#q4").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#b3").click(function(){
        $("#que").text("Question #4:");
        $("#q3").css({display:"none"});
        $("#q4").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#a4").click(function(){
        total+=1;
        $("#que").text("Question #5:");
        $("#q4").css({display:"none"});
        $("#q5").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#b4").click(function(){
        $("#que").text("Question #5:");
        $("#q4").css({display:"none"});
        $("#q5").css({display:"block"}).addClass("animated slideInUp");
    });
    $("#a5").click(function(){
        total+=1;
        $("#que").css({display:"none"});
        $("#q5").css({display:"none"});
        $("#result").css({display:"block"});
        $("#result").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $("#result").removeClass("animated rollIn delay-1s");
            $("#result").addClass("animated tada");
        });
        $("#c").css({display:"block"});
        $("#wd").css({display:"block"});
        $("#wd").text("You got "+total+" out of 5!");
        $("#res").text(total);
    });
    $("#b5").click(function(){
        $("#que").css({display:"none"});
        $("#q5").css({display:"none"});
        $("#result").css({display:"block"});
        $("#result").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $("#result").removeClass("animated rollIn delay-1s");
            $("#result").addClass("animated tada");
        });
        $("#c").css({display:"block"});
        $("#wd").css({display:"block"});
        $("#wd").text("You got "+total+" out of 5!");
        $("#res").text(total);
    });
});

// window.onbeforeunload = function() {
//     return "Data will be lost if you leave the page, are you sure?";
// };