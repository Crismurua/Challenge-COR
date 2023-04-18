import React, {useState} from "react";
import ReactPaginate from 'react-paginate';
import Card from "./Card";
import '../styles/List.css'

function List({tasks, deleteTask, updateTask}) {
    const [stateFilter, setStateFilter] = useState('Todos');
    const [priorityFilter, setPriorityFilter] = useState('Todos');
    const [currentPage, setCurrentPage] = useState(0);
    const [tasksPerPage, setTasksPerPage] = useState(4);

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

      function handlePageClick(data) {
        setCurrentPage(data.selected);
      };

      const pageCount = Math.ceil(filteredTasks.length / tasksPerPage);

    return (
        <>
        <div className="filters">
            <h3>Filtrar por</h3>
            <label>Estado: </label>
            <select data-testid='state' id="state-filter" value={stateFilter} onChange={handleStateFilterChange}>
              <option value="Todos">Todos</option>
              <option value="Nueva">Nueva</option>
              <option value="En Proceso">En Proceso</option>
              <option value="Finalizada">Finalizada</option>
            </select>

            <label>Prioridad: </label>
            <select data-testid='priority' id="priority-filter" value={priorityFilter} onChange={handlePriorityFilterChange}>
              <option value="Todos">Todos</option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
        </div>
        <div >
            <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
      </div>

        <div className="list">
        {filteredTasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage).map((t) => (
            <div data-testid='card' key={t.id}>
                <Card key={t.id} task={t} deleteTask={deleteTask} updateTask={updateTask}/>
            </div>
        ))}
        </div>
        </>
    )
}

export default List
