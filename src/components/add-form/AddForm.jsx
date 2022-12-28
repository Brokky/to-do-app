import React from 'react';

function AddForm(props) {

    function addNewTask(e) {
        e.preventDefault();

        let inputValue = document.querySelector('#input-field').value;

        props.addTask(inputValue);
    }

    return (
        <form>
            <input id="input-field" type="text" placeholder="Add a new to-do" />
            <button type="submit" onClick={addNewTask}>Add</button>
        </form>
    );
}

export default AddForm;