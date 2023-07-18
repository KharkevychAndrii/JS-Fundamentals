$(document).ready(function() {
  let checkboxCount = 0;
  
  $('input[type="checkbox"]').change(function() {
    if ($(this).is(':checked')) {
      checkboxCount++;
    } else {
      checkboxCount--;
    }
    
    if (checkboxCount >= 3) {
      $('input[type="checkbox"]').prop('disabled', true);
    }
  });
});