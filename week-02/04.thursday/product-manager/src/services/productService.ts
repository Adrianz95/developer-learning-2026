
import { Product } from "../models/Product";

export function findProduct(products: Product[], id: number): Product | undefined {
    return products.find(product => product.id === id);
}