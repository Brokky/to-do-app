import { useState } from 'react';
import './App.css';
import AddForm from './components/add-form/AddForm';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';


function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(value) {
    let newTasks = [...tasks, value];
    setTasks(newTasks);
  }

  function removeTask(index) {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <AddForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
