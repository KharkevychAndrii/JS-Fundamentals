var h1 = document.querySelector('h1');
h1.style.backgroundColor = 'green';

// Жирний шрифт для першого абзацу <p>
var firstParagraph = document.querySelector('p');
firstParagraph.style.fontWeight = 'bold';

// Червоний колір тексту для другого абзацу <p>
var secondParagraph = document.querySelector('p:nth-child(2)');
secondParagraph.style.color = 'red';

// Підкреслений стиль для третього абзацу <p>
var thirdParagraph = document.querySelector('p:nth-child(3)');
thirdParagraph.style.textDecoration = 'underline';

// Під нахилом вправо (косий) для четвертого абзацу <p>
var fourthParagraph = document.querySelector('p:nth-child(4)');
fourthParagraph.style.fontStyle = 'italic';
// Зміна стилів для елемента ul з id="myList"
const myList = document.getElementById('myList');
myList.style.display = 'flex';
myList.style.listStyleType = 'none';

// Зміна стилів для елемента span
const span = document.querySelector('span');
span.style.visibility = 'hidden';