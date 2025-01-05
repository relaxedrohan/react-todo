import React from 'react';

const AddTodo = ({ newTask, setNewTask, addTask }) => (
  <div>
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
    />
    <button onClick={addTask}>Add Task</button>
  </div>
);

export default AddTodo;