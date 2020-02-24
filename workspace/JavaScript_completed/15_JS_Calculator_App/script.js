//declaring all the htm elements
let firstNumberBox=document.querySelector('#firstNumber');
let secondNumberBox=document.querySelector('#secondNumber');
let operatorButton=document.querySelector('#operator');
let resultButton=document.querySelector('#result-button');
let equalsButton=document.querySelector('#equals-button')
let plusButton=document.querySelector('#plus-button');
let minusButton=document.querySelector('#minus-button');
let multiplyButton=document.querySelector('#multiply-button');
let divButton=document.querySelector('#divide-button');
let clearButton=document.querySelector('#clear-button');

//on click of minus button
minusButton.addEventListener('click',function () {
    operatorButton.innerText=minusButton.innerText;
});

//on click of div button
divButton.addEventListener('click',function () {
    operatorButton.innerText=divButton.innerText;
});

//on click of mul button
multiplyButton.addEventListener('click',function () {
   operatorButton.innerText=multiplyButton.innerText;
});

//on click of plus button
plusButton.addEventListener('click',function () {
   operatorButton.innerText=plusButton.innerText;
});

//on clicking  equals button
equalsButton.addEventListener('click',function () {
    let  firstNumber=firstNumberBox.value;
    let  secondNumber=secondNumberBox.value;
    let operator=operatorButton.innerText.trim();
    let result=0;
    if (firstNumber !== '' && secondNumber!==''){
        let num1=Number.parseFloat(firstNumber);
        let num2=Number.parseFloat(secondNumber);

            switch (operator) {
                case '+':
                    result = num1 + num2 ;
                    break;
                case '-' :
                    result= num1 - num2;
                    break;
                case  '*' :
                    result = num1 * num2;
                    break;
                case '/' :
                    result = num1/num2;
                    break;
            }
            resultButton.innerText=result;
    }
});

//on clicking of clear button
clearButton.addEventListener('click',function () {
   firstNumberBox.value='';
   secondNumberBox.value='';
   operatorButton.innerText='+';
   resultButton.innerText='RESULT'
});




















