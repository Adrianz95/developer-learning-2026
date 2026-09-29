
function processValue(value: unknown): string  {

    if (typeof value === "string") {
        return value.toUpperCase();
    }

    if (typeof value === "number") {
        return value.toFixed(2);
    }

    if (typeof value === "boolean") {
        return value ? "true" : "false";
    }

    return "Unknown type";

}

function fail(message: string): never {
    throw new Error(message);
}

function validatePrice(price: number): void {
    if (price < 0) {
        fail("Price cannot be negative");
    }
    console.log(`Price is valid: ${price}`);
}

console.log(processValue("Hello World"));
console.log(processValue(10));
console.log(processValue(true));

validatePrice(100);
validatePrice(-50); // This will throw an error
