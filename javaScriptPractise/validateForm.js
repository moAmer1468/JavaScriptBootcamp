let amerusernameField = document.querySelector("[name='amer-username'");
let amerageField = document.querySelector("[name='amer-age'");


console.log(amerusernameField);

document.forms[0].onsubmit = function(event) {
    let userValid = false;
    let ageValid = false;

    if (amerusernameField.value !== "" && amerusernameField.value.length <= 10) {
        userValid = true;
        console.log(amerusernameField.value);
        console.log('This is valid one here ');
    }
    if (amerageField.value !== "") {
        console.log(amerageField.value);
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {
        console.log('This is not good');
        event.preventDefault();
    }
}