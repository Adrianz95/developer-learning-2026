
// Implementa Generics

function getFirst<T>(items: T[]): T {
    return items[0];
}

console.log(getFirst([100, 200, 300])); // Salida: 100
console.log(getFirst(["Adrián", "Angels"])); // Salida: Adrián

// Implementa Generics con objetos

function wrap<T>(value: T): T {
    return value;
}

console.log(wrap({value: 10}));
console.log(wrap({value: "Adrián"}));