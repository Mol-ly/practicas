const { guardarDatos } = require('../database/database');

function insertarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el nombre: ", (nombre) => {
        rl.question("Ingrese el apellido: ", (apellido) => {
            rl.question("Ingrese la edad: ", (edad) => {
                rl.question("Ingrese el correo: ", (correo) => {
                    nombre = nombre.trim();
                    apellido = apellido.trim();
                    correo = correo.trim();

                    const edadNumero = Number(edad);
                    const correoExiste = usuarios.some(
                        u => u.correo.toLowerCase() === correo.toLowerCase()
                    );

                    if (!nombre || !apellido || !correo ||
                        !Number.isInteger(edadNumero) || edadNumero <= 0) {
                        console.log("\nERROR: Ingrese datos válidos.");
                    } else if (correoExiste) {
                        console.log("\nERROR: El correo '" + correo + "' ya está registrado.");
                    } else {
                        const nuevoUsuario = {
                            nombre,
                            apellido,
                            edad: edadNumero,
                            correo
                        };

                        usuarios.push(nuevoUsuario);
                        guardarDatos(usuarios);
                        console.log("\nUsuario registrado y guardado.");
                    }

                    callback();
                });
            });
        });
    });
}

module.exports = insertarUsuario;
