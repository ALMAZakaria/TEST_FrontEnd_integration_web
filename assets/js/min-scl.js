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