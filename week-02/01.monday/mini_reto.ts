
// Crea un pequeño sistema de productos
// En mi caso lo haré de un concesionario

// Creamos la estructura del objeto
interface Coche {
    id: number,
    name: string,
    price: number,
    stock: number,
    description?: string
}

// Añadimos a una lista 5 coches
const concesionario: Coche[] = [
    {
    id: 1,
    name: "Toyota Corolla",
    price: 24500,
    stock: 12,
    description: "Híbrido eficiente con excelente consumo de combustible y alta fiabilidad."
    },
    {
    id: 2,
    name: "Tesla Model 3",
    price: 39990,
    stock: 5
    },
    {
    id: 3,
    name: "Ford Mustang",
    price: 52000,
    stock: 3,
    description: "Deportivo clásico americano con motor V8 y transmisión automática."
    },
    {
    id: 4,
    name: "Volkswagen Golf",
    price: 28300,
    stock: 8
    },
    {
    id: 5,
    name: "Hyundai Tucson",
    price: 31000,
    stock: 15,
    description: "SUV familiar espacioso con tecnología de asistencia al conductor avanzada."
    }
];

// Función que encuentra un coche por ID
function findCarById(concesionario: Coche[], id: number): Coche | undefined {
    return concesionario.find(coche => coche.id === id);
}

// Función que filtra un coche por precio
function getCarUnderPrice(concesionario: Coche[], maxPrice: number): Coche[] {
    return concesionario.filter(coche => coche.price <= maxPrice);
}

// Función para actualizar el stock
function updateStock(concesionario: Coche[], id: number, newStock: number): Coche | undefined {
    const actualizarStockCoche = concesionario.find(coche => coche.id === id);
    
    if (!actualizarStockCoche) {
        return undefined;
    }

    actualizarStockCoche.stock = newStock;
    return actualizarStockCoche;
}

// Función que imprime el concesionario completo
function printConcesionario(concesionario: Coche[]): void {
    concesionario.forEach(coche => {
        console.log(coche);
    });
}

// Función que calcula el valor de inventario
function calculateInventoryValue(concesionario: Coche[]): number {
    let totalInventario: number = 0;
    concesionario.forEach(coche => {
        totalInventario += (coche.price * coche.stock);
    });
    return totalInventario;
}
