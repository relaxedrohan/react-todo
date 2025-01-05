import React from 'react';
import './AddTodo.css';

/**
 * AddTodo (Add New Task)
 * Provides an input box and button to add a new task.
 * Lifts new task data to TodoApp through props.
 */
const AddTodo = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="add-todo">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button onClick={addTask} className="add-btn">Add</button>
    </div>
  );
};

export default AddTodo;