// TaskList.js
import React from 'react';
import Card from './Card';
import './TaskList.css'; // Import your custom CSS file for styling

function TaskList({ title,tasks }) {
    console.log('task',tasks)
  return (
    <div className="task-list">
      <h2 className="task-list-title">{title}</h2>
      <div className="task-cards">
        {tasks.map((task, index) => (
          <Card task={task}  />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
