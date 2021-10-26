import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso intro React", completed: false },
  { text: "Hacer ejercicio", completed: true },
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSeachValue] = React.useState('');

  const filterTodos = todos.filter(todo => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase());
  })

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed === true ? 
    newTodos[todoIndex].completed = false :
    newTodos[todoIndex].completed = true
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="Wrapper">
        <React.Fragment>
          <TodoCounter 
            completedTodos = {completedTodos}
            totalTodos = {totalTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSeachValue={ setSeachValue}
          />

          <TodoList>
            {filterTodos.map((item,i) => (
              <TodoItem 
              key={i} 
              {...item}
              onComplete={() => completeTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
               />
            ))}
          </TodoList>
          <CreateTodoButton />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
