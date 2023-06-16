alert(`Андрій`);
// Task 1
console.log(`Харкевич`);
// Task 2
let a = 1;
let b = 2;
alert(a);
alert(b);
b = a;
alert(a);
alert(b);
//Task 3
let String = "Nissan";
let Number = 2009;
let Boolean = false;
let Undefined = undefined;
let Null = null;
const User = {
    Mark:String, yearofissue:Number, isNew:Boolean, damage:Undefined, insurancepolicy:Null
};
// Task 4
const isAdult = confirm(`Чи досягли ви повноліття?`);
console.log(`Чи досягли ви повноліття?: ${isAdult}`);
// Task 5
let FirstName = prompt("Введіть ваше ім'я");
let SecondName = prompt("Введіть ваше прізвище");
let Group =  prompt("Введіть вашу групу");
let BirthDate = +prompt("Введіть ваш рік народження");
let isMarried = confirm(`Чи одружені ви?`);
console.log(`Дата народження: ${BirthDate}`);
console.log(`Чи одружений: ${isMarried}`);
console.log(`Ім'я: ${FirstName}`);
console.log(`Прізвише: ${SecondName}`);
console.log(`Група: ${Group}`);
let zero = null;
console.log(`Zerotype: ${typeof(zero)}`);
console.log(`Abctype: ${typeof(abc)}`);
// Task 6
let UserLogin = prompt("Введіть ваш логін");
let UserMail = prompt("Введіть вашу пошту");
let UserPassword = prompt("Введіть ваш пароль");
alert(`Dear ${UserLogin}, your email is ${UserMail}, your password is ${UserPassword}.`);
// Task 7
let inHour = 60*60*60;
let inDay = inHour*24;
let inMonth = inDay*30;
alert(`Кількість секунд у годині: ${inHour}; в добі: ${inDay}, в місяці: ${inMonth}`);
// Task 8



