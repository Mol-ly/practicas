console.log('=== FUNCIONES PARA ARREGLOS ===\n');

// Función que devuelve la suma de sus elementos
function calcularSuma(arr) {
    let suma = 0;
    for (const num of arr) {
        suma += num;
    }
    return suma;
}

// Función que devuelve el promedio
function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    return calcularSuma(arr) / arr.length;
}

// Función que devuelve el número mayor
function obtenerMayor(arr) {
    let mayor = arr[0];
    for (const num of arr) {
        if (num > mayor) {
            mayor = num;
        }
    }
    return mayor;
}

// Arreglo de prueba con 6 números
const numeros = [15, 42, 8, 23, 91, 16];

console.log('Arreglo: [' + numeros.join(', ') + ']');
console.log('\n=== RESULTADOS ===');
console.log('Suma total: ' + calcularSuma(numeros));
console.log('Promedio: ' + calcularPromedio(numeros).toFixed(2));
console.log('Numero mayor: ' + obtenerMayor(numeros));