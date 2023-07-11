const colotBtnList = document.querySelectorAll('.color');
const shoesList = document.querySelectorAll('.shoe');
const bgList = document.querySelectorAll('.gradient');
const outPrice = document.querySelector('#outprice');
const shoeQuantity = document.querySelectorAll(`.quantity`);
const deliveryNeed = document.querySelectorAll(`.del`);

let currentColor = 'blue'; // початковий колір
let currentPrice = 170; // початкова ціна
let currentQuantity = 1; // початкова кількість
let currentDelivery = 1; 

colotBtnList.forEach((btn) => {
  btn.addEventListener('click', changeCard);
});

function changeCard(event) {
  // Отримуємо вибраний колір та ціну з атрибутів елемента
  const color = event.target.getAttribute('color');
  const price = event.target.getAttribute('data-price');

  // Змінюємо клас активного коліру
  colotBtnList.forEach((btn) => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Змінюємо зображення товару
  shoesList.forEach((shoe) => {
    const shoeColor = shoe.getAttribute('color');
    shoe.classList.remove(`show`);
    if (shoeColor === color) {
      shoe.classList.add('show');
    } else {
      shoe.classList.remove('show');
    }
  });

  // Змінюємо фоновий градієнт
  bgList.forEach((bg) => {
    const bgColor = bg.getAttribute('color');
    bg.classList.remove(`second`);
    if (bgColor === color) {
      bg.classList.add('first');
    } else {
      bg.classList.remove('first');
    }
  });
  // Оновлюємо відображення ціни товару
  currentColor = color;
  currentPrice = price;
  outPrice.textContent = currentPrice * currentDelivery * currentQuantity
}

shoeQuantity.forEach((qnt) => {
  qnt.addEventListener(`click`, changeQuantity);
});
function changeQuantity(event) {
  const quantity = event.target.getAttribute(`quant`);
 currentQuantity = quantity;
 outPrice.textContent = currentPrice * currentDelivery * currentQuantity
};

deliveryNeed.forEach((del) => {
  del.addEventListener(`click`, changeDilivery);
});
function changeDilivery(event) {
const deliv = event.target.getAttribute(`del`);
 currentDelivery = deliv;
 outPrice.textContent = currentPrice * currentDelivery * currentQuantity
};
