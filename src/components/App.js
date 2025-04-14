
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [todos,setTodos] = useState(['Learn React','Build a React app','Deploy the React app'])
  return (
    <div>
       <h1>Parent Component</h1>
       <Child todos = {todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
