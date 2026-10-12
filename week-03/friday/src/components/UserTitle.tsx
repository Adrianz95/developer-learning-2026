
import { useEffect } from "react";
import type { User } from "../types/User";

export function UserTitle({username}: User) {

    useEffect(() => {
        document.title = `Username: ${username}`;
        return () => {
            document.title = "";
        };
    }, [username]);

    return(
        <div>
            <h1>Hello, {username}!</h1>
        </div>
    );
}