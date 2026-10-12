
export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface TaskCardProps {
    task: Task;
    onToggle: (id: number) => void;
}

export interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
}

export interface TaskFilterProps {
    currentFilter: 'all' | 'pending' | 'completed';
    onFilterChange: (filter: 'all' | 'pending' | 'completed') => void;
}
