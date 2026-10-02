// Calcular precio con IVA
function calculateWithTax(quantity: number, price: number, tax: number) : number {
    let total: number;

    total = quantity * price;
    return total * (1 + (tax/100));
}

console.log(calculateWithTax(10, 10, 21));