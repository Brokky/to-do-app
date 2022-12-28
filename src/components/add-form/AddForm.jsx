import React from 'react';

function AddForm(props) {

    function addNewTask(e) {
        e.preventDefault();

        const inputField = document.querySelector('#input-field');

        let inputValue = inputField.value;

        if (inputValue === '') return;


        props.addTask(inputValue);
        inputField.placeholder = 'Add a new to-do';
        
    }

    return (
        <form>
            <input id="input-field" type="text" placeholder="Add a new to-do" />
            <button type="submit" onClick={addNewTask}>Add</button>
        </form>
    );
}

export default AddForm;