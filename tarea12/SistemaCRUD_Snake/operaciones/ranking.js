const { cargarPuntuaciones } = require('../database/puntuaciones');

function mostrarRanking(callback) {
    const puntuaciones = cargarPuntuaciones();

    console.log("\n========== RANKING SNAKE ==========");

    if (puntuaciones.length === 0) {
        console.log("Todavía no hay partidas registradas.");
        callback();
        return;
    }

    const jugadores = {};

    puntuaciones.forEach(partida => {
        const correo = partida.correo.toLowerCase();

        if (!jugadores[correo]) {
            jugadores[correo] = {
                nombre: partida.nombre,
                correo: partida.correo,
                mejorPuntuacion: partida.puntuacion,
                partidas: 0
            };
        }

        jugadores[correo].partidas++;

        if (partida.puntuacion > jugadores[correo].mejorPuntuacion) {
            jugadores[correo].mejorPuntuacion = partida.puntuacion;
            jugadores[correo].nombre = partida.nombre;
        }
    });

    const ranking = Object.values(jugadores).sort(
        (a, b) => b.mejorPuntuacion - a.mejorPuntuacion
    );

    ranking.forEach((jugador, indice) => {
        console.log(
            (indice + 1) + ". " + jugador.nombre +
            " | Mejor puntuación: " + jugador.mejorPuntuacion +
            " | Partidas: " + jugador.partidas
        );
    });

    console.log("\n===================================");
    callback();
}

module.exports = mostrarRanking;
