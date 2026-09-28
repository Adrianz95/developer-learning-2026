// Crea un objeto user que tenga: id, name, email y age.
interface User {
    id: number,
    name: string,
    email: string,
    age: number
};

let user01: User = {
    id: 1,
    name: "Cristiano Ronaldo",
    email: "ronaldo7@gmail.com",
    age: 41
};

console.log(`Id: ${user01.id} \nName: ${user01.name}\nEmail: ${user01.email}\nAge: ${user01.age}`);