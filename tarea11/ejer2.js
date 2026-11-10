// Tarea 2: Fábrica de funciones
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// Creamos un duplicador (factor 2) y un triplicador (factor 3)
const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);

// Pruebas de las funciones generadas
console.log("Duplicar 7 (factor 2): " + duplicador(7)); 
console.log("Triplicar 7 (factor 3): " + triplicador(7)); 