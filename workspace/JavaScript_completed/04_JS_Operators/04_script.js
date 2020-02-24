// Assignment operator =
let test = 'John';
console.log(test);

// Arithmetic operators + - * /
let num1 = 100;
let num2 = 200;
console.log(`sum : ${num1 + num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Div : ${num1 / num2}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 10;
add = add + (a + b); // 10 + 10 + 20 = 40
add += (a + b); // 40 + 10 + 20 = 70
console.log(add); // 70

// Conditional operators < , > , <= , >= , !=
let marks = 35;
if(marks <= 35){
    console.log('Your Failed the Exam');
}
else{
    console.log('Your Cleared the Exam');
}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical operators AND (&&) , OR (||)
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
let abc = 20 + 10 + '20' + 10 + 20;
console.log(abc);

let name = "John";
let age = 40;

console.log("Name : " + name + " , AGE : " + age); // ES5
console.log(`Name : ${name} , AGE : ${age}`); // ES6 Template String

// Ternary operator (? :)
// (condition) ? true part : false part ;
marks = 25;
let message = '';
(marks <= 35) ? message = 'Your Failed the Exam' : message = 'Your Cleared the Exam';
console.log(message);

// Type of operator
let employeeName = "John";
console.log(`Type : ${typeof employeeName} , Value : ${employeeName}`);

// == operator auto type conversion / coercion
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}