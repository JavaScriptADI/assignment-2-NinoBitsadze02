let userInput = prompt("Enter a number please.");
let number = parseInt(userInput);
if (number % 2 == 0) {
    console.log("That number is even.");
} else {
    console.log("That number is odd.");
}

let userNumber = prompt("Enter your exam score.");
let score = parseInt(userNumber);
if (score >= 90 && score <= 100) {
    console.log("You got an A!");
} else if (score >= 80 && score <= 89) {
    console.log("You got a B!");
} else if (score >= 70 && score <= 79) {
    console.log("You got a C!")
} else if (score >= 60 && score <= 69) {
    console.log("You got a D!")
} else if (score < 60) {
    console.log("You got an F!")
} else {
    console.log("Wrong score.")
}

let firstNumber = prompt("Enter the first number.");
let inputA = parseInt(firstNumber);
let secondNumber = prompt("Enter the second number.");
let inputB = parseInt(secondNumber);

if (inputA > inputB) {
    console.log("The first number is greater than the second one.");
} else if (inputA < inputB) {
    console.log("The second number is greater than the first one.");
} else if (inputA == inputB) {
    console.log("The numbers are equal.");
}


let userAge = prompt("Enter your age please.");
let ageNumber = parseInt(userAge);
let voteAge = 18 - ageNumber;

if (ageNumber >= 18) {
    console.log("You can vote!");
} else if (ageNumber < 18) {
    console.log("You have to wait " + voteAge + " years to vote.");
}

let calcFirst = prompt("Enter the first number for calculation.");
let calcSecond = prompt("Enter the second number for calculation.");
let calcSymbol = prompt("Which operation do you want to perform? (+, -, *, /")
let calcOne = parseInt(calcFirst);
let calcTwo = parseInt(calcSecond);
let calcThree = parseInt(calcSymbol);

if (calcThree == '+') {
    console.log("Result: " + calcOne + calcTwo);
} else if (calcThree == '-') {
    console.log("Result: " + calcOne - calcTwo);
} else if (calcThree == '*') {
    console.log("Result: " + calcOne * calcTwo);
} else if (calcThree == '/') {
    console.log("Result: " + calcOne / calcTwo);
}


