// Función recursiva para contar vocales
function contarVocales(cadena, indice = 0) {
    if (indice >= cadena.length) {
        return 0;
    }
    let caracter = cadena[indice].toLowerCase();
    let esVocal = "aeiouáéíóú".includes(caracter) ? 1 : 0;
    return esVocal + contarVocales(cadena, indice + 1);
}

//Función recursiva para invertir una cadena
function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    }
    return invertirCadena(cadena.slice(1)) + cadena[0];
}

//Función recursiva para determinar si es palíndromo
function esPalindromo(cadena) {
    // validación
    let limpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    function validarRecursivo(str) {
        if (str.length <= 1) {
            return true;
        }
        if (str[0] !== str[str.length - 1]) {
            return false;
        }
        return validarRecursivo(str.slice(1, -1));
    }
    
    return validarRecursivo(limpia);
}

// Solicitar una palabra o frase al usuario
let textoT3 = prompt("Tarea 3: Ingrese una palabra o frase:");

if (textoT3) {
    console.log(`--- TAREA 3 (Texto: "${textoT3}") ---`);
    console.log(`Cantidad de vocales: ${contarVocales(textoT3)}`);
    console.log(`Cadena invertida: "${invertirCadena(textoT3)}"`);
    console.log(`¿Es palíndromo?: ${esPalindromo(textoT3) ? "Sí" : "No"}`);
} else {
    console.log("No se ingresó ningún texto.");
}