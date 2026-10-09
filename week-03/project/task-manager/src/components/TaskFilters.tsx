
import type { TaskFiltersProps } from "../types/Task";

const filters = [
    { label: "Todas", value: "all" },
    { label: "Por hacer", value: "todo" },
    { label: "En progreso", value: "in-progress" },
    { label: "Completadas", value: "done" }
] as const;

export function TaskFilters({ currentFilter, onFilterChange }: TaskFiltersProps) {
    return (
        <div className="task-filters">
            {filters.map(({ label, value }) => (
                <button
                    key={value}
                    className={`filter-btn ${currentFilter === value ? "active" : ""}`}
                    onClick={() => onFilterChange(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
