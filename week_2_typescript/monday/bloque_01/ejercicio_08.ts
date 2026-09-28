// Crea una estructura de un producto. Cada producto tendrá un id, nombre y precio.
interface Product {
    id: number,
    name: string,
    price: number
};

let products: Product[] = [
    {id: 1, name: "TV LG", price: 499.99},
    {id: 2, name: "TV Samsung", price: 699.99},
    {id: 3, name: "TV Xiaomi", price: 299.99},
];

function printProducts(): void {
    products.forEach((product) => {
        console.log(`ID del producto: ${product.id}\n  Name: ${product.name}\n  Precio: ${product.price}`)
    });
}

printProducts();