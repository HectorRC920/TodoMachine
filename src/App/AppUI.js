import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <div className="App">
      <div className="Wrapper">
        <React.Fragment>
          <TodoCounter />
          <TodoSearch />
          <TodoContext.Consumer>
            {( {error, loading, filterTodos, completeTodo, deleteTodo,} ) => {
              return (
                <TodoList>
                  {error && <p>hubo un error</p>}
                  {loading && <p>Estamos cargando....</p>}
                  {!loading && !filterTodos.length && (
                    <p>Crea tu primer TODO</p>
                  )}

                  {filterTodos.map((item, i) => (
                    <TodoItem
                      key={i}
                      {...item}
                      onComplete={() => completeTodo(item.text)}
                      onDelete={() => deleteTodo(item.text)}
                    />
                  ))}
                </TodoList>
              );
            }}
          </TodoContext.Consumer>
          <CreateTodoButton />
        </React.Fragment>
      </div>
    </div>
  );
}

export { AppUI };
