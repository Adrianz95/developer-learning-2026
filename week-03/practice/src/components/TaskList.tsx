
import type { TaskListProps } from "../types/Task";
import { TaskCard } from "./TaskCard";


export function TaskList({ tasks, onToggle }: TaskListProps) {
    if (tasks.length === 0) {
        return <p className="empty-message">No hay tareas para mostrar en esta vista.</p>;
    }
    
    return (
        <div className="task-list">
            {tasks.map((task) => (
            <TaskCard 
            key={task.id} 
            task={task} 
            onToggle={onToggle} 
            />
            ))}
        </div>
    );
};