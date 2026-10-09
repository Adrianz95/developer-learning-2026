
export type TaskStatus =
    | "todo"
    | "in-progress"
    | "done";

export type FilterOption = TaskStatus | "all";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: "low" | "medium" | "high";
}

export interface TaskCardProps {
    task: Task;
}

export interface TaskListProps {
    tasks: Task[];
}

export interface TaskFiltersProps {
    currentFilter: FilterOption;
    onFilterChange: (filter: FilterOption) => void;
}

export interface TaskFormProps {
    onAddTask: (newTask: Omit<Task, "id">) => void;
    onCancel: () => void;
}
