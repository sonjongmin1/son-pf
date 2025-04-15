// 모든 .scroll-link 링크에 이벤트 리스너 추가
document.querySelectorAll('.scroll-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // 기본 링크 이동 방지

    // data-target 속성에서 이동할 섹션 id를 가져옴
    const targetId = link.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    // 해당 섹션으로 부드럽게 스크롤
    targetElement.scrollIntoView({
      behavior: 'smooth', // 부드럽게 스크롤
      block: 'start', // 섹션 상단으로 정렬
    });
  });
});
