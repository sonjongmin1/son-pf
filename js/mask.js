gsap.registerPlugin(ScrollTrigger);
$(function () {
  // step 1
  gsap.fromTo(
    '.step div:first-child',
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
        trigger: '.step',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.step div:last-child',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.step',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  // step 2
  gsap.fromTo(
    '.step div:first-child',
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
        trigger: '.step.step2',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.step div:last-child',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.step.step2',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  // step3

  gsap.fromTo(
    '.step div:first-child',
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
        trigger: '.step.step3',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.step div:last-child',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.step.step3',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  // step4

  gsap.fromTo(
    '.step div:first-child',
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
        trigger: '.step.step4',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.step div:last-child',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.step.step4',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  // step5

  gsap.fromTo(
    '.step div:first-child',
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
        trigger: '.step.step5',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.step div:last-child',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.step.step5',
        pinnedContainer: '.step',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );

  // brain
  gsap.fromTo(
    '.brain .pro-title span:nth-child(1)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.pro-title',
        pinnedContainer: '.pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    '.brain .pro-title span:nth-child(2)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.pro-title',
        pinnedContainer: '.pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  // Idea-sketch
  gsap.fromTo(
    '.Idea-sketch .pro-title span:nth-child(1)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.Idea-sketch .pro-title',
        pinnedContainer: '.Idea-sketch .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    '.Idea-sketch .pro-title span:nth-child(2)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.Idea-sketch .pro-title',
        pinnedContainer: '.Idea-sketch .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  // info
  gsap.fromTo(
    '.info-structure .pro-title span:nth-child(1)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.info-structure .pro-title',
        pinnedContainer: '.info-structure .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    '.info-structure .pro-title span:nth-child(2)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.info-structure .pro-title',
        pinnedContainer: '.info-structure .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  // storyboard
  gsap.fromTo(
    '.storyboard .pro-title span:nth-child(1)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.storyboard .pro-title',
        pinnedContainer: '.storyboard .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    '.storyboard .pro-title span:nth-child(2)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.storyboard .pro-title',
        pinnedContainer: '.storyboard .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  // reference
  gsap.fromTo(
    '.reference-survey .pro-title span:nth-child(1)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.reference-survey .pro-title',
        pinnedContainer: '.reference-survey .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    '.reference-survey .pro-title span:nth-child(2)',
    {
      backgroundSize: '0% 100%',
    },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '.reference-survey .pro-title',
        pinnedContainer: '.reference-survey .pro-title',
        start: '0% 60%',
        end: '50% 20%',
        // markers: true,
        scrub: 1,
      },
    }
  );
});
