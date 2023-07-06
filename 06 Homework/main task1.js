const list = document.getElementById('list');
const items = list.getElementsByTagName('li');

const firstItem = items[0].textContent;
const lastItem = items[items.length - 1].textContent;
const secondItem = items[1].textContent;
const fourthItem = items[3].textContent;
const thirdItem = items[2].textContent;

const result = `${firstItem}, ${lastItem}, ${secondItem}, ${fourthItem}, ${thirdItem}`;

alert(result);
// Task 1