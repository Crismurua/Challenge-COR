import React, {useState} from "react";
import ReactPaginate from 'react-paginate';
import Card from "./Card";
import '../styles/List.css'

function List({tasks, deleteTask}) {
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

      const [updateTask, setUpdateTask] = useState(filteredTasks); 
      
      const handleTaskUpdate = (updatedTask) => {
        setUpdateTask(prevTasks => {
          const taskIndex = prevTasks.findIndex(task => task.id === updatedTask.id);
          const updatedTasksCopy = [...prevTasks];
          updatedTasksCopy[taskIndex] = updatedTask;
          return updatedTasksCopy;
        });
      }

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
        <div >
            <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
      </div>

        <div className="list">
        {filteredTasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage).map((t, index) => (
            <div key={index}>
                <Card key={t.id} task={t} deleteTask={deleteTask} handleTaskUpdate={handleTaskUpdate}/>
            </div>
        ))}
        </div>
        </>
    )
}

export default List
