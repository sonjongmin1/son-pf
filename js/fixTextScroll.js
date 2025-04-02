gsap.registerPlugin(ScrollTrigger);

$(function () {
  // title 글자 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.intro',
        start: '0% 100%',
        end: '0% 20%',
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      '.intro .intro-title .a',
      { x: '-300%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.intro .intro-title .b',
      { x: '300%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    );

  // intro 배경색 변경
  gsap.to('.intro', {
    scrollTrigger: {
      trigger: '.about',
      start: '20% bottom',
      end: 'center center',
      scrub: 1,
      // markers: true,
    },
    backgroundColor: '#fff',
    color: 'rgb(28, 43, 60)', // 원하는 배경색
    duration: 5,
  });

  gsap.to('.about', {
    scrollTrigger: {
      trigger: '.about',
      start: '20% bottom',
      end: 'center center',
      scrub: 1,
      // markers: true,
    },
    backgroundColor: 'rgb(28, 43, 60)',
    color: '#fff',
    duration: 5,
  });
});
