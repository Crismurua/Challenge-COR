import React, {useState} from "react";
import Card from "./Card";
import '../styles/List.css'

function List({tasks, deleteTask}) {
    const [stateFilter, setStateFilter] = useState('Todos');
    const [priorityFilter, setPriorityFilter] = useState('Todos');

    const filteredTasks = tasks.filter(t => {
        if (stateFilter === 'Todos' && priorityFilter === 'Todos') {
          return true;
        } else if (stateFilter === 'Todos' && priorityFilter !== 'Todos') {
          return t.priority === priorityFilter;
        } else if (stateFilter !== 'Todos' && priorityFilter === 'Todos') {
          return t.state === stateFilter;
        } else {
          return t.state === stateFilter && t.priority === priorityFilter;
        }
      });

      const handleStateFilterChange = e => {
        setStateFilter(e.target.value);
      };
    
      const handlePriorityFilterChange = e => {
        setPriorityFilter(e.target.value);
      };

    return (
        <>
        <div className="filters">
            <h3>Filtrar por</h3>
            <label>Estado: </label>
            <select id="state-filter" value={stateFilter} onChange={handleStateFilterChange}>
              <option value="Todos">Todos</option>
              <option value="Nueva">Nueva</option>
              <option value="En Proceso">En Proceso</option>
              <option value="Finalizada">Finalizada</option>
            </select>

            <label>Prioridad: </label>
            <select id="priority-filter" value={priorityFilter} onChange={handlePriorityFilterChange}>
              <option value="Todos">Todos</option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
      </div>
        <div className="list">
        {filteredTasks.map(t => (
            <div key={t.id}>
                <Card key={t.id} task={t} deleteTask={deleteTask}/>
            </div>
        ))}
        </div>
        </>
    )
}

export default List
