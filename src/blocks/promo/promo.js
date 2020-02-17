const slider = $('.promo__list');
slider
  .on('init', () => {
    mouseWheel(slider);
  })
  .slick({
    'dots': true,
    'vertical': true,
    'arrows': false,
    'verticalSwiping': true,
    'infinite': false,
    'accessibility': false,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }
    ]
  });

function mouseWheel(slider) {
  $(window).on('wheel', { 'slider': slider }, mouseWheelHandler);
}

function mouseWheelHandler(event) {
  const slider = event.data.slider;
  const delta = event.originalEvent.deltaY;
  if (delta > 0) {
    slider.slick('slickNext');

  } else {
    slider.slick('slickPrev');
  }
}

$('.promo__sub-list').slick({
  autoplay: true,
  dots: false,
  arrows: false,
  fade: true,
  pauseOnFocus: false,
  pauseOnHover: false
})