// Object
let employee = {
    age : 40,
    name : 'John',
    salary : 85000,
    designation : 'Manager'
};
console.log(employee);

// properties of an object
console.log(employee.name); // John
console.log(employee.salary); // 85000

// Access not existing property of an object
console.log(employee.company); // undefined

// dot and [] notation of accessing objects
console.log(employee.designation); // Manager
console.log(employee['designation']); // Manager

// usage of [] than dot notation (dynamic properties)
let prop = 'salary';
console.log(employee.prop); // undefined
console.log(employee[prop]); // 85000

// nested object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania University',
    address : {
        street : 'Road No 1 , Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};
console.log(student);

// access the nested object
console.log(student.address);

// access the nested objects property
console.log(student.address.street);

// CRUD Operation with Object

// CREATE
let mobile = {};
console.log(mobile);

mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 35000;
mobile.isInsured = false;
console.log(mobile);

// READ
console.log(mobile.brand); // Apple
console.log(mobile.price); // 35000

// UPDATE
mobile.price = 45000;
console.log(mobile);

// DELETE
delete mobile.isInsured;
console.log(mobile);

// create 10 diff object and come
let fan = {
    color : 'white',
    brand : 'Cromphton',
    blades : 3,
    maxSpeed : '1000rpm'
};

