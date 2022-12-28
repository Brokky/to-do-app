import React from 'react'

function TodoItem(props) {
    return (
        <li>
            <input type="checkbox" />
            <span>{props.content}</span>
            <button onClick={props.removeTask}>Delete</button>
        </li>
    )
}

export default TodoItem;