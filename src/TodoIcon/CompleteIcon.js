import React from 'react';
import { TodoIcon } from './index';

function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon 
        type='check'
        color={completed ? '#4caf50' : 'gary'}
        onClick={onComplete}
        />
    );
}
export {CompleteIcon};