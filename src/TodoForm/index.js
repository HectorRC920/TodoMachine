import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const  [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,openModal, setOpenModal
    } = React.useContext(TodoContext);
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(!openModal)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        onCancel()
    };
    return (
    <form onSubmit={onSubmit}>
      <label>Agregar Todo</label>
      <textarea 
      value={newTodoValue}
      onChange={onChange}
      placeholder="Tu cosa por realizar" />
      <div>
        <button 
        type="button"
        className='onCancelButton'
        onClick={onCancel}>Cancelar</button>
        <button 
        type="submit"
        >Guardar</button>
      </div>
    </form>
  );
}
export { TodoForm };
