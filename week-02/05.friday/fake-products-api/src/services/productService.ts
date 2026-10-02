
import { Product, createProductDTO } from "../models/Product";

const API_BASE_URL = "https://fakestoreapi.com";

// Métodos GET para devolver productos o un producto específico

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
        throw new Error(`Error al obtener productos: ${response.status} ${response.statusText}`);
    }

    const data: Product[] = await response.json();
    return data;
}

export async function getProductById(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error(`Error al obtener productos: ${response.status} ${response.statusText}`);
    }

    const data: Product = await response.json();
    return data;
}

//  Método POST para crear un producto

export async function createProduct(newProductData: createProductDTO): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData),
    });

    if (!response.ok) {
        throw new Error(`Error al crear producto: ${response.status} ${response.statusText}`);
    }

    const data: Product = await response.json();
    console.log(response.status);
    return data;
}
