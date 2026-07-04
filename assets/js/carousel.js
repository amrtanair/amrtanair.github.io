document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-carousel]').forEach(function (container) {
    var track = container.querySelector('.carousel-track');
    var slides = container.querySelectorAll('.carousel-slide');
    var dots = container.querySelectorAll('.carousel-dot');
    var prevBtn = container.querySelector('.carousel-btn--prev');
    var nextBtn = container.querySelector('.carousel-btn--next');

    if (!track || slides.length === 0) return;

    var current = 0;
    var total = slides.length;

    function goTo(index) {
      current = ((index % total) + total) % total;
      container.classList.add('is-sliding');
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    track.addEventListener('transitionend', function () {
      container.classList.remove('is-sliding');
    });

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    container.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });

    var touchStartX = 0;
    container.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    container.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    }, { passive: true });

    goTo(0);
  });
});
