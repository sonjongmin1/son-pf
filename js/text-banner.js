// simplyScroll
if (window.matchMedia('(min-width: 769px)').matches) {
  $(function () {
    $('.text-banner .list-hash').simplyScroll({
      speed: 4,
      pauseOnHover: false,
      pauseOnTouch: false,
    });
  });

  $(function () {
    $('.text-banner .list-en').simplyScroll({
      speed: 4,
      pauseOnHover: false,
      pauseOnTouch: false,
      direction: 'backwards',
    });
  });
}
if (window.matchMedia('(max-width: 768px)').matches) {
  $(function () {
    $('.text-banner .list-hash').simplyScroll({
      speed: 1,
      pauseOnHover: false,
      pauseOnTouch: false,
    });
  });

  $(function () {
    $('.text-banner .list-en').simplyScroll({
      speed: 1,
      pauseOnHover: false,
      pauseOnTouch: false,
      direction: 'backwards',
    });
  });
}
