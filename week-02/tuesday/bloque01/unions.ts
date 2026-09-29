
function formatId(id: number | string): string {

    if (typeof(id) === "number") {
        return id.toFixed(2);
    }

    if (typeof(id) === "string") {
        return id.toUpperCase();
    }

    return id;
}

console.log(`ID: ${formatId("123")}`);
console.log(`ID: ${formatId("USR-123")}`);

interface Product {
    id: number,
    name: string,
    price: number
}

type ProductStatus = 
| "available" 
| "out_of_stock" 
| "discontinued";

function printProduct(product: Product): void {
    console.log(`Nombre del producto: ${product.name}\nPrecio del producto: ${product.price}`);
}

function canBuy(status: ProductStatus): boolean {
    if (status === "available") {
        return true;
    }
    return false;
}

printProduct({
    id: 1,
    name: "Keyboard",
    price: 199.99
});

