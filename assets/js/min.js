  /* //Hide menu on scroll
   var scroll1 = window.pageYOffset;
   window.onscroll = function(){
     var scroll2 = window.pageYOffset;
     if (scroll1>scroll2) {
       document.querySelector('.nav-fixed').style.top="0";
     }else{
     document.querySelector('.nav-fixed').style.top="-87px";
   }
   scroll1 = scroll2;
   }
  
   $(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#rotop').fadeIn(200);
    } else {
        $('#rotop').fadeOut(200);
    }
    });
    
    // Animate the scroll to top
    $('#rotop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
    })
    });
    
    */
    
    if ($('.smart-scroll').length > 0) { 
  // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top||last_scroll_top<150) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });  }
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 720) {
            $(this).addClass("slide");
          }
      });
    });
    $(window).scroll(function() {
      $(".FadeIn-right").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 720) {
            $(this).addClass("FadeIn-r");
          }
      });
    });
    $(window).scroll(function() {
      $(".FadeIn-left").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 720) {
            $(this).addClass("FadeIn-l");
          }
      });
    });
    $(window).scroll(function() {
      $(".easeShow").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("easeS");
          }
      });
    });