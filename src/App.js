import { useState } from 'react';
import './App.css';
import AddForm from './components/add-form/AddForm';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';


function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(value) {
    let newTasks = [...tasks, { id: Date.now(), content: value, selected: false }];
    setTasks(newTasks);
  }

  function removeTask(id) {
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function toggleTaskSelection(id) {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, selected: !task.selected };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <AddForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} toggleTaskSelection={toggleTaskSelection} />
    </div>
  );
}

export default App;
