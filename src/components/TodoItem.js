import React from 'react';

const TodoItem = ({ task, toggleTask, deleteTask }) => (
  <li >
    <div >
      <label >
        <input type="checkbox" checked={task.completed} onChange={toggleTask} />
        <span ></span>
      </label>
      <span >{task.text}</span>
    </div>
    <button onClick={deleteTask}>Delete</button>
  </li>
);

export default TodoItem;