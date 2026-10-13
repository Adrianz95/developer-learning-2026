
import type { Todo } from "../types/Todo";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getTodos(): Promise<Todo[]> {
    try {
        const respone = await fetch(BASE_URL);

        if(!respone.ok) {
            throw new Error(`Error en la petición: ${respone.status} ${respone.statusText}`);
        }

        const data: Todo[] = await respone.json();
        return data;
    } catch(error) {
        console.error("Fallo al obtener las tareas: ", error);
        throw error;
    }
}

export async function getTodoById(id: number): Promise<Todo> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`No se encontró la tarea con id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Fallo en getTodoById (${id}):`, error);
        throw error;
    }
}

export async function createTodo(newTodo: Omit<Todo, "id">): Promise<Todo> {
    try {
        const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
        throw new Error("Error al crear la tarea");
    }

    return await response.json();
    } catch (error) {
        console.error("Fallo en createTodo:", error);
        throw error;
    }
}

export async function updateTodoTitle(id: number, newTitle: string): Promise<Todo> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ title: newTitle }),
    });

    if (!response.ok) {
        throw new Error(`Error al actualizar el título de la tarea ${id}`);
    }

    return await response.json();
    } catch (error) {
        console.error(`Fallo en updateTodoTitle (${id}):`, error);
        throw error;
    }
}

export async function deleteTodo(id: number): Promise<void> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Error al eliminar la tarea ${id}`);
    }

    } catch (error) {
        console.error(`Fallo en deleteTodo (${id}):`, error);
        throw error;
    }
}
