import React from "react";
import "./TodoList.css";
export function TodoList(props) {
  return (
    <section className="TodoListWrapper">
      <ul className="TodoList">{props.children}</ul>
    </section>
  );
}
