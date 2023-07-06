const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle) {
  const animClass = circle.getAttribute('data-anim');
  if (animClass) {
    circle.classList.add(animClass);
  }
});

circles.forEach(function (circle) {
  circle.addEventListener('animationend', function () {
    console.log(`Animation applied for circle with data-anim: ${circle.getAttribute('data-anim')}`);
  });
});