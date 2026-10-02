
import { Product } from "../models/Product";

const products: Product[] = [];

// #######################################################################################################
// SISTEMA CRUD DE PRODUCTOS

export function createProduct(product: Product): void {
    products.push(product);
}

export function getProducts(): Product[] {
    return products;
}

export function getProductById(id: number): Product | undefined {
    return products.find(product => product.id === id);
}

export function updateProductById(id: number, updateProduct: Partial<Product>): void {
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products[index] = {
            ...products[index],
            ...updateProduct
        };
    }
}

export function deleteProductById(id: number): void {
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products.splice(index, 1);
    }
}

// #######################################################################################################
// FILTRADO DE PRODUCTOS

export function getProductUnderPrice(underPrice: number): Product[] {
    const underPriceProducts = products.filter(product => product.price < underPrice);
    return underPriceProducts;
}

export function getProductOverPrice(overPrice: number): Product[] {
    const overPriceProducts = products.filter(product => product.price > overPrice);
    return overPriceProducts;
}

export function getProductByName(nameProduct: string): Product[] {
    const searchProductByName = products.filter(product => product.name.includes(nameProduct));
    return searchProductByName;
}