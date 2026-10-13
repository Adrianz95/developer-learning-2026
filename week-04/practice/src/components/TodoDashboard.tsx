
import { useTodos } from "../hooks/useTodos";

export function TodoDashboard() {
    const { todos, loading, error } = useTodos();

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Total de tareas: {todos.length}</h2>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <p>
                        {todo.id} - {todo.title} //
                        <b> Estado: {todo.completed ? "completado" : "pendiente"}</b>
                    </p>
                </div>
            ))}
        </div>
    );
}