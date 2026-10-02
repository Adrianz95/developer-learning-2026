
import { Product } from "../models/Product";

export function findProduct(products: Product[], id: number): Product | undefined {

    if (id <= 0) {
        throw new Error("El id debe ser mayor a 0.");
    }

    return products.find(product => product.id === id);;
    
}

export function printProductById(products: Product[], id: number): void {

    const productById = findProduct(products, id);

    if (!productById) {
        throw new Error("Producto no encontrado.");
    }

    console.log(productById);

}