
/*Ejercicio 2: Conversión de Temperaturas
Declare una variable con una temperatura en grados Fahrenheit. Conviértala a grados
Celsius usando la fórmula correspondiente y muestre el resultado redondeado a dos
decimales.*/

console.log("Ejercicio 2: Conversión de Temperaturas");
let fahrenheit = 77;
let celsius = (fahrenheit - 32) * 5/9;
console.log("Temperatura en Fahrenheit:", fahrenheit);
console.log("Conversion a Celsius:", celsius.toFixed(2));