import type { TaskListProps } from "../types/Task";
import { TaskCard } from "./TaskCard";

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <div>
        <ul>
            {tasks.map((task) => (
            <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                onToggleTask={onToggleTask}
            />
            ))}
        </ul>
    </div>
  );
}
