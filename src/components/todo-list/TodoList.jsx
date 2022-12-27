import React from 'react';
import TodoItem from './todo-item/TodoItem';


function TodoList(props) {

    let items = props.tasks.slice();

    return (
        <ul>
            {items.map( (val, ind) => <TodoItem content={val} key={ind} />)}
        </ul>
    );
}

export default TodoList;