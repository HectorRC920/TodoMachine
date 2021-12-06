import React from "react";
import "./CreateTodoButton.css";
import logo from "../close.png";
// import { TodoContext } from "../TodoContext";

export function CreateTodoButton({ openModal, setOpenModal }) {
  // const {openModal, setOpenModal} = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <img src={logo} alt="Imagen perrona"></img>
    </button>
  );
}
