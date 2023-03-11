//task 1

let x = 1; 
let y = 2; 

let res1 = String (x) + String(y);
console.log(res1);
console.log( typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2); 
console.log( typeof res2); 

let res3 = Boolean(x+y);
console.log(res3); 
console.log( typeof res3); 

let res4 = x*"y";
console.log(res4);
console.log( typeof res4);

//task 2

let enteredNumber =  prompt("Enter any number, please", "1");
    if (enteredNumber > 0) {
        console.log("Positive");
        console.log(enteredNumber*7);
    }    else {
        console.log("Negative");
    };

//task 3
/*
const arrayTest = [];
    arrayTest[0] = 666;
    arrayTest[1] = "Test";
    arrayTest[2] = true;
    arrayTest[3] = null;
console.log(arrayTest.length);

let editArrayWithUserInput =  prompt("Enter any value to edit array", "Number or text");
    arrayTest.push(editArrayWithUserInput);
    alert(arrayTest[4]);
    arrayTest.shift();
    alert(arrayTest);
*/

//task 4
let cities = [" Rome ", " Lviv ", " Warsaw "];  
    let ribbon = cities[0] + "*" + cities[1] + "*" + cities[2];
    console.log(ribbon);

//task 5
let isAdult = prompt("How old are you?", "18");
    if(isAdult >= 18) {
        alert("You have reached the age of majority");
    } else if (isAdult < 18) {
        alert("You are still too young")
    } else {
        alert("Sorry, something is wrong")
    };

//task 6 
//(I had to copy formula solution, because I don`t know the math formula to find the area of triangle. Conditions were added by me)

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);
if (isNaN(areaValue)|| areaValue <= 0) {
    console.log("Values are incorrect")
    }  
    else {
    console.log(`The area of the triangle is ${parseFloat(areaValue).toFixed(3)}`);
};

// task 7

let currentDate = new Date();
let time = currentDate.getHours();
console.log(time);

if (time > 23 && time <= 5) {
    alert("Good Night");
} else if (time > 5 && time <= 11 ) {
    alert("Good Morning");
} else if (time > 11 && time <= 17) {
    alert("Good Day");
} else if (time > 17 && time <= 23) {
    alert("Good evening");
} else (
    alert("Something is not working")
);

switch (true) {
    case (time > 23 && time <= 5):
        alert("Good Night Switch");
        break;
    case (time > 5 && time <= 11 ):
        alert("Good Morning Switch");
        break;
    case (time > 11 && time <= 17):
        alert("Good Day Switch");
        break;
    case (time > 17 && time <= 23):
        alert("Good evening Switch");
        break;
    default:
        alert('Something is not working Switch')
};