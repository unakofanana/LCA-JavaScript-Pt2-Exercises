// Global variable
let globalCount = 10;

// Function showing local scope
function localScopeExample() {

    let localCount = 5;

    console.log("Global Count:", globalCount);
    console.log("Local Count:", localCount);
}

localScopeExample();

// Function modifying variables
function modifyVariables() {

    globalCount += 5;

    let localCount = 20;

    console.log("Modified Global Count:", globalCount);
    console.log("Modified Local Count:", localCount);
}

modifyVariables();

// Student constructor function
function Student(firstName, lastName, age, course) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;

    this.introduce = function() {
        console.log(
            "Hi, my name is " +
            this.firstName +
            " " +
            this.lastName +
            ". I am " +
            this.age +
            " years old and I study " +
            this.course +
            "."
        );
    };
}

// Student instances
const student1 = new Student("Unako", "Fanana", 19, "Frontend Development");
const student2 = new Student("Liam", "Smith", 20, "JavaScript");
const student3 = new Student("Ava", "Johnson", 18, "Web Design");

// Introduce students
student1.introduce();
student2.introduce();
student3.introduce();

// Object literal with nested properties
const school = {

    name: "Life Choices Academy",

    location: {
        city: "Cape Town",
        country: "South Africa"
    },

    courses: {
        frontend: "Frontend Development",
        backend: "Backend Development"
    }
};

console.log(school);