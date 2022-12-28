import React from 'react';
import TodoItem from './todo-item/TodoItem';


function TodoList(props) {

    let items = props.tasks.slice();

    return (
        <ul>
        {items.map((val) => (
          <TodoItem
            key={val.id}
            id={val.id}
            content={val.content}
            selected={val.selected}
            removeTask={props.removeTask}
            toggleTaskSelection={props.toggleTaskSelection}
          />
        ))}
      </ul>
    );
}

export default TodoList;