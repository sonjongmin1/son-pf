$(function () {
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
      markers: true,
    },
  });
  tl.from(upBoxExceptFirst, {
    y: '400%',
    duration: 8,
    ease: 'none',
    stagger: 6,
  }); // stagger: 각각애니메이션의 시간차를 둠
  tl.to(upBoxExceptFirst, { y: 0 });
});
