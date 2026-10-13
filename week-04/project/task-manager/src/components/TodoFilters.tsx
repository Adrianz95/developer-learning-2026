
import type { FilterProps } from '../types/todo';

export function TodoFilters({ currentFilter, onFilterChange, searchTerm, onSearchChange }: FilterProps) {
    return (
        <div className="filters-container">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Buscar tarea por título..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="filter-buttons">
                <button
                    type="button"
                    className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
                    onClick={() => onFilterChange('all')}
                >
                    Todas
                </button>
                <button
                    type="button"
                    className={`filter-btn ${currentFilter === 'pending' ? 'active' : ''}`}
                    onClick={() => onFilterChange('pending')}
                >
                    Pendientes
                </button>
                <button
                    type="button"
                    className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
                    onClick={() => onFilterChange('completed')}
                >
                    Completadas
                </button>
            </div>
        </div>
    );
}
