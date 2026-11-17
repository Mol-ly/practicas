const { guardarDatos } = require('../database/database');

function eliminarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el correo del usuario a eliminar: ", (correoEliminar) => {
        const correo = correoEliminar.trim().toLowerCase();
        const existe = usuarios.some(u => u.correo.toLowerCase() === correo);

        if (!existe) {
            console.log("\nERROR: Usuario no encontrado.");
        } else {
            const nuevosUsuarios = usuarios.filter(
                u => u.correo.toLowerCase() !== correo
            );

            usuarios.length = 0;
            usuarios.push(...nuevosUsuarios);

            guardarDatos(usuarios);
            console.log("\nUsuario eliminado y archivo JSON actualizado.");
            console.log("El historial de puntuaciones no se elimina.");
        }

        callback();
    });
}

module.exports = eliminarUsuario;
