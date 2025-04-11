gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.process-intro',
        start: '100%% 100%',
        end: '0% 20%',
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      '.process-intro .process-intro-title .process-a',
      { x: '-300%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.process-intro .process-intro-title .process-b',
      { x: '300%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    );
});
