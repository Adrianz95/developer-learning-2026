
import type { UserProps } from "../type/User";
import { UserCard } from "./UserCard";

export function UserList({users}: UserProps) {
    return (
        <div className="user-list-container">
            <div className="table-header">
                <span>Nombre</span>
                <span>Email</span>
                <span>Rol</span>
            </div>
            <ul className="user-list">
                {users.map(
                    (user) => (
                    <UserCard 
                    id={user.id} 
                    name={user.name} 
                    email={user.email} 
                    role={user.role}/>
                )
                )}
            </ul>
        </div>
    );
}