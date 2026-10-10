/*
TAREA 3: Inventario de Productos (FOR...OF y FOR...IN)
(No requiere readline-sync)
*/

console.log('=== INVENTARIO DE PRODUCTOS ===\n');

// Arreglo de objetos con el inventario
const inventario = [
    { nombre: "Laptop", precio: 750.00, cantidad: 5 },
    { nombre: "Mouse Óptico", precio: 15.50, cantidad: 20 },
    { nombre: "Teclado Mecánico", precio: 45.00, cantidad: 12 },
    { nombre: "Monitor 24''", precio: 180.00, cantidad: 8 }
];

let totalProductos = 0;
let valorTotalInventario = 0;

console.log('--- DETALLE DE PRODUCTOS (FOR...OF) ---');

// Recorrer el arreglo con FOR...OF
for (const producto of inventario) {
    let valorTotalProducto = producto.precio * producto.cantidad;
    
    console.log('- ' + producto.nombre + ' | Precio: $' + producto.precio.toFixed(2) + ' | Cantidad: ' + producto.cantidad);
    console.log('  Valor total en stock: $' + valorTotalProducto.toFixed(2) + '\n');

    totalProductos += producto.cantidad;
    valorTotalInventario += valorTotalProducto;
}

// Objeto con el resumen del inventario
const resumenInventario = {
    totalTiposProductos: inventario.length,
    totalUnidadesStock: totalProductos,
    valorTotalInventario: '$' + valorTotalInventario.toFixed(2)
};

console.log('--- RESUMEN GENERAL (FOR...IN) ---');

// Recorrer el objeto con FOR...IN
for (const propiedad in resumenInventario) {
    console.log(propiedad + ': ' + resumenInventario[propiedad]);
}