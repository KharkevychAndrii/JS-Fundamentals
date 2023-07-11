window.onload = function() {
    let paragraph = document.getElementById('text');
    let button = document.querySelector('button');
  
    button.addEventListener('click', function() {
      changeCSS(paragraph);
    });
  };
  
  function changeCSS(element) {
    element.style.color = 'orange';
    element.style.fontSize = '20px';
    element.style.fontFamily = 'Comic Sans MS';
  }