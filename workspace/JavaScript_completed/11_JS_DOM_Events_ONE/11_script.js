// displayText
/*
    TASK : for even number of char , text color to be red
           for odd number of char , text color to be blue
 */
let evenOdd=function(n){
    if(n%2==0){

    }
    else{

    }
}

    let  numberBox  = document.querySelector('#even-odd');
    numberBox.addEventListener('keyup',function () {
    let h2Tag = document.querySelector('#print-even-odd');
    let textInput = numberBox.value();
    h2Tag.innerText = evenOdd(textInput);

});


let reverseString = function(str) {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
let inputBox = document.querySelector('#input-box');
inputBox.addEventListener('keyup',function () {
    let h2Tag = document.querySelector('#input-text');
    let textEntered = inputBox.value;
    h2Tag.innerText = reverseString(textEntered);
});

// Change Event
/*
    TASK : Print the reverse of Options with selected options
    Ex: HTML : LMTH
 */
let selectBox = document.querySelector('#select-box');
selectBox.addEventListener('change',function () {
   let selectedOption = selectBox.value;
   document.querySelector('#selected-option').innerText = selectedOption;
});

// show password
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function () {
   let passwordBox = document.querySelector('#password-box');
   let theAttribute = passwordBox.getAttribute('type'); // password
   if(theAttribute === 'password'){
       passwordBox.setAttribute('type','text');
   }
   else{
       passwordBox.setAttribute('type','password');
   }
});

// SMS App
/*
    TASK : for even numbers text area backgound color : lightblue
           for odd numbers text area backgound color : lightgreen
 */
let textArea = document.querySelector('#text-area');
textArea.addEventListener('keyup',function() {
    let textEnteredLength = textArea.value.length;
    document.querySelector('#span-count').innerText = textEnteredLength;
});

// Copy Addresses
let addressCheckBox = document.querySelector('#check');
let flag = true;
addressCheckBox.addEventListener('change',function() {
    flag = !flag; // toggle the flag value
    let currentAddressBox = document.querySelector('#current-address');
    let permanentAddressBox = document.querySelector('#permanent-address');
    if(flag){
        permanentAddressBox.value = '';
    }
    else{
        permanentAddressBox.value = currentAddressBox.value;
    }
});

// Range Selection
let rangeInput = document.querySelector('#range');
rangeInput.addEventListener('input',function () {
   let selectedValue = rangeInput.value;
   let actualNumber = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(selectedValue);
    document.querySelector('#display').innerText = actualNumber;
});

// Dependent Select Box
