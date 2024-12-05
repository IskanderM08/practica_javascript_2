function preguntarRespuesta() {
    let numeroUno = generarNumero();
    let numeroDos = generarNumero();
    let respuestaCorrecta = numeroUno + numeroDos;

    let respuestaUsuario = -1;

    do {
        console.log("¿Cuánto es " + String(numeroUno) + " + " + String(numeroDos) + "?");
        alert("¿Cuánto es " + String(numeroUno) + " + " + String(numeroDos) + "?");

        respuestaUsuario = prompt("Ingrese la respuesta: ");

        if (respuestaUsuario != respuestaCorrecta) {
            console.log("Respuesta Incorrecta, vuelva a ingresarla");
            alert("Respuesta Incorrecta, vuelva a ingresarla");
        } else {
            let mensajeCorrecto = generarMensaje();
            console.log(mensajeCorrecto);
            alert(mensajeCorrecto);
        }
    } while (respuestaUsuario != respuestaCorrecta);

}

function generarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    return numeroAleatorio;
}

function generarMensaje() {
    const listaMensajes = ["Correcto", "Muy Bueno", "Bien Hecho", "Buen Trabajo"];
    let indiceMensaje = Math.floor(Math.random() * listaMensajes.length);
    return listaMensajes[indiceMensaje];
}

preguntarRespuesta();