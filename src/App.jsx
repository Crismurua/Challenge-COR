import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import './styles/App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const getDate = () => new Date().getTime();

  const newTask = (task) =>  {
    const newTask = { ...task, id: getDate() };
    setTasks([...tasks, newTask]);
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    localStorage.removeItem(id);
  };

  const updateTask = (id, updatedFields) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedFields };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem(id, JSON.stringify(updatedTasks.find((task) => task.id === id)));
  };

  return (
    <div className='container'>
      <div>
        <Form newTask={newTask} />
      </div>

      <div>
        <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
    </div>
  )
}

export default App
