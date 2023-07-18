$(document).ready(function() {
  // Знаходимо <div>-елементи, що безпосередньо стоять після <h3>
  $('h3').each(function() {
    $(this).next('div').insertBefore($(this));
  });
});