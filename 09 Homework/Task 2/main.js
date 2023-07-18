$(document).ready(function() {
  // Знаходимо посилання, чий атрибут href починається на "https://"
  $('a[href^="https://"]').attr('target', '_blank');
});