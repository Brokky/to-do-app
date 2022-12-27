import React from 'react';
import TodoItem from '../todo-item/TodoItem';


function TodoList() {
    return (
        <ul>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    );
}

export default TodoList;