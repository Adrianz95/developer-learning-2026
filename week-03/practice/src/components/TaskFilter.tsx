
import type { TaskFilterProps } from "../types/Task";

export function TaskFilter({ currentFilter, onFilterChange}: TaskFilterProps) {
    return (
        <div className="task-filter">
            <button 
            className={currentFilter === 'pending' ? 'active' : ''} 
            onClick={() => onFilterChange('pending')}
            >
            Pendientes
            </button>
            <button 
            className={currentFilter === 'completed' ? 'active' : ''} 
            onClick={() => onFilterChange('completed')}
            >
            Completadas
            </button>
            <button 
            className={currentFilter === 'all' ? 'active' : ''} 
            onClick={() => onFilterChange('all')}
            >
            Todas
            </button>
        </div>
    );
}