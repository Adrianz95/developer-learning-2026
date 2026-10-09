
import './App.css'
import { useState } from 'react';
import { getInitialTasks } from './data/tasks'
import { TaskList } from './components/TaskList'
import { TaskFilters } from './components/TaskFilters';
import { TaskForm } from './components/TaskForm';
import type { FilterOption } from './types/Task';
import type { Task } from './types/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks);
    const [currentFilter, setCurrentFilter] = useState<FilterOption>("all");
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleAddTask = (newTaskData: Omit<Task, "id">) => {
        const newTask: Task = {
            ...newTaskData,
            id: Date.now() // Generamos un id único basado en timestamp
        };

        setTasks((prevTasks) => [newTask, ...prevTasks]);
        setIsFormOpen(false); // Cerramos el formulario tras guardar
    };

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "all") return true;
    return task.status === currentFilter;
  });

return (
        <main className="app-container">
            <header className="app-header">
                <h1>Task Manager</h1>
                <button
                    className="btn-primary"
                    onClick={() => setIsFormOpen((prev) => !prev)}
                >
                    {isFormOpen ? "Cerrar Formulario" : "+ Nueva Tarea"}
                </button>
            </header>

            {isFormOpen && (
                <TaskForm
                    onAddTask={handleAddTask}
                    onCancel={() => setIsFormOpen(false)}
                />
            )}

            <TaskFilters
                currentFilter={currentFilter}
                onFilterChange={setCurrentFilter}
            />

            <TaskList tasks={filteredTasks} />
        </main>
    );
}

export default App
