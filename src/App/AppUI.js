import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    completedTodos,
      totalTodos,
      searchValue,
      setSeachValue,
      filterTodos,
      completeTodo,
      deleteTodo,
}) {
  return (
    <div className="App">
      <div className="Wrapper">
        <React.Fragment>
          <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch searchValue={searchValue} setSeachValue={setSeachValue} />

          <TodoList>
            {filterTodos.map((item, i) => (
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

export { AppUI };
