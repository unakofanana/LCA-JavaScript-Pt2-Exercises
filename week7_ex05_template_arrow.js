// Multiline string using template literals
const message = `
Welcome to JavaScript Pt 2.
This exercise focuses on:
- Template Literals
- Arrow Functions
- Modern JavaScript Syntax
`;

console.log(message);

// Function using template literals for HTML generation
function createCard(name, course) {

    return `
    <div class="card">
        <h2>${name}</h2>
        <p>${course}</p>
    </div>
    `;
}

console.log(createCard("Unako Fanana", "Frontend Development"));

// Regular function converted to arrow function
const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 5));

// Arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

// Multiply numbers
const multiplied = numbers.map(num => num * 2);

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Calculate total
const total = numbers.reduce((sum, num) => sum + num, 0);

console.log("Multiplied:", multiplied);
console.log("Even Numbers:", evenNumbers);
console.log("Total:", total);