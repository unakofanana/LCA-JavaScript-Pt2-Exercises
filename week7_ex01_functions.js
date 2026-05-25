// Multiply 3 numbers
function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}

console.log(multiply(2, 3, 4));

// Convert minutes to seconds
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5));

// Fahrenheit to Celsius
function fahrenheitToCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(100));

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

// Count vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));

// Check prime number
function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Test prime numbers
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(13));