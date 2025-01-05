import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../components/TodoApp';

// Test if the app renders correctly
it('renders the to-do list header', () => {
  render(<TodoApp />);
  const headerElement = screen.getByText(/To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});

// Test adding a new task
it('adds a new task', () => {
  render(<TodoApp />);
  const inputElement = screen.getByPlaceholderText('Add a new task...');
  const addButton = screen.getByText('Add');

  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  const newTask = screen.getByText('Test Task');
  expect(newTask).toBeInTheDocument();
});

