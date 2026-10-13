
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoItemProps {
    todo: Todo;
    onToggle?: (id: number) => void;
}

export interface TodoListProps {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    onToggle?: (id: number) => void;
}

export interface FilterProps {
    currentFilter: FilterStatus;
    onFilterChange: (status: FilterStatus) => void;
    searchTerm: string;
    onSearchChange: (search: string) => void;
}

export interface ThemeToggleProps {
    isDark: boolean;
    onToggleTheme: () => void;
}

export type FilterStatus = 'all' | 'completed' | 'pending';