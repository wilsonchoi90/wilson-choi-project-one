
// pseudo code

// Locate form on page
const formElement = document.querySelector('form');
// when form is submitted, prevent form default on refreshing page
formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    // collect information from form field sets that are entered
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const phoneNumElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');
    const messageElement = document.getElementById('message');
    
    if (firstNameElement.value == '' || lastNameElement.value == '' || phoneNumElement == '' || emailElement == '' || messageElement == '' ) {
        alert("Please fill in all fields!");
    } else {
        alert('Thank you for your submission! We appreciate your input!');
    }

    firstNameElement.value = '';
    lastNameElement.value = '';
    phoneNumElement.value = '';
    emailElement.value = '';
    messageElement.value = '';
});




// add items from form fieldset into HTML
