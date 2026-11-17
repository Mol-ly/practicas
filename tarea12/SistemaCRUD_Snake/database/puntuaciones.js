const fs = require('fs');
const path = require('path');

const ARCHIVO_PUNTUACIONES = path.join(__dirname, '..', 'puntuaciones.json');

function cargarPuntuaciones() {
    if (fs.existsSync(ARCHIVO_PUNTUACIONES)) {
        const data = fs.readFileSync(ARCHIVO_PUNTUACIONES, 'utf8');
        return JSON.parse(data);
    } else {
        fs.writeFileSync(ARCHIVO_PUNTUACIONES, JSON.stringify([], null, 2));
        return [];
    }
}

function guardarPuntuaciones(puntuaciones) {
    fs.writeFileSync(
        ARCHIVO_PUNTUACIONES,
        JSON.stringify(puntuaciones, null, 2)
    );
}

module.exports = { cargarPuntuaciones, guardarPuntuaciones };
