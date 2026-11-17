const jugarSnake = require('./juego');

function iniciarSesion(rl, usuarios, callback) {
    if (usuarios.length === 0) {
        console.log("\nNo hay usuarios registrados. Primero debe registrar un usuario.");
        callback();
        return;
    }

    rl.question("Ingrese su correo para iniciar sesión: ", (correo) => {
        const usuario = usuarios.find(
            u => u.correo.toLowerCase() === correo.trim().toLowerCase()
        );

        if (!usuario) {
            console.log("\nERROR: No existe un usuario con ese correo.");
            callback();
            return;
        }

        console.log("\n¡Bienvenido/a, " + usuario.nombre + "!");
        jugarSnake(rl, usuario, callback);
    });
}

module.exports = iniciarSesion;
