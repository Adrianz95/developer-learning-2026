
type Role = "Admin" | "Employee";

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
}

export interface UserProps {
    users: User[];
}
