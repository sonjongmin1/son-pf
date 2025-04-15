gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.Idea-sketch',
      start: '60% 100%',
      end: '60% 20%',
      scrub: 1,
      markers: true,
      onEnter: () => $('.Idea-sketch').addClass('active'),
      onLeave: () => $('.Idea-sketch').removeClass('active'),
      onEnterBack: () => $('.Idea-sketch').addClass('active'),
      onLeaveBack: () => $('.Idea-sketch').removeClass('active'),
    },
  });
});
