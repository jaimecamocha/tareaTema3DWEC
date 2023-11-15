// JAIME FERNÁNDEZ CALVO
// 


document.addEventListener('DOMContentLoaded', function() {
    // Solicitar al usuario que introduzca su nombre y apellidos
    var nombreCompleto = prompt("Introduce tu nombre y apellidos:");

    // Solicitar al usuario que introduzca el día de su nacimiento
    var diaNacimiento = prompt("Introduce el día de tu nacimiento:");

    // Solicitar al usuario que introduzca el mes de su nacimiento
    var mesNacimiento = prompt("Introduce el mes de tu nacimiento: (número)");

    // Solicitar al usuario que introduzca el año de su nacimiento
    var anoNacimiento = prompt("Introduce el año de tu nacimiento:");

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
    document.write("Buenos días " + nombreCompleto + ".<br>");
    document.write("Tu nombre tiene " + nombreCompleto.length + " caracteres, incluidos espacios.<br>");

    var posicionesA = obtenerPosicionesLetraA(nombreCompleto);
    if (posicionesA.length > 0) {
        document.write("Las letras 'A' en tu nombre están en la/las posiciones: " + posicionesA.join(', ') + ".<br>");
    } else {
        document.write("No se encontraron letras 'A' en tu nombre.<br>");
    }

    var nombreSinTresPrimerasLetras = nombreCompleto.substring(3);
    document.write("Tu nombre menos las 3 primeras letras es: " + nombreSinTresPrimerasLetras + ".<br>");
    document.write("Tu nombre todo en mayúsculas es: " + nombreCompleto.toUpperCase() + ".<br>");

    document.write("Tu edad es: " + edad + " años.<br>");
    document.write("Naciste un feliz día " + diaNacimiento + " de " + obtenerEstacion(mesNacimiento) + " del año " + anoNacimiento + ".<br>");

    var coseno180 = Math.cos(Math.PI);
    document.write("El coseno de 180 es: " + coseno180 + ".<br>");

    var numeros = [34, 67, 23, 75, 35, 19];
    var maximo = Math.max(...numeros);
    document.write("El número mayor de (34,67,23,75,35,19) es: " + maximo + ".<br>");

    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.write("Ejemplo de número al azar: " + numeroAleatorio + ".<br>");
});

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

