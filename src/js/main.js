//= "../blocks/menu/menu.js"
//= "../blocks/promo/promo.js"

const reviewsList = document.querySelectorAll(".reviews__item");

reviewsList.forEach(item => {
  item.addEventListener("click", evt => {
    evt.preventDefault();
    const target = evt.target.closest(".reviews__link");
    const more = item.querySelector(".reviews__more");
    if (!target) {
      return;
    } else {
      more.classList.add("reviews__more--show");
      const close = more.querySelector(".reviews__close");
      close.addEventListener("click", () => {
        more.classList.remove("reviews__more--show");
      });
    }
  });
});

$(".reviews__item").click(() => {
  const her = $(this).find(".reviews__more");
  $(her).fadeIn();
});

if ($(window).width() > 1200) {
  $(".scrollpane").jScrollPane();
  $(".page-scroll").jScrollPane();
  const slider = $('.where__list');
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
    slider.slick('slickNext');

  } else {
    slider.slick('slickPrev');
  }
}

$(".how").click((evt)=> {
  evt.preventDefault();
  slider.slick('slickGoTo', 2);
})

$(".top").click((evt)=> {
  evt.preventDefault();
  slider.slick('slickGoTo', 0);
})

$(".bottom").click((evt)=> {
  evt.preventDefault();
  slider.slick('slickNext');
})

}

$('.visitors__show-map').click(()=> {
  $('.visitors__map').toggleClass('visitors__map--big');
})