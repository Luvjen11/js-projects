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

function operate(num1, num2, operator) {

    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        if (num2 === 0) {
            return "Error: You can't divide by zero dummie!";
        }
        return divide(num1, num2);
    }
    else {
        return "Error: enter a valid operation";
    }
}

// select elements
const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".buttons button");

//eventlisteners
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // to clear value wne C is clicked
        if (value === "C") {
            display.value = "0";
        }

        // handle backspace button
        else if (value === "←") {
            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = "0";
            }
        }

        else if (value === "=") {
            try {
                // evaluate expression
                let expression = display.value.replace("×", "*").replace("÷", "/");

                if (expression.includes("/0")) {
                    display.value = "you can't divide by zero, dummie!";
                } else {
                // evaluate expression

                    let result = eval(expression);

                    if (result.toString().includes(".")) {
                        result = Math.round(result * 100) / 100;
                    }

                    display.value = result;
                }
            } catch (error) {
                display.value = "Error";
            }
        }

        // percentage symbol handling
        else if (value === "%") {
            display.value = parseFloat(display.value)/100;
        }

        //exponential operation
        else if (value === "^") {
            display.value += "**";
        }

        // square root
        else if (value === "√") {

            if (display.value < "0" ) {
                return "No sqrt for negatives!";
            } else {
                display.value = Math.sqrt(display.value).toFixed(2); // round to 2 decimals
            }
        }

        // modulo 
        else if (value === "mod") {
            display.value += "%";
        }

        // inverse
        else if (value === "1/x") {

            if (display.value === "0") {
                return "You can't divide by zero dummie!";
            } else {
                let num = display.value;
                display.value = ("1"/num).toFixed(3); 
            }
        }

        // power of 10
        else if (value === "10^x") {
            display.value += "10**";
        }

        else {
            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});

