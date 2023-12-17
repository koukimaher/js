document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        var name = document.getElementById("name").value;
        var Lname = document.getElementById("Lname").value;
        var phone = document.getElementById("phone").value;
        var pass = document.getElementById("pass").value;
        var pass1 = document.getElementById("pass1").value;

        var nameRegex = /^[a-zA-Z]{3,}$/;
        var LnameRegex = /^[a-zA-Z]{4,}$/;
        var phoneRegex = /^[0-9]+$/;
        var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

        var errors = [];
        var validationMessage = document.getElementById('nameValidationMessage');
        var passValidationMessage = document.getElementById('passValidationMessage');

        // Validate name
        if (!name.match(nameRegex)) {
            errors.push("Le nom ne doit contenir que des lettres et doit avoir au moins 3 caractères.");
        }

        // Validate last name
        if (!Lname.match(LnameRegex)) {
            errors.push("Le prénom doit compter au minimum 4 caractères.");
        }

        // Validate phone number
        if (!phone.match(phoneRegex)) {
            errors.push("Le numéro de téléphone ne doit pas contenir des lettres.");
        }

        // Validate password
        if (!pass.match(passRegex)) {
            errors.push("Le mot de passe doit contenir au moins 10 caractères, dont au moins : Une lettre majuscule, une lettre minuscule et un nombre.");
        }

        // Confirm password
        if (pass !== pass1) {
            errors.push("Les mots de passe ne sont pas identiques.");
        }

        if (errors.length > 0) {
            event.preventDefault();
            displayErrors(errors);
            validationMessage.textContent = '';
            passValidationMessage.textContent = '';
        } else {
            validationMessage.textContent = 'Le nom est correct.';
            validationMessage.style.color = 'green';
            passValidationMessage.textContent = 'Les mots de passe sont identiques.';
            passValidationMessage.style.color = 'green';
        }
    });
});

function displayErrors(errors) {
    var errorString = errors.join('\n');
    alert(errorString);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('name').addEventListener('keyup', function () {
        nameValidation();
    });
});

function nameValidation() {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const validationMessage = document.getElementById('nameValidationMessage');

    if (/[^a-zA-Z]/.test(nameValue)) {
        validationMessage.textContent = 'Le nom ne doit contenir que des lettres.';
        validationMessage.style.color = 'red';
    } else {
        validationMessage.textContent = 'Le nom est correct.';
        validationMessage.style.color = 'green';
    }
}

function passValidation() {
    var pass = document.getElementById("pass").value;
    var pass1 = document.getElementById("pass1").value;
    var passValidationMessage = document.getElementById('passValidationMessage');

    if (pass !== pass1) {
        passValidationMessage.textContent = 'Les mots de passe ne sont pas identiques.';
        passValidationMessage.style.color = 'red';
    } else {
        passValidationMessage.textContent = 'Les mots de passe sont identiques.';
        passValidationMessage.style.color = 'green';
    }
}
