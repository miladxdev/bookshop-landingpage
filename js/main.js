$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  AOS.init({
    offset: 400,
    duration: 500,
    easing: "ease",
    delay: 500,
  });

  // toggle anv
  $("#nav-toggle").click(() => {
    $(".nav-item").toggle(100);
    $(".nav-link").toggle(100);
  });
});
