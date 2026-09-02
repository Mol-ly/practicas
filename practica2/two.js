
/*import readline from "node:readline";

const rl = readline.createInterface{
    input = stdin,
    output = stdout
}

rl.question("Codigo: ", (code)=>)*/

let codigo=`00988773`;
let codigoStard = codigo.slice(0,3);
let codigoend = codigo.slice(7,11);

console.log(`Primeros digitos ${codigoStard}`);
console.log(`Ultimos digitos ${codigoend}`);