// ###################################################################################################
// Estructura del objeto

interface Product {
  id: number;
  name: string;
  price: number;
}

// ###################################################################################################
// Funciones

async function getProducts(products: Product[]): Promise<Product[]> {
  return products;
}

async function filterProductPrice(
  products: Product[],
  minPrice: number,
): Promise<Product[]> {
  const productsMaxPrice = products.filter(
    (product) => product.price > minPrice,
  );
  return productsMaxPrice;
}

async function minPriceGetProducts(products: Product[]): Promise<Product[]> {
  const allProducts = await getProducts(products);
  const filterProductsMinPrice = await filterProductPrice(allProducts, 50);
  return filterProductsMinPrice;
}

async function getProductById(products: Product[], id: number,): Promise<Product> {
  try {
    const productId = products.find((product) => product.id === id);

    if (!productId) {
      throw new Error("El producto no existe");
    }

    return productId;
    } catch (error) {
    console.log("Error:", error);
    throw error;
    }
}

async function main(): Promise<void> {
  try {
    const product = await getProductById(listProducts, -1);
    console.log(product);
  } catch (error) {
    console.log("No se pudo obtener el producto");
  }
}

// ###################################################################################################
// Llamamos a las funciones y creamos variables

const listProducts: Product[] = [
  {
    id: 1,
    name: "Keyboard",
    price: 50,
  },
  {
    id: 2,
    name: "Mouse",
    price: 20,
  },
  {
    id: 3,
    name: "Monitor",
    price: 200,
  },
];

main();
