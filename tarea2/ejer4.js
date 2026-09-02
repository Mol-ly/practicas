/*Tarea 4: Información completa de fecha y hora
Obtenga la fecha y hora actual. Muestre en formato: "Hoy es 26/8/2026 y son las 9:15:30"*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Presione Enter para obtener la fecha y hora actual: ', () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0
  const año = fecha.getFullYear();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();                                                                                                                              

    console.log(`Hoy es ${dia}/${mes}/${año} y son las ${hora}:${minutos}:${segundos}`);    
    rl.close();
});         
