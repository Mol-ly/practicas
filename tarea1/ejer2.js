/*Tarea 2: Conversión de Monedas
En el mundo globalizado en el que vivimos, es común necesitar convertir dinero de una
moneda a otra. Esta tarea le enseña cómo utilizar operadores matemáticos para realizar
conversiones de monedas de forma automatizada.
Instrucciones:
Declare una variable que contenga una cantidad de dinero en dólares estadounidenses
(USD). Luego, utilice operadores de multiplicación para convertir esa cantidad a otras
monedas:
• Euros (EUR): Multiplique la cantidad en dólares por 0.92
• Pesos Salvadoreños (SVC): Multiplique la cantidad en dólares por 8.75
• Quetzales Guatemaltecos (GTQ): Multiplique la cantidad en dólares por 7.80
Para cada conversión, almacene el resultado en una variable diferente. Finalmente,
muestre en consola todas las conversiones con su respectiva moneda y símbolo. Cada
línea debe ser clara e indicar el valor convertido.
Ejemplo de salida esperada:
100 USD = 92.00 EUR
100 USD = 875.00 SVC
100 USD = 780.00 GTQ*/

let cantidadUSD = 100; // Cantidad en dólares estadounidenses

// Conversión a Euros (EUR)
let cantidadEUR = cantidadUSD * 0.92;

// Conversión a Pesos Salvadoreños (SVC)
let cantidadSVC = cantidadUSD * 8.75;

// Conversión a Quetzales Guatemaltecos (GTQ)
let cantidadGTQ = cantidadUSD * 7.80;

console.log("Tarea 2: Conversión de Monedas");
console.log(cantidadUSD + " USD = " + cantidadEUR.toFixed(2) + " EUR");
console.log(cantidadUSD + " USD = " + cantidadSVC.toFixed(2) + " SVC");
console.log(cantidadUSD + " USD = " + cantidadGTQ.toFixed(2) + " GTQ");