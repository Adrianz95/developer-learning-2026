
import type { TaskCardProps } from "../types/Task";

export function TaskCard({ task }: TaskCardProps) {
    return (
        <article className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-meta">
                <span>Estado: {task.status}</span>
                <span>Prioridad: {task.priority}</span>
            </div>
        </article>
    );
}