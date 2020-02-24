// basic function
function greet() {
    console.log('Good Morning');
}
greet();

// function with parameters
function greetMe(name,age) {
    let message = `Hello Mr.${name} you are ${age} yrs Old`;
    return message;
}
let message = greetMe('John',40);
console.log(message);

// function Expression
let add = function(a , b){
    return a + b;
};

let calculate = (a , b) => {
   let sum = add(a , b);
   return sum;
};
let result = calculate(10,20);
console.log(result);

// function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    },
    hobbies : ['reading books','playing football']
};
console.log(student.fullName());
console.log(student.firstName);
console.log(student.hobbies[1]);

