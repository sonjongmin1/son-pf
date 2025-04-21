// 1025px 이상 데스크탑

$(function () {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    gsap.registerPlugin(ScrollTrigger);

    let upBox = document.querySelectorAll('.upBox');
    let upBoxExceptFirst = Array.from(upBox).slice(1); // 첫 번째 제외

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.team-gallery',
        pin: true,
        scrub: 3,
        start: 'top top',
        end: '+=400%', //시작부분에서 400%까지 스크롤한 후 종료
        // markers: true,
      },
    });
    tl.from(upBoxExceptFirst, {
      y: '400%',
      duration: 8,
      ease: 'none',
      stagger: 6,
    }); // stagger: 각각애니메이션의 시간차를 둠
    tl.to(upBoxExceptFirst, { y: 0 });

    $(function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.team-logo',
            start: '50% 80%', // 요소가 뷰포트의 80% 위치에 들어오면 시작
            end: '50% -60%', // 요소가 뷰포트의 20% 위치에 도달하면 종료
            scrub: 1,
            onEnter: () => $('.team-logo').addClass('arrow-dr'),
            onLeave: () => $('.team-logo').removeClass('arrow-dr'),
            onEnterBack: () => $('.team-logo').addClass('arrow-dr'),
            onLeaveBack: () => $('.team-logo').removeClass('arrow-dr'),
            // markers: true,
          },
        })
        .from('.team-logo', {
          y: 100, // 아래에서 100px 위로
          opacity: 0, // 처음에는 투명
          duration: 5, // 애니메이션 지속시간
        }),
        0.3;
    });
  }

  // 테블릿 769 ~ 1024
  if (window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches) {
    let upBox = document.querySelectorAll('.upBox');
    let upBoxExceptFirst = Array.from(upBox).slice(1); // 첫 번째 제외

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.team-gallery',
        pin: true,
        scrub: 3,
        start: '90% 90%',
        end: '+=400%', //시작부분에서 400%까지 스크롤한 후 종료
        // markers: true,
      },
    });
    tl.from(upBoxExceptFirst, {
      y: '400%',
      duration: 8,
      ease: 'none',
      stagger: 6,
    }); // stagger: 각각애니메이션의 시간차를 둠
    tl.to(upBoxExceptFirst, { y: 0 });

    $(function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.team-logo',
            start: '50% 80%', // 요소가 뷰포트의 80% 위치에 들어오면 시작
            end: '50% -60%', // 요소가 뷰포트의 20% 위치에 도달하면 종료
            scrub: 1,
            onEnter: () => $('.team-logo').addClass('arrow-dr'),
            onLeave: () => $('.team-logo').removeClass('arrow-dr'),
            onEnterBack: () => $('.team-logo').addClass('arrow-dr'),
            onLeaveBack: () => $('.team-logo').removeClass('arrow-dr'),
            // markers: true,
          },
        })
        .from('.team-logo', {
          y: 100, // 아래에서 100px 위로
          opacity: 0, // 처음에는 투명
          duration: 5, // 애니메이션 지속시간
        }),
        0.3;
    });
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    let upBox = document.querySelectorAll('.upBox');
    let upBoxExceptFirst = Array.from(upBox).slice(1); // 첫 번째 제외

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.team-gallery',
        pin: true,
        scrub: 3,
        start: '90% 90%',
        end: '+=400%', //시작부분에서 400%까지 스크롤한 후 종료
        // markers: true,
      },
    });
    tl.from(upBoxExceptFirst, {
      y: '400%',
      duration: 8,
      ease: 'none',
      stagger: 6,
    }); // stagger: 각각애니메이션의 시간차를 둠
    tl.to(upBoxExceptFirst, { y: 0 });

    $(function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.team-logo',
            start: '50% 80%', // 요소가 뷰포트의 80% 위치에 들어오면 시작
            end: '50% -60%', // 요소가 뷰포트의 20% 위치에 도달하면 종료
            scrub: 1,
            onEnter: () => $('.team-logo').addClass('arrow-dr'),
            onLeave: () => $('.team-logo').removeClass('arrow-dr'),
            onEnterBack: () => $('.team-logo').addClass('arrow-dr'),
            onLeaveBack: () => $('.team-logo').removeClass('arrow-dr'),
            // markers: true,
          },
        })
        .from('.team-logo', {
          y: 100, // 아래에서 100px 위로
          opacity: 0, // 처음에는 투명
          duration: 5, // 애니메이션 지속시간
        }),
        0.3;
    });
  }
});

// arrow svg 화살표 애니메이션
