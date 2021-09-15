import logo from './logo.svg';
import './sass/App.scss';
import sun from './images/icon-sun.svg';

import { TodosList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { NewTodo } from './components/todoNew';

const defaultTodos = [
  { text: "Complete online JavaScript course", completed: true },
  { text: "Jog Around the park x3", completed: false },
  { text: "10 minutes meditation", completed: false },
  { text: "Read for 1 hour", completed: false },
  { text: "Pick up groceries", completed: false },
  { text: "Complete todo App on Frontend Mentor", completed: false },

];

function App() {

  return (
    <>
      <header className="headerContainer">
        <h1>TODO</h1>
        <img src={sun} />
      </header>

      <NewTodo/>

      <TodosList>
        {defaultTodos.map((todo)=>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodosList>
      
    


      <section className="filterContainer">
        <p>All</p>
        <p>Active</p>
        <p>Complete</p>
      </section>

      <footer>
        Drag and drop to reorder list
      </footer>
    </>

   
  );
}

export default App;
