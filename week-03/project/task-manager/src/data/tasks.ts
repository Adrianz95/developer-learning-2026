
import type { Task } from "../types/Task";

export const getInitialTasks = (): Task[] => {
    return [
    {
        id: 1,
        title: "Configurar entorno de desarrollo",
        description: "Instalar dependencias necesarias y configurar ESLint con Prettier.",
        status: "done",
        priority: "high"
    },
    {
        id: 2,
        title: "Diseñar componentes principales",
        description: "Crear la estructura básica para la interfaz de lista de tareas.",
        status: "in-progress",
        priority: "medium"
    },
    {
        id: 3,
        title: "Implementar filtro por estado",
        description: "Permitir al usuario filtrar las tareas por Pendiente, En proceso y Completada.",
        status: "todo",
        priority: "medium"
    },
    {
        id: 4,
        title: "Añadir persistencia con LocalStorage",
        description: "Guardar el estado de las tareas en el navegador para no perder cambios al recargar.",
        status: "todo",
        priority: "high"
    },
    {
        id: 5,
        title: "Refactorizar estilos CSS",
        description: "Aplicar estilos modernos con CSS Modules o Tailwind CSS.",
        status: "todo",
        priority: "low"
    },
    {
        id: 6,
        title: "Escribir pruebas unitarias",
        description: "Añadir tests para las funciones de manipulación del listado.",
        status: "todo",
        priority: "low"
    },
    {
        id: 7,
        title: "Optimizar rendimiento de renderizado",
        description: "Revisar los re-renders innecesarios en la lista usando React.memo si es necesario.",
        status: "in-progress",
        priority: "medium"
    },
    {
        id: 8,
        title: "Desplegar en producción",
        description: "Subir la aplicación a Vercel o Netlify para compartir la versión funcional.",
        status: "todo",
        priority: "high"
    }
];
};
