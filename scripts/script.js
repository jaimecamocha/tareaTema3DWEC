// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/tareaTema3DWEC.git


document.addEventListener('DOMContentLoaded', function() {
    // Solicitar al usuario que introduzca su nombre y apellidos
    var nombreCompleto = prompt("Introduce tu nombre y apellidos:");
    while (!/^[a-zA-Z\s]+$/.test(nombreCompleto)) {
        nombreCompleto = prompt("Por favor, introduzca sólamente letras para su nombre:");
    }

    // Solicitar al usuario que introduzca el día de su nacimiento (solo números)
    var diaNacimiento = prompt("Introduce el día de tu nacimiento:");
    while (!/^\d+$/.test(diaNacimiento)) {
        diaNacimiento = prompt("Por favor, introduzca un número para su día:");
    }

    // Solicitar al usuario que introduzca el mes de su nacimiento (solo números)
    var mesNacimiento = prompt("Introduce el mes de tu nacimiento: (número)");
    while (!/^\d+$/.test(mesNacimiento)) {
        mesNacimiento = prompt("Por favor, introduzca un número para su mes:");
    }

    // Solicitar al usuario que introduzca el año de su nacimiento (solo números)
    var anoNacimiento = prompt("Introduce el año de tu nacimiento:");
    while (!/^\d+$/.test(anoNacimiento)) {
        anoNacimiento = prompt("Por favor, introduzca un número para su año:");
    }

    // Calcular la edad del usuario
    var fechaNacimiento = new Date(anoNacimiento, mesNacimiento - 1, diaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || 
        (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Obtener la estación del año
    var estacion = obtenerEstacion(mesNacimiento);

    // Mostrar los resultados
    document.write("Buenos días <strong>" + nombreCompleto + "</strong>.<br>");
    document.write("Tu nombre tiene <strong>" + nombreCompleto.length + "</strong> caracteres, incluidos espacios.<br>");

    var posicionesA = obtenerPosicionesLetraA(nombreCompleto);
    if (posicionesA.length > 0) {
        document.write("Las letras 'A' en tu nombre están en la/las posiciones: <strong>" + posicionesA.join(', ') + "</strong>.<br>");
        document.write("La primera letra 'A de tu nombre está en la posición: <strong>" + posicionesA[0] + "</strong><br/>");
        document.write("La última letra 'A de tu nombre está en la posición: <strong>" + posicionesA[posicionesA.length - 1] + "</strong><br/>");
    } else {
        document.write("No se encontraron letras 'A' en tu nombre.<br>");
    }

    var nombreSinTresPrimerasLetras = nombreCompleto.substring(3);
    document.write("Tu nombre menos las 3 primeras letras es: </strong>" + nombreSinTresPrimerasLetras + "</strong>.<br>");
    document.write("Tu nombre todo en mayúsculas es: <strong>" + nombreCompleto.toUpperCase() + "</strong>.<br>");

    document.write("Tu edad es: " + edad + " años.<br>");
    document.write("Naciste un feliz día de <strong>" + obtenerEstacion(mesNacimiento) + "</strong> del año <strong>" + anoNacimiento + "</strong>.<br>");

    var coseno180 = Math.cos(Math.PI);
    document.write("El coseno de 180 es: <strong>" + coseno180 + "</strong>.<br>");

    var numeros = [34, 67, 23, 75, 35, 19];
    var maximo = Math.max(...numeros);
    document.write("El número mayor de (34,67,23,75,35,19) es: <strong>" + maximo + "</strong>.<br>");

    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.write("Ejemplo de número al azar: <strong>" + numeroAleatorio + "</strong>.<br>");

    // Función para obtener las posiciones de las letras 'A' en un nombre
    function obtenerPosicionesLetraA(nombre) {
        var posiciones = [];
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i].toUpperCase() === 'A') {
                posiciones.push(i + 1); 
            }
        }
        return posiciones;
    }

    // Función para obtener la estación del año
    function obtenerEstacion(mes) {
        mes = parseInt(mes);
        if (mes >= 1 && mes <= 3) {
            return "Invierno";
        } else if (mes >= 4 && mes <= 6) {
            return "Primavera";
        } else if (mes >= 7 && mes <= 9) {
            return "Verano";
        } else if (mes >= 10 && mes <= 12) {
            return "Otoño";
        } else {
            return "Mes inválido";
        }
    }

    // Agregar el botón para abrir una nueva ventana
    var botonAbrirVentana = document.createElement('button');
    botonAbrirVentana.textContent = 'Abrir ventana';
    botonAbrirVentana.addEventListener('click', abrirNuevaVentana);
    document.body.appendChild(botonAbrirVentana);

    // Agregar el botón para reiniciar la página
    var botonReiniciarPagina = document.createElement('button');
    botonReiniciarPagina.textContent = 'Reiniciar Página';
    botonReiniciarPagina.addEventListener('click', function() {
        // Utilizar el método location.reload() para recargar la página
        location.reload();
    });
    document.body.appendChild(botonReiniciarPagina);

    // Función para abrir una nueva ventana no redimensionable
    function abrirNuevaVentana() {
        var nuevaVentana = window.open('', 'EjemploVentana', 'width=800,height=600,resizable=no');
        nuevaVentana.document.write('<h1>Ejemplo de Ventana Nueva</h1>');
        nuevaVentana.document.write('<p>URL Completa: ' + window.location.href + '</p>');
        nuevaVentana.document.write('<p>Protocolo: ' + window.location.protocol + '</p>');
        nuevaVentana.document.write('<iframe src="https://www.marca.com/" width="800" height="600"></iframe>');
    }
});
