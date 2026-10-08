
import type { TaskCardProps } from "../types/Task";

export function TaskCard({id, title, completed, onToggleTask}: TaskCardProps) {
    return(
        <div>
            <li style={{border: "1px solid"}}>
                <h3>{title}</h3>
                <p>
                    Estado: 
                    <b>{completed ? "tarea completada" : "tarea pendiente"}</b>
                </p>
                <button onClick={() => onToggleTask(id)}>
                    {completed ? "Desmarcar" : "Completar"}
                </button>
            </li>
        </div>
    );
}
