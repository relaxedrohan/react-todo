import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import TodoApp from './components/TodoApp';
import Fallback from './components/Fallback';
function App() {
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={Fallback}>
        <TodoApp/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
