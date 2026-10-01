// Una operación asíncrona es por ejemplo:
// Programa ---> solicita productos ---> recibe productos
// Ejecuta una operación y obtendré los resultados posteriormente

// Promise representa una operación cuyo resultado estará disponible posteriormente


// Await nos permite esperar el resultado de una operación asíncrona
/*
Relación completa:
function ---> async ---> Promise ---> await ---> resultado
*/

/*
Manejo de errores
Cuando trabajamos con una API, la operación puede no salir correctamente. Por eso
entra en juego el manejo de errores.
*/

// Patrón completo: API ---> Promise ---> await ---> datos ---> tipado Product[] ---> filtrado o transformación ---> resultado

import { Product } from "../models/Product";

const products: Product[] = [
    {id: 1, name: "Toalla blanca", price: 15.00, stock: 100},
    {id: 2, name: "Toalla negra", price: 15.00, stock: 150},
    {id: 3, name: "Mesa de cocina", price: 99.00, stock: 80},
    {id: 4, name: "Camiseta de tirantes blanca", price: 10.00, stock: 1000},
    {id: 5, name: "Mantel de cocina", price: 30.00, stock: 50}
];

async function getProducts(): Promise<Product[]> {
    return products;
}

async function loadProducts(): Promise<Product[]> {
    const products = await getProducts();
}

console.log(getProducts(products));