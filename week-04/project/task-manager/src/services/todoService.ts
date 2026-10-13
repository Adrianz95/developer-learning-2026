
import type { Todo, FilterStatus } from '../types/todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function getAllTodos(): Promise<Todo[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('No se han podido cargar las tareas desde el servidor.');
    }
    return response.json();
}

export async function getTodoById(id: number): Promise<Todo> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error(`No se encontró la tarea con el ID ${id}.`);
    }
    return response.json();
}

export function filterTodos(todos: Todo[], status: FilterStatus, searchTerm: string): Todo[] {
    return todos.filter((todo) => {
    const matchesStatus = 
        status === 'all' ? true :
        status === 'completed' ? todo.completed :
        !todo.completed;

    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase().trim());

    return matchesStatus && matchesSearch;
    });
}
