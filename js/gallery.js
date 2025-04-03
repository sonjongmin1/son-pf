gsap.registerPlugin(ScrollTrigger);

$(function () {
  let sdList = gsap.utils.toArray('.sd-portfolio .sd-list li');
  let sdListA = gsap.utils.toArray('.sd-portfolio .sd-list .sd-a');
  let sdListB = gsap.utils.toArray('.sd-portfolio .sd-list .sd-b');
  let sdListC = gsap.utils.toArray('.sd-portfolio .sd-list .sd-c');

  let scrollTween = gsap.to(sdList, {
    xPercent: -100 * (sdList.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.sd-portfolio',
      pin: true,
      scrub: 1,
      start: 'center center',
      end: '200%',
      markers: true,
    },
  });
});
