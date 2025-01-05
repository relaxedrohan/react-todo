import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../components/TodoApp';
import ErrorThrowingComponent from './components/ErrorThrowingComponent';
import MockTestComponent from './components/MockComponent';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from '../components/Fallback';

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

it('renders fallback UI when child component throws an error', () => {
  render(
    <ErrorBoundary fallbackRender={Fallback}>
      <ErrorThrowingComponent /> 
    </ErrorBoundary>
  );

  const headerElement = screen.getByText(/Something went wrong/i);
  expect(headerElement).toBeInTheDocument();

});

it('renders child component without error', () => {

  render(
    <ErrorBoundary fallbackRender={Fallback}>
      <MockTestComponent />
    </ErrorBoundary>
  );

  const headerElement = screen.getByText(/This component works fine/i);
  expect(headerElement).toBeInTheDocument();

});