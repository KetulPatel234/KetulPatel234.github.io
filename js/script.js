document.addEventListener('DOMContentLoaded', function () {
    var backgroundCarousel = new bootstrap.Carousel(document.getElementById('places_carousel'), {
      interval: 4000
    });
  
    var foregroundCarousel = new bootstrap.Carousel(document.getElementById('places_carousel_back'), {
      interval: 4000
    });
  
    var backgroundCarouselElement = document.getElementById('places_carousel');
    var foregroundCarouselElement = document.getElementById('places_carousel_back');
  
    var isBackgroundChanging = false;
    var isForegroundChanging = false;
  
    backgroundCarouselElement.addEventListener('slide.bs.carousel', function (event) {
      if (!isForegroundChanging) {
        var nextIndex = event.to;
        isBackgroundChanging = true;
        foregroundCarousel.to(nextIndex);
      }
    });
  
    foregroundCarouselElement.addEventListener('slide.bs.carousel', function (event) {
      if (!isBackgroundChanging) {
        var nextIndex = event.to;
        isForegroundChanging = true;
        backgroundCarousel.to(nextIndex);
      }
    });
  
    backgroundCarouselElement.addEventListener('slid.bs.carousel', function () {
      isBackgroundChanging = false;
    });
  
    foregroundCarouselElement.addEventListener('slid.bs.carousel', function () {
      isForegroundChanging = false;
    });
  });