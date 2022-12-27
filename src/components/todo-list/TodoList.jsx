import React from 'react';

function TodoList() {
    return (
        <ul>
            <li>
                <input type="checkbox" />
                <span>Take out the trash</span>
                <button>Delete</button>
            </li>
            <li>
                <input type="checkbox" />
                <span>Buy groceries</span>
                <button>Delete</button>
            </li>
            <li>
                <input type="checkbox" />
                <span>Walk the dog</span>
                <button>Delete</button>
            </li>
        </ul>
    );
}

export default TodoList;