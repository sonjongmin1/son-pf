if (window.matchMedia('(min-width: 769px)').matches) {
  $(function () {
    gsap.registerPlugin(ScrollTrigger);

    // 01 pf-visual (하나의 timeline으로 통합)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.pf-visual',
          start: '0% 0%',
          end: '100% 0%',
          scrub: 1,
          pin: true,
          // markers: true,
        },
      })
      .to('.pf-visual h1', { opacity: 1, ease: 'none', duration: 10 }, 5)
      .to(
        '.pf-visual video, .pf-visual img', // video와 img를 동시에 처리
        { scale: 0.4, ease: 'none', duration: 10, opacity: 0.3 },
        5
      );

    // imgBox 애니메이션
    gsap.utils.toArray('.imgBox').forEach(function (imgBox) {
      gsap.timeline({
        scrollTrigger: {
          trigger: imgBox,
          start: '0% 100%',
          toggleClass: { targets: imgBox, className: 'active' },
          scrub: 1,
          // markers: true,
        },
      });
    });

    // textBox 애니메이션
    gsap.utils.toArray('.textBox').forEach(function (textBox) {
      gsap.timeline({
        scrollTrigger: {
          trigger: textBox,
          start: '40% 80%',
          end: '100% 0%',
          toggleClass: { targets: textBox, className: 'active' },
          scrub: 1,
          // markers: true,
        },
      });
    });
  });
}

if (window.matchMedia('(max-width: 768px)').matches) {
  $(function () {
    gsap.registerPlugin(ScrollTrigger);

    // 01 pf-visual (하나의 timeline으로 통합)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.pf-visual',
          start: '0% 20%',
          end: '100% 0%',
          scrub: 1,
          pin: true,
          // markers: true,
        },
      })
      .to('.pf-visual h1', { opacity: 1, ease: 'none', duration: 10 }, 5)
      .to(
        '.pf-visual video, .pf-visual img', // video와 img를 동시에 처리
        { scale: 0.7, ease: 'none', duration: 10, opacity: 0.3 },
        5
      );

    // imgBox 애니메이션
    gsap.utils.toArray('.imgBox').forEach(function (imgBox) {
      gsap.timeline({
        scrollTrigger: {
          trigger: imgBox,
          start: '0% 100%',
          toggleClass: { targets: imgBox, className: 'active' },
          scrub: 1,
          // markers: true,
        },
      });
    });

    // textBox 애니메이션
    gsap.utils.toArray('.textBox').forEach(function (textBox) {
      gsap.timeline({
        scrollTrigger: {
          trigger: textBox,
          start: '40% 80%',
          end: '100% 0%',
          toggleClass: { targets: textBox, className: 'active' },
          scrub: 1,
          // markers: true,
        },
      });
    });
  });
}
