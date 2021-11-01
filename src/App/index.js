import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso intro React", completed: false },
//   { text: "Hacer ejercicio", completed: true },
// ];
function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSeachValue] = React.useState("");

  const filterTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase());
  });


  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed === true
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSeachValue={setSeachValue}
      filterTodos={filterTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
