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
    const betaForm = document.querySelector("#beta-form");
    const scriptURL = "https://script.google.com/macros/s/AKfycbyxgrJ3PTFQHKi6G3bCPLUu_BmoZsnLwGN-J0O7KdvgJHfSwAJPS0KnJR3TRtgxGmI/exec";
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
    betaForm.addEventListener("submit", async (event) => { //async = prepared to wait

        event.preventDefault();

        const isFormValid = validateForm();

        if (!isFormValid){
            return;
        } 

        const formData = new FormData(betaForm);

        try {
            await fetch(scriptURL, { //wait for this (from async)
                method: "POST",
                body: new URLSearchParams(formData),
                mode: "no-cors"
            });

        alert("¡Enviado correctamente!");
        betaForm.reset();

        }catch(error) {
            console.error("Error al enviar:", error);
            alert("No se pudo enviar el formulario.");
        }

    });

}

function init() {
    setupMenuToggle();
    setupFormValidation();
}

document.addEventListener("DOMContentLoaded", init);