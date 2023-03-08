// task #2
console.log('Oleksii Rusnak');

// task #3
let a = "World is wonderful ";
document.write(a);
let b = a;
document.write(b);

// task #4
const dataTypes = {
    String: "String",
    Number: 2023,
    Boolean: true,
    Undefined: undefined,
    Null: null
 };
// console.log(dataTypes);

// task #5
let isAdult = confirm("Have you reached the age of majority?");
console.log(isAdult);

// task #6
let name = "Oleksii";
let surname = "Rusnak";
let studyGroup = "JsRetraining";
let dateOfBirth = 1992;
let isMarried = false;
console.log(dateOfBirth, isMarried, name);

let kids = null;
let sportCar = undefined;
console.log(typeof kids);
console.log(typeof sportCar);

// task #7
let dataCollection = prompt("What is your user name, email and password?", "username, email@example, password");
alert(dataCollection);

// task #8

let numberOfYears = prompt("How many years would you like to convert to seconds?", "1");
let secondsYear = numberOfYears * 60 * 60 * 24 * 365;
alert(numberOfYears + "year(s) equals - " + secondsYear + " seconds");
document.write(numberOfYears + "year(s) equals - " + secondsYear + " seconds ");

let numberOfMonths = prompt("How many months would you like to convert to seconds?", "1");
let secondsMonth = numberOfMonths * 60 * 60 * 24 * 31;
alert(numberOfMonths + "month(s) equals - " + secondsMonth + " seconds");
document.write(numberOfMonths + "month(s) equals - " + secondsMonth + " seconds ");

let numberOfDays = prompt("How many days would you like to convert to seconds?", "1");
let secondsDay = numberOfDays * 60 * 60 * 24;
alert(numberOfDays + "day(s) equals - " + secondsDay + " seconds");
document.write(numberOfDays + "day(s) equals - " + secondsDay + " seconds ");