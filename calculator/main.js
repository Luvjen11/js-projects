// Adds two numbers and returns the result
function add(number1, number2) {
    return number1 + number2;
}

// subtracts two numbers and returns the result
function subtract(number1, number2) {
    return number1 - number2;
}

// multiplies two numbers and returns the result
function multiply(number1, number2) {
    return number1 * number2;
}

// divides two numbers and returns the result
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: You can't divide by zero dummie!";
    }
    return number1 / number2;
}

// testing if functions are working
console.log(add(3, 5)); 
console.log(subtract(10, 4)); 
console.log(multiply(2, 3)); 
console.log(divide(8, 2)); 
console.log(divide(5, 0));

let num1;
let num2;
let operator;
