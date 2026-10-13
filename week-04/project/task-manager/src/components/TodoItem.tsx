
import type { TodoItemProps } from "../types/todo";

export function TodoItem({ todo, onToggle }: TodoItemProps) {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : 'pending'}`}>
            <label className="todo-label">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle && onToggle(todo.id)}
                    className="todo-checkbox"
                />
                <div className="todo-content">
                    <span className="todo-id">#{todo.id}</span>
                    <p className="todo-title">{todo.title}</p>
                </div>
            </label>
            <span className={`todo-badge ${todo.completed ? 'badge-completed' : 'badge-pending'}`}>
                {todo.completed ? 'Completada' : 'Pendiente'}
            </span>
        </div>
    );
}