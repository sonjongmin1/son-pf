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

menu.addEventListener('click', toggleMenu);

function setupMenuBehavior() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    menuClick.forEach((item) => {
      item.addEventListener('click', closeMenu);
    });
  } else {
    menuClick.forEach((item) => {
      item.removeEventListener('click', closeMenu);
    });
    gnb.style.display = 'flex'; // 데스크탑에서 항상 보이도록 설정
    body.style.overflow = 'visible';
    menu.classList.remove('open');
  }
}

setupMenuBehavior();
window.addEventListener('resize', setupMenuBehavior);
