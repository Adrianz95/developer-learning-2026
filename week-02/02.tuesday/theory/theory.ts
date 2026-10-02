
// TEORÍA DEL MARTES
// Unions es una variable donde puede tener un tipo o varios
// En el ejemplo podemos ver que la variable id puede ser numérica o de tipo string
// Si la variable es de tipo boolean, no sería válida

let id: number | string;
id = 10;
id = "A10";

// Narrowing
// Aquí podemos ver que id sería un tipo amplio pero en la función vamos haciendo que sea un tipo específico
// A esto se le llama type narrowing
function printId(id: number | string) {

    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }

    if (typeof id === "number") {
        console.log(id.toFixed(2));
    }

}

// Intersections
// Significa que este objeto debe cumplir varios tipos simultáneamente
interface Persona {
    nombre: string;
}

interface Empleado {
    empresa: string;
}

// Esta variable debe de cumplir ambas interfaces
type Trabajador = Persona & Empleado;

const empleado01: Trabajador = {
    nombre: "Adrián",
    empresa: "Tech Company"
};

// La diferencia entre | y & es que | eliges entre A o B mientras que & le indica que A y B

// Enums permite representar un conjunto de valores relacionados

enum ProductStatus {
    AVAILABLE,
    OUT_OF_STOCK,
    DISCONTINUED
}

interface Product {
    id: number | string,
    name: string,
    status: ProductStatus
}

const product01: Product = {
    id: "A123F4TT",
    name: "Keyboard",
    status: ProductStatus.AVAILABLE
};

// Unknow significa: "Tengo un valor, pero todavía no sé qué tipo tiene."
// Podrías asignarle cualquier cosa

let value: unknown;
value = "A10";
value = 10;
value = true;

// Diferencia entre unknow y any
// Any confía plenamente en ti mientras que Unknow primero tienes que decirle que es
// En el caso de utilizar la función toUpperCase() con any dejaría hacer está función
// Mientras que con unknow primero deberíamos de comprobar el tipo de dato

// console.log(value.toUpperCase()); Error -> primero comprueba que tipo de dato es

// Never representa algo como nunca puede ocurrir o nunca produce un valor normalemnte
// La función no devuelve nada porque siempre lanza una excepción

function throwError(message: string): never {
    throw new Error(message);
}

// Diferencia entre void y never
// En la función void termina pero no devuelve ningún valor útil
// void ---> termina ---> no devuelve nada
// never ---> no termina normalmente

// Generics permiten escribir código reutilizable manteniendo el tipado

function identity<T>(value: T): T {
    return value;
}

// Deduce que es de tipo number

const number = identity(10);

// Generics con Array

function first<T>(items: T[]): T {
    return items[0];
}

const numbers = first([10, 20, 30]);

// Utility Types
// Proporciona tipos que permiten tranasformar otros tipos
/*
Partial
Pick
OMit
Readonly
Record
*/
