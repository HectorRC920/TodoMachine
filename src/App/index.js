import "./App.css";
import React from "react";
import { useTodos } from "../CustomHooks/useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodoHeader } from "../TodoHeader";

function App() {
  const {
    error,
    loading,
    filterTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSeachValue,
  } = useTodos();

  return (
    <div className="App">
      <div className="Wrapper">
        <React.Fragment>
          <TodoHeader loading={loading}>
            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSeachValue={setSeachValue}
            />
          </TodoHeader>
          <TodoList
            error={error}
            loading={loading}
            filterTodos={filterTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={(searchText) => (
              <p> No hay resultados para: {searchText}</p>
            )}
            // render={(todo) => (
            //   <TodoItem
            //     key={todo.text}
            //     text={todo.text}
            //     completed={todo.completed}
            //     onComplete={() => completeTodo(todo.text)}
            //     onDelete={() => deleteTodo(todo.text)}
            //   />
            // )}
          >
            {(todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          </TodoList>
          {/* <TodoList>
            {error && <TodosError error={error} />}
            {loading &&
              new Array(4).fill(1).map((a, i) => <TodosLoading key={i} />)}
            {!loading && !totalTodos.length && <EmptyTodos />}
            { (!loading && !filterTodos.length) && <p>No hay coincidencias</p> }
            {filterTodos.map((item, i) => (
              <TodoItem
                key={i}
                {...item}
                onComplete={() => completeTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList> */}
          {openModal ? (
            <Modal>
              <TodoForm
                openModal={openModal}
                setOpenModal={setOpenModal}
                addTodo={addTodo}
              />
            </Modal>
          ) : (
            <div></div>
          )}
          <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
