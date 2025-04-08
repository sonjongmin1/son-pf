gsap.registerPlugin(ScrollTrigger);

$(function () {
  // title 글자 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.sd-pf-st',
        start: '0% 100%',
        end: '0% 20%',
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      '.sd-pf-st .title .a',
      { x: '-100%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.sd-pf-st .title .b',
      { x: '100%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    );

  // 글자가 나타날때 배경색 바꾸기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.workList',
        start: '0% 100%',
        end: '0% 100%',
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      'body',
      {
        backgroundColor: '#1c2b3c',
        color: '#fff',
        ease: 'none',
        duration: 5,
      },
      0
    )
    .to(
      '.sd-pf-st',
      {
        backgroundColor: '#1c2b3c',
        color: '#fff',
        ease: 'none',
        duration: 5,
      },
      0
    )

    // title 글자 position: fixed 적용
    .to(
      '.sd-pf-st .title',
      {
        position: 'fixed',
        ease: 'none',
        left: '0',
        top: '0',
        width: '100%',
        duration: 5,
      },
      0
    )
    .fromTo(
      '.workList',
      { margin: '0 auto' },
      {
        margin: '100vh auto 0',
        position: 'relative',
        zIndex: '10',
        duration: 1,
      },
      0
    );
  // workList가 끝날때 .title글자가 화면 밖으로 사라지도록 애니적용
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.workList',
        start: '100% 50%',
        end: '100% 0%',
        scrub: 1,
        // markers: true,
      },
    })
    .to('.sd-pf-st .title .a', { x: '-100%', ease: 'none', duration: 5 }, 0)
    .to('.sd-pf-st .title .b', { x: '100%', ease: 'none', duration: 5 }, 0);
});
