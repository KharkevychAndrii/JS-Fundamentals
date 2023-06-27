
function createArray(a, b) {
  let Array = [a];
  let x = Array.length;
  for (let i = a; i < b && i >= a; ++i) {
  Array[x] = i + 1;
  x++;
}
return Array;
}
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
// Task 1
let forNum = [];
function showNumbers (a, b) {
  for (let i = a; i <= b; i++) {
    for ( let k = 0; k < i - a + 1; k++) {
      forNum.push(i);
    }
  }
  console.log(forNum);
}
showNumbers(1, 5);
// Task 2

function randArray(value) {
  let Random = [];
  for (let i = 0; i < value; i++) {
  let value = Math.floor(Math.random() * 500);
  Random.push(value);
}
return Random;
}
randArray(5);
// Task 3
function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}
const arr5 = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr5);
console.log(arr2) ; // [5,3,4,6,7]
// Task 4
function showArrayByTypes(array) {
  let anum = 8;
  let astr = "abc";
  let typeString = [];
  let typeNum = [];
  for (let ind of array) {
    if (typeof(ind) === typeof(astr))
    typeString.push(ind);
    else if (typeof(ind) === typeof(anum))
    typeNum.push(ind);
  }
  console.log(`Element: ${typeString}`);
  console.log(`Element: ${typeNum}`);
}
let arr1 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = showArrayByTypes(arr1);
// Task 5`
function calc(a, b, op) {
  let result = 0;
  if (op === 1)
  result = a - b;
  else if (oop === 2)
  result = a * b;
  else if (oop === 3)
  result = a / b;
  else
  result = a + b;
  return result
  }
  calc(10, 3, 1);
// Task 6

function findUnique(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
}
// Task 7