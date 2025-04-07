// 스플리팅 호출
$(function () {
  Splitting();
});

// $(document).ready(function () {
//   $('a').on('click', function (event) {
//     event.preventDefault();
//   });
// });

// header 영역 스크롤 방향 이벤트
$(function () {
  let prevScrollTop = 0;
  document.addEventListener('scroll', function () {
    let nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
    prevScrollTop = nowScrollTop;
  });
});

// scrolla.js
$(function () {
  $('.animate').scrolla({
    mobile: true,
    once: false,
  });
});

$(function () {
  $('.svgAni')
    .find('#svgAni02')
    .each(function (i, path) {
      let length = path.getTotalLength();
      //   alert(length);
    });
});

// svgAni1 : 4914
// svgAni2 : 180
