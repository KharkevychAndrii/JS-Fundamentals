let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let {first: f, third: x, fifth="Name №5"} = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"
// Task 1

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let [, name2, , name4] = data.names;
let [, age2, , age4] = data.ages;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
// Task 2

function mul(...args) {
  let result = 1;
  let numbArr = [];

  for (let arg of args) {
    if (typeof arg === 'number') {
      numbArr.push(arg);
      result *= arg;
    };
  }
  if (numbArr.length === 0) {
    result = 0;
  }

  return result;
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
// Task 3
function mapBuilder(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error("The length of keysArray and valuesArray should be the same.")
  };
  let map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  };
  return map;
  
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
// Task 4

let arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // 0
arr[arr.length - 1](); // 2
// Task 5