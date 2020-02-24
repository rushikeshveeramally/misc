// data types
// number , string , boolean , undefined , null , object , array

// string
let empName = 'John';
console.log(`Value : ${empName} Type : ${typeof empName}`);

// number
let empSalary = 85000;
console.log(`Value : ${empSalary} Type : ${typeof empSalary}`);

// boolean
let isManager = true;
console.log(`Value : ${isManager} Type : ${typeof isManager}`);

// Object
let student = {
    name : 'Rajan',
    age : 23,
    course : 'Engineering'
};
console.log(student);
console.log(student.name); // John
console.log(student['name']); // John

// array
let colors = ['white','green','blue','orange','black'];

// normal-for loop , for-in , for-of , forEach() , forEach arrow

// normal for-loop
let result = '';
for(let i=0; i<colors.length; i++){
    result += `${colors[i].toUpperCase()} `;
}
console.log(result);

// for-in loop
result = '';
for(let index in colors){
    result += `${colors[index].toUpperCase()} `;
}
console.log(result);

// for-of loop
result = '';
for(let color of colors){
    result += `${color.toUpperCase()} `;
}
console.log(result);

// forEach function
result = '';
colors.forEach(function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// forEach Arrow function
result = '';
colors.forEach((color) => {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// Employees array
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

console.log(employees[2].designation);

// filter junior employees
let juniorEmployees = employees.filter(function(employee) {
    return employee.age <= 30;
});
console.log(juniorEmployees);









