// Crea una estructura de un producto. Cada producto tendrá un id, nombre y precio.
interface Product {
    id: number,
    name: string,
    price: number,
    stock: number, // Se añade stock
    description?: string // Se añade como propiedad opcional
};

const products: Product[] = [
    {id: 1, name: "TV LG", price: 499.99, stock: 5000},
    {id: 2, name: "TV Samsung", price: 699.99, stock: 5000},
    {id: 3, name: "TV Xiaomi", price: 299.99, stock: 8000},
    {id: 4, name: "Monitor LG 24'", price: 199.99, stock: 60000},
    {id: 5, name: "Mouse", price: 99.99, stock: 40000, description: "Wireless mouse"}
];

// Cosas a corregir:
// Las funciones deberían de devolver datos y no imprimir.
function printProducts(): void {
    products.forEach((product) => {
        console.log(`ID del producto: ${product.id}\n  Name: ${product.name}\n  Precio: ${product.price}\n  Stock: ${product.stock} \n  Description: ${product.description}`);
    });
}

// Buscar un producto por ID
function findProductById(products: Product[], id: number): void {
    const searchId = products.find(product => product.id === id);
    if (!searchId) {
        console.log(`Error: El ID ${id} no existe en la lista de productos.`);
        return;
    }
    console.log("Objeto encontrado por Id:", searchId);
}

// Buscar los productos que sean menor que el precio del parámetro
function getProductUnderPrice(products: Product[], maxPrice: number): void {
    let searchPriceProduct: Product[] = products.filter(product => product.price <= maxPrice);
    if (searchPriceProduct.length === 0) {
        console.log(`Error: No existen productos con el precio menor o igual a ${maxPrice}.`);
        return;
    }
    console.log("Objeto encontrado por precio:", searchPriceProduct);
}

// Actualizar stock
function updateStock(products: Product[], id: number, newStock: number): void {
    const updateStockId = products.find(product => product.id === id);
    if (!updateStockId) {
        console.log(`Error: El ID ${id} no exite en la lista de productos`);
        return;
    }
    console.log("Objeto sin actualizar stock: ", updateStockId);
    updateStockId.stock = newStock;
    console.log("Objeto actualizado: ", updateStockId);
}

printProducts();
findProductById(products, 1);
getProductUnderPrice(products, 300.99);
updateStock(products, 1, 10000);