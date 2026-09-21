// Hamburger menu
const toggle = document.querySelector(".toggle-button");
const navMenu = document.querySelector(".nav-links");

toggle.addEventListener("click", () =>{
    toggle.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n. addEventListener ("click", () => {
    toggle.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Validación de nombre

const nameField = document.getElementById("name-field");
const nameLabel = document.getElementById("name-label");
const nameError = document.getElementById("name-error");

function validateName() {

    if(!nameField.value.match(/^[A-Za-z]{2}/)){
        nameError.innerHTML = "Mínimo 2 carácteres.";
        return false;
    }

    nameError.innerHTML = "";
    return true;
}

nameField.addEventListener("input", validateName);
nameField.addEventListener("blur", validateName);

// Validación de correo

const emailField = document.getElementById("email-field");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");

function validateEmail() {

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Usa un correo válido.";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}

emailField.addEventListener("input", validateEmail);
emailField.addEventListener("blur", validateEmail);

// Validación del formulario completo

const validateForm = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    return isNameValid && isEmailValid;
};

// Submit

const form = document.querySelector("form");
const isFormValid = validateForm();

form.addEventListener("submit", (event) => {
    const isFormValid = validateForm();

    if (!isFormValid){
        event.preventDefault();
    } else {
        alert('¡Enviado correctamente!');
    }
});
