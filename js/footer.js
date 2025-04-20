gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap.to('.z-con01', {
    scrollTrigger: {
      trigger: '.text-wave',
      start: '100% 50%',
      end: '100% 50%',
      scrub: 1,
      markers: true,
    },
    y: -200,
    duration: 5,
  });
});
