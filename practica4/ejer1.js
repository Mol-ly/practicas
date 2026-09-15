import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una calificación numérica (0-100): ', (calificacion) => {
    const nota = parseInt(calificacion);
    let letra;

    switch (Math.floor(nota / 10)) {
        case 10:
        case 9:
            letra = 'A';
            break;
        case 8:
            letra = 'B';
            break;
        case 7:
            letra = 'C';
            break;
        case 6:
            letra = 'D';
            break;
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            letra = 'F';
            break;
        default:
            console.log('Calificación no válida.');
            rl.close();
            return;
    }
    console.log(`La calificación en letra es: ${letra}`);

    rl.close();
});




