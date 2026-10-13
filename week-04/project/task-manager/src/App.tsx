
import { useEffect, useState } from 'react';
import type { Todo, FilterStatus } from './types/todo';
import { getAllTodos, filterTodos } from './services/todoService';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentFilter, setCurrentFilter] = useState<FilterStatus>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    getAllTodos()
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = filterTodos(todos, currentFilter, searchTerm);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Mis Tareas 📋</h1>
        <ThemeToggle isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      </header>

      <TodoFilters
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <TodoList
        todos={filteredTodos}
        loading={loading}
        error={error}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}

export default App
