function getPromise(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  };

getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
});
// Task 1

function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
      let product = 1;
  
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
          reject("Error! Incorrect array!");
          return;
        }
  
        product *= arr[i];
      }
  
      resolve(product);
    });
  };

calcArrProduct([3, 4, 5])
  .then(result => console.log(result)); // 60

calcArrProduct([5, "user2", 7, 12])
  .then(result => console.log(result))
  .catch(error => console.log(error)); // "Error! Incorrect array!"
  // Task 2


function askUserForNumber() {
    return new Promise(function(resolve, reject) {
      const userInput = prompt("Введіть число:");
  
      if (isNaN(userInput) || userInput.trim() === "") {
        reject("Помилка: Введіть правильне число!");
      } else {
        const number = parseFloat(userInput);
        resolve(number);
      }
    });
  }
  
new Promise(function(resolve, reject) {
    askUserForNumber().then(resolve).catch(reject);
  })
    .catch(function(error) {
      return new Promise(function(resolve) {
        let number;
        function askAgain() {
          const userInput = prompt("Введіть число:");
          if (isNaN(userInput) || userInput.trim() === "") {
            askAgain();
          } else {
            number = parseFloat(userInput);
            resolve(number);
          }
        }
        askAgain();
      });
    })
    .then(function(result) {
      console.log(result);
    });
// Task 3  