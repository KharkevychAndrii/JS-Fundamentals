    function sumSliceArray(arr, first, second) {
    if (typeof(first) !== `number` || typeof(second) !== `number`) {
        throw new Error(`Elememts should be a number`);
    }
    if (first >= arr.length || second >= arr.length) {
        throw new Error(`Elements should be in range from 0 to ${arr.length}`)
    }
    let res = arr[first] + arr[second];
    return res;
    }
    try {
        const array = [1, 2, 3, 4, 5, 6];
        const result = sumSliceArray(array, 1, 3);
        console.log('Результат: ', result);
      } catch (error) {
        console.log('Сталася помилка:', error.message);
    }
// Task 1

    function checkAge(name, age, status) {
        try {
        name = prompt(`Enter your name`);
        age = prompt(`Enter your age`);
        status = prompt(`Enter your status`);
        if (!name || !age || !status) {
            throw new Error(`The field is empty! Please enter your age`);
        }
        if (isNaN(age)) {
            throw new TypeError(`Age should be a number`);
        }
        if (age < 18 || age > 70) {
            throw new RangeError(`Age should be in range from 18 to 70`);
        }
        if (status !== `адмін` && status !== `модератор` && status !== `користувач`) {
            throw new EvalError(`Status incorrect`);
        }
        alert(`You have acces to film`);
        }
        catch (error) {
            alert(`${error.name} because ${error.message}`);
        }
    }
// Task 2

    function calcRectangleArea(width, height) {
            width = prompt(`Enter width`);
            height = prompt(`Enter height`);
            if (!width || !height) {
                throw new Error(`The field is empty! Pleae enter values`);
            }
            if (width <= 0 || height <= 0) {
                throw new RangeError(`Value cannot be less than 0`);
            }
            if (isNaN(width) || isNaN(height)) {
                throw new TypeError(`Value should be a number`);
            }
            let square = width * height;
            return square
        }
    try {
        calcRectangleArea();
    }
        catch(error) {
            alert(`${error.name}: ${error.message}`);
        }
// Task 3

    class MonthException {
        constructor(message) {
            this.name = `MonthException`;
            this.message = message;
        }
    }
    function showMonthName(month) {
        const MonthName = [`January`, `Fabruary`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
        if (month < 1 || month > 12) {
            throw new MonthException(`Incorrect month number.`);
        }
        if (isNaN(month)) {
            throw new TypeError(`Enter number from 1 to 12`);
        }
        return MonthName[(month - 1)];
    }
    try {
        let custNumber = +prompt(`Enter index of month`);
        alert(showMonthName(custNumber));
    }
    catch (error) {
        if (error instanceof MonthException) {
            alert(`${error.name}: ${error.message}`);
        }
        else {
            alert(`${error.name}: ${error.message}`)
        }
    }
// Task 4

    function showUser(id) {
        if (id < 0) {
            throw new Error(`ID must not be negative`);
        }
        return {id};
    }
    function showUsers(ids) {
        let res = [];
        for (let id of ids) {
        try {
            let user = showUser(id);
            res.push(user);
        }
        catch (error) {
            console.log(`Error: ${error.message}: ${id}`);
        }
    }
        return res;
        }
        console.log(showUsers([7, -12, 44, 22]));

// Task 5
    


  

    
