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