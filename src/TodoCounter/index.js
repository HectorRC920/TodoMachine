import React from 'react';
import './TodoCounter.css';

export function TodoCounter({completedTodos , totalTodos })
{
    // const {completedTodos , totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">{`Has completado ${completedTodos} de ${totalTodos} TODOs 👁👃👁`}</h2>
    );
}