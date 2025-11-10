import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  // // states
  // const [todolist, setTodolist] = useState(
  //   JSON.parse(localStorage.getItem("todolist")) || []
  // );
  const [todolist, setTodolist] = useState([]);
  const [inputData, setInputData] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("todolist"));
    if (storedData && storedData.length > 0) setTodolist(storedData);
    let savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    setDarkMode(savedDarkMode)
  }, []);

  useEffect(() => {
    if (todolist && todolist.length > 0)
      localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  // useEffects
  useEffect(()=>{
    console.log(darkMode);
    
    if (typeof(darkMode) == "boolean") localStorage.setItem("darkMode", JSON.stringify(darkMode))
    document.body.className = darkMode ? "dark" : ""
  }, [darkMode])

  // functions
  function onComplete(todoId) {
    let updatedList = todolist.map((todo) =>
      todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodolist(updatedList);
  }
  function onDelete(todoId) {
    let updatedList = todolist.filter((todo) => todo.id !== todoId);
    setTodolist(updatedList);
  }

  return (
    <>
      <button onClick={() => setDarkMode((prev) => !prev)}>Change Theme</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Add a todo: &nbsp;
          <input
            type="text"
            id="todoInputField"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          &nbsp;
          <button
            className="button"
            onClick={() => {
              setTodolist((prev) => [
                {
                  id: Date.now(),
                  task: inputData,
                  completed: false,
                  createdAt: Date.now(),
                },
                ...prev,
              ]);
              setInputData("");
            }}
          >
            Add Task
          </button>
        </label>
      </form>
      <hr></hr>
      <div>
        {console.log("hey", todolist, typeof todolist)}
        {todolist.map((todo) => {
          return (
            <Todo
              key={todo.createdAt}
              todo={todo}
              funct={{ onComplete, onDelete }}
            ></Todo>
          );
        })}
      </div>
    </>
  );
}

export default App;
