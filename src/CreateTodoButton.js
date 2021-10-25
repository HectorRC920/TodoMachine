import React from "react";
import "./CreateTodoButton.css";
import logo from "./close.png";
export function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  }
  return <button 
  className="CreateTodoButton"
  onClick={() => onClickButton('Esto deberia ser un modal')}>
    <img src={logo} alt="Imagen perrona"></img>
    
  </button>;
}
