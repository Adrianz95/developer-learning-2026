
interface Coches {
    id: number,
    name: string,
    price: number,
    category: string
}

type CochesUpdate = Partial<Coches>;
type CochesPreview = Pick<Coches, "name" | "price">;
type CreateCoches = Omit<Coches, "id">;

const listaCoches: Coches[] = [
    {id: 1, name: "Ferrari 499", price: 100000, category: "Superdeportivo"},
    {id: 2, name: "Opel Astra", price: 29000, category: "Turismo"},
    {id: 3, name: "Ford Focus", price: 32000, category: "Turismo"}
];

function updateCoches(id: number, changes: CochesUpdate): void {
    const indice = listaCoches.findIndex(coche => coche.id === id);

    if (indice === -1) {
        console.log(`Error: no existe ningún coche con ese id ${id}`);
        return;
    }

    const cocheActualizado = {
        ...listaCoches[indice],
        ...changes
    };

    listaCoches[indice] = cocheActualizado;
}

console.log(listaCoches[0]);
updateCoches(5, {price: 400});
console.log(listaCoches[0]);