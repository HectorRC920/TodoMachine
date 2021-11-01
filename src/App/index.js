import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso intro React", completed: false },
  { text: "Hacer ejercicio", completed: true },
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSeachValue] = React.useState("");

  const filterTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase());
  });

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed === true
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
