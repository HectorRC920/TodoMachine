import React from 'react';
import './TodoCounter.css';

export function TodoCounter({completedTodos , totalTodos , loading})
{
    // const {completedTodos , totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>{`Has completado ${completedTodos} de ${totalTodos} TODOs 👁👃👁`}</h2>
    );
}