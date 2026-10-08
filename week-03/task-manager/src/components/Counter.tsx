import { useState } from "react";

export function Counter() {
    const valueCount = 0;
    const [count, setCount] = useState(valueCount);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(valueCount);
    };

    return(
        <div>
            <h2>Exercise 1: </h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decreaseCount}
            disabled={count === 0}
            >
            Decrease
            </button>
            <button onClick={handleReset}>Reset</button>
            <h3>Counter: {count}</h3>
        </div>
    );
}