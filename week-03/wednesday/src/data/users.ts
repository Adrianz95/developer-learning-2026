
import type { User } from "../type/User";

export const getUserList = (): User[] => {
    return [
    {
        id: 1,
        name: "Ana García",
        email: "ana.garcia@example.com",
        role: "Admin",
    },
    {
        id: 2,
        name: "Carlos Mendoza",
        email: "carlos.mendoza@example.com",
        role: "Employee",
    },
    {
        id: 3,
        name: "Lucía Fernández",
        email: "lucia.fernandez@example.com",
        role: "Employee",
    },
    {
        id: 4,
        name: "David Gómez",
        email: "david.gomez@example.com",
        role: "Admin",
    },
    {
        id: 5,
        name: "Elena Torres",
        email: "elena.torres@example.com",
        role: "Employee",
    },
    ];
};
