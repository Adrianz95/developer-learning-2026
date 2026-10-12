import { useEffect, useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count +  1);
        if (count === 5) {
            alert("Contador ha llegado a 5.");
            setCount(0);
        }
    };

    const decreaseCount = () => {
        setCount(count - 1)
    };

    const resetCount = () => {
        setCount(0);
    };

    useEffect(() => {
        document.title = `Pulsaciones: ${count}`;
    }, [count]);

    return(
        <div>
            <button 
            onClick={incrementCount}
            >
                Incrementar
            </button>
            <button 
            onClick={decreaseCount}
            disabled={count <= 0}
            >
                Disminuir
            </button>
            <button onClick={resetCount}>Reiniciar</button>
            <h2>{count}</h2>
        </div>
    );
}