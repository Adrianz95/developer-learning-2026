
import type { TaskListProps } from "../types/Task";
import { TaskCard } from "./TaskCard";

export function TaskList({ tasks }: TaskListProps) {
    return (
        <div className="task-list-container">
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className="task-list-item">
                        <TaskCard task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}