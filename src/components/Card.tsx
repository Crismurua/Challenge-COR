import React, { useState } from "react";
import '../styles/Card.css'

function Card({task, deleteTask, updateTask}) {

    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updatedFields = { [field]: value };
        updateTask(task.id, updatedFields);   
    }

    return (
        <div className='card' key={task.id}>
            <button onClick={() => task.id && deleteTask(task.id)}>X</button>
            <span>Prioridad: 
                <select name="priority" defaultValue={task.priority} onChange={handleInput}>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                </select>
            </span>
            <span>Estado: 
                <select name="state" defaultValue={task.state} onChange={handleInput}>
                    <option value="Nueva">Nueva</option>
                    <option value="En Proceso">En Proceso</option>
                    <option value="Finalizada">Finalizada</option>
                </select>
            </span>
            <h2>Titulo: {task.title}</h2>
            <p>Descripcion: {task.description}</p>
        </div>
    )
}

export default Card
