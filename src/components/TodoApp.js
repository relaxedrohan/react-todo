import React, { useState, useEffect } from 'react';
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";
import './TodoApp.css';

/**
 * 
 * TodoApp (Main Component)
 * Manages state for tasks, filters, and new task input.
 * Handles adding, toggling, and deleting tasks.
 */
export default function TodoApp() {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
    const [filter, setFilter] = useState('all');
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };
    const toggleTask = (index) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
    };
    
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    const filteredTasks = tasks.filter((task) =>filter === 'completed' ? task.completed : filter === 'pending' ? !task.completed : true);


    return(
    <div className="todo-app">
      <h1 className="todo-header">To-Do List</h1>
      <AddTodo newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TodoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
    );
}