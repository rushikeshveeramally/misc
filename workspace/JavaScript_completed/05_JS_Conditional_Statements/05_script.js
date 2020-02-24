// If-else
let time = 18;
let message = '';
if(time >= 0 && time <= 12){
    message = 'Good Morning';
}
else if(time >12 && time <= 17){
    message = 'Good Afternoon';
}
else if(time > 17 && time <= 23){
    message = 'Good Evening';
}
else{
    message = 'Enter Proper Time';
}
console.log(message);

// switch
let day = new Date().getDay();
let fullDay = '';
switch(day) {
    case 0:
        fullDay += 'SUNDAY';
        break;
    case 1:
        fullDay += 'MONDAY';
        break;
    case 2:
        fullDay += 'TUESDAY';
        break;
    case 3:
        fullDay += 'WEDNESDAY';
        break;
    case 4:
        fullDay += 'THURSDAY';
        break;
    case 5:
        fullDay += 'FRIDAY';
        break;
    case 6:
        fullDay += 'SATURDAY';
        break;
    default:
        fullDay += 'Enter a Proper Day';
        break;
}
console.log(`Today is : ${fullDay}`);

// print 0 - 10 using for-loop
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i} `;
    }
}
console.log(output);

// print 20 - 0 diff 2 using for-loop
output = '';
for(let i=20; i>=0; i-=2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print '*' using for loop
let theNumber = 5;
output = '';
for(let i=1; i<= theNumber; i++){
    for(let j=1; j<=i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// Print Numbers in ascending Order
/*
1
12
123
1234
12345
 */
output = '';
theNumber = 9;
for(let i=1; i<=theNumber; i++){
    for(let j=1; j<=i; j++){
        output += `${j}`;
    }
    output += `\n`;
}
console.log(output);

// Print numbers in descending order using for-loop
/*
54321
5432
543
54
5
 */
output = '';
theNumber = 9;
for(let i = 1 ; i <= theNumber ; i++){
    for(let j=9; j>=i; j--){
        output += `${j}`;
    }
    output += `\n`;
}
console.log(output);

// print same numbers using for loop
/*
1
22
333
4444
55555
 */
output = '';
theNumber = 9;
for(let i = 1; i<=theNumber; i++){
    for(let j=1; j<=i; j++){
        output += `${i}`;
    }
    output += `\n`;
}
console.log(output);

//
/*
9
98
987
9876
98765
987654
9876543
98765432
987654321
 */
output = '';
theNumber = 9;
for(let i = theNumber ; i >= 1 ; i--){
    for(let j=theNumber; j>=i; j--){
        output += `${i}`;
    }
    output += `\n`;
}
console.log(output);

// while loop
console.log('--------------------------------- while() loop --------------------');

// print 0 - 10 using for-loop
output = '';
let i = 0;
while(i<=10){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i} `;
    }
    i++;
}
console.log(output);


// print 20 - 0 diff 2 using while-loop
output = '';
i = 20;
while(i>=0){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i-=2;
}
console.log(output);

// Print '*' using for loop
theNumber = 5;
output = '';
i = 1;
while(i<= theNumber){
    let j=1;
    while(j<=i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);