import { useState } from 'react';
import './App.css';
import AddForm from './components/add-form/AddForm';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';


function App() {

  const [tasks, setTasks] = useState([]);

  function changeTasks(value) {
    let newTasks = [...tasks, value];
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <AddForm changeTasks={changeTasks} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
