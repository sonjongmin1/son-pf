document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card-container').forEach((container) => {
    const percent = container.getAttribute('data-percent');
    const circle = container.querySelector('.bar');
    const offset = 314 - (314 * percent) / 100;
    circle.style.strokeDashoffset = offset;
  });
});

gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.skill',
      start: '60% 100%',
      end: '60% 20%',
      scrub: 1,
      // markers: true,
      onEnter: () => $('.skill').addClass('active'),
      onLeave: () => $('.skill').removeClass('active'),
      onEnterBack: () => $('.skill').addClass('active'),
      onLeaveBack: () => $('.skill').removeClass('active'),
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  function runAnim() {
    const skillSec = document.querySelector('.skill');
    if (!skillSec.classList.contains('active')) return;

    document.querySelectorAll('.card-container').forEach((card) => {
      const max = parseInt(card.dataset.percent, 10);
      const bar = card.querySelector('.bar');
      const text = card.querySelector('.percentage');
      const r = bar.r.baseVal.value;
      const circleLen = 2 * Math.PI * r;

      bar.style.strokeDasharray = circleLen;
      bar.style.strokeDashoffset = circleLen;

      let num = 0;
      let progress = 0;

      function update() {
        if (progress < max) {
          progress++;
          bar.style.strokeDashoffset = circleLen - (circleLen * progress) / 100;
        }
        if (num < max) {
          num++;
          text.textContent = `${num}%`;
        }
        if (progress < max || num < max) {
          setTimeout(update, 10);
        }
      }
      update();
    });
  }

  const observer = new MutationObserver(runAnim);
  observer.observe(document.querySelector('.skill'), {
    attributes: true,
    attributeFilter: ['class'],
  });

  runAnim();
});
