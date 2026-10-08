
import type { userGreetingProps } from "../types/UserGreeting";

export function UserGreeting({name}: userGreetingProps) {
    return(
        <div>
            <h2>Exercise 2: </h2>
            <p>Hello, {name}!</p>
        </div>
    );
}
