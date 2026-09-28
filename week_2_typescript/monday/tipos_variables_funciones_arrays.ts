let nombre: string = "Adrián";
let age: number = 31;
let active: boolean = true;

// Utilizar cuando tenga que ser claro y conciso
function calculateTotal(price: number, quantity: number) : number {
    return price * quantity;
}

calculateTotal(10, 200);

// Funciones que no devuelven nada
function printMessage(message: string) : void {
    console.log(message);
}

// Definir arrays - TODOS LOS ELEMENTOS TIENEN QUE SER DEL TIPO MARCADO
let cars: string[] = [
    "Mercedes", "Aston Martin", "Honda", "Ferrari"
];

cars.push("Opel")
// Esto es correcto

// cars.push(300);
// Esto es incorrecto. Ya marca eel error que tiene que ser de tipo string.

