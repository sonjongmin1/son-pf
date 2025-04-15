gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap.utils.toArray('.yScroll').forEach((yScroll, i) => {
    ScrollTrigger.create({
      trigger: yScroll,
      start: 'top top',
      pin: true,
      pinSpacing: false,
      // markers: true,
    });
    ScrollTrigger.create({
      snap: 1 / (yScroll.length - 1),
    });
  });
});
