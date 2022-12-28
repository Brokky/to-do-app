import React from 'react'

function TodoItem(props) {
    const spanStyle = {
      textDecoration: props.selected ? 'line-through' : 'none',
      fontStyle: props.selected ? 'italic' : 'inherit',
      color: props.selected ? '#888' : 'inherit',
    };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={props.selected}
          onChange={() => props.toggleTaskSelection(props.id)}
        />
        <span style={spanStyle}>{props.content}</span>
        <button onClick={() => props.removeTask(props.id)}>Delete</button>
      </li>
    );
  }

export default TodoItem;