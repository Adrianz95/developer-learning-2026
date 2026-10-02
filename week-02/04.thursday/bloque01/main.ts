
import products from "./API_products.json";
import { printProductById } from "./services/productService";

try {
    printProductById(products, 1);
} catch(error) {
    console.error(error);
}