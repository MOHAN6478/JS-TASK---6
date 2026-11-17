// 1. Function that accepts two numbers and prints addition

function addition(a, b) {
    console.log(a + b);
}

addition(10, 20); // 30

// 2. Function that accepts three parameters and prints multiplication 

function multiplication(a, b, c) {
    console.log(a * b * c);
}

multiplication(2, 3, 4); // 24

// 3. Function that returns subtraction of two numbers

function subtraction(a, b) {
    return a - b;
}

let result = subtraction(50, 20);

console.log(result); // 30

// 4. Function that accepts another function as an argument

function welcome() {
    console.log("Welcome to JavaScript");
}

function main(callback) {
    callback();
}

main(welcome); // Welcome to JavaScript

// 5. Callback function that prints Task Completed

function taskCompleted() {
    console.log("Task Completed");
}

function processTask(callback) {
    callback();
}

processTask(taskCompleted); 

// 6. Higher-order function that performs addition and calls a subtraction callback

function subtraction() {
    console.log(50 - 20);
}

function calculator(callback) {
    console.log(10 + 20);

    callback();
}

calculator(subtraction);

// output: 30, 30

// 7. Accept callback and two numbers. Perform addition first, then multiplication using callback.

function multiplication(result) {
    console.log(result * 2);
}

function addition(a, b, callback) {
    let total = a + b;

    console.log(total);

    callback(total);
}

addition(10, 20, multiplication);

// output: 30, 60

// 8. Function that calls two different callback functions

function firstTask() {
    console.log("First Task Completed");
}

function secondTask() {
    console.log("Second Task Completed");
}

function execute(callback1, callback2) {
    callback1();
    callback2();
}

execute(firstTask, secondTask);

// 9. Callback function using arrow function

const task = () => {
    console.log("Task Completed");
};

function execute(callback) {
    callback();
}

execute(task);

// 10. Higher-order function that accepts a named function

function student() {
    console.log("Student Details");
}

function display(callback) {
    callback();
}

display(student);

// 11. Generator function that yields five student names

function* students() {
    yield "Mohan";
    yield "Arun";
    yield "Kumar";
    yield "Rahul";
    yield "Vijay";
}

let result = students();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);


// 12. Call .next().value three times

function* studentNames() {
    yield "Mohan";
    yield "Arun";
    yield "Rahul";
}

let names = studentNames();

console.log(names.next().value); // Mohan
console.log(names.next().value); // Arun
console.log(names.next().value); // Rahul

// 13. Generator that yields 10, 20, 30, 40

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let result = numbers();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

// 14. Use for-of loop to display generator values

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

for (let value of numbers()) {
    console.log(value);
}

// 15. Generator that yields greetings

function* greetings() {
    yield "Good Morning";
    yield "Good Afternoon";
    yield "Good Night";
}

for (let message of greetings()) {
    console.log(message);
}

// 16. Generator that yields five cashback messages

function* cashback() {
    yield "You received ₹10 cashback";
    yield "You received ₹20 cashback";
    yield "You received ₹30 cashback";
    yield "You received ₹40 cashback";
    yield "You received ₹50 cashback";
}

for (let message of cashback()) {
    console.log(message);
}

// 17. Name and department with default ECE

function student(name, department = "ECE") {
    console.log("Name:", name);
    console.log("Department:", department);
}

student("Mohan");

// output: 
// Name: Mohan
// Department: ECE

// 18. Employee name and default designation

function employee(name, designation = "Trainee") {
    console.log("Employee:", name);
    console.log("Designation:", designation);
}

employee("Mohan");

// 19. Function with three parameters and third default value

function details(name, age, city = "Chennai") {
    console.log(name);
    console.log(age);
    console.log(city);
}

details("Mohan", 22);

// 20. Call the same function twice

function student(name, department = "ECE") {
    console.log(name, department);
}

// Without optional argument
student("Mohan"); // Mohan ECE

// With optional argument
student("Arun", "CSE"); // Arun CSE

// 21. Product name and default price 100

function product(name, price = 100) {
    console.log("Product:", name);
    console.log("Price:", price);
}

product("Laptop");
product("Mouse", 500);

// 22. Normal function accepting three numbers

function addition(a, b, c) {
    console.log(a + b + c);
}

addition(10, 20, 30);

// 23. Convert the above function into currying

function addition(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

addition(10)(20)(30); // 60

// 24. Currying function accepting name, age, city

function student(name) {
    return function(age) {
        return function(city) {
            console.log("Name:", name);
            console.log("Age:", age);
            console.log("City:", city);
        };
    };
}

student("Mohan")(22)("Coimbatore");


// 25. Currying function that multiplies three numbers

function multiplication(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        };
    };
}

multiplication(2)(3)(4); // 24

// 26. Normal function accepting employee details

function employee(name, role, salary) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

employee("Mohan", "Developer", 25000);

// 27. Compare normal function and currying function

// Normal Function

function addition(a, b, c) {
    console.log(a + b + c);
}

addition(10, 20, 30);


// Currying Function

function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

add(10)(20)(30);

// 28. Combine two arrays containing three numbers

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let result = [...arr1, ...arr2];

console.log(result); // [10, 20, 30, 40, 50, 60]

// 29. Combine two fruit arrays

let fruits1 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

let fruits2 = ["Pineapple", "Papaya", "Watermelon", "Guava", "Kiwi"];

let allFruits = [...fruits1, ...fruits2];

console.log(allFruits);

// 30. Copy array using spread

let original = [10, 20, 30, 40];

let copy = [...original];

console.log(original);
console.log(copy);

// 31. Combine two employee objects

let employee1 = {
    name: "Mohan",
    age: 22
};

let employee2 = {
    role: "Developer",
    salary: 25000
};

let employee = {
    ...employee1,
    ...employee2
};

console.log(employee);

// 32. Combine objects with different property names

let student = {
    name: "Mohan",
    age: 22
};

let address = {
    city: "Coimbatore",
    state: "Tamil Nadu"
};

let details = {
    ...student,
    ...address
};

console.log(details);

// 33. Combine objects with the same property name

let obj1 = {
    name: "Mohan",
    age: 22
};

let obj2 = {
    name: "Arun",
    city: "Chennai"
};

let result = {
    ...obj1,
    ...obj2
};

console.log(result);

// output:
/* 
{
    name: "Arun",
    age: 22,
    city: "Chennai"
}
*/

// 34. Two normal parameters and rest parameters

function numbers(a, b, ...remaining) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", remaining);
}

numbers(10, 20, 30, 40, 50);

/*
output: 
First: 10
Second: 20
Remaining: [30, 40, 50] 
*/

// 35. Pass eight numbers and print rest array

function collect(a, b, ...numbers) {
    console.log(numbers);
}

collect(10, 20, 30, 40, 50, 60, 70, 80); // output: [30, 40, 50, 60, 70, 80]

// 36. Array with seven values and destructure first three

let numbers = [10, 20, 30, 40, 50, 60, 70];

let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// 37. Object destructuring 

let student = {
    name: "Mohan",
    age: 22,
    location: "Coimbatore"
};

let { name, age, location } = student;

console.log(name);
console.log(age);
console.log(location);

// 38. Function accepting multiple numbers using rest 

function numbers(...values) {
    console.log(values);
}

numbers(10, 20, 30, 40, 50);

// 39. Copy ten numbers using spread

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let copy = [...numbers];

console.log(copy);

// 40. Two normal parameters and rest parameter

function student(name, age, ...marks) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Marks:", marks);
}

student("Mohan", 22, 80, 85, 90, 95, 88, 92);

/*
output:
Name: Mohan
Age: 22
Marks: [80, 85, 90, 95, 88, 92]
*/


// Mini Project Challenge – Student Information Management Program


let studentNames = ["Mohan", "Arun", "Rahul", "Vijay"];

console.log("Student Names:", studentNames);


let student1 = {
    name: "Mohan",
    age: 22
};

let student2 = {
    department: "Computer Science",
    city: "Coimbatore"
};


let studentDetails = {
    ...student1,
    ...student2
};

console.log("Student Details:", studentDetails);


function calculateMarks(...marks) {
    console.log("Student Marks:", marks);
}

calculateMarks(80, 85, 90, 95, 88);

function displayStudent() {
    console.log("Name:", studentDetails.name);
    console.log("Age:", studentDetails.age);
    console.log("Department:", studentDetails.department);
    console.log("City:", studentDetails.city);
}

function studentInformation(callback) {
    callback();
}

studentInformation(displayStudent);


function departmentDetails(name, department = "ECE") {
    console.log("Student:", name);
    console.log("Department:", department);
}

departmentDetails("Mohan");


function student(name) {
    return function(age) {
        return function(department) {
            console.log("Name:", name);
            console.log("Age:", age);
            console.log("Department:", department);
        };
    };
}

student("Mohan")(22)("Computer Science");
