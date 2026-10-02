
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from "./services/productService";
import { getProductUnderPrice, getProductOverPrice, getProductByName } from "./services/productService";

console.log("Lista de productos: ");
console.log(getProducts());


createProduct({id: 1, name: "Keyboard", price: 49.99});
createProduct({id: 2, name: "Mouse", price: 19.99});
createProduct({id: 3, name: "Monitor", price: 199.99});
createProduct({id: 4, name: "Table", price: 39.99});
createProduct({id: 5, name: "Chair", price: 11.99});

updateProductById(1, {price: 59.99});
deleteProductById(1);

console.log("Lista de productos actualizada: ");
console.log(getProducts());

console.log("Producto por Id: ");
console.log(getProductById(2));
console.log("Producto por Id: ");
console.log(getProductById(999));

console.log("Producto por precio: ");
console.log(getProductUnderPrice(100));

console.log("Producto por precio: ");
console.log(getProductOverPrice(100));

console.log("Producto por nombre: ");
console.log(getProductByName("Mouse"));

console.log("Producto por nombre: ");
console.log(getProductByName("mouse"));