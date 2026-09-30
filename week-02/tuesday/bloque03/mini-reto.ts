
interface Jugadores {
    id: number,
    nombre: string,
    posicion: string
}

type JugadoresDisponibles = 
| "disponible"
| "no_disponible";

interface JugadoresConDisponibilidad extends Jugadores {
    disponibilidad: JugadoresDisponibles
}

const jugadores: JugadoresConDisponibilidad[] = [
    {id: 1, nombre: "Adrián", posicion: "mediocentro", disponibilidad: "no_disponible"},
    {id: 2, nombre: "Roberto", posicion: "defensa", disponibilidad: "disponible"},
    {id: 3, nombre: "Raúl", posicion: "delantero", disponibilidad: "disponible"},
];

function filtrarPorDisponibilidad(jugadores: JugadoresConDisponibilidad[]): JugadoresConDisponibilidad[] {
    const jugadores_disponibles = jugadores.filter(jugador => jugador.disponibilidad === "disponible");
    if (jugadores_disponibles.length === 0) {
        console.log("No hay jugadores disponibles.");
    }
    return jugadores_disponibles;
}

function primerJugadorDisponible<T>(items: JugadoresConDisponibilidad[]): JugadoresConDisponibilidad | undefined {
    const primerJugadorDisponible = filtrarPorDisponibilidad(items);
    return primerJugadorDisponible[0];
}

console.log(filtrarPorDisponibilidad(jugadores));
console.log(primerJugadorDisponible(jugadores));