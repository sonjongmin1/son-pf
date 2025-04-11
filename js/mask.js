gsap.registerPlugin(ScrollTrigger);
$(function () {
  gsap.fromTo(
    '.step1 div:first-child',
    {
      backgroundSize: '0% 100%',
      borderWidth: '1px', // 초기 border-width
      borderColor: 'rgba(255, 255, 255, 0.2)', // 초기 border-color
    },
    {
      backgroundSize: '100% 100%',
      borderWidth: '2px', // 최종 border-width
      borderColor: '#fff', // 최종 border-color
      scrollTrigger: {
        backgroundSize: '100% 100%',
        borderWidth: '5px', // 최종 border-width
        borderColor: '#fff', // 최종 border-color
        trigger: '.step1',
        pinnedContainer: '.step1',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.step1 div:last-child',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.step1',
        pinnedContainer: '.step1',
        start: '0% 60%',
        end: '50% 20%',
        markers: true,
        scrub: 1,
      },
    }
  );

  // 숫자 01

  gsap.fromTo(
    '.brain-title span:nth-child(1)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.brain-title',
        pinnedContainer: '.brain-title',
        start: '0% 60%',
        end: '50% 20%',
        markers: true,
        scrub: 1,
      },
    }
  );
  // 브레인
  gsap.fromTo(
    '.brain-title span:nth-child(2)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.brain-title',
        pinnedContainer: '.brain-title',
        start: '0% 60%',
        end: '50% 20%',
        markers: true,
        scrub: 1,
      },
    }
  );
});
