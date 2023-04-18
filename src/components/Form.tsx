import React, { useState } from "react";
import '../styles/Form.css';

const initialState = {
    title: '',
    description: '',
    priority: '',
    state: '',
}

function Form({newTask}) {
    const [task, setTask] = useState(initialState)

    const handleInput = ({target: {name, value}}) => {
        setTask({...task, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newTask(task);
        setTask(initialState);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="head">
                    <input type="text"
                            placeholder="Titulo"
                            name="title"
                            onChange={handleInput}
                            value={task.title}
                            required
                             />

                    <select name="priority" value={task.priority} onChange={handleInput} required>
                        <option hidden selected>Prioridad</option>
                        <option value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </select>

                    <select name="state" value={task.state} onChange={handleInput} required>
                        <option hidden selected>Estado</option>
                        <option value="Nueva">Nueva</option>
                        <option value="En Proceso">En Proceso</option>
                        <option value="Finalizada">Finalizada</option>
                    </select>
                </div>
                <textarea
                        className="description"
                        placeholder="Descripcion"
                        name="description"
                        onChange={handleInput}
                        value={task.description}
                        required
                         />
                <button>Crear Tarea</button>
            </form>
        </div>
    )
}

export default Form
