/* Ejercicio Práctico 3: 
Sistema de tarifas de estacionamiento Solicite el tipo de vehículo 
(1=Moto, 2=Auto, 3=Camioneta, 4=Bus) y la cantidad de horas estacionado. 
Calcule la tarifa base según el tipo de vehículo usando Switch: 
Moto $1.00/hora, Auto $2.00/hora, Camioneta $3.00/hora, Bus $5.00/hora. 
Aplique un descuento del 20% si el vehículo estuvo más de 5 horas. 
Si el tipo de vehículo no es válido, muestre un mensaje de error. 
Muestre: tipo de vehículo, horas, tarifa por hora, subtotal, descuento y total. */

import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el tipo de vehículo (1=Moto, 2=Auto, 3=Camioneta, 4=Bus): ', (tipo) => {
    rl.question('Ingrese la cantidad de horas estacionado: ', (horas) => {
        const horasEstacionado = parseFloat(horas);
        let tarifaPorHora;
        let tipoVehiculo;

        switch (tipo) {
            case '1':
                tarifaPorHora = 1.00;
                tipoVehiculo = 'Moto';
                break;
            case '2':
                tarifaPorHora = 2.00;
                tipoVehiculo = 'Auto';
                break;
            case '3':
                tarifaPorHora = 3.00;
                tipoVehiculo = 'Camioneta';
                break;
            case '4':
                tarifaPorHora = 5.00;
                tipoVehiculo = 'Bus';
                break;
            default:
                console.log('Tipo de vehículo no válido.');
                rl.close();
                return;
        }

        const subtotal = tarifaPorHora * horasEstacionado;
        let descuento = 0;

        if (horasEstacionado > 5) {
            descuento = subtotal * 0.20;
        }

        const total = subtotal - descuento;

        console.log(`Tipo de vehículo: ${tipoVehiculo}`);
        console.log(`Horas estacionado: ${horasEstacionado}`);
        console.log(`Tarifa por hora: $${tarifaPorHora.toFixed(2)}`);
        console.log(`Subtotal: $${subtotal.toFixed(2)}`);
        console.log(`Descuento: $${descuento.toFixed(2)}`);
        console.log(`Total a pagar: $${total.toFixed(2)}`);

        rl.close();
    });
});