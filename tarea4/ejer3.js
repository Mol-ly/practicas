/* Tarea 3: Máquina de bebidas
Cree un programa que simule una máquina expendedora de bebidas con las siguientes opciones: 
1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Té. 
Usando Switch, muestre el mensaje "Ha seleccionado: 
[nombre de la bebida]". Si la opción no es válida, muestre "Bebida no disponible". 
Además, si la bebida es Refresco o Jugo, agregue el mensaje "¿Desea agregar hielo?".*/

import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Seleccione una bebida:');
console.log('1) Agua');
console.log('2) Refresco');
console.log('3) Jugo');
console.log('4) Café');
console.log('5) Té');           

rl.question('Ingrese su elección (1-5): ', (eleccion) => {  
    switch (eleccion) {
        case '1':
            console.log('Ha seleccionado: Agua');
            break;
        case '2':
            console.log('Ha seleccionado: Refresco');
            console.log('¿Desea agregar hielo?');
            break;
        case '3':
            console.log('Ha seleccionado: Jugo');
            console.log('¿Desea agregar hielo?');
            break;
        case '4':
            console.log('Ha seleccionado: Café');
            break;
        case '5':
            console.log('Ha seleccionado: Té');
            break;
        default:
            console.log('Bebida no disponible');
    }
    rl.close();
});
