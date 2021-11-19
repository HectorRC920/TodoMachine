import React from "react";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

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

  <TodoContext.Provider
    value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSeachValue,
      filterTodos,
      completeTodo,
      deleteTodo,
    }}
  >
    {props.children}
  </TodoContext.Provider>
  );
}
export {TodoContext, TodoProvider};