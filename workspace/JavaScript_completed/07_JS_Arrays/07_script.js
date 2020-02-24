// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let array = [10,20,30,40,50];
console.log(array);

// access the elements of an array
console.log(array[0]); // 10
console.log(array[7]); // undefined

// mixed Array
let numbers = [[10,20] , [30,40], [50,60,70,[80,90]]];
console.log(numbers);

// nested array
console.log(numbers[0][0]); // 10
console.log(numbers[1][1]); // 40
console.log(numbers[2][3][1]); // 90

// array of objects
let employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : false
    },
    {
        id : 2,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 3,
        name : 'Mahesh',
        age : 30,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 4,
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        isActive : true
    },
    {
        id : 5,
        name : 'Laura',
        age : 28,
        designation : 'Business Analyst',
        isActive : false
    }
];
console.log(employees);
// access the first employee
console.log(employees[0]);
console.log(employees[0].name);

// Loop the array using normal for-loop
let output = '';
for(let i=0; i<employees.length ;i++){
    output += `${employees[i].name} `;
}
console.log(output);

// loop an array using for-in loop ES5
output = '';
for(let index in employees){
    output += `${employees[index].name} `;
}
console.log(output);

// loop an array using for-of loop ES6
output = '';
for(let employee of employees){
   output += `${employee.name} `;
}
console.log(output);

// loop an array with forEach() function
output = '';
employees.forEach(function(employee) {
    output += `${employee.name} `;
});
console.log(output);

// loop an array with forEach() Arrow function ES6
output = '';
employees.forEach(employee => output += `${employee.name} `);
console.log(output);

// list the junior employees (NOT Recommended)
let juniorEmployees = [];
let index = 0;
for(let i=0; i<employees.length; i++){
    if(employees[i].age <= 30){
        juniorEmployees[index] = employees[i];
        index++;
    }
}
console.log(juniorEmployees);

// list of juniorEmployee (Recommended)
juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// list of juniorEmployee (Highly Recommended)
juniorEmployees = employees.filter(employee => employee.age <= 30);
console.log(juniorEmployees);