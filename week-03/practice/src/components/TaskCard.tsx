
import type { TaskCardProps } from '../types/Task';

export function TaskCard({ task, onToggle }: TaskCardProps) {
return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
        <div className="task-details">
            <span className="task-id">ID: {task.id}</span>
            <h3 className="task-title">{task.title}</h3>
        </div>
            <button 
            onClick={() => onToggle(task.id)}
            className="toggle-btn"
            >
            {task.completed ? 'Completada' : 'Marcar completada'}
            </button>
    </div>
    );
};