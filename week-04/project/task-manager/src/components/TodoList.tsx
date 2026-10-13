
import type { TodoListProps } from '../types/todo';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, loading, error, onToggle }: TodoListProps) {
    if (loading) {
        return (
            <div className="status-message">
                <div className="spinner"></div>
                <p>Cargando tareas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="status-message error-message">
                <p>{error}</p>
            </div>
        );
    }

    if (todos.length === 0) {
        return (
            <div className="status-message empty-message">
                <p>No se encontraron tareas con los criterios seleccionados.</p>
            </div>
        );
    }

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </div>
    );
}