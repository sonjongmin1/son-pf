window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.contact-wrap',
        start: '20% 55%',
        end: '100% 60%',
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      '.contact-logoWrap #t',
      { x: '0', y: '1000', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #h',
      { x: '0', y: '900', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #a',
      { x: '0', y: '1000', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #n',
      { x: '0', y: '900', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #k',
      { x: '0', y: '1000', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #s',
      { x: '0', y: '900', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #f',
      { x: '0', y: '1000', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #o',
      { x: '0', y: '900', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #r',
      { x: '0', y: '1000', rotate: '0', ease: 'none', duration: 3 },
      0.3
    );
  gsap.to('.contact-wrap', {
    backgroundColor: '#1c2b3c', // 원하는 색상
    scrollTrigger: {
      trigger: '.contact-wrap',
      start: '0% 100%',
      end: '20% 15%',
      scrub: 1,
      markers: true,
    },
  });
  // .text-wave 텍스트 색상 변경
};
