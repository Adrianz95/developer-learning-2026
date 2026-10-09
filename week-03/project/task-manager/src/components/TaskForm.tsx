
import { useState, type FormEvent } from "react";
import type { Task, TaskStatus, TaskFormProps } from "../types/Task";

export function TaskForm({ onAddTask, onCancel }: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<Task["priority"]>("medium");
    const [status, setStatus] = useState<TaskStatus>("todo");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        onAddTask({
            title: title.trim(),
            description: description.trim(),
            priority,
            status
        });

        setTitle("");
        setDescription("");
        setPriority("medium");
        setStatus("todo");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Añadir Nueva Tarea</h2>

            <div className="form-group">
                <label htmlFor="title">Título</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej: Configurar React Router"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detalles sobre la tarea..."
                    rows={3}
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="priority">Prioridad</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as Task["priority"])}
                    >
                        <option value="low">Baja</option>
                        <option value="medium">Media</option>
                        <option value="high">Alta</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="status">Estado inicial</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as TaskStatus)}
                    >
                        <option value="todo">Por hacer</option>
                        <option value="in-progress">En progreso</option>
                        <option value="done">Completada</option>
                    </select>
                </div>
            </div>

            <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit" className="btn-primary">
                    Guardar Tarea
                </button>
            </div>
        </form>
    );
}