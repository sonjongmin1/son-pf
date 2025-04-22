const menu = document.querySelector('.menu-wrap');
let body = document.querySelector('body');
let gnb = document.querySelector('.gnb');
let menuClick = document.querySelectorAll('.gnb ul li a');

function toggleMenu() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    gnb.style.display = 'none';
    body.style.overflow = 'visible';
  } else {
    menu.classList.add('open');
    gnb.style.display = 'flex';
    body.style.overflow = 'hidden';
  }
}

function closeMenu() {
  gnb.style.display = 'none';
  body.style.overflow = 'visible';
  menu.classList.remove('open');
}

// 메뉴 클릭 이벤트
menu.addEventListener('click', toggleMenu);

// 초기 설정 및 브라우저 크기 변화 감지
function setupMenuBehavior() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    gnb.style.display = 'none';
    // 모바일 환경일 때만 메뉴 클릭 이벤트 추가
    menuClick.forEach((item) => {
      item.addEventListener('click', closeMenu);
    });
  } else {
    // 데스크탑 환경에서는 메뉴 기본 상태 초기화
    menuClick.forEach((item) => {
      item.removeEventListener('click', closeMenu);
    });
    gnb.style.display = 'flex'; // 데스크탑에서 항상 보이도록 설정
    body.style.overflow = 'visible';
    menu.classList.remove('open');
  }
}

// 초기화 및 리사이즈 이벤트 설정
setupMenuBehavior();
window.addEventListener('resize', setupMenuBehavior);
