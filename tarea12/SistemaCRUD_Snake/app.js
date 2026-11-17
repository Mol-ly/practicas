const readline = require('readline');
const { cargarDatos } = require('./database/database');

const insertarUsuario = require('./operaciones/insertar');
const mostrarUsuarios = require('./operaciones/mostrar');
const actualizarUsuario = require('./operaciones/actualizar');
const eliminarUsuario = require('./operaciones/eliminar');
const iniciarSesion = require('./operaciones/iniciarSesion');
const mostrarRanking = require('./operaciones/ranking');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usuarios = cargarDatos();

function menuPrincipal() {
    console.log("\n--- SISTEMA CRUD Y JUEGO SNAKE ---");
    console.log("1. Insertar nuevo usuario");
    console.log("2. Mostrar todos los usuarios");
    console.log("3. Actualizar usuario");
    console.log("4. Eliminar usuario");
    console.log("5. Iniciar sesión y jugar Snake");
    console.log("6. Ver ranking de jugadores");
    console.log("7. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                insertarUsuario(rl, usuarios, menuPrincipal);
                break;
            case '2':
                mostrarUsuarios(usuarios, menuPrincipal);
                break;
            case '3':
                actualizarUsuario(rl, usuarios, menuPrincipal);
                break;
            case '4':
                eliminarUsuario(rl, usuarios, menuPrincipal);
                break;
            case '5':
                iniciarSesion(rl, usuarios, menuPrincipal);
                break;
            case '6':
                mostrarRanking(menuPrincipal);
                break;
            case '7':
                console.log("\nSaliendo del sistema. ¡Gracias por jugar!");
                rl.close();
                break;
            default:
                console.log("\nOpción no válida. Intente de nuevo.");
                menuPrincipal();
                break;
        }
    });
}

console.log("Bienvenido al sistema CRUD con juego Snake.");
menuPrincipal();
