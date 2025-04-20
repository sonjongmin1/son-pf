window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.z-con01 .listBox .box').forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: '0% 60%',
          end: '0% 0%',
          scrub: 1,
          //   markers: true,
        },
      })
      .to(
        selector,
        {
          transform: 'rotateX(-10deg) scale(0.8)',
          transformOrigin: 'top',
          filter: 'brightness(0.5)',
        },
        0
      );
  });

  gsap.to('.z-con01', {
    scrollTrigger: {
      trigger: '.z-con01',
      start: '20% bottom',
      end: '30% center',
      scrub: 1,
      // markers: true,
    },
    backgroundColor: '#1c2b3c',
    duration: 5,
  });
};
