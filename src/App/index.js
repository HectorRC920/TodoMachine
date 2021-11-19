import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoContext'

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso intro React", completed: false },
//   { text: "Hacer ejercicio", completed: true },
// ];
function App() {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
