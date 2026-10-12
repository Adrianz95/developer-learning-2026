
import { useState } from 'react';

import './App.css'

import { initialTasks } from './data/initialsTasks';
import type { Task } from './types/Task';
import { TaskList } from './components/TaskList';
import { TaskFilter } from './components/TaskFilter';
import { Counter } from './components/Counter';


function App() {

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('pending');

  function handleToggle(id: number): void {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

return (
    <div className="app-container">
      <h1>Mi Lista de Tareas</h1>
      
      <TaskFilter 
        currentFilter={filter} 
        onFilterChange={setFilter} 
      />
      
      <TaskList 
        tasks={filteredTasks} 
        onToggle={handleToggle} 
      />
      <Counter/>
    </div>
  );
}

export default App
