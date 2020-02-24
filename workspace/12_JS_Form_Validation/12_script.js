let loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',function(e) {
    // prevent to form submission
    e.preventDefault();
    return validateForm();
});

let count = 1;

// validateForm
let validateForm = function () {
    let isValid = validateUsername()
                    && validateEmail()
                    && validatePassword()
                    && validateConfirmPassword()
                    && validatePasswordMatch();
    if(isValid){
        alert('Form Submitted successfully');
        let user = {
            sno : count,
            username : document.querySelector('#username').value,
            email : document.querySelector('#email').value,
            password : document.querySelector('#password').value,
            confirmPassword : document.querySelector('#c_password').value
        };
        count++;
        displayData(user);

        return true;
    }
    else{
        return false;
    }
};

// validate username
let validateUsername = function() {
    let inputField = document.querySelector('#username');
    // for empty field
    if(inputField.value === ''){
        let message = 'Username is Required';
        applyColors(inputField, 'red');
        displayErrorMessage(message);
        return false;
    }
    // for username length < 5
    else if(inputField.value.length < 5){
        let message = 'Username must be 5 letters';
        applyColors(inputField, 'red');
        displayErrorMessage(message);
        return false;
    }
    // for Reg Exp (don't allow special characters)
    else if(!inputField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        let message = 'No Special Characters Dude';
        applyColors(inputField, 'red');
        displayErrorMessage(message);
        return false;
    }
    else{
        applyColors(inputField, 'limegreen');
        return true;
    }
};

// validate email
let validateEmail = function(){
    let inputField = document.querySelector('#email');
    if(inputField.value === ''){
        let message = 'Email is Required';
        applyColors(inputField, 'red');
        displayErrorMessage(message);
        return false;
    }
    else{
        applyColors(inputField, 'limegreen');
        return true;
    }
};

// validate password
let validatePassword = function(){
    let inputField = document.querySelector('#password');
    if(inputField.value === ''){
        let message = 'Password is Required';
        applyColors(inputField, 'red');
        displayErrorMessage(message);
        return false;
    }
    else{
        applyColors(inputField, 'limegreen');
        return true;
    }
};


// validate confirmPassword
let validateConfirmPassword = function(){
    let inputField = document.querySelector('#c_password');
    if(inputField.value === ''){
        let message = 'Confirm Password is Required';
        applyColors(inputField, 'red');
        displayErrorMessage(message);
        return false;
    }
    else{
        applyColors(inputField, 'limegreen');
        return true;
    }
};

// validate passwords match
let validatePasswordMatch = function(){
    let passwordField = document.querySelector('#password');
    let confirmPasswordField = document.querySelector('#c_password');
    if(passwordField.value !== confirmPasswordField.value){
        let message = 'Passwords are NOT Matched';
        applyColors(passwordField,'red');
        applyColors(confirmPasswordField,'red');
        displayErrorMessage(message);
        return false;
    }
    else{
        applyColors(passwordField,'green');
        applyColors(confirmPasswordField,'green');
        return true;

    }
};


// applyColors
let applyColors = function(inputField,color) {
  inputField.style.borderColor = color;
  inputField.style.boxShadow = `0 0 10px ${color}`;
};

// display Error Message
let displayErrorMessage = function(message) {
    let errMsgDiv = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    errMsgDiv.appendChild(h3Tag);
    // remove the error message after 2 seconds
    setTimeout(removeErrorMessage,2000);
};

// remove Error Message
let removeErrorMessage = function() {
    document.querySelector('#error-msg h3').remove();
};

// display in a table
let displayData = function(user) {
  let tableBody = document.querySelector('#table-body');
  let tableRow = document.createElement('tr');
  let tableData = `
                       <td>${user.sno}</td>
                       <td>${user.username}</td>
                       <td>${user.email}</td>
                       <td>${user.password}</td>
                       <td>${user.confirmPassword}</td>
                  `;
  tableRow.innerHTML = tableData;
  tableBody.appendChild(tableRow);
  clearFormData();
};

// clear the form data
let clearFormData = function() {
    clearColors(document.querySelector('#username'));
    clearColors(document.querySelector('#email'));
    clearColors(document.querySelector('#password'));
    clearColors(document.querySelector('#c_password'));
};

// clear Colors
let clearColors = function(inputField) {
    inputField.value = '';
    inputField.style.borderColor = 'gray';
    inputField.style.boxShadow = `0 0 0px white`;
};
