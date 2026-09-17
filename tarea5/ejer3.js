/* Tarea 3: Simulador de cajero automático con menú
Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
Muestre un menú con las opciones:
1. Consultar saldo
2. Retirar dinero
3. Depositar dinero
4. Salir
Usando Switch, ejecute la opción seleccionada:
- Opción 1: Muestre el saldo actual.
- Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 
  y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error 
  correspondiente.
- Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no 
  exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre 
  el error.
- Opción 4: Muestre "Gracias por usar el cajero" y salga.
- Si la opción no es válida, muestre "Opción no válida".   */

import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

function mostrarMenu() {
    console.log('\n--- Cajero Automático ---');
    console.log('1. Consultar saldo');
    console.log('2. Retirar dinero');
    console.log('3. Depositar dinero');
    console.log('4. Salir');
    rl.question('Seleccione una opción (1-4): ', (opcion) => {
        switch (opcion) {
            case '1':
                console.log(`Saldo actual: $${saldo.toFixed(2)}`);
                mostrarMenu();
                break;
            case '2':
                rl.question('Ingrese el monto a retirar: ', (monto) => {
                    const montoRetiro = parseFloat(monto);
                    if (montoRetiro <= 0) {
                        console.log('El monto debe ser mayor a 0.');
                    } else if (montoRetiro % 5 !== 0) {
                        console.log('El monto debe ser múltiplo de $5.');
                    } else if (montoRetiro > saldo) {
                        console.log('Saldo insuficiente.');
                    } else {
                        saldo -= montoRetiro;
                        console.log(`Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
                    }
                    mostrarMenu();
                });
                break;
            case '3':
                rl.question('Ingrese el monto a depositar: ', (monto) => {
                    const montoDeposito = parseFloat(monto);
                    if (montoDeposito <= 0) {
                        console.log('El monto debe ser mayor a 0.');
                    } else if (montoDeposito > 5000) {
                        console.log('El depósito no puede exceder $5000.');
                    } else {
                        saldo += montoDeposito;
                        console.log(`Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
                    }
                    mostrarMenu();
                });
                break;
            case '4':
                console.log('Gracias por usar el cajero.');
                rl.close();
                break;
            default:
                console.log('Opción no válida.');
                mostrarMenu();
        }
    });
}

mostrarMenu();  