window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.contact-wrap',
        start: '30% 55%',
        end: '100% 60%',
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      '.contact-logoWrap #t',
      { x: '0', y: '1500', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #h',
      { x: '0', y: '1400', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #a',
      { x: '0', y: '1500', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #n',
      { x: '0', y: '1400', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #k',
      { x: '0', y: '1500', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #s',
      { x: '0', y: '1400', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #f',
      { x: '0', y: '1500', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #o',
      { x: '0', y: '1400', rotate: '0', ease: 'none', duration: 3 },
      0.3
    )
    .to(
      '.contact-logoWrap #r',
      { x: '0', y: '1500', rotate: '0', ease: 'none', duration: 3 },
      0.3
    );
};

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.contact-intro',
        start: 'top 75%',
        end: '50% 25%',
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      '.contact-intro .a',
      { x: '-100%' },
      { x: '0%', ease: 'none', duration: 5, color: '#fff' },
      0
    )
    .fromTo(
      '.contact-intro .b',
      { x: '100%' },
      { x: '0%', ease: 'none', duration: 5, color: '#fff' },
      0
    )
    // .fromTo(
    //   '.contact-intro .c',
    //   { x: '-100%' },
    //   { x: '0%', ease: 'none', duration: 5, color: 'orange' },
    //   0
    // )
    .to('.contact-intro', {
      backgroundColor: '#1c2b3c',
      ease: 'none',
      duration: 3,
    }),
    2;
});
