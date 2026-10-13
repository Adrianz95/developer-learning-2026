
import { useState, useEffect } from "react";
import { createTodo, deleteTodo, getTodos, updateTodoTitle } from "../services/taskService";
import type { Todo } from "../types/Todo";

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

useEffect(() => {
    getTodos()
        .then((data) => {
        setTodos(data);
        setLoading(false);
        })
        .catch((err) => {
        setError(err.message || "Error al cargar las tareas");
        setLoading(false);
        });
    }, []);

const handleCreateTodo = async (title: string) => {
    try {
        const newTodo = await createTodo({ title, completed: false, userId: 1 });
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    } catch (err) {
        console.error("Error al crear la tarea:", err);
    }
}

const handleDeleteTodo = async (id: number) => {
    try {
        await deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
        console.error("Error al eliminar la tarea:", err);
    }
};

const handleUpdateTitle = async (id: number, newTitle: string) => {
    try {
        const updated = await updateTodoTitle(id, newTitle);
        setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, title: updated.title } : todo))
        );
    } catch (err) {
        console.error("Error al actualizar la tarea:", err);
    }
};

    return { 
        todos, 
        loading, 
        error,
        handleCreateTodo,
        handleDeleteTodo,
        handleUpdateTitle
    };
}