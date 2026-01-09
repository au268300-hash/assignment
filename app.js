// ================= Question 1 =================
let productName = "Laptop";
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);

// ================= Question 2 =================
let remainder = 27 % 4;
let square = 12 ** 2;

let incNum = 8;
incNum++;

let decNum = 15;
decNum -= 2;

console.log("Remainder:", remainder);
console.log("Square:", square);
console.log("Increment:", incNum);
console.log("Decrement:", decNum);

// ================= Question 3 =================
let fName = "alex";
let lName = "SMITH";

let fullName = fName + " " + lName;
let properName =
  fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();

console.log("Full Name:", properName);
console.log("Length:", properName.length);

// ================= Question 4 =================
let temperature = 25;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Pleasant day");
} else {
  console.log("Cold day");
}

// ================= Question 5 =================
console.log(15 === "15");
console.log(20 > 15 && 20 < 25);
console.log(10 !== 10 || 5 > 3);

// ================= Question 6 =================
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors, colors.length);

// ================= Question 7 =================
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");

let middleThree = fruits.splice(1, 3);
console.log("Fruits:", fruits);
console.log("Middle:", middleThree);

// ================= Question 8 =================
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i > 8) break;
  console.log(i);
  sum += i;
}
console.log("Sum:", sum);

// ================= Question 9 =================
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// ================= Question 10 =================
let text = "The quick brown fox jumps over the lazy dog";

console.log("Position of fox:", text.indexOf("fox"));
console.log("Extract:", text.substring(10, 19));
console.log("Contains dog:", text.includes("dog"));
console.log("Char at 10:", text.charAt(10));

// ================= Question 11 =================
let sentence = "I love JavaScript and JavaScript is awesome";

console.log(sentence.replace("JavaScript", "coding"));
console.log(sentence.replace(/JavaScript/g, "JS"));
console.log(sentence.replace("awesome", "AWESOME"));

// ================= Question 12 =================
let numVal = 123.456789;

console.log(numVal.toFixed(2));
console.log(Math.round(numVal));
console.log(Math.floor(numVal));
console.log(Math.ceil(numVal));
console.log(numVal.toFixed(4));

// ================= Question 13 =================
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.random().toFixed(3));
console.log(Math.floor(Math.random() * (75 - 50 + 1)) + 50);

// ================= Question 14 =================
let n1 = Number("123");
let n2 = parseFloat("45.67");
let s1 = String(789);
let b1 = Boolean("true");

console.log(n1, n2, s1, typeof b1);

// ================= Question 15 =================
let now = new Date();
console.log(now.getFullYear(), now.getMonth(), now.getDate());
console.log(now.getHours());
console.log(now.toISOString().split("T")[0]);

let christmas = new Date(2024, 11, 25);
console.log(christmas.toDateString());

// ================= Question 16 =================
function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return b === 0 ? "Error" : a / b;
  return "Invalid operator";
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 0, "/"));

// ================= Question 17 =================
let globalCounter = 0;

function incrementCounter() {
  globalCounter++;
  let localCounter = 0;
  localCounter++;
  console.log("Local:", localCounter);
  console.log("Global:", globalCounter);
}

incrementCounter();
incrementCounter();

// ================= Question 18 =================
function getDay(num) {
  switch (num) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid day";
  }
}

console.log(getDay(0));
console.log(getDay(3));
console.log(getDay(7));

// ================= Question 19 =================
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
console.log("Blast off!");

let factNum = 5;
let factorial = 1;
while (factNum > 0) {
  factorial *= factNum;
  factNum--;
}
console.log("Factorial:", factorial);

// ================= Question 20 =================
let enteredPassword = "";
let attempts = 0;

do {
  attempts++;
  if (attempts === 3) enteredPassword = "secret123";
} while (enteredPassword !== "secret123" && attempts < 5);

console.log(
  enteredPassword === "secret123"
    ? "Access granted!"
    : "Access denied!"
);

// ================= Question 21 =================
let numbers = [12, 45, 78, 23, 56, 89, 34];

let maxVal = numbers[0];
let total = 0;
let greaterThan50 = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxVal) maxVal = numbers[i];
  total += numbers[i];
  if (numbers[i] > 50) greaterThan50.push(numbers[i]);
}

let reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log("Max:", maxVal);
console.log("Average:", total / numbers.length);
console.log(">50:", greaterThan50);
console.log("Reversed:", reversed);

// ================= Question 22 =================
function handleClick() {
  const input = document.getElementById("username");
  const greeting = document.getElementById("greeting");

  if (input.value.trim() === "") {
    alert("Please enter username");
  } else {
    greeting.textContent = `Welcome, ${input.value}`;
    input.value = "";
  }
}

// ================= Question 23 =================
function validateForm(email, password) {
  if (!email.includes("@")) return false;
  if (password.length < 8) return false;
  return true;
}

// ================= Question 24 =================
function convertTemperature(temp, unit) {
  if (unit === "C") return ((temp * 9) / 5 + 32).toFixed(1) + " °F";
  if (unit === "F") return (((temp - 32) * 5) / 9).toFixed(1) + " °C";
  return "Invalid unit";
}

// ================= Question 25 =================
let cart = [];

function addItem(name, price) {
  cart.push({ name, price });
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
}

function getCartTotal() {
  let total = 0;
  for (let item of cart) total += item.price;
  return total;
}
