document.addEventListener("DOMContentLoaded", function () {

    const inicio = document.getElementById("inicio");
    const regalo = document.getElementById("regalo");
    const boton = document.getElementById("boton");

    const musica = document.getElementById("musica");
    const controlMusica = document.getElementById("controlMusica");

    // DATOS
    document.getElementById("nombrePersona").textContent =
        "Para " + datosCliente.nombre + " ❤️";

    document.getElementById("mensajePortada").textContent =
        datosCliente.mensajePortada;

    document.getElementById("tituloHistoria").textContent =
        datosCliente.tituloHistoria;

    document.getElementById("mensajeHistoria").textContent =
        datosCliente.mensajeHistoria;

    document.getElementById("fotoPrincipal").src =
        datosCliente.fotoPrincipal;


    // GALERÍA
    const galeria = document.getElementById("galeria");

    datosCliente.fotos.forEach(function (foto) {

        const imagen = document.createElement("img");

        imagen.src = foto;
        imagen.alt = "Nuestro recuerdo ❤️";

        galeria.appendChild(imagen);

    });


    // CARTA
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


    // ABRIR REGALO
    boton.addEventListener("click", function () {

        musica.play().catch(function () {});

        inicio.style.display = "none";
        regalo.classList.add("mostrar");

        window.scrollTo(0, 0);

    });


    // CARTA
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");

    sobre.addEventListener("click", function () {

        sobre.style.display = "none";
        carta.classList.add("abierta");

    });


    // MÚSICA
    controlMusica.addEventListener("click", function () {

        if (musica.paused) {

            musica.play();
            controlMusica.textContent = "🔊";

        } else {

            musica.pause();
            controlMusica.textContent = "🔇";

        }

    });


    // CRONÓMETRO
    const fechaInicio = new Date("2020-01-11T00:00:00");

    function actualizarContador() {

        const ahora = new Date();

        let años = ahora.getFullYear() - fechaInicio.getFullYear();

        let aniversario = new Date(
            fechaInicio.getFullYear() + años,
            fechaInicio.getMonth(),
            fechaInicio.getDate()
        );

        if (ahora < aniversario) {
            años--;
        }

        let fechaBase = new Date(
            fechaInicio.getFullYear() + años,
            fechaInicio.getMonth(),
            fechaInicio.getDate()
        );

        let diferencia = ahora - fechaBase;

        const dias = Math.floor(diferencia / 86400000);

        diferencia %= 86400000;

        const horas = Math.floor(diferencia / 3600000);

        diferencia %= 3600000;

        const minutos = Math.floor(diferencia / 60000);

        const segundos = Math.floor((diferencia % 60000) / 1000);

        document.getElementById("años").textContent = años;
        document.getElementById("meses").textContent = 0;
        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;

    }

    actualizarContador();

    setInterval(actualizarContador, 1000);

});
