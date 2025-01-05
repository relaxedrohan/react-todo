import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => (
  <ul>
    {tasks.map((task, index) => (
      <TodoItem
        key={index}
        task={task}
        toggleTask={() => toggleTask(index)}
        deleteTask={() => deleteTask(index)}
      />
    ))}
  </ul>
);

export default TodoList;