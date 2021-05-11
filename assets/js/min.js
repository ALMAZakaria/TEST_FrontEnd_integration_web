$('#multi-carousel').on('slide.bs.carousel', function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('#multi-carousel .carousel-item').length;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $('#multi-carousel .carousel-item').eq(i).appendTo('#multi-carousel .carousel-inner');
        } else {
          $('#multi-carousel .carousel-item').eq(0).appendTo('#multi-carousel .carousel-inner');
        }
      }
    }
  });