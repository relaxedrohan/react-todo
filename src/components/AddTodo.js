import React from 'react';
import './AddTodo.css';

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