import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodoHeader } from "../TodoHeader";

function AppUI() {
  const {
    error,
    loading,
    filterTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSeachValue,
  } = React.useContext(TodoContext);

  return (
    <div className="App">
      <div className="Wrapper">
        <React.Fragment>
          <TodoHeader>
            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSeachValue={setSeachValue}
            />
          </TodoHeader>

          <TodoList>
            {error && <TodosError error={error} />}
            {loading &&
              new Array(4).fill(1).map((a, i) => <TodosLoading key={i} />)}
            {!loading && !filterTodos.length && <EmptyTodos />}

            {filterTodos.map((item, i) => (
              <TodoItem
                key={i}
                {...item}
                onComplete={() => completeTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList>
          {openModal ? (
            <Modal>
              <TodoForm />
            </Modal>
          ) : (
            <div></div>
          )}
          <CreateTodoButton />
        </React.Fragment>
      </div>
    </div>
  );
}

export { AppUI };
