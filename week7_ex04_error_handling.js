// Validate user input
function validateInput(input) {

    try {

        if (input === "") {
            throw "Input cannot be empty";
        }

        if (typeof input !== "string") {
            throw "Input must be a string";
        }

        console.log("Valid Input:", input);

    } catch (error) {
        console.log("Error:", error);
    }
}

validateInput("JavaScript");
validateInput("");
validateInput(10);

// Multiple error types
function divideNumbers(a, b) {

    try {

        if (typeof a !== "number" || typeof b !== "number") {
            throw "Both values must be numbers";
        }

        if (b === 0) {
            throw "Cannot divide by zero";
        }

        console.log("Result:", a / b);

    } catch (error) {
        console.log("Error:", error);
    }
}

divideNumbers(10, 2);
divideNumbers(10, 0);
divideNumbers("10", 2);

// String helper functions
function makeUpperCase(str) {
    return str.toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function countCharacters(str) {
    return str.length;
}

console.log(makeUpperCase("javascript"));
console.log(reverseString("frontend"));
console.log(countCharacters("developer"));

// Array helper functions
function getLargestNumber(arr) {
    return Math.max(...arr);
}

function getSmallestNumber(arr) {
    return Math.min(...arr);
}

function getArraySum(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

const numbers = [5, 10, 15, 20];

console.log(getLargestNumber(numbers));
console.log(getSmallestNumber(numbers));
console.log(getArraySum(numbers));