import React from 'react';
import "./TodoItem.css";
import close from "./close.png"
import check from "./check.png"
export function TodoItem(props){
    return (<li className="TodoItem">
        <img className="close" src={close}></img>
        <p>{props.text}</p>
        <img className="check" src={check}></img>
    </li>
    );
}