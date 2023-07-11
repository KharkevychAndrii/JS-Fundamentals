window.onload = function() {
  let page = document.body;
  let button1 = document.getElementById('btn1');
  let button2 = document.getElementById('btn2');
  let button3 = document.getElementById('btn3');
  let link = document.getElementById('href1');
  let div1 = document.getElementById(`div1`);

  button1.addEventListener('click', function() {
    page.style.backgroundColor = 'blue';
  });

  button2.addEventListener('dblclick', function() {
    page.style.backgroundColor = 'pink';
  });

  button3.addEventListener('mousedown', function() {
    page.style.backgroundColor = 'brown';
  });

  button3.addEventListener('mouseup', function() {
    page.style.backgroundColor = 'white';
  });

  link.addEventListener('mouseover', function() {
    div1.style.backgroundColor = 'yellow';
  });

  link.addEventListener('mouseout', function() {
    div1.style.backgroundColor = 'white';
  });
};

