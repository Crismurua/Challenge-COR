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
        <div className="list">
        {tasks.map(t => (
            <div key={t.id}>
                <Card key={t.id} task={t} deleteTask={deleteTask}/>
            </div>
        ))}
        </div>
    )
}

export default List
