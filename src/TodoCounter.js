import React from 'react';
import './TodoCounter.css';
export function TodoCounter({completedTodos , totalTodos }){
    return (
        <h2 className="TodoCounter">{`Has completado ${completedTodos} de ${totalTodos} TODOs 👁👃👁`}</h2>
    );
}