import React from 'react'

function TodoItem() {
    return (
        <li>
            <input type="checkbox" />
            <span>Take out the trash</span>
            <button>Delete</button>
        </li>
    )
}

export default TodoItem