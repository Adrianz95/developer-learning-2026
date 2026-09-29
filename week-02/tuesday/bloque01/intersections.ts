
interface User {
    id: number,
    name: string,
}

interface Admin {
    permissions: string[],
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
    id: 1,
    name: "Admin",
    permissions: ["read", "write", "delete"]
};