// Hamburger menu
function setupMenuToggle() {
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
}

function setupFormValidation() {
    
    // Variables
    const nameField = document.getElementById("name-field");
    const nameError = document.getElementById("name-error");
    const emailField = document.getElementById("email-field");
    const emailError = document.getElementById("email-error");

    //Validación del nombre
    function validateName() {

        if(!nameField.value.match(/^[A-Za-z]{2}/)){
            nameError.innerHTML = "Mínimo 2 carácteres.";
            return false;
        }

        nameError.innerHTML = "";
        return true;
    }

    // Validación del correo
    function validateEmail() {

        if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML = "Usa un correo válido.";
            return false;
        }

        emailError.innerHTML = "";
        return true;
    }

    // Validación del formulario completo
    const validateForm = () => {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();

        return isNameValid && isEmailValid;
    };

    //Event listeners
    nameField.addEventListener("input", validateName);
    nameField.addEventListener("blur", validateName);
    emailField.addEventListener("input", validateEmail);
    emailField.addEventListener("blur", validateEmail);

    // Submit
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const isFormValid = validateForm();

        if (!isFormValid){
            event.preventDefault();
        } else {
            alert('¡Enviado correctamente!');
        }
    });

}

function init() {
    setupMenuToggle();
    setupFormValidation();
}

document.addEventListener("DOMContentLoaded", init);