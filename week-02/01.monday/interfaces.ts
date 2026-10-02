// Define que estructura debe de tener un objeto
interface Product {
    id: string,
    name: string,
    price: number,
    stock: number,
    description?: string // El interrogante te da la opción de que exista o no
};

// Creamos un objeto
const keyboard: Product = {
    id: "T11234V",
    name: "TV LG",
    price: 499.99,
    stock: 100
};

console.log(keyboard);