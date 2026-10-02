// También podemos utilizar type para definir estructuras
type ProductType = {
    id: string,
    name: string,
    price: number,
    stock: number
};

// Creamos un objeto
const product: ProductType = {
    id: "T11234V",
    name: "TV LG",
    price: 499.99,
    stock: 100
};

console.log(product);