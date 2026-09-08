/*Tarea 3: Descuento por monto de compra
Solicite el monto de compra. Si es mayor a $100, 
aplique 15% de descuento. Si es mayor a $50, aplique 10%. 
En otro caso, no hay descuento. Muestre el monto original, 
el descuento aplicado y el total a pagar con 2 decimales.*/

import readline from 'node:readline';   
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario para obtener el monto de compra*/
rl.question('Ingrese el monto de compra: ', (input) => {
  const monto = parseFloat(input);
  let descuento = 0;
  
  /*aplica el descuento según el monto de compra*/
  if (monto > 100) {
    descuento = monto * 0.15;
  } else if (monto > 50) {
    descuento = monto * 0.10;
  }
  
  const total = monto - descuento;
  
  /*muestra el resultado con dos decimales*/
  console.log(`Monto original: $${monto.toFixed(2)}`);
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
  console.log(`Total a pagar: $${total.toFixed(2)}`);
  
  rl.close();
});

