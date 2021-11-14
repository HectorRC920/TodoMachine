import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import {useLocalStorage} from "../CustomHooks/useLocalStorage"
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso intro React", completed: false },
//   { text: "Hacer ejercicio", completed: true },
// ];
function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);


  const [searchValue, setSeachValue] = React.useState("");

  const filterTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase());
  });

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
      loading={loading}
      error={error}
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
