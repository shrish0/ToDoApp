import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const inputRef = useRef(null);

  const addItem = () => {
    if (!inputItem.trim()) return; // prevent empty
    setToDoList([...toDoList, inputItem]);
    setInputItem("");
    inputRef.current.focus();
  };

  const updateItem = (index) => {
    const newItem = prompt("Enter new task", toDoList[index]);
    if (newItem && newItem.trim()) {
      setToDoList(
        toDoList.map((item, i) => (i === index ? newItem : item))
      );
    }
  };

  const deleteItem = (index) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => setInputItem(e.target.value)}
        ref={inputRef}
        value={inputItem}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {toDoList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => updateItem(index)}> update </button>
            <button onClick={() => deleteItem(index)}> delete </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
