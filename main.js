$(document).ready(function(){
    $(window).scroll(function(){
        $("#navbar").toggleClass("scrolled", $(this).scrollTop() > 60);
        $("#mobtop").toggleClass("scrolled", $(this).scrollTop() > 60);
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop=$(window).scrollTop();
            if (pos<winTop+700) {
                $(this).addClass("slide");
            }
        });
    });
    $(".skillbg").hover(function(){
        $(this).css({"width":"+=60px","transition":"0.5s ease","border-right":"1px solid #2473f2"});
    },
    function(){
        $(this).css({"width":"70px","border-right":"none"});
    });
});
$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $("#navbar a,#navbar h1, #mobtop a").on('click', function(event) {
  
     // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
  
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if
    });
});
// Mobile Optimised
$(document).ready(function(){
    $("#navmenubtn").click(function(){
        $("#navmenu").slideToggle(500);
    }); 
});