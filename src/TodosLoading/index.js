import React from "react";
import './TodosLoading.css';
function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon">√</span>
      <p className="LoadingTodo-text">Estamos cargando....</p>
      <span className="LoadingTodo-deleteIcon">X</span>
    </div>
  );
}
export { TodosLoading };
