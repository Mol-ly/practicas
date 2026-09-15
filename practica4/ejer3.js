import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
        rl.question('Ingrese un operador (+, -, *, /): ', (operador) => {
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);
            let resultado;

            switch (operador) {
                case '+':
                    resultado = numero1 + numero2;
                    break;
                case '-':
                    resultado = numero1 - numero2;
                    break;
                case '*':
                    resultado = numero1 * numero2;
                    break;
                case '/':
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                    } else {
                        console.log('Error: División por cero no permitida.');
                        mostrarMenu();
                        return;
                    }
                    break;
                default:
                    console.log('Operador no válido.');
                    mostrarMenu();
                    return;
            }
            console.log(`Resultado: ${resultado}`);
            rl.close();
        });
    });
});
