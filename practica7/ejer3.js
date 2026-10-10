console.log('=== RECORRER ARREGLO DE NOMBRES ===\n');

const nombres = ["Sofía", "Alejandro", "Emelisa", "Edgardo", "Fernando"];
let nombreMasLargo = "";

// Recorrer el arreglo elemento por elemento
for (const nombre of nombres) {
    console.log('- ' + nombre + ': tiene ' + nombre.length + ' letras.');

    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
}

console.log('\n=== RESULTADO ===');
console.log('El nombre mas largo es: "' + nombreMasLargo + '" (' + nombreMasLargo.length + ' letras).');