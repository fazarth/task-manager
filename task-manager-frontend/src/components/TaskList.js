import React, { useEffect, useState } from 'react';

const TaskList = ({ tasks }) => {
    const [loadedTasks, setLoadedTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/tasks')
            .then(response => response.json())
            .then(data => setLoadedTasks(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const allTasks = [...loadedTasks, ...tasks];

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {allTasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
