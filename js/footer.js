gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.footer-box',
        start: 'top bottom', // footer-box의 상단이 viewport 하단에 닿을 때
        end: '100%', // 스크롤 300px 동안 애니메이션 진행
        scrub: 1, // 스크롤과 애니메이션 동기화
        markers: true, // 디버깅용 마커 표시
      },
    })
    .to('.text-wave', { y: '-400' }); // .wrap을 y축으로 -300px 이동
});
