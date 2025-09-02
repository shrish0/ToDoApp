import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [toDoList, setToDoList] = useState(() => {
    const savedList = localStorage.getItem("toDoList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [inputItem, setInputItem] = useState("");
  const inputRef = useRef(null);

  const addItem = () => {
    if (!inputItem.trim()) return; // prevent empty
    setToDoList([...toDoList, inputItem]);
    setInputItem("");
    inputRef.current.focus();
  };

  const updateItem = (index) => {
    const newItem = prompt("Enter updated task", toDoList[index]);
    if (newItem && newItem.trim()) {
      setToDoList(toDoList.map((item, i) => (i === index ? newItem : item)));
    }
  };

  const deleteItem = (index) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">To-Do List</h1>
      
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Enter task"
          className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setInputItem(e.target.value)}
          ref={inputRef}
          value={inputItem}
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md bg-white rounded shadow p-4">
        {toDoList.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 border-b last:border-b-0"
          >
            <span>{task}</span>
            <div className="space-x-2">
              <button
                onClick={() => updateItem(index)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                Update
              </button>
              <button
                onClick={() => deleteItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
