const { guardarDatos } = require('../database/database');

function actualizarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el correo del usuario a actualizar: ", (correoBuscar) => {
        const index = usuarios.findIndex(
            u => u.correo.toLowerCase() === correoBuscar.trim().toLowerCase()
        );

        if (index === -1) {
            console.log("\nERROR: Usuario no encontrado.");
            callback();
            return;
        }

        console.log("\nUsuario encontrado. Si deja un campo vacío, conservará el valor actual.");

        rl.question("Nuevo nombre (" + usuarios[index].nombre + "): ", (nuevoNombre) => {
            rl.question("Nuevo apellido (" + usuarios[index].apellido + "): ", (nuevoApellido) => {
                rl.question("Nueva edad (" + usuarios[index].edad + "): ", (nuevaEdad) => {
                    rl.question("Nuevo correo (" + usuarios[index].correo + "): ", (nuevoCorreo) => {
                        nuevoCorreo = nuevoCorreo.trim() || usuarios[index].correo;

                        const correoExiste = usuarios.some((u, i) =>
                            i !== index &&
                            u.correo.toLowerCase() === nuevoCorreo.toLowerCase()
                        );

                        const edadNumero = nuevaEdad.trim()
                            ? Number(nuevaEdad)
                            : usuarios[index].edad;

                        if (correoExiste) {
                            console.log("\nERROR: Ese correo ya pertenece a otro usuario.");
                        } else if (!Number.isInteger(edadNumero) || edadNumero <= 0) {
                            console.log("\nERROR: La edad debe ser un número entero positivo.");
                        } else {
                            usuarios[index].nombre = nuevoNombre.trim() || usuarios[index].nombre;
                            usuarios[index].apellido = nuevoApellido.trim() || usuarios[index].apellido;
                            usuarios[index].edad = edadNumero;
                            usuarios[index].correo = nuevoCorreo;

                            guardarDatos(usuarios);
                            console.log("\nUsuario actualizado correctamente.");
                        }

                        callback();
                    });
                });
            });
        });
    });
}

module.exports = actualizarUsuario;
