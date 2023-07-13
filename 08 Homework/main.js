function upperCase(str) {
    let regex = /^[A-Z]/;
    if (regex.test(str)) {
      return "String starts with uppercase character";
    } else {
      return "String does not start with uppercase character";
    }
  }
// Task 1
  function checkEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
// Task 2

let inputString = "Java Script";
let outputString = inputString.replace(/(\w+)\s+(\w+)/, "$2, $1");
// Task 3

function validateCreditCardNumber(cardNumber) {
    let regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
  };
// Task 4

function checkEmail2(email) {
    let regex = /^[a-zA-Z0-9]+([_\-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  };
// Task 5

function checkLogin(login) {
    let regex = /^[a-zA-Z][a-zA-Z0-9._-]{1,9}$/;
    if (!regex.test(login)) {
      return false;
    }
  
    let numbers = login.match(/\d+(\.\d+)?/g);
    if (numbers === null) {
      return false;
    }
  
    return `true ${numbers}`;
  };
  //Task 6

