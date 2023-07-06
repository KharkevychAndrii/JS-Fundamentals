const submitBtn = document.querySelector('.btn');
const outDiv = document.querySelector('.out');

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  
  const inputs = document.querySelectorAll('.arr');
  let data = [];

  inputs.forEach(function (input) {
    const inputName = input.getAttribute('data-form');
    const inputValue = input.value;
    data.push(`${inputName}: ${inputValue}`);
    input.value = '';
  });

  const output = data.join('<br>');
  outDiv.innerHTML = output;
});