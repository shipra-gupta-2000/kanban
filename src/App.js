// TaskBoard.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList'
import NavbarTab from './components/NavbarTab'
import './App.css'

function TaskBoard() {
  const [tasks, setTasks] = useState({
    todo: [{ id: 1, title: 'Task 1', description: 'This is task 1' },
    { id: 4, title: 'Task 4', description: 'This is task ' }],
    doing: [{ id: 2, title: 'Task 2', description: 'This is task 2' }],
    done: [{ id: 3, title: 'Task 3', description: 'This is task 3' }],
  });

  useEffect(() => {
    // Fetch tasks from API or initialize with mock data
    // Update tasks state
  }, []);

  return (
    <div>
      <NavbarTab/>
      <div className="taskboard">
      <TaskList title="To Do" tasks={tasks.todo} />
      <TaskList title="Doing" tasks={tasks.doing} />
      <TaskList title="Done" tasks={tasks.done} />
    </div>
    </div>
  );
}

export default TaskBoard;
