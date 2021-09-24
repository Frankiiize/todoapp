import React from 'react';
import '../../sass/App.scss';
import { AppUi } from './appUi';
import { useLocalStorage } from '../Context/useLocalStorage'
 
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


function App() {
  const {
    item: todos, 
    setItem: setTodos, 
    saveItem: saveTodos, 
    storagedTodoParsed,
    loading,
    error,
    
  } = useLocalStorage('TODOS_V1', [] );
  
  const [newTodoValue, setNewTodoValue] = React.useState('');
  
  const [openModal, setOpenModal] = React.useState(false);
  const [modalText, setModalText] = React.useState('')
  

  const unCompletedTodos = todos.filter((todo) => todo.completed === false).length;
  const totalTodos = todos.length;

  const addTodo = (newTodoValue) => {
    const newTodos = [...todos];
    newTodos.unshift({
      text: newTodoValue,
      completed: false,
      id: totalTodos + 1,
    });
    saveTodos(newTodos);
  }
  

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
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
    setOpenModal(false)
  }
  const deleteClear = () => {
    const newTodos = [...todos]
    const elements  = newTodos.filter((todo) => todo.completed !== true);
    saveTodos(elements)
  }
  const completeTodos = () => {
    const newTodos = [...todos];
    const evalCondition = newTodos.some((todo) => todo.completed === false);
    const elements = newTodos.filter((todo) => todo.completed === true); 
    (!evalCondition || elements.length === 0)
      ?setTodos(storagedTodoParsed)
      :setTodos(elements)
  }
  const activeTodos = () => {
    const newTodos = [...todos];
    const evalCondition = newTodos.some((todo) => todo.completed === true);
    const elements = newTodos.filter((todo) => todo.completed === false);
    (!evalCondition || elements.length === 0)
      ? setTodos(storagedTodoParsed)
      : setTodos(elements)
  }
  const allTodos = () => {
    setTodos(storagedTodoParsed)
  }
  return (
   <AppUi 
    loading={loading}
    error={error}
    newTodoValue={newTodoValue}
    totalTodos={totalTodos}
    setNewTodoValue={setNewTodoValue}  
    addTodo={addTodo}
    unCompletedTodos={unCompletedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    deleteClear={deleteClear}
    completeTodos={completeTodos}
    activeTodos={activeTodos}
    allTodos={allTodos}
    todos={todos}
    openModal={openModal}
    setOpenModal={setOpenModal}
    modalText={modalText}
    setModalText={setModalText}
   />

  );
}

export default App;
