import React from 'react';
import '../../sass/App.scss';
import { AppUi } from './appUi';
 
const defaultTodos = [
  { text: "Complete online JavaScript course", completed: true },
  { text: "Jog Around the park x3", completed: false },
  { text: "10 minutes meditation", completed: false },
  { text: "Read for 1 hour", completed: false },
  { text: "Pick up groceries", completed: false },
  { text: "Pick up sdsd", completed: true },
  { text: "Complete todo App on Frontend Mentor", completed: false },
  { text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", completed: true },

];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);


  const [newTodoItem, setNewTodoItem] = React.useState('');

  const unCompletedTodos = todos.filter((todo) => todo.completed === false).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true; 
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
   <AppUi 
    newTodoItem={newTodoItem}
    setNewTodoItem={setNewTodoItem}
    unCompletedTodos={unCompletedTodos}
    totalTodos={totalTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    todos={todos}
   />

  );
}

export default App;
