import './App.css';
import { Counter } from './components/Counter';
import { UserGreeting } from './components/UserGreeting';
import { useState } from 'react';
import type { Task } from './types/Task';
import { TaskList } from './components/TaskList';

type Filter = 'all' | 'completed' | 'pending';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Curso React', completed: false },
    { id: 2, title: 'Repaso TypeScript', completed: false },
    { id: 3, title: 'Revisar horario', completed: true },
    { id: 4, title: 'Revisar commits', completed: false },
    { id: 5, title: 'Hacer merge', completed: false },
  ]);

  const [filter, setFilter] = useState<Filter>('all');

  const completedCount = tasks.filter((task) => task.completed).length;
  const incompleteCount = tasks.length - completedCount;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <Counter />
      <hr />
      <UserGreeting name="Adrián" />
      <hr />

      <h3>Tareas completadas: {completedCount}</h3>
      <h3>Tareas pendientes: {incompleteCount}</h3>

      <div>
        <button onClick={() => setFilter('all')}>
          Todas ({tasks.length})
        </button>
        <button onClick={() => setFilter('pending')}>
          Pendientes ({incompleteCount})
        </button>
        <button onClick={() => setFilter('completed')}>
          Completadas ({completedCount})
        </button>
      </div>

      <TaskList 
      tasks={filteredTasks} 
      onToggleTask={toggleTask}
      />
    </div>
  );
}

export default App;