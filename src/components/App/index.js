import React from 'react';
import '../../sass/App.scss';
import { AppUi } from './appUi';
 
/* const defaultTodos = [
  { text: "Complete online JavaScript course", completed: true },
  { text: "Jog Around the park x3", completed: false },
  { text: "10 minutes meditation", completed: false },
  { text: "Read for 1 hour", completed: false },
  { text: "Pick up groceries", completed: false },
  { text: "Pick up sdsd", completed: true },
  { text: "Complete todo App on Frontend Mentor", completed: false },
  { text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", completed: true },

]; */
function useLocalStorage (itemName, inicialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(inicialValue));
    parsedItem = inicialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
   item,
   setItem,
   saveItem,
   parsedItem,
  ]
}


function App() {
  const [todos, setTodos, saveTodos, parsedTodos] = useLocalStorage('TODOS_V1', [] );
  
  const [newTodoItem, setNewTodoItem] = React.useState('');

  const unCompletedTodos = todos.filter((todo) => todo.completed === false).length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
      if(!newTodos[todoIndex].completed){
      newTodos[todoIndex].completed = true
      } else {
        newTodos[todoIndex].completed = false;

      }
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text );
    const newTodos = [...parsedTodos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
  const deleteClear = () => {
    const newTodos = [...parsedTodos]
    const elements  = newTodos.filter((todo) => todo.completed !== true);
    saveTodos(elements)
  }

  const completeTodos = () => {
    const newTodos = [...todos];
    const evalCondition = newTodos.some((todo) => todo.completed === false);
    const elements = newTodos.filter((todo) => todo.completed === true); 
    (!evalCondition || elements.length === 0)
      ?setTodos(parsedTodos)
      :setTodos(elements)
  }

  const activeTodos = () => {
    const newTodos = [...todos];
    const evalCondition = newTodos.some((todo) => todo.completed === true);
    const elements = newTodos.filter((todo) => todo.completed === false);
    (!evalCondition || elements.length === 0)
      ? setTodos(parsedTodos)
      : setTodos(elements)
  }
  const allTodos = () => {
    setTodos(parsedTodos)
  }

  return (
   <AppUi 
    newTodoItem={newTodoItem}
    setNewTodoItem={setNewTodoItem}  
    unCompletedTodos={unCompletedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    deleteClear={deleteClear}
    completeTodos={completeTodos}
    activeTodos={activeTodos}
    allTodos={allTodos}
    todos={todos}
   />

  );
}

export default App;
