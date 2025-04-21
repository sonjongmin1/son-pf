const menu = document.querySelector('.menu-wrap');
let body = document.querySelector('body');
let gnb = document.querySelector('.gnb');
let menuClick = document.querySelectorAll('.gnb ul li a');

menu.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    gnb.style.display = 'none';
    body.style.overflow = 'visible';
  } else {
    menu.classList.add('open');
    gnb.style.display = 'flex';
    body.style.overflow = 'hidden';
  }
});

menuClick.forEach((item, index) => {
  item.addEventListener('click', function () {
    gnb.style.display = 'none';
    body.style.overflow = 'visible';
    menu.classList.remove('open');
  });
});
