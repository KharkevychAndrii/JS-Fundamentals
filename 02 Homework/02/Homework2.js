
let a = 1, b = 2, c=3;
console.log(`a < b < c: ${a < b < c}`);
// Task 1

let x = 1;
let y = 2;

let res1 = (x + y)*2*y// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
res1 = String (res1);
console.log(typeof res1); // ""string""

let res2 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
res2 = String(res2);
console.log(typeof res2); // ""string""

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x + y; // Допишіть код, необхідно використовувати змінні x і y
res4 = Number("res4");
console.log(res4); // NaN
console.log(typeof res4); // ""number""
// Task 2

let isAdult = +prompt(`Введіть ваш вік`);
if (isAdult >= 0 && isAdult <= 17) alert("Ви ще надто молоді");
else alert("Ви досягли повнолітнього віку");
// Task 3

const triangleA = +prompt(`Введіть сторону A`), triangleB = +prompt(`Введіть сторону B`), triangleC = +prompt(`Введіть сторону C`);
const triangleP = (triangleA + triangleB + triangleC) / 2; 
const triangleSquare = (triangleP * (triangleP - triangleA) * (triangleP - triangleB) * (triangleP - triangleC) ** (1 / 2)); 
alert(`Площа трикутника становить: ${triangleSquare}`);

if (triangleA ** 2 === triangleB **2 + triangleC ** 2 || triangleB ** 2 === triangleA **2 + triangleC ** 2 || triangleC ** 2 == triangleB **2 + triangleA ** 2)
console.log(`Трикутник прямокутний`);
else
console.log(`Трикутник не є прямокутним`);
let typeA = typeof triangleA, typeB = typeof triangleB, typeC = typeof triangleC;
if (typeA == "number" && typeB == "number" && typeC == "number") true;
else alert(`Incorrect data`);
console.log(triangleSquare.toFixed(3));
// Task 4

let now = new Date (), hour = now.getHours ();

if (hour < 5 && hour >= 23) alert(`Доброї ночі`);
else if (hour < 11 && hour >= 5) alert(`Доброго ранку`);
else if (hour < 17 && hour >= 11) alert(`Доброго дня`);
else if (hour < 23 && hour >= 17) alert(`Доброго вечора`);


switch (hour) {
    case 23: alert(`Доброї ночі`); break;
    case 1 : alert(`Доброї ночі`); break;
    case 2 : alert(`Доброї ночі`); break;
    case 3 : alert(`Доброї ночі`); break;
    case 4 : alert(`Доброї ночі`); break;
    case 5 : alert(`Доброго ранку`); break;
    case 6 : alert(`Доброго ранку`); break;
    case 7 : alert(`Доброго ранку`); break;
    case 8 : alert(`Доброго ранку`); break;
    case 9 : alert(`Доброго ранку`); break;
    case 10: alert(`Доброго ранку`); break;
    case 11: alert(`Доброго дня`); break;
    case 12: alert(`Доброго дня`); break;
    case 13: alert(`Доброго дня`); break;
    case 14: alert(`Доброго дня`); break;
    case 15: alert(`Доброго дня`); break;
    case 16: alert(`Доброго дня`); break;
    case 17: alert(`Доброго вечора`); break;
    case 18: alert(`Доброго вечора`); break;
    case 19: alert(`Доброго вечора`); break;
    case 20: alert(`Доброго вечора`); break;
    case 21: alert(`Доброго вечора`); break;
    case 22: alert(`Доброго вечора`); break;
}
    
// Task 5
/*
20
//глобальн2 змінн1
/2
reduce 
Filter 
6
array.forEach(element => {
    
 });
 
*/

  let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
  let index1 = arr.filter(item => item == 1);
  let index2 = arr.filter(item => item == 2);
  let index3 = arr.filter(item => item == 3);
  let index4 = arr.filter(item => item == 4);
  let index5 = arr.filter(item => item == 5);
  let index6 = arr.filter(item => item == 6);
  let index1Length = index1.length;
  let index2Length = index2.length;
  let index3Length = index3.length;
  let index4Length = index4.length;
  let index5Length = index5.length;
  let index6Length = index6.length;
  let maxLength = 0;
  if (index1Length > maxLength) (maxLength = index1Length);
  if (index2Length > maxLength) (maxLength = index2Length);
  if (index3Length > maxLength) (maxLength = index3Length);
  if (index4Length > maxLength) (maxLength = index4Length);
  if (index5Length > maxLength) (maxLength = index5Length);
  if (index6Length > maxLength) (maxLength = index6Length);
  let data = [];
  if (index1Length === maxLength) {
    arr.splice(3, 1);
    data = [1];
};
  if (index2Length === maxLength) {
    arr.splice(2, 1);
    arr.splice(8, 1);
    data = [2,2]
};
  if (index3Length === maxLength) {
    arr.splice(6, 1);
    data = [3];
};
  if (index4Length === maxLength) {
    arr.splice(0, 1);
    data = [4];
};
  if (index5Length === maxLength) {
    arr.splice(1, 1);
    arr.splice(4, 1);
    arr.splice(5, 1);
    arr.splice(6, 1);
    data = [5,5,5,5]
};
  if (index6Length === maxLength) {
    arr.splice(4, 1);
    data = [6]
};
  console.log(arr) // [4, 2, 1, 6, 3, 2]
// Task 6