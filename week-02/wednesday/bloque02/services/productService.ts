
import { Product } from "../models/Product";
import products from "../API_products.json";

export async function getProducts(): Promise<Product[]> {
    return products;
}

export async function productMinPrice(minPrice: number): Promise<Product[]>{
    try {
        if (typeof(minPrice) !== "number" || minPrice < 0) {
            throw new Error(`Error: debe de ser un número y en positivo.`);
        }
        const listMinPrice = products.filter(product => product.price > minPrice);
        return listMinPrice;
    } catch(error) {
        throw error;
    }
}

export async function printGetProducts(): Promise<void> {
    const listProducts = await getProducts();
    console.log(listProducts);
}

export async function printGetProductsMinPrice(minPrice: number): Promise<void> {
    const listProductsMinPrice = await productMinPrice(minPrice);
    console.log(listProductsMinPrice);
}
