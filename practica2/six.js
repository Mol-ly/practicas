let  nombre = "sofia";
let apellido = "Serrano";
let anio = 2006;

let promedio = 9.8;

let nombreMayus = nombre.toUpperCase()+``+apellido.toUpperCase();

let apellidoStard = apellido.lastIndexOf(0,3);

console.log(`Nombre completo en mayusculas ${nombreMayus}`);
console.log(`Primeras letras del apellido ${apellidoStard}`);
console.log(`Año de nacimiento ${anio}`);
console.log(`Promedio ${promedio.toFixed(2)}`);
