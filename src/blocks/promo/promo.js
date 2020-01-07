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
    'accessibility': false
  });

function mouseWheel(slider) {
  $(window).on('wheel', { 'slider': slider }, mouseWheelHandler);
}

function mouseWheelHandler(event) {
  const slider = event.data.slider;
  const delta = event.originalEvent.deltaY;
  if (delta > 0) {
    slider.slick('slickPrev');
  } else {
    slider.slick('slickNext');
  }
}
