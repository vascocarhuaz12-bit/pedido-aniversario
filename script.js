/* =========================
   ELEMENTOS PRINCIPALES
========================= */
/* =========================
   TEMA DEL CLIENTE
========================= */

document.body.classList.add("tema-" + datosCliente.tema);
const boton = document.getElementById("boton");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

const musica = document.getElementById("musica");
musica.src = datosCliente.musica;
const controlMusica = document.getElementById("controlMusica");


/* =========================
   ABRIR REGALO
========================= */

boton.addEventListener("click", function () {

    musica.play();

    controlMusica.style.display = "block";

    inicio.classList.add("ocultar");

    setTimeout(function () {

        inicio.style.display = "none";

        regalo.classList.add("mostrar");

        window.scrollTo(0, 0);

    }, 800);

});


/* =========================
   CARTA
========================= */

const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");

sobre.addEventListener("click", function () {

    sobre.style.display = "none";

    carta.classList.add("abierta");

});


/* =========================
   CONTROL DE MÚSICA
========================= */

controlMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        controlMusica.textContent = "🔊";

    } else {

        musica.pause();

        controlMusica.textContent = "🔇";

    }

});


/* =========================
   DATOS DEL CLIENTE
========================= */
document.getElementById("fotoPrincipal").src =
    datosCliente.fotoPrincipal;
document.getElementById("nombrePersona").textContent =
    "Para " + datosCliente.nombre + " ❤️";
document.getElementById("mensajePortada").textContent =
    datosCliente.mensajePortada;

document.getElementById("tituloHistoria").textContent =
    datosCliente.tituloHistoria;

document.getElementById("mensajeHistoria").textContent =
    datosCliente.mensajeHistoria;


/* =========================
   DATOS DE LA CARTA
========================= */

document.getElementById("saludoCarta").textContent =
    datosCliente.carta.saludo;

document.getElementById("cartaParrafo1").textContent =
    datosCliente.carta.parrafo1;

document.getElementById("cartaParrafo2").textContent =
    datosCliente.carta.parrafo2;

document.getElementById("cartaParrafo3").textContent =
    datosCliente.carta.parrafo3;

document.getElementById("firmaCarta").textContent =
    datosCliente.carta.firma;


/* =========================
   MOMENTOS AUTOMÁTICOS
========================= */

const timeline = document.getElementById("timeline");

datosCliente.momentos.forEach(function (momento) {

    const elemento = document.createElement("div");

    elemento.classList.add("momento");

    elemento.innerHTML = `
        <img src="${momento.foto}" alt="${momento.titulo}">

        <div class="momento-texto">

            <span>${momento.fecha}</span>

            <h3>${momento.titulo}</h3>

            <p>${momento.texto}</p>

        </div>
    `;

    timeline.appendChild(elemento);

});


/* =========================
   ANIMACIÓN DE LOS MOMENTOS
========================= */

const momentos = document.querySelectorAll(".momento");

const observer = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

momentos.forEach(function (momento) {

    observer.observe(momento);

});


/* =========================
   CONTADOR
========================= */

const fechaInicio = new Date(datosCliente.fechaInicio);

function actualizarContador() {

    const ahora = new Date();

    let anios =
        ahora.getFullYear() - fechaInicio.getFullYear();

    let meses =
        ahora.getMonth() - fechaInicio.getMonth();

    let dias =
        ahora.getDate() - fechaInicio.getDate();


    if (dias < 0) {

        meses--;

        const ultimoMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();

    }


    if (meses < 0) {

        anios--;

        meses += 12;

    }


    const diferencia = ahora - fechaInicio;

    const segundosTotales =
        Math.floor(diferencia / 1000);

    const segundos =
        segundosTotales % 60;

    const minutos =
        Math.floor(segundosTotales / 60) % 60;

    const horas =
        Math.floor(segundosTotales / 3600) % 24;


    document.getElementById("anios").textContent =
        anios;

    document.getElementById("meses").textContent =
        meses;

    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


actualizarContador();

setInterval(actualizarContador, 1000);