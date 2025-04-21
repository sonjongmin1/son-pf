$(function () {
  // 02. 가로스크롤
  if (window.matchMedia('(min-width: 1025px)').matches) {
    let list = gsap.utils.toArray('.hobby ul li');
    let scrollTween = gsap.to(list, {
      xPercent: -100 * (list.length - 1), // 원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
      ease: 'none',
      scrollTrigger: {
        trigger: '.hobby',
        pin: true,
        scrub: 1,
        start: 'center center',
        end: '300%', // 뷰포트 높이의 300% 숫자가 클수록 속도가 느려진다.,
        // markers: true,
      },
    });
    // 04. textBox
    gsap.utils.toArray('.textBox').forEach(function (textBox) {
      // 04-1: textBox 커지는 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 70%',
            end: 'center 40%',
            scrub: true,
            // markers: true,
          },
        })
        .to(textBox, { opacity: '1', x: 30, y: 15 }, 0);

      // 04-2: textBox 작아지는 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 30%',
            end: 'center 20%',
            scrub: true,
            // markers: true,
          },
        })
        .to(textBox, { opacity: '0.5' }, 0);

      // 05. counter 텍스트 변경
      gsap.utils.toArray('.num').forEach(function (text) {
        let num = text.getAttribute('data-text');
        let counter = document.querySelector('.counter .now');

        ScrollTrigger.create({
          trigger: text,
          start: '0% center',
          end: '100% center',
          scrub: true,
          containerAnimation: scrollTween,
          onEnter: (self) => (counter.innerText = num),
          onEnterBack: (self) => (counter.innerText = num),
          // markers: true,
        });
      });
    }); // 04. textBox.end
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.sd-pf-st-hobby',
          start: '0% 100%',
          end: '0% 20%',
          scrub: 1,
          // markers: true,
        },
      })
      .fromTo(
        '.sd-pf-st-hobby .title .a',
        { x: '-100%' },
        { x: '0%', ease: 'none', duration: 5 },
        0
      )
      .fromTo(
        '.sd-pf-st-hobby .title .b',
        { x: '100%' },
        { x: '0%', ease: 'none', duration: 5 },
        0
      )
      .fromTo(
        '.sd-pf-st-hobby .title .c',
        { x: '-100%' },
        { x: '0%', ease: 'none', duration: 5 },
        0
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.hobby-end-point',
          start: '450% 100%',
          end: '100% 20%',
          scrub: 1,
          // markers: true,
        },
      })
      .fromTo(
        '.sd-pf-st-hobby .title .a',
        { x: '0%' },
        { x: '-100%', ease: 'none', duration: 5 },
        0
      )
      .fromTo(
        '.sd-pf-st-hobby .title .b',
        { x: '0%' },
        { x: '100%', ease: 'none', duration: 5 },
        0
      )
      .fromTo(
        '.sd-pf-st-hobby .title .c',
        { x: '0%' },
        { x: '-100%', ease: 'none', duration: 5 },
        0
      );
  }

  if (window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches) {
    let list = gsap.utils.toArray('.hobby ul li');
    let scrollTween = gsap.to(list, {
      xPercent: -100 * (list.length - 1), // 원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
      ease: 'none',
      scrollTrigger: {
        trigger: '.hobby',
        pin: true,
        scrub: 1,
        start: '70% center',
        end: '300%', // 뷰포트 높이의 300% 숫자가 클수록 속도가 느려진다.,
        // markers: true,
      },
    });
    // 04. textBox
    gsap.utils.toArray('.textBox').forEach(function (textBox) {
      // 04-1: textBox 커지는 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 70%',
            end: 'center 40%',
            scrub: true,
            // markers: true,
          },
        })
        .to(textBox, { opacity: '1', x: 30, y: 15 }, 0);

      // 04-2: textBox 작아지는 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 30%',
            end: 'center 20%',
            scrub: true,
            // markers: true,
          },
        })
        .to(textBox, { opacity: '0.5' }, 0);

      // 05. counter 텍스트 변경
      gsap.utils.toArray('.num').forEach(function (text) {
        let num = text.getAttribute('data-text');
        let counter = document.querySelector('.counter .now');

        ScrollTrigger.create({
          trigger: text,
          start: '0% center',
          end: '100% center',
          scrub: true,
          containerAnimation: scrollTween,
          onEnter: (self) => (counter.innerText = num),
          onEnterBack: (self) => (counter.innerText = num),
          // markers: true,
        });
      });
    }); // 04. textBox.end
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    let list = gsap.utils.toArray('.hobby ul li');
    let scrollTween = gsap.to(list, {
      xPercent: -100 * (list.length - 1), // 원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
      ease: 'none',
      scrollTrigger: {
        trigger: '.hobby',
        pin: true,
        scrub: 1,
        start: '70% center',
        end: '300%', // 뷰포트 높이의 300% 숫자가 클수록 속도가 느려진다.,
        // markers: true,
      },
    });
    // 04. textBox
    gsap.utils.toArray('.textBox').forEach(function (textBox) {
      // 04-1: textBox 커지는 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 70%',
            end: 'center 40%',
            scrub: true,
            // markers: true,
          },
        })
        .to(textBox, { opacity: '1', x: 30, y: 15 }, 0);

      // 04-2: textBox 작아지는 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 30%',
            end: 'center 20%',
            scrub: true,
            // markers: true,
          },
        })
        .to(textBox, { opacity: '0.5' }, 0);

      // 05. counter 텍스트 변경
      gsap.utils.toArray('.num').forEach(function (text) {
        let num = text.getAttribute('data-text');
        let counter = document.querySelector('.counter .now');

        ScrollTrigger.create({
          trigger: text,
          start: '0% center',
          end: '100% center',
          scrub: true,
          containerAnimation: scrollTween,
          onEnter: (self) => (counter.innerText = num),
          onEnterBack: (self) => (counter.innerText = num),
          // markers: true,
        });
      });
    }); // 04. textBox.end
  }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.sd-pf-st-hobby',
        start: '0% 100%',
        end: '0% 20%',
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      '.sd-pf-st-hobby .title .a',
      { x: '-100%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.sd-pf-st-hobby .title .b',
      { x: '100%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.sd-pf-st-hobby .title .c',
      { x: '-100%' },
      { x: '0%', ease: 'none', duration: 5 },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hobby-end-point',
        start: '450% 100%',
        end: '100% 20%',
        scrub: 1,
        // markers: true,
      },
    })
    .fromTo(
      '.sd-pf-st-hobby .title .a',
      { x: '0%' },
      { x: '-100%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.sd-pf-st-hobby .title .b',
      { x: '0%' },
      { x: '100%', ease: 'none', duration: 5 },
      0
    )
    .fromTo(
      '.sd-pf-st-hobby .title .c',
      { x: '0%' },
      { x: '-100%', ease: 'none', duration: 5 },
      0
    );
});
