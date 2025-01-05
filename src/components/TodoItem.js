import React from 'react';
import "./TodoItem.css"

/**
 * TodoItem (Single Task)
 * Represents a single to-do item.
 * Handles toggle and delete actions.
 */
const TodoItem = ({ task, toggleTask, deleteTask }) => (
  <li className="todo-item">
    <div className="todo-item-content">
      <label className="switch">
        <input type="checkbox" checked={task.completed} onChange={toggleTask} />
        <span className="slider round"></span>
      </label>
      <span className="task-text">{task.text}</span>
    </div>
    <button className="delete-btn" onClick={deleteTask}>Delete</button>
  </li>
);

export default TodoItem;