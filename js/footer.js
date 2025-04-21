gsap.registerPlugin(ScrollTrigger);

if (window.matchMedia('(min-width: 769px)').matches) {
  $(function () {
    gsap.to('.z-con01', {
      scrollTrigger: {
        trigger: '.text-wave',
        start: '100% 50%',
        end: '100% 50%',
        scrub: 1,
        // markers: true,
      },
      y: -200,
      duration: 5,
    });
  });
}

if (window.matchMedia('(max-width: 768px)').matches) {
  $(function () {
    gsap.to('.z-con01', {
      scrollTrigger: {
        trigger: '.text-wave',
        start: '120% 100%',
        end: '100% 50%',
        scrub: 1,
        // markers: true,
      },
      y: -160,
      duration: 5,
    });
  });
}
