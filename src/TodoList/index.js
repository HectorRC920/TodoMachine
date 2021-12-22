import React from "react";
import "./TodoList.css";
export function TodoList(props) {
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!props.loading &&
        !props.filterTodos.length &&
        !!props.totalTodos &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="TodoList">
        {props.filterTodos.map(props.render || props.children)}
      </ul>
    </section>
  );
}
