// Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Memoria USB", precio: 15 }
];

// 1. Usar forEach para recorrer el arreglo completo y mostrar nombre y precio
console.log("--- Lista completa de productos (forEach) ---");
productos.forEach(producto => {
    console.log(`- Producto: ${producto.nombre} | Precio: $${producto.precio}`);
});

// 2. Usar filter para obtener un nuevo arreglo solo con productos de más de $100
const productosMayoresA100 = productos.filter(producto => producto.precio > 100);

// Mostrar los productos filtrados de forma limpia línea por línea
console.log("\n--- Productos con costo mayor a $100 (filtrados y mostrados limpios) ---");
productosMayoresA100.forEach(producto => {
    console.log(`- ${producto.nombre}: $${producto.precio}`);
});