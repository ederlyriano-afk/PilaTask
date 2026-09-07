const problema = document.querySelector(".Problema");
const imagenes = document.querySelectorAll(".problema-galeria img");

function actualizarProblema() {

    const inicio =
        problema.getBoundingClientRect().top + window.scrollY;

    const recorrido =
        problema.offsetHeight - window.innerHeight;

    const progreso =
        (window.scrollY - inicio) / recorrido;

    const progresoLimitado =
        Math.max(0, Math.min(1, progreso));


    imagenes.forEach((imagen, index) => {

        const inicioImagen = index / imagenes.length;
        const finalImagen = (index + 1) / imagenes.length;

        let progresoImagen =
            (progresoLimitado - inicioImagen) /
            (finalImagen - inicioImagen);

        progresoImagen =
            Math.max(0, Math.min(1, progresoImagen));


        imagen.style.opacity = progresoImagen;

        const movimiento =
            -120 + (120 * progresoImagen);

        imagen.style.transform =
            `translateY(${movimiento}px)`;

    });
}


let actualizando = false;

window.addEventListener("scroll", () => {

    if (!actualizando) {

        window.requestAnimationFrame(() => {
            actualizarProblema();
            actualizando = false;
        });

        actualizando = true;
    }

});


window.addEventListener("load", actualizarProblema);