import { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import './styles/App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const getDate = () => new Date().getTime();

  const newTask = (task) =>  setTasks([...tasks, {...task, id:getDate()}]);

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className='container'>
      <div>
        <Form newTask={newTask} />
      </div>

      <div>
        <List tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App
