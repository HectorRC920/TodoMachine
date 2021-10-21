import React from "react";
import "./CreateTodoButton.css";
import logo from "./close.png";
export function CreateTodoButton() {
  return <button className="CreateTodoButton"><img src={logo}></img></button>;
}
