
import { Product } from "./models/Product";
import { findProduct } from "./services/productService";

const products: Product[] = [
    {
        id: 1,
        name: "Keyboard",
        price: 49.99
    },
    {
        id: 2,
        name: "Mouse",
        price: 29.99
    },
    {
        id: 3,
        name: "Monitor",
        price: 199.99
    }
];

console.log(products);
console.log(findProduct(products, 1));