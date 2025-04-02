gsap.registerPlugin(ScrollTrigger);

$(function () {
  ScrollTrigger.matchMedia({
    '(min-width: 1024px)': function () {
      // about 섹션 고정 스크롤 애니메이션
      gsap.to('.about', {
        ease: 'none',
        scrollTrigger: {
          trigger: '.about',
          pin: true, // .about 섹션 고정
          scrub: 1,
          start: 'top 10%',
          end: '200%',
          //   markers: true,
        },
      });

      // #about-0 애니메이션
      gsap.fromTo(
        '#about-0',
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '#about-0',
            start: 'top top',
            end: '20% top',
            scrub: 0.5,
            // markers: true,
          },
        }
      );

      // #about-1 애니메이션
      gsap.fromTo(
        '#about-1',
        { opacity: 0, x: -1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '#about-1',
            start: 'top top',
            end: '20% top',
            scrub: 0.5,
            // markers: true,
          },
        }
      );

      // #about-2 애니메이션
      gsap.fromTo(
        '#about-2',
        { opacity: 0, x: 1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '#about-2',
            start: 'top top',
            end: '20% top',
            scrub: 0.5,
            // markers: true,
          },
        }
      );

      // #about-3 애니메이션
      gsap.fromTo(
        '#about-3',
        { opacity: 0, x: -1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '#about-3',
            start: 'top top',
            end: '20% top',
            scrub: 0.5,
            // markers: true,
          },
        }
      );

      // #about-4 애니메이션
      gsap.fromTo(
        '#about-4',
        { opacity: 0, x: 1000 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: '#about-4',
            start: 'top top',
            end: '20% top',
            scrub: 0.5,
            // markers: true,
          },
        }
      );
    },
  });
});
