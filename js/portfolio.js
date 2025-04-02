$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // 01 pf-visual
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
      '.pf-visual video',
      { scale: 0.4, ease: 'none', duration: 10, opacity: 0.3 },
      5
    );
});

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.visual',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        // markers: true,
      },
    })
    .to('.visual h1', { opacity: '1', ease: 'none', duration: '10' }, 5)
    .to(
      '.visual img',
      { scale: '0.4', ease: 'none', duration: '10', opacity: '0.3' },
      5
    );
});

// imgBox
$(function () {
  gsap.utils.toArray('.imgBox').forEach(function (imgBox) {
    // toArray()=> 인스턴스를 배열로 만드는 메소드, forEach 배열을 반복문으로
    gsap.timeline({
      scrollTrigger: {
        trigger: imgBox,
        start: '50% 100%',
        toggleClass: { targets: imgBox, className: 'active' },
        scrub: 1,
        // markers: true,
      },
    });
  });

  // textBox
  gsap.utils.toArray('.textBox').forEach(function (textBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: textBox,
        start: '50% 80%',
        end: '100% 0%',
        toggleClass: { targets: textBox, className: 'active' },
        scrub: 1,
        // markers: true,
      },
    });
  });
});
