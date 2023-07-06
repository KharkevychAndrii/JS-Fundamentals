const colors = document.querySelectorAll('.color');
const priceOutput = document.getElementById('outprice');
const discountOutput = document.getElementById('discount');
const currencyOutput = document.getElementById('currency');

colors.forEach(function(color) {
  color.addEventListener('click', function() {
    const price = color.getAttribute('data-price');
    const discount = color.getAttribute('data-price-discount');
    const currency = color.getAttribute('data-price-currency');
    
    priceOutput.textContent = price;
    discountOutput.textContent = discount;
    currencyOutput.textContent = currency;
  });
});