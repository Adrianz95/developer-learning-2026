
import { createProductDTO } from "./models/Product";
import { getProducts, getProductById, createProduct } from "./services/productService";

async function mainGetProducts() {
    try {
        const products = await getProducts();
        console.log("Lista de todos los productos:");
        console.log(JSON.stringify(products, null, 2));
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

async function mainGetProductsById(id: number) {
    try {
        const products = await getProductById(id);
        console.log(`Producto con ID ${id}:`);
        console.log(JSON.stringify(products, null, 2));
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

async function mainCreateProduct() {
    try {
        const newProduct: createProductDTO = {
            title: "Remera Gamer TypeScript",
            price: 29.99,
            description: "Camiseta de algodón 100% con estampado de TypeScript",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/shirt.jpg",
        };

        const result = await createProduct(newProduct);

        console.log("¡Producto creado con éxito en la API!\n");
        console.log(JSON.stringify(result, null, 2));
    } catch(error) {
        console.error('Error al crear un producto: ', error);
    }
}

mainCreateProduct();
