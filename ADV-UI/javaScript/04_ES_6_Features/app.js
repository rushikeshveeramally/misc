/*
ES6 Features
-------------
1) template String (backtick)
2) optional parameters
3) let ,const
4) for-of loop
5) arrow functions
6) destructuring
7) spread operator
 */

// template String
let empName = 'John';
let empAge = 40;
console.log("EMP NAME : " + empName + " EMP AGE : " + empAge); // Es5
console.log(`EMP NAME : ${empName} EMP AGE : ${empAge}`); // ES6

// optional parameter
let printNumbers = function(start,end=10) {
    let result = '';
    for(let i=start; i<=end; i++){
        result += `${i} `;
    }
    console.log(result);
};
printNumbers(0);
printNumbers(0,50);
printNumbers(0,50,2);


// let vs const
const name = 'John';
//name = 'Wilson';
console.log(name);

const appName = 'TS Login App';
const hostName = '127.0.0.1';
const appVersion = '1.2.3';

// const with object
const mobile = {
    brand : 'apple',
    color : 'silver',
    price : 35000
};
mobile.price = 45000;
console.log(mobile);

// Destructuring
let person = {
    name : 'Rajan',
    age : 35,
    designation : 'Sales Manager',
    address : {
        street : 'SR Nager',
        city : 'Hyderabad',
        state : 'TS'
    },
    personal : {
        hobbies : [ 'games' , 'movies'],
        colors : {
            shirts : ['red' , 'purple'],
            pants : ['black','blue', 'white']
        }
    }
};

let { shirts } = person.personal.colors.shirts;
console.log(shirts);

// spread operator (...)
let colors1 = ['white','black'];
let colors2 = ['blue','red'];
let newColors = [...colors1,...colors2];
console.log(newColors);




