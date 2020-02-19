import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1>React-Todo</h1>
      <TodoForm />
      {/* <Todo /> */}
    </div>
  );
}
export default App;
