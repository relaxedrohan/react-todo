import React from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList (Task List)
 * Displays tasks based on the filter applied.
 * Renders each task using the TodoItem component.
 */
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