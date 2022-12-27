import './App.css';
import AddForm from './components/add-form/AddForm';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';


function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
