import logo from './logo.svg';
import './sass/App.scss';
import sun from './images/icon-sun.svg';

import { TodosList } from './TodoList';
import { TodoItem } from '././TodoItem';

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "Tomar el curso intro React", completed: false },
  { text: "comprar libro Dross", completed: false },
];

function App() {
  return (
    <>
      <header className="headerContainer">
        <h1>TODO</h1>
        <img src={sun} />
      </header>

        <label className="searchContainer">
          <input value="" type="submit" className="searchContainer__button"/>
          <input
          placeholder="Create a new TODO" 
          className="searchContainer__input" />
          
        </label>

      <TodosList>
        {defaultTodos.map((todo)=>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodosList>
      
    


     {/*  <section>
        <p>All</p>
        <p>Active</p>
        <p>Complete</p>
      </section>

      <footer>
        Drag and drop to reorder list
      </footer> */}
    </>

   
  );
}

export default App;
