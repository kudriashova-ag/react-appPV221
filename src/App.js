import './App.css';
import Example from './components/example/example';
import TodoList from './components/todo/todo-list';
import Header from './components/Header';
import ThemeProvider from './providers/themeProvider';

function App() {

  return (
      <ThemeProvider>
        <Header />
        <Example />
        <TodoList />
      </ThemeProvider>
  );
}

export default App;


