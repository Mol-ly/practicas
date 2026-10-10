console.log('=== RECORRER OBJETO DE ESTUDIANTE ===\n');

const estudiante = {
    nombre: "Yaneth Sofía",
    edad: 20,
    carrera: "Ingeniería en Sistemas",
    promedio: 8.5,
    universidad: "UNIVO"
};

// Recorrer cada propiedad del objeto
for (const propiedad in estudiante) {
    console.log(propiedad + ': ' + estudiante[propiedad]);
}

// Evaluación del promedio
if (estudiante.promedio >= 8) {
    console.log('\nStatus: Estudiante destacado');
}