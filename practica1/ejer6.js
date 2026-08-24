
/*Ejercicio 6: Cálculo del Índice de Masa Corporal (IMC)
Declare variables para el peso en kilogramos y la altura en metros. Calcule el IMC usando
la fórmula apropiada y muestre el resultado redondeado a dos decimales.*/

let peso = 70; // Peso en kilogramos
let altura = 1.75; // Altura en metros
let imc = peso / (altura * altura);

console.log("Ejercicio 6: Cálculo del Índice de Masa Corporal (IMC)");
console.log("Peso (kg):", peso);
console.log("Altura (m):", altura);
console.log("Índice de Masa Corporal (IMC):", imc.toFixed(2));