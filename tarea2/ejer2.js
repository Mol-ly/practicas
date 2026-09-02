/*Tarea 2: Información de producto con precio
Solicite el nombre del producto, precio unitario y cantidad. Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales.

*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/*pregunta al usuario el nombre del producto, precio unitario y cantidad*/

rl.question('Ingrese el nombre del producto: ', (nombreProducto) => {
  rl.question('Ingrese el precio unitario: ', (precioUnitario) => {
    rl.question('Ingrese la cantidad: ', (cantidad) => {
      const nombreMayusculas = nombreProducto.toUpperCase();
      const primerasTresLetras = nombreProducto.substring(0, 3);
      const precioTotal = parseFloat(precioUnitario) * parseInt(cantidad);

      /*Muestra los resultados al usuario*/
      console.log(`Nombre del producto en mayúsculas: ${nombreMayusculas}`);
      console.log(`Primeras 3 letras del producto: ${primerasTresLetras}`);
      console.log(`Precio total: $${precioTotal.toFixed(2)}`);

      rl.close();
    });
  });
});