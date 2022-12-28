import React, { useState } from 'react'

function TodoItem(props) {

    const [isChecked, setIsChecked] = useState(false);

    const spanStyle = {
        textDecoration: isChecked ? 'line-through' : 'none',
        fontStyle: isChecked ? 'italic' : 'inherit',
        color: isChecked ? '#888' : 'inherit',
    };

    return (
        <li>
            <input type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
            <span style={spanStyle}>{props.content}</span>
            <button onClick={props.removeTask}>Delete</button>
        </li>
    )
}

export default TodoItem;