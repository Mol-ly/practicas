
const readline = require('readline');

const {
    cargarPuntuaciones,
    guardarPuntuaciones
} = require('../database/puntuaciones');

function jugarSnake(rl, usuario, callback) {

    if (!process.stdin.isTTY || typeof process.stdin.setRawMode !== 'function') {
        console.log("\nEl juego necesita una terminal interactiva.");
        console.log("Ejecute el programa desde una terminal.");
        callback();
        return;
    }

    // INTRODUCCION DEL JUEGO
    console.log("\n========================================");
    console.log("          BIENVENIDO A SNAKE");
    console.log("========================================");
    console.log("\nHola, " + usuario.nombre + ". ¡Prepárate para jugar!");
    console.log("\nOBJETIVO:");
    console.log("Controla la serpiente y consigue la mayor cantidad");
    console.log("de alimentos posibles para aumentar tu puntuación.");

    console.log("\nCONTROLES:");
    console.log("  ↑  Flecha arriba: mover hacia arriba");
    console.log("  ↓  Flecha abajo: mover hacia abajo");
    console.log("  ←  Flecha izquierda: mover a la izquierda");
    console.log("  →  Flecha derecha: mover a la derecha");
    console.log("  Q  Terminar la partida");

    console.log("\nREGLAS:");
    console.log("  @  Representa la cabeza de la serpiente.");
    console.log("  o  Representa el cuerpo de la serpiente.");
    console.log("  *  Representa el alimento.");
    console.log("  +10 puntos por cada alimento.");
    console.log("  Evita chocar contra las paredes o tu propio cuerpo.");

    console.log("\nCONSEJO:");
    console.log("No apresures tus movimientos y planifica tu recorrido.");

    console.log("\n========================================");

    rl.question("\nPresiona ENTER para comenzar a jugar...", () => {

        iniciarPartida();

    });

    function iniciarPartida() {

        // DIMENSIONES DEL TABLERO
        const ancho = 40;
        const alto = 18;

        let serpiente = [
            { x: 20, y: 9 },
            { x: 19, y: 9 },
            { x: 18, y: 9 }
        ];

        let direccion = { x: 1, y: 0 };
        let siguienteDireccion = { x: 1, y: 0 };

        let comida = generarComida();
        let puntos = 0;
        let terminado = false;
        let intervalo;

        // GENERAR ALIMENTO
        function generarComida() {

            let posicion;

            do {
                posicion = {
                    x: Math.floor(Math.random() * ancho),
                    y: Math.floor(Math.random() * alto)
                };

            } while (serpiente.some(
                parte => parte.x === posicion.x &&
                    parte.y === posicion.y
            ));

            return posicion;
        }

        // DIBUJAR TABLERO
        function dibujar() {

            const lineas = [];

            lineas.push("+" + "-".repeat(ancho) + "+");

            for (let y = 0; y < alto; y++) {

                let fila = "|";

                for (let x = 0; x < ancho; x++) {

                    if (serpiente[0].x === x &&
                        serpiente[0].y === y) {

                        fila += "@";

                    } else if (serpiente.some(
                        (parte, indice) =>
                            indice > 0 &&
                            parte.x === x &&
                            parte.y === y
                    )) {

                        fila += "o";

                    } else if (
                        comida.x === x &&
                        comida.y === y
                    ) {

                        fila += "*";

                    } else {

                        fila += " ";
                    }
                }

                fila += "|";

                lineas.push(fila);
            }

            lineas.push("+" + "-".repeat(ancho) + "+");

            process.stdout.write(
                "\x1b[2J\x1b[H" +

                "==========================================\n" +
                "              JUEGO SNAKE\n" +
                "==========================================\n" +

                "Jugador: " + usuario.nombre + "\n" +
                "Puntuacion: " + puntos + "\n\n" +

                lineas.join("\n") +

                "\n\nControles: Flechas del teclado" +
                "\nQ: Terminar partida" +
                "\n==========================================\n"
            );
        }

        // FINALIZAR PARTIDA
        function finalizar(mensaje) {

            if (terminado) return;

            terminado = true;

            clearInterval(intervalo);

            process.stdin.removeListener('keypress', controlar);

            process.stdin.setRawMode(false);
            process.stdin.pause();

            rl.resume();

            const puntuaciones = cargarPuntuaciones();

            puntuaciones.push({

                nombre: usuario.nombre,
                correo: usuario.correo,
                puntuacion: puntos,
                fecha: new Date().toISOString()

            });

            guardarPuntuaciones(puntuaciones);

            console.log("\n" + mensaje);

            console.log("\n========== RESULTADO ==========");
            console.log("Jugador: " + usuario.nombre);
            console.log("Puntuacion final: " + puntos);
            console.log("Tu resultado fue guardado correctamente.");
            console.log("===============================");

            callback();
        }

        // CONTROLES DEL TECLADO
        function controlar(caracter, tecla) {

            if (tecla && tecla.ctrl && tecla.name === 'c') {

                finalizar("Partida interrumpida.");
                return;
            }

            if (!tecla) return;

            if (tecla.name === 'q') {

                finalizar("Has terminado la partida.");
                return;
            }

            let nuevaDireccion = null;

            if (tecla.name === 'up') {
                nuevaDireccion = { x: 0, y: -1 };
            }

            if (tecla.name === 'down') {
                nuevaDireccion = { x: 0, y: 1 };
            }

            if (tecla.name === 'left') {
                nuevaDireccion = { x: -1, y: 0 };
            }

            if (tecla.name === 'right') {
                nuevaDireccion = { x: 1, y: 0 };
            }

            if (
                nuevaDireccion &&
                !(nuevaDireccion.x === -direccion.x &&
                    nuevaDireccion.y === -direccion.y)
            ) {

                siguienteDireccion = nuevaDireccion;

            }
        }

        // ACTUALIZAR MOVIMIENTO
        function actualizar() {

            direccion = siguienteDireccion;

            const cabeza = {

                x: serpiente[0].x + direccion.x,
                y: serpiente[0].y + direccion.y

            };

            const come =
                cabeza.x === comida.x &&
                cabeza.y === comida.y;

            const cuerpoRevisar = come
                ? serpiente
                : serpiente.slice(0, -1);

            // COMPROBAR COLISIONES
            const chocaPared =

                cabeza.x < 0 ||
                cabeza.x >= ancho ||
                cabeza.y < 0 ||
                cabeza.y >= alto;

            const chocaCuerpo = cuerpoRevisar.some(

                parte =>
                    parte.x === cabeza.x &&
                    parte.y === cabeza.y

            );

            if (chocaPared || chocaCuerpo) {

                finalizar("¡GAME OVER! La serpiente chocó.");
                return;
            }

            serpiente.unshift(cabeza);

            if (come) {

                puntos += 10;

                comida = generarComida();

            } else {

                serpiente.pop();

            }

            dibujar();
        }

        // INICIAR JUEGO
        rl.pause();

        readline.emitKeypressEvents(process.stdin);

        process.stdin.setRawMode(true);
        process.stdin.resume();

        process.stdin.on('keypress', controlar);

        dibujar();

        // VELOCIDAD DEL JUEGO
        intervalo = setInterval(actualizar, 200);

    }
}

module.exports = jugarSnake;

