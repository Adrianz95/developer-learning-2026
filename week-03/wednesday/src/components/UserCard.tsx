
import type { User } from "../type/User";

export function UserCard({id, name, email, role}: User) {
    return (
        <div>
            <li key={id} className="user-card">
                <span className="user-name">{name}</span>
                <span className="user-email">{email}</span>
                <span className="user-role">
                    <b>{role}</b>
                </span>
            </li>
        </div>
    );
}