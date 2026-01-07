// Question 1: Variable Declarations and Initialization
// Create three variables: productName(string with value "Laptop"), price(number with value 999.99), and inStock(boolean with value true).Console.log all three variables in a single statement.

let productName = "Laptop";
let price = 999.99;
let inStock = true;


console.log(productName, price, inStock);
// Question 2: Mathematical Operations
// Calculate and display:

// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let remainder = 27 % 4;


let square = 12 ** 2;


let num1 = 8;
num1++;


let num2 = 15;
num2 -= 2;


console.log("Remainder:", remainder);
console.log("Square of 12:", square);
console.log("Increment result:", num1);
console.log("Decrement result:", num2);

// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.

let firstName = "alex";
let lastName = "SMITH";

let fullName = firstName + " " + lastName;
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();

console.log("Full Name:", fullName);
console.log("Length of Full Name:", fullName.length);


let firstName = "alex";
let lastName = "SMITH";

let fullName = firstName + " " + lastName;


let properCaseName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();


let nameLength = properCaseName.length;


console.log("Full Name:", properCaseName);
console.log("Total Length:", nameLength);

// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25.

let temperature = 25;

if (temperature > 30) {
    console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
} else {
    console.log("Cold day");
}

// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3

let check1 = (15 === "15");

let check2 = (20 > 15 && 20 < 25);

let check3 = (10 !== 10 || 5 > 3);

console.log("15 === '15' :", check1);
console.log("20 > 15 && 20 < 25 :", check2);
console.log("10 !== 10 || 5 > 3 :", check3);

// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length


let colors = ["red", "green", "blue"];


colors.push("yellow");

colors.shift();

// Insert "purple" at index 1
colors.splice(1, 0, "purple");

// Console.log the final array and its length
console.log("Final Array:", colors);
console.log("Array Length:", colors.length);

// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2, 1);

fruits.splice(2, 1, "dragonfruit");

let middleThree = fruits.splice(1, 3);

console.log("Final fruits array:", fruits);
console.log("Middle three array:", middleThree);

// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i > 8) {
        break;
    }
    console.log(i);
    sum += i;
}
console.log("Sum of printed numbers:", sum);

// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10

 let text = "The quick brown fox jumps over the lazy dog";
 let position = text.find("fox");
 let extrated = text.substringtext[10:18];
 let containsdog = text.includes("dog");
 let charAt10 = text.charAt(10);
  console.log("position of 'fox';", position);
  console.log("Position of 'fox' → 16");
  console.log("Extract 'brown fox' →", text.substring(10, 18));
  console.log("Contains 'dog' →", containsdog);
  console.log("Character at position 10 →", charAt10);

 //question 11: 

   let sentence = "I love JavaScript and JavaScript is awesome";


let firstReplace = sentence.replace("JavaScript", "coding");
console.log(firstReplace);



let allReplace = sentence.replace(/JavaScript/g, "JS");
console.log(allReplace);

let awesomeReplace = sentence.replace("awesome", "AWESOME");
console.log(awesomeReplace);

// Question 12:

let num = 123.456789;


let roundTwo = num.toFixed(2);
console.log(roundTwo);



let nearestInt = Math.round(num);
console.log(nearestInt);

let floorVal = Math.floor(num);
console.log(floorVal);

let ceilVal = Math.ceil(num);
console.log(ceilVal);

let formatFour = num.toFixed(4);
console.log(formatFour);

// Question 13:

let randInt = Math.floor(Math.random() * 100) + 1;
console.log(randInt);

let randDecimal = Math.random().toFixed(3);
console.log(randDecimal);

let randRange = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
console.log(randRange);


//Question 14:

let num1 = Number("123");
console.log(num1);

let num2 = parseFloat("45.67");
console.log(num2);

let str = String(789);
console.log(str);

let bool = Boolean("true");
console.log(typeof bool);

// Question 15:

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth(); 
let day = now.getDate();
console.log(year, month, day);

let hours = now.getHours();
console.log(hours);

let formatted = now.toISOString().split('T')[0];
console.log(formatted);

let christmas = new Date(2024, 11, 25); 
console.log(christmas.toDateString());

// Question 16:

function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        if (b === 0) {
            return "Error: Division by zero";
        } else {
            return a / b;
        }
    } else {
        return "Error: Invalid operator";
    }
}

console.log(calculate(10, 5, '+'));  
console.log(calculate(10, 0, '/'));  

//Question 17 

let globalCounter = 0; 

function incrementCounter() {
    globalCounter++; // 
    
    let localCounter = 0; 
    localCounter++;       
    
    console.log("Local Counter:", localCounter);
    console.log("Global Counter:", globalCounter);
}


incrementCounter();
incrementCounter();

// Question 18:

function getDay(num) {
    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}


console.log(getDay(0)); 
console.log(getDay(3)); 
console.log(getDay(7));

// Question 19:

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Blast off!");

let num = 5;
let factorial = 1;
while (num > 0) {
    factorial *= num;
    num--;
}
console.log("Factorial of 5:", factorial);

// Question 20:

let enteredPassword = "";
let attempts = 0;

do {
    attempts++;
    if (attempts === 3) {
        enteredPassword = "secret123";
    }
    console.log("Attempt " + attempts + ": enteredPassword = " + enteredPassword);
} while (enteredPassword !== "secret123" && attempts < 5);

if (enteredPassword === "secret123") {
    console.log("Access granted!");
} else {
    console.log("Access denied. Too many attempts.");
}

// Question 21:

let numbers = [12, 45, 78, 23, 56, 89, 34];

// 1. Find the maximum value
let maxVal = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxVal) {
        maxVal = numbers[i];
    }
}
console.log("Maximum:", maxVal);

// 2. Calculate the average
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
let average = total / numbers.length;
console.log("Average:", average);

let greaterThan50 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        greaterThan50.push(numbers[i]);
    }
}
console.log("Numbers > 50:", greaterThan50);

let reversedArray = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
}
console.log("Reversed array:", reversedArray);

// Question 22:

function handleClick() {
    const inputField = document.getElementById("username");
    const username = inputField.value.trim(); 

    if (username === "") {
        alert("Please enter your username!");
    } else {
        const greetingPara = document.getElementById("greeting");
        greetingPara.textContent = `Welcome, ${username}!`;

        inputField.value = "";
    }
}

// Question 23:

function validateForm(email, password) {
    if (!email.includes("@")) {
        return { success: false, error: "Invalid email: must contain '@'." };
    }

    if (password.length < 8) {
        return { success: false, error: "Invalid password: must be at least 8 characters long." };
    }

    return { success: true, message: "Form is valid." };
}

// Question 24:

function convertTemperature(temp, unit) {
    let converted;

    if (unit === "C") {
        converted = (temp * 9/5) + 32;
        return converted.toFixed(1) + " °F";
    } else if (unit === "F") {
        converted = (temp - 32) * 5/9;
        return converted.toFixed(1) + " °C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Question 25:
let cart = [];

function addItem(name, price) {
    cart.push({ name: name, price: price });
    return `${name} added to cart.`;
}

function removeItem(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
        return `${name} removed from cart.`;
    }
    return `${name} not found in cart.`;
}

function getCartTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}
