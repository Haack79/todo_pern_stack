import InputTodo from './components/Todo.component';
import {Link} from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Choose your path</h1>
      <div>
        <Link to="inputTodos">Input Todos</Link>
        <br/>
        <Link to="/listTodos">Todo's List</Link>
      </div>
    </div>
  );
}

export default App;
