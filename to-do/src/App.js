import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
    <h1>To Do List</h1>
    <input type="text" placeholder="Enter task" onChange={(e) => setInput(e.target.value)} />
    <button onClick={() => setToDoList([...toDoList, input])}>Add</button>
    <ul>
      {toDoList.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
    </>
  );
}

export default App;
