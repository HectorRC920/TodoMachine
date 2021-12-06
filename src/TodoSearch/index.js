import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
//Asi se manejaba el estado en el pasado
// class Componente extends React.Component{
//   constructor(){
//     this.state = {
//       status: false
//     }
//   }

//   render(){
//     return (
//       <div onClick={ () => this.setState(true)}>{this.state.status}</div>
//     )
//   }
// }
export function TodoSearch({ searchValue, setSeachValue }) {
  
  // const { searchValue, setSeachValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSeachValue(event.target.value);
  };
  return (

    <input
      placeholder="cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
