// Sum function
function sum(num) {

    if (num % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

console.log(sum(5));
console.log(sum("hello"));

// Factorial function
function factorial(num) {

    let total = 1;
    let output = "";

    for (let i = num; i >= 1; i--) {
        total *= i;
        output += i;

        if (i !== 1) {
            output += "*";
        }
    }

    console.log(output + " = " + total);
}

factorial(4);

// FunkyMath function
function funkyMath(a, b, c, d) {

    if (arguments.length === 2) {
        return a - b;
    }

    if (arguments.length === 3) {
        return a + b + c;
    }

    if (arguments.length === 4) {
        return (a + b) / (c + d);
    }
}

console.log(funkyMath(10, 5));
console.log(funkyMath(1, 2, 3));
console.log(funkyMath(8, 2, 3, 5));

// Arrays
const numbers = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Odd Numbers:", oddNumbers);

// Object
const me = {
    firstName: "Unako",
    lastName: "Fanana",
    age: 19,
    favouriteColour: "Black",
    dreamCar: "BMW"
};

// Add favourite food
me.favouriteFood = "Pizza";

// Delete age
delete me.age;

console.log(me);