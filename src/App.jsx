import { useState } from "react";
import './App.css'

function App() {
  const [todo, setTodo] = useState({ description: '', date: '', status: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodos = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '', status: '' });
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <>
      <h2>Todo List</h2>
      <input
        placeholder="description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        placeholder="date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        placeholder="status"
        name="status"
        value={todo.status}
        onChange={inputChanged}
      />
      <button onClick={addTodos}>Add Todo</button>
      <button onClick={clearTodos}>Clear</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;