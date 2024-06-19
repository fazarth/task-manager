import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask])
  }
    return (
        <div className="App">
            <TaskForm onTaskAdded={handleTaskAdded}/>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
