/* Ejercicio Práctico 2: 
Clasificador de triángulos Solicite las longitudes de los tres lados de un triángulo. 
Primero valide que los lados puedan formar un triángulo 
(la suma de dos lados debe ser mayor que el tercero). 
Si es válido, clasifíquelo usando Switch según su tipo: 
Equilátero (tres lados iguales), Isósceles 
(dos lados iguales) o Escaleno (tres lados diferentes). M
uestre: el tipo de triángulo y su perímetro.  */

import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la longitud del primer lado: ', (lado1) => {
    rl.question('Ingrese la longitud del segundo lado: ', (lado2) => {
        rl.question('Ingrese la longitud del tercer lado: ', (lado3) => {
            const a = parseFloat(lado1);
            const b = parseFloat(lado2);
            const c = parseFloat(lado3);

            if (a + b > c && a + c > b && b + c > a) {
                let tipoTriangulo;
                switch (true) {
                    case (a === b && b === c):
                        tipoTriangulo = 'Equilátero';
                        break;
                    case (a === b || a === c || b === c):
                        tipoTriangulo = 'Isósceles';
                        break;
                    default:
                        tipoTriangulo = 'Escaleno';
                }
                const perimetro = a + b + c;
                console.log(`El triángulo es ${tipoTriangulo} y su perímetro es ${perimetro}.`);
            } else {
                console.log('Los lados ingresados no forman un triángulo válido.');
            }

            rl.close();
        });
    });
});